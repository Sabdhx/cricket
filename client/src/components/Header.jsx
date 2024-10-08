import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-400 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-dark-green text-3xl font-extrabold hover:text-green-700 transition duration-300">
          Cricket Talent Hub
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-dark-green text-lg font-semibold hover:bg-dark-green hover:text-white py-3 px-5 rounded-lg transition duration-300">
            Home
          </Link>
          <Link to="/blogs" className="text-dark-green text-lg font-semibold hover:bg-dark-green hover:text-white py-3 px-5 rounded-lg transition duration-300">
            Blogs
          </Link>
          <Link to="/register" className="text-dark-green text-lg font-semibold hover:bg-dark-green hover:text-white py-3 px-5 rounded-lg transition duration-300">
            Register
          </Link>
          <Link to="/login" className="text-dark-green text-lg font-semibold hover:bg-dark-green hover:text-white py-3 px-5 rounded-lg transition duration-300">
            Login
          </Link>
          <Link to="/player-posts" className="text-dark-green text-lg font-semibold hover:bg-dark-green hover:text-white py-3 px-5 rounded-lg transition duration-300">
            Players
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
