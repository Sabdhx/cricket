import React, { useState } from 'react';

const BlogForm = ({ handleBlogSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBlogSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-semibold text-primary-green mb-4">Post a Blog</h2>
      <input type="text" name="title" placeholder="Blog Title" value={formData.title} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" />
      <textarea name="content" placeholder="Blog Content" value={formData.content} onChange={handleChange} className="w-full mb-4 p-2 border border-gray-300 rounded" rows="6"></textarea>
      <button type="submit" className="w-full bg-primary-green text-white py-2 px-4 rounded hover:bg-green-600 transition">Post Blog</button>
    </form>
  );
};

export default BlogForm;
