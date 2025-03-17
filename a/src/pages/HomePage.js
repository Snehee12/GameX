import React from 'react';
import './HomePage.css';
import {Post} from '../components/ui/Post';

export const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Clover</h2>
        <div className="nav-buttons">
          <button>Home</button>
          <button>Explore</button>
          <button>Jobs</button>
          <button>Messages</button>
          <button>Profile</button>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="main-content">
        {/* Left Sidebar - Profile Info */}
        <aside className="left-sidebar">
          <div className="profile-card">
            <img src="https://via.placeholder.com/80" alt="profile" className="profile-pic" />
            <h3>John Doe</h3>
            <p>Professional Gamer & Streamer</p>
          </div>
        </aside>

        {/* Center - Posts Feed */}
        <main className="feed">
          <Post name="Alice Johnson" description="Young gamer" text="Just won the regional Valorant tournament! ahvcjhwa ciwvdh as diwvajw  iqwvd  twdviudvqnwd  iuqwdvh uqdgw uqwu ysto gdgtennofg 🏆🔥" image="https://via.placeholder.com/150" />
          <Post name="Mike Carter" description="Young gamer" text="Looking for a serious team to compete in Apex Legends. DM me!" image="" />
          <Post name="Sarah Lin" description="Young gamer" text="Check out my latest gaming stream highlights! Link below 👇" image="https://via.placeholder.com/150" />
        </main>

        {/* Right Sidebar - Jobs & Messages */}
        <aside className="right-sidebar">
          <div className="widget">
            <h3>Jobs Available</h3>
            <ul>
              <li>Esports Analyst - Team XYZ</li>
              <li>Game Tester - ABC Studios</li>
            </ul>
          </div>
          <div className="widget">
            <h3>Messages</h3>
            <p>You have 3 unread messages</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
