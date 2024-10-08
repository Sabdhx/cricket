import React, { useEffect, useState } from 'react';

const PlayerPostsList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch player posts from API (placeholder URL)
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/player-posts'); // Update this URL based on your backend
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching player posts:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="space-y-4">
      {players.map((player) => (
        <div key={player.id} className="border p-4 rounded shadow-md hover:bg-gray-100 transition">
          <h3 className="text-xl font-semibold">{player.name}</h3>
          <p>Height: {player.height} cm</p>
          <p>Weight: {player.weight} kg</p>
          <p>Address: {player.address}</p>
          <p>Talent: {player.talent.join(', ')}</p>
          <img src={player.image} alt={player.name} className="w-full h-48 object-cover mb-2" />
          <p>Description: {player.description}</p>
          <p>WhatsApp: {player.whatsappNumber}</p>
          <button className="bg-primary-green text-white py-2 px-4 rounded mt-2">Hire Player</button>
        </div>
      ))}
    </div>
  );
};

export default PlayerPostsList;
