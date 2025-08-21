/*src/components/Navbar,jsx*/
/* travio logo name, notification and account/prodile sect*/

import React from 'react';
import './Navbar.css';
import { IoNotifications, IoSearch, IoPersonCircleOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        Travio
      </div>
      
      <div className="navbar-search"> 
        <IoSearch className="search-icon" />
        <input type="text" placeholder="Search trips, locations, or users..." />
      </div>
      <div className="navbar-actions">
        <div className="notification-icon-wrapper">
          <IoNotifications size={24} className="navbar-icon" /> 
          <span className="notification-badge">3</span>
        </div>
        {/* prrofile  account shortcut  */}
        <IoPersonCircleOutline size={42} className="navbar-profile-icon" />
      </div>
    </header>
  );
};

export default Navbar;
