import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerDashboard = ({ onTalentPost }) => {
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    address: "",
    talent: "",
    whatsapp: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function to post talent and pass formData
    onTalentPost(formData);
    // Reset form fields
    setFormData({
      name: "",
      height: "",
      weight: "",
      address: "",
      talent: "",
      whatsapp: "",
      description: "",
    });
    // Redirect to Player Posts page
    navigate("/player-posts");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Player Dashboard</h2>
      <p className="mb-4 text-center">
        View your profile and post your cricket talents.
      </p>

      <div className="flex justify-between">
        {/* Player info section */}
        <div className="border border-gray-300 shadow-lg rounded-lg p-6 mb-6 bg-white w-full max-w-xs mr-4">
          <h3 className="text-xl font-semibold mb-4">Your Information</h3>
          {/* Display player information here */}
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Height: 180 cm</p>
          <p className="text-gray-600">Weight: 75 kg</p>
          <p className="text-gray-600">Address: 123 Street Name</p>
          <p className="text-gray-600">Talent: Batting</p>
          <p className="text-gray-600">WhatsApp: +1234567890</p>
        </div>

        {/* Form to post talent */}
        <form
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold mb-4">Post Your Talent</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="height"
            value={formData.height}
            placeholder="Height (cm)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="weight"
            value={formData.weight}
            placeholder="Weight (kg)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            onChange={handleChange}
            required
          />
          <select
            name="talent"
            value={formData.talent}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Talent
            </option>
            <option value="Bowling">Bowling</option>
            <option value="Batting">Batting</option>
            {/* Add more talents as needed */}
          </select>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            placeholder="WhatsApp Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            value={formData.description}
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            rows="4"
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary-green text-white p-3 rounded-lg font-semibold transition duration-300 transform hover:bg-green-600 hover:scale-105"
          >
            Post Talent
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerDashboard;
