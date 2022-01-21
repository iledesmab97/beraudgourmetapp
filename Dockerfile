FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080

# Bundle app source
COPY . .

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_GRAPHQL_URL=https://beraudgourmetapp-rnyimia32a-uc.a.run.app/graphql

RUN npm run build

CMD [ "npm","run", "start" ]
