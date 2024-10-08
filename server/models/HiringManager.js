// Hiring Manager Schema
import mongoose from "mongoose";
const hiringManagerSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    playersHired: [
      {
        playerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Player',
          required: true,
        },
        position: {
          type: String,  // E.g., Batsman, Bowler
          required: true,
        },
        contractDetails: {
          salary: { type: Number, required: true },
          duration: { type: String, required: true },  // E.g., 1 year
        },
        hiredAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  });
  
  const HiringManager = mongoose.model('HiringManager', hiringManagerSchema);

export default HiringManager