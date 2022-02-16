import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
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

const Post = mongoose.model("Post", PostSchema);

export default Post;
