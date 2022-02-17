import mongoose from 'mongoose';
const ArgumentSchema = new mongoose.Schema({
  opinion: {
    type: String,
    required: true,
  },
  argument: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

export default ArgumentSchema ;