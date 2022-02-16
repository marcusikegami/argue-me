import mongoose from 'mongoose';


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

  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
},
{
  toJSON: {
    
  }
});

// Pre-save middleware that hashes a password with bcrypt
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// When a user logs in, this function compares the incoming password with the hashed password.
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const User = mongoose.model('User', UserSchema);

export default User; 
