import express from 'express';
// Required for 'typedi' module
import 'reflect-metadata';
// import 'dotenv-safe/config';
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app: express.Application = express();
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled
} from "apollo-server-core";
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

import { Container } from 'typedi';

// Important to import like this for Service() decorators to be executed
import './services';
import routes from './routes';

// Set console as Logger
Container.set('Logger', console);

const main = async () => {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const host = nuxt.options.server.host;
  const port = process.env.PORT || '8080';

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Setup routes
  app.use('/api', routes);

  // Apollo server

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    // plugins: [
    //   ApolloServerPluginLandingPageGraphQLPlayground(),
    // ],
    context: buildContext,
    // subscriptions: {
    //   onConnect: async (connectionParams: any) => {
    //     const { token } = connectionParams;

    //     return { token: token || null };
    //   },
    //   onDisconnect: async (socket, context) => {
    //     const { token } = await context.initPromise;

    //     if (token) {
    //       try {
    //         const user = await UserApi.fromCustomToken(token, true);

    //         if (user) {
    //           await removeListeners(user.userId);
    //         }
    //       } catch (err) {
    //         logger.error(`Can't validate this token: '${token}'`);
    //       }
    //     }
    //   },
    // },
  });

  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  function buildContext({
    req,
    res,
  }: {
    req: express.Request;
    res: express.Response;
    // connection: ExecutionParams;
  }) {

    return {
      req,
      res,
    };
  };

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

main().catch((err) => {
  console.error(err);
});