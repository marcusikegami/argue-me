import mongoose from 'mongoose';
import User from './User';
import Post from './Post';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/graphql_demo');

const db = {
  connection: mongoose.connection,
  models: {
    Author,
    Book,
  }
};

export default db;
