import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([
    {
      _id: '1',
      title: 'Mastering the Art of Spin Bowling',
      content: 'Spin bowling is an art that can baffle even the best of batsmen. In this blog, we explore the techniques used by legendary spinners like Shane Warne and Muttiah Muralitharan to dominate the game...',
      createdAt: '2024-10-01T10:30:00.000Z',
    },
    {
      _id: '2',
      title: 'Top 10 Cricketers of All Time',
      content: 'Cricket has seen many legends over the decades. In this article, we rank the top 10 cricketers who have left a lasting impact on the game, from Sir Don Bradman to Sachin Tendulkar...',
      createdAt: '2024-09-28T15:00:00.000Z',
    },
    {
      _id: '3',
      title: 'Effective Batting Strategies for T20 Cricket',
      content: 'T20 cricket demands a different approach compared to traditional formats. Discover some of the most effective batting strategies that can help a team post a competitive total...',
      createdAt: '2024-09-25T08:45:00.000Z',
    },
    {
      _id: '4',
      title: 'The Evolution of Cricket Equipment',
      content: 'From wooden bats to high-tech gloves, cricket equipment has evolved drastically over the years. This blog explores how the tools of the game have changed and what the future holds...',
      createdAt: '2024-09-20T11:20:00.000Z',
    },
    {
      _id: '5',
      title: 'Analyzing India’s Dominance in Modern Cricket',
      content: 'India has emerged as a cricketing powerhouse in the modern era. We delve into the factors contributing to their success, from a robust domestic structure to world-class facilities...',
      createdAt: '2024-09-15T17:00:00.000Z',
    },
  ]);
  
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
