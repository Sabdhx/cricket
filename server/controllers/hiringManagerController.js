import HiringManager from "../models/HiringManager.js";
import Player from '../models/Player.js';

export const hiringPlayer = async (req, res) => {
    try {
      const { status, playerId, managerId } = req.body; // Expect playerId and managerId in the request
  
      // Update the player's status
      const updatedPlayer = await Player.findByIdAndUpdate(
        playerId,
        { status },
        { new: true }  // Return updated document
      );
  
      if (!updatedPlayer) {
        return res.status(404).json({ message: "Player not found" });
      }
  
      // Push the player's ID into the hiring manager's playersHired array
      const updatedManager = await HiringManager.findByIdAndUpdate(
        managerId,
        { $push: { playersHired: { playerId } } }, // Push the player's ID
        { new: true }  // Return updated document
      );
  
      if (!updatedManager) {
        return res.status(404).json({ message: "Hiring Manager not found" });
      }
  
      res.status(200).json({ message: "Status updated and player hired", player: updatedPlayer, manager: updatedManager });
    } catch (error) {
      console.error("Error hiring player:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };


  export const hiringPlayerFind =async(req,res)=>{
    const response = await Player.findById(req.params.id);
    res.status(200).json(response);
  }