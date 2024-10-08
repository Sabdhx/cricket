import mongoose from "mongoose";
// User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'player', 'hiringManager'],  // Different roles for redirection
    required: true,
  }
  
});

const User = mongoose.model('User', userSchema);
export default User
