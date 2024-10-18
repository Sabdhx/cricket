// Admin Schema
import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true, // Ensure username is provided
    unique: true     
     
  },
  email:{
    type: String ,
    required: true, // Ensure username is provided
    unique: true   
     
  },
  });
  
  // Admin method to delete a player's post
  adminSchema.methods.deletePlayerPost = async function (playerId, postId) {
    const Player = mongoose.model('Player');
    await Player.updateOne(
      { _id: playerId },
      { $pull: { posts: { _id: postId } } }
    );
  };
  
  const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
  