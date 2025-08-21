import React from 'react';
import './Navbar.css';
import { IoNotificationsOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">TripPlanner</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search trips, locations, or users..." />
      </div>
      <div className="navbar-actions">
        <button className="navbar-icon-button">
          <IoNotificationsOutline size={24} />
        </button>
        <div className="navbar-profile">
          <span>JD</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
