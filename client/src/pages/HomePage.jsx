import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ backgroundImage: 'url(public/cricketBg.avif)', backgroundSize: 'cover', backgroundPosition: 'center', opacity:0.8 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-6 text-green-600">Welcome to Cricket Talent Hub</h1>
        <p className="mb-8 text-lg text-gray-700">
          Discover cricket talent, hire players, or showcase your skills!
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/register"
            className="bg-green-500 text-white py-3 px-6 rounded-lg text-xl font-semibold transition duration-300 hover:bg-green-600 transform hover:scale-105"
          >
            Post Your Talent
          </Link>
          <Link
            to="/player-posts"
            className="bg-green-500 text-white py-3 px-6 rounded-lg text-xl font-semibold transition duration-300 hover:bg-green-600 transform hover:scale-105"
          >
            Hire a Player
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
