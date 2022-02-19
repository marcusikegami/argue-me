import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  commentBody: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  agree: {
      type: mongoose.Schema.Types.Boolean,
      required: true
  }
});

export default CommentSchema;
