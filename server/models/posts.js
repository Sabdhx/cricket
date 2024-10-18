import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',  // Reference the Player schema
    required: true
  },
  media: {
    type: [String],
  },
  height: { type: Number },
  Weight: { type: String },
  address: { type: String },
  whatsAppNumber: { type: Number },
  age: { type: String },
  skills: {
    type: [String],
  },
  mediaUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const posting = mongoose.model('posts', postSchema);
export default posting;
