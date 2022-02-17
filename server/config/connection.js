import mongoose from 'mongoose';
import ArgumentSchema  from '../models/Argument.js';
import UserSchema from '../models/User.js';

const Argument = mongoose.model('Argument', ArgumentSchema);
const User = mongoose.model('User', UserSchema)

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/deep-thoughts',
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