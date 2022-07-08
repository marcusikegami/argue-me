import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schemas/index.js';
import auth from './utils/auth.js';
import jwt from 'jsonwebtoken';
import db from './config/connection.js';

const app = express();
const PORT = 5000;


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  cache: 'bounded',
  context: auth.authenticateToken
});
await server.start();
server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



db.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});

