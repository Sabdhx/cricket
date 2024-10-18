import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayerPostsPage = () => {
  const  [playerPosts , setPlayerPosts]  = useState([])
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-700">Player Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {playerPosts.map((post) => (
          <div
            key={post._id}
            className="border border-gray-200 shadow-xl rounded-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center">
              {/* Player Name */}
              <h3 className="text-2xl font-bold text-green-700 mb-4">{post.name}</h3>

              {/* Player Image (smaller size) */}
              {post.photos.length > 0 ? (
                <img
                  src={typeof post.photos[0] === 'string' ? post.photos[0] : URL.createObjectURL(post.photos[0])}
                  alt="Player photo"
                  className="w-[300px] h-[400px] object-cover mb-4 border-2 border-green-500"
                />
              ) : (
                <div className="w-80 h-60   bg-gray-100 flex items-center justify-center text-gray-500 mb-4">
                  No Image
                </div>
              )}

              {/* Player Info */}
              <div className="text-center">
  <div className="flex flex-wrap justify-center gap-4">
    {/* Height */}
    <div className="bg-green-50 text-green-800 p-1 w-40 h-16 rounded-lg flex flex-col justify-center items-center hover:bg-green-100 transition-colors">
      <p className="font-semibold text-sm">Height</p>
      <p className="text-xs">{post.height} cm</p>
    </div>

    {/* Weight */}
    <div className="bg-blue-50 text-blue-800 p-1 w-40 h-16 rounded-lg flex flex-col justify-center items-center hover:bg-blue-100 transition-colors">
      <p className="font-semibold text-sm">Weight</p>
      <p className="text-xs">{post.weight} kg</p>
    </div>

    {/* City */}
    <div className="bg-yellow-50 text-yellow-800 p-1 w-40 h-16 rounded-lg flex flex-col justify-center items-center hover:bg-yellow-100 transition-colors">
      <p className="font-semibold text-sm">City</p>
      <p className="text-xs">{post.city}</p>
    </div>

    {/* Talent */}
    <div className="bg-purple-50 text-purple-800 p-1 w-40 h-16 rounded-lg flex flex-col justify-center items-center hover:bg-purple-100 transition-colors">
      <p className="font-semibold text-sm">Talent</p>
      <p className="text-xs">{post.talent}</p>
    </div>
  </div>

  {/* Button to View More */}
  <button
    onClick={() => navigate(`/player-post/${post._id}`)}
    className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
  >
    View More
  </button>
</div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerPostsPage;
