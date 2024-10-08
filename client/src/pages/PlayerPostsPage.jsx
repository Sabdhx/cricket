import React from "react";

const PlayerPostsPage = ({ playerPosts }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Player Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playerPosts.length > 0 ? (
          playerPosts.map((post, index) => (
            <div key={index} className="border border-gray-300 shadow-lg rounded-lg p-6 bg-white">
              <h3 className="text-xl font-semibold">{post.name}</h3>
              <p className="text-gray-600">Height: {post.height} cm</p>
              <p className="text-gray-600">Weight: {post.weight} kg</p>
              <p className="text-gray-600">Address: {post.address}</p>
              <p className="text-gray-600">Talent: {post.talent}</p>
              <p className="text-gray-600">WhatsApp: {post.whatsapp}</p>
              <p className="text-gray-600">Description: {post.description}</p>
              <button
                className="bg-primary-green text-white p-2 rounded-lg mt-4 transition duration-300 transform hover:bg-green-600 hover:scale-105"
              >
                Contact Player
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No posts available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default PlayerPostsPage;
