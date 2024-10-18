import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const PlayerDashboard = () => {
  const  addPost  = [] // Access the addPost function from the context
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    city: "", // Added city field here
    address: "",
    talent: "",
    whatsapp: "",
    description: "",
    photos: [], // Array to store multiple photos
    videos: [], // Array to store multiple videos
  });

  const handleChange = (e) => {
    if (e.target.name === "photos") {
      // Handle multiple file selection for photos
      setFormData({ ...formData, photos: Array.from(e.target.files) });
    } else if (e.target.name === "videos") {
      // Handle multiple file selection for videos
      setFormData({ ...formData, videos: Array.from(e.target.files) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      name: formData.name,
      height: formData.height,
      weight: formData.weight,
      city: formData.city,
      address: formData.address,
      talent: formData.talent,
      whatsapp: formData.whatsapp,
      description: formData.description,
      photos: formData.photos, // Keep the file objects as they are for future processing
      videos: formData.videos, // Keep the file objects as they are for future processing
    };

    // Call the addPost function to add the new post
    addPost(newPost);

    // Reset form fields
    setFormData({
      name: "",
      height: "",
      weight: "",
      city: "", // Reset city field
      address: "",
      talent: "",
      whatsapp: "",
      description: "",
      photos: [],
      videos: [],
    });

    // Redirect to Player Posts page
    navigate("/player-posts");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-700">
        Player Dashboard
      </h2>
      <p className="mb-8 text-center text-gray-600 text-lg">
        Manage your profile and post your cricketing talents!
      </p>

      <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Player info section */}
        <div className="border border-gray-300 shadow-lg rounded-lg p-8 w-full max-w-sm bg-white">
          <h3 className="text-xl font-semibold mb-6 text-green-700">
            Your Information
          </h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Name:</span> {formData.name || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Height:</span> {formData.height || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Weight:</span> {formData.weight || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Address:</span> {formData.address || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Talent:</span> {formData.talent || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">City:</span> {formData.city || "N/A"}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">WhatsApp:</span> {formData.whatsapp || "N/A"}
          </p>
        </div>

        {/* Form to post talent */}
        <form
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-700">
            Post Your Talent
          </h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            onChange={handleChange}
            required
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="number"
              name="height"
              value={formData.height}
              placeholder="Height (cm)"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="weight"
              value={formData.weight}
              placeholder="Weight (kg)"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="City"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            onChange={handleChange}
            required
          />
          <select
            name="talent"
            value={formData.talent}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
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
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            value={formData.description}
            placeholder="Description"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            rows="4"
            onChange={handleChange}
            required
          ></textarea>

          {/* Multiple photo upload field */}
          <label className="block text-gray-700 mb-2">Upload Photos</label>
          <input
            type="file"
            name="photos"
            multiple
            accept="image/*"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            onChange={handleChange}
          />

          {/* Multiple video upload field */}
          <label className="block text-gray-700 mb-2">Upload Videos</label>
          <input
            type="file"
            name="videos"
            multiple
            accept="video/*"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-primary-green text-white bg-green-500 p-4 rounded-lg font-semibold transition duration-300 transform hover:bg-green-600 hover:scale-105 w-full"
          >
            Post Talent
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerDashboard;
