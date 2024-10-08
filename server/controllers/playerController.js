import Player from '../models/Player.js';
import posting  from "../models/posts.js"

export const getPlayerDashboard = async (req, res) => {
  try {
    const playerData = await Player.findOne({ userId: req.user.id });
    if (!playerData) return res.status(404).json({ error: 'Player not found' });
    res.json(playerData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


export const postUploadByPlayer = async (req, res) => {
  try {
    const { media, height, Weight, address, whatsAppNumber, age, skills, mediaUrl } = req.body;

    // Create a new entry in the database
    const response = await posting.create(req.body);

    // Respond with the created entry
    res.status(200).json(response);
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