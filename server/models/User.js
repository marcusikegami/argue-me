import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must be a valid email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },

  arguments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Argument" }]
},
{
  toJSON: {
    
  }
});

// Pre-save middleware that hashes a password with bcrypt
UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// When a user logs in, this function compares the incoming password with the hashed password.
UserSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema)
// const User = {};

export default User;
