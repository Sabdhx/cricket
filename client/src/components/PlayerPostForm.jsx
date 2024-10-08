import React, { useState } from 'react';

const PlayerPostForm = ({ handlePlayerPostSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    address: '',
    talent: '',
    images: null,
    description: '',
    whatsapp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePlayerPostSubmit(formData);
    setFormData({
      name: '',
      height: '',
      weight: '',
      address: '',
      talent: '',
      images: null,
      description: '',
      whatsapp: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-semibold text-primary-green mb-4">Post Your Talent</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" required />
      <input type="text" name="height" placeholder="Height" value={formData.height} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" required />
      <input type="text" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" required />
      <input type="text" name="talent" placeholder="Talent (e.g., Bowling, Batting)" value={formData.talent} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" required />
      <input type="file" name="images" onChange={handleFileChange} className="w-full mb-4" multiple />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" rows="4" required></textarea>
      <input type="text" name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" required />
      <button type="submit" className="w-full bg-primary-green text-white py-2 px-4 rounded hover:bg-green-600 transition">Submit Talent</button>
    </form>
  );
};

export default PlayerPostForm;
