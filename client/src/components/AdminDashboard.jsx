import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-4">Manage player posts and create cricket blogs here.</p>
      {/* Add functionality to manage player posts */}
      <button className="bg-primary-green text-green bg-green-500 py-2 px-4 rounded">Create Blog</button>
      <button className="bg-red-600 text-white py-2 px-4 rounded">Delete Player Post</button>
    </div>
  );
};

export default AdminDashboard;
