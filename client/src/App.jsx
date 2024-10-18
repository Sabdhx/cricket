import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import PlayerDashboard from "./components/PlayerDashboard";
import HiringManagerDashboard from "./components/HiringManagerDashboard";
import SinglePlayerPostPage from "./components/SinglePlayerPostPage";
import PlayerPostsPage from "./pages/PlayerPostsPage";


const App = () => {

  const handleTalentPost = (post) => {
  
  };

  return (
  
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/player-dashboard" element={<PlayerDashboard onTalentPost={handleTalentPost} />} />
            <Route path="/hiring-manager-dashboard" element={<HiringManagerDashboard />} />
            <Route path="/player-posts" element={<PlayerPostsPage />} />
            <Route path="/player-post/:id" element={<SinglePlayerPostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
 

  );
};

export default App;
