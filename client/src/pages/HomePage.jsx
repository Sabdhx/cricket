import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Cricket Talent Hub</h1>
      <p className="mb-4">Discover cricket talent, hire players, or showcase your skills!</p>
      <div className="flex space-x-4">
        <Link to="/register" className="bg-primary-green text-green py-2 px-4 rounded bg-green-400">Post Your Talent</Link>
        <Link to="/player-posts" className="bg-primary-green text-green py-2 px-4 rounded  bg-green-400">Hire a Player</Link>
      </div>
    </div>
  );
};

export default HomePage;
