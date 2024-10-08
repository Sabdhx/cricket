import Admin from '../models/Admin.js';
import blogPosts from "../models/Blogs.js";
import posts from "../models/posts.js";
export const getAdminDashboard = async (req, res) => {
  try {
    const adminData = await Admin.findOne({ userId: req.user.id });
    if (!adminData) return res.status(404).json({ error: 'Admin not found' });
    res.json(adminData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// controllers/adminController.js
// import Admin from '../models/Admin.js';

// Function to create a blog post
export const blogsByAdmin = async (req, res) => {
  try {
    const {title, content} = req.body;

    // Create a new entry in the database
    const response = await blogPosts.create(req.body);

    // Respond with the created entry
    res.status(200).json(response);
  } catch (error) {
    // Handle errors
    console.error("Error uploading data:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


// Add admin functionalities (e.g., delete player posts, create blog posts) here as needed

// Function to delete a player post
export const deletePlayerPost = async (req, res) => {
  const { playerId, postId } = req.params;

  try {
    // Check if the user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    // Find admin by userId
    const admin = await Admin.findOne({ userId: req.user.id });
    if (!admin) return res.status(404).json({ error: 'Admin not found' });

    // Call the deletePlayerPost method from the admin model
    await admin.deletePlayerPost(playerId, postId);

    res.status(200).json({ message: 'Player post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deletePostsByAdmin = async (req, res) => {
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


export const deleteBlogsByAdmin = async (req, res) => {
  try {
    const id = req.params.id; // Assuming the ID is sent in the body

    const response = await blogPosts.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully", response });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};