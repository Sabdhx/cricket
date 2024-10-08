// Player Schema
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
     
    },
    height: {
      type: Number,
    },
    
    address: {
      type: String,
      
    },
    media: {
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
      },
    ],
  });
  
  const Player = mongoose.model('Player', playerSchema);
//   module.exports = Player;
export default Player;
