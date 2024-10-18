import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // To generate unique IDs for new posts

// Create context for player posts
export const PlayerPostsContext = createContext();

// Initial player posts with empty photos and videos arrays
const defaultPosts = [
  {
    _id: '1',
    name: 'John Doe',
    talent: 'Batsman',
    city: 'New York',
    address: '123 Main St, New York, NY',
    description: 'An experienced top-order batsman.',
    whatsapp: '3209369167',
    photos: [], // Empty array for photos
    videos: []  // Empty array for videos
  },
  {
    _id: '2',
    name: 'Jane Smith',
    talent: 'Bowler',
    city: 'Los Angeles',
    address: '456 Elm St, Los Angeles, CA',
    description: 'Fast bowler with consistent pace.',
    whatsapp: '0987654321',
    photos: [], // Empty array for photos
    videos: []  // Empty array for videos
  },
  {
    _id: '3',
    name: 'Mark Johnson',
    talent: 'All-rounder',
    city: 'Chicago',
    address: '789 Oak St, Chicago, IL',
    description: 'All-rounder with solid performance in both batting and bowling.',
    whatsapp: '1122334455',
    photos: [], // Empty array for photos
    videos: []  // Empty array for videos
  }
];

// Create a provider component to manage posts
export const PlayerPostsProvider = ({ children }) => {
  const [playerPosts, setPlayerPosts] = useState(defaultPosts);

  // Function to add a new post
  const addPost = (newPost) => {
    newPost._id = uuidv4(); // Generate a unique ID for the new post
    setPlayerPosts((prevPosts) => [...prevPosts, newPost]);
  };

  // const addPost = (newPost) => {
  //   const postWithId = { ...newPost, id: posts.length + 1 };
  //   setPlayerPosts((prevPosts) => [...prevPosts, postWithId]);
  // };

  return (
    <PlayerPostsContext.Provider value={{ playerPosts, addPost }}>
      {children}
    </PlayerPostsContext.Provider>
  );
};
