import mongoose from "mongoose"

const blogPosts=new mongoose.Schema(
    [
        {
          title: { type: String},
          content: { type: String},
          createdAt: { type: Date, default: Date.now },
        },
      ],
) 
const Blogs = mongoose.model('blogs', blogPosts);
export default Blogs;
