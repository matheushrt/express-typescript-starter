import createError from 'http-errors';
import express from 'express';
import helmet from 'helmet';
import { ApolloServer } from 'apollo-server-express';

import { expressLogger } from './config/logger';
import BlockchainAPI from './graphql/restDataSource';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolver';

import { home } from './routes';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      blockchainAPI: new BlockchainAPI(),
    };
  },
});

server.applyMiddleware({ app });

app.use(helmet());
app.use(expressLogger);

app.use('/', home);

// catch 404
app.use((req, res) => {
  const { status, message } = createError(404);
  res.status(status).send(message);
});

export default app;
