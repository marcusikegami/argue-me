import mongoose from 'mongoose';
import User from './User';
import Argument from './Argument';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/argueme');

const db = {
  connection: mongoose.connection,
  models: {
    User,
    Argument,

  }
};

export default db;
