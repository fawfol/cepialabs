import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNav = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className={`auth-page-wrapper ${currentPage}`}>
      {/* Login Page */}
      <div className="page-section login-section">
        <div className="content-panel">
          <h1>Around the world with Travio</h1>
          <p>
            Discover new adventures, connect with people, and explore the globe with us.
          </p>
        </div>
        <div className="form-panel">
          <div className="form-card">
            <h2>Log in</h2>
            <p className="card-subtitle">Enter your credentials to access your account</p>
            <input type="email" placeholder="your123@email.com" />
            <input type="password" placeholder="Password" />
            <button className="primary-btn">Log in</button>
            <div className="form-links">
              <a href="#" onClick={(e) => handleNav(e, 'forgot')}>Forgot password?</a>
              <span className="separator">·</span>
              <a href="#" onClick={(e) => handleNav(e, 'signup')}>Sign up</a>
            </div>
            <div className="social-login">
              <p>— or sign in with —</p>
              <div className="social-icons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-google"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Page */}
      <div className="page-section signup-section">
        <div className="form-panel">
          <div className="form-card">
            <h2>Sign up</h2>
            <p className="card-subtitle">Join us today! It only takes a minute</p>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="your123@email.com" />
            <input type="password" placeholder="Password" />
            <button className="primary-btn">Sign Up</button>
            <div className="form-links">
              <p>Already have an account? <a href="#" onClick={(e) => handleNav(e, 'login')}>Log in</a></p>
            </div>
            <div className="social-login">
              <p>— or sign up with socials —</p>
              <div className="social-icons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-google"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="content-panel">
          <h1>Join Travio and Explore the World</h1>
          <p>
            Sign up today to discover new adventures, connect with fellow travelers, and start your journey around the globe.
          </p>
        </div>
      </div>

      {/* Forgot Password Page */}
      <div className="page-section forgot-section">
        <div className="form-panel form-panel-center">
          <div className="form-card">
            <h2>Forgot Password</h2>
            <p className="card-subtitle">Reset your account password in a few simple steps</p>
            <input type="email" placeholder="you@example.com" />
            <button className="primary-btn">Send OTP</button>
            <div className="form-links form-links-full">
              <a href="#" onClick={(e) => handleNav(e, 'login')}>Log In</a>
              <span className="separator">·</span>
              <a href="#" onClick={(e) => handleNav(e, 'signup')}>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
