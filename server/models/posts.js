import mongoose from "mongoose";

const posts= new mongoose.Schema(
     [
        {
       
          media:[
            { type: [String],}
          ],     
          height:{type:Number},
          Weight:{type:String},
          address:{type:String},
          whatsAppNumber:{type:Number},
          age:{ type: String },
          skills: {
            type: [String],  
          },
           
          mediaUrl: { type: String },
          createdAt: { type: Date, default: Date.now },
        },
      ],
) 

const posting = mongoose.model('posts', posts);
export default posting;
