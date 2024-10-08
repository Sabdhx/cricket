import HiringManager from '../models/HiringManager.js';
import Player from '../models/Player.js';

export const getHiredPlayers = async (req, res) => {
  try {
    const manager = await HiringManager.findOne({ userId: req.user.id }).populate('playersHired.playerId');
    if (!manager) return res.status(404).json({ error: 'Hiring manager not found' });
    res.json(manager.playersHired);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add more hiring-related functions here as needed
