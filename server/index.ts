import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import schemas from './schemas';
import resolvers from './resolvers';
// Required for 'typedi' module
import 'reflect-metadata';
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');


const app: express.Application = express();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello: () => 'Hello world!',
};

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

import { Container } from 'typedi';

// Important to import like this for Service() decorators to be executed
import './services';
import routes from './routes';

// Set console as Logger
Container.set('Logger', console);

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const host = nuxt.options.server.host;
  const port: string = nuxt.options.server.port;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Setup routes
  app.use('/api', routes);

  // graphql endpoint

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: { headerEditorEnabled: true },
    }),
  );

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()
