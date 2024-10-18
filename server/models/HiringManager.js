// Hiring Manager Schema
import mongoose from "mongoose";
const hiringManagerSchema = new mongoose.Schema({
   username:{
    type:String
   },
   email:{
    type:String
   },
    playersHired: [
      {
        playerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Player',
         
        },
        
      },
    ],
  });
  
  const HiringManager = mongoose.model('HiringManager', hiringManagerSchema);

export default HiringManager