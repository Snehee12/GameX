import React from "react";
import "./LeftSidebar.css"; // Importing separate CSS file

export const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/80"
          alt="profile"
          className="profile-pic"
        />
        <h3>John Doe</h3>
        <p>Professional Gamer & Streamer</p>

        {/* User Stats */}
        <div className="stats">
          <div className="stat">
            <span className="number">1.2K</span>
            <span className="label">Followers</span>
          </div>
          <div className="stat">
            <span className="number">500</span>
            <span className="label">Following</span>
          </div>
          <div className="stat">
            <span className="number">15</span>
            <span className="label">Posts</span>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="social-links">
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">YouTube</a>
        </div> */}
      </div>

      {/* Additional Information */}
      <div className="additional-info">
        <h4>About Me</h4>
        <p>
          Passionate about gaming and streaming. I have been playing
          competitively for over 10 years. 
        </p>
        <h4>Games</h4>
        <ul className="Games">
          <li>Valorant</li>
          <li>CSGO</li>
          <li>Minecraft</li>
        </ul>
      </div>
    </aside>
  );
};
