import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('player');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Navigate to the appropriate dashboard based on the selected role
    navigate(role === 'player' ? '/player-dashboard' : '/hiring-manager-dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-green-600">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="player">Player</option>
            <option value="hiringManager">Hiring Manager</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
