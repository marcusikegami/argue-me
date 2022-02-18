import mongoose from 'mongoose';
// import dateFormat from '../utils/dateFormat';
const ArgumentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  opinion: {
    type: String,
    required: true,
  },
  argument: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: timestamp => dateFormat(timestamp)
  }
  
});
const Argument = mongoose.model('Argument', ArgumentSchema);

export default Argument ;