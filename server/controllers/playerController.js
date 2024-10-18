import playerFind from '../middlewares/authMiddleware.js';
import Admin from '../models/Admin.js';
import HiringManager from '../models/HiringManager.js';
import Player from '../models/Player.js';
import posting  from "../models/posts.js"
import User from "../models/User.js"
export const getPlayerDashboard = async (req, res) => {

  try {
    const playerData = await Player.findById(req.userId);
    if (!playerData) return res.status(404).json({ error: 'Player not found' });
    res.json(playerData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


export const postUploadByPlayer = async (req, res) => {
  const userId = req.userId
  console.log(userId)
  try {
    const { userId,media, height, Weight, address, whatsAppNumber, age, skills, mediaUrl } = req.body;

    // Create a new post entry
    const newPost = await posting.create({userId, media, height, Weight, address, whatsAppNumber, age, skills, mediaUrl });

    // Find the player
    const findingPlayer = await Player.findById(req.userId);

    if (!findingPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }

    // Push the post ID to the player's posts array
    findingPlayer.posts.push(newPost._id);

    // Save the player document
    await findingPlayer.save();

    // Respond with the updated player
    res.status(200).json(findingPlayer);
  } catch (error) {
    // Handle errors
    console.error("Error uploading data:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


export const allPlayerPosts = async (req, res) => {
  try {

    const response = await posting.find();

    // Respond with the created entry
    res.status(200).json(response);
  } catch (error) {
    // Handle errors
    console.error("Error uploading data:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export const deletePostsByPlayer = async (req, res) => {
  try {
    const id = req.params.id; // Assuming the ID is sent in the body

    const response = await posts.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully", response });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


export const allPlayers=async(req,res)=>{


  const response = await Player.find();
  res.status(200).json(response)
}


export const singlePost=async(req,res)=>{


  const response = await posting.findById(req.params.id);
  console.log(response)
  res.status(200).json(response)
}
