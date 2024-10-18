import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SinglePlayerPostPage = () => {
  const { id } = useParams();
  const  playerPosts  =[];
  const navigate = useNavigate();

  const post = playerPosts.find((post) => post._id === id);

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header: Player's Name */}
        <h2 className="text-5xl font-extrabold text-center text-green-700 mb-8">
          {post.name}'s Profile
        </h2>

        {/* Player Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Player Info */}
          <div className="grid grid-cols-2 gap-4">
            {/* Height */}
            <div className="bg-green-200 text-green-900 p-2 rounded-lg text-center hover:bg-green-100 transition-colors">
              <p className="font-semibold text-xl">Height</p>
              <p>{post.height} cm</p>
            </div>

            {/* Weight */}
            <div className="bg-blue-200 text-blue-900 p-2 rounded-lg text-center hover:bg-blue-100 transition-colors">
              <p className="font-semibold text-xl">Weight</p>
              <p>{post.weight} kg</p>
            </div>

            {/* City */}
            <div className="bg-yellow-200 text-yellow-900 p-2 rounded-lg text-center hover:bg-yellow-100 transition-colors">
              <p className="font-semibold text-xl">City</p>
              <p>{post.city}</p>
            </div>

            {/* Talent */}
            <div className="bg-purple-200 text-purple-900 p-2 rounded-lg text-center hover:bg-purple-100 transition-colors">
              <p className="font-semibold text-xl">Talent</p>
              <p>{post.talent}</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 gap-4">
            {/* Address */}
            <div className="bg-gray-200 text-gray-900 p-2 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-xl">Address</p>
              <p>{post.address}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-200 text-green-900 p-2 rounded-lg text-center hover:bg-green-100 transition-colors">
              <p className="font-semibold text-xl">WhatsApp</p>
              <p>{post.whatsapp}</p>
            </div>

            {/* Description */}
            <div className="bg-gray-200 text-gray-900 p-2 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-xl">About me</p>
              <p>{post.description}</p>
            </div>
          </div>
        </div>

        {/* Photos Section */}
        {post.photos.length > 0 && (
          <div className="mt-6">
            <h4 className="text-2xl font-bold mb-4">Photos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from(post.photos).map((photo, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* Videos Section */}
        {post.videos.length > 0 && (
          <div className="mt-8">
            <h4 className="text-2xl font-bold mb-4">Videos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array.from(post.videos).map((video, index) => (
                <video
                  key={index}
                  controls
                  className="w-full h-auto rounded-lg"
                >
                  <source src={URL.createObjectURL(video)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </div>
        )}

        {/* Buttons: Hire and Back to Players */}
        <div className="mt-12 flex justify-between">
          {/* Hire Button */}
          <button
            onClick={() => {
              const whatsappNumber = post.whatsapp.startsWith("+92") ? post.whatsapp : `+92${post.whatsapp}`;
              window.open(`https://wa.me/${whatsappNumber}`, "_blank");
            }}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-3 px-6 rounded-lg"
          >
            Hire
          </button>

          {/* Back to Players Button */}
          <button
            onClick={() => navigate('/player-posts')}
            className="bg-gray-500 hover:bg-gray-600 text-white text-lg font-bold py-3 px-6 rounded-lg"
          >
            Back to Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayerPostPage;
