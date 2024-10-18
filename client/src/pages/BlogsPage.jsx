import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
     const response = async()=>{
      const data = await axios.get("http://localhost:5000/api/admin/allBlogs")
      console.log(data)
     }
     response()
  },[])
  return (
    <div className="flex justify-center py-12 bg-gray-100">
      <div className="container max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Cricket Blogs</h2>
        <p className="mb-8 text-lg text-gray-600 text-center">Explore the latest blogs on cricket strategies, player highlights, and more!</p>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-blue-50 shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <p className="text-gray-500 text-sm">Published on: {new Date(blog.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
