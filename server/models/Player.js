// Player Schema
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
 
    },
    username: {
      type: String,
    },
    email:{
      type:String
    },
    role:{
      type:String
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
    status: {
      type: String,
      enum: ["hire", "hired"]
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
