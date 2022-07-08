import mongoose from 'mongoose';
import User from '../models/User.js';
import Argument from '../models/Argument.js';


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/argueme',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

const db = {
  connection: mongoose.connection,
  models: {
    User,
    Argument,

  }
};

export default db;