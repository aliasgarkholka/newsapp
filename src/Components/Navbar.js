import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

console.log('Auth0 Domain:', process.env.REACT_APP_AUTH0_DOMAIN);
console.log('Auth0 Client ID:', process.env.REACT_APP_AUTH0_CLIENT_ID);
const Navbar = () => {
  const { isLoading, error, isAuthenticated, user, loginWithRedirect, logout } =
    useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style jsx>
        {`
          .modern-navbar {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.95) 0%,
              rgba(26, 26, 46, 0.95) 50%,
              rgba(22, 33, 62, 0.95) 100%
            );
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 212, 255, 0.2);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            width: 100%;
            overflow: hidden;
          }

          .navbar-container {
            max-width: 100%;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            box-sizing: border-box;
          }

          .navbar-brand {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00d4ff, #ffffff, #0099cc);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            font-variant: small-caps;
            flex-shrink: 0;
            min-width: 140px;
          }

          .navbar-brand:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.7));
          }

          .navbar-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;
            justify-content: flex-end;
            overflow: hidden;
          }

          .navbar-toggle {
            display: none;
            background: transparent;
            border: 2px solid #00d4ff;
            border-radius: 8px;
            padding: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            flex-shrink: 0;
          }

          .navbar-toggle:hover {
            background: rgba(0, 212, 255, 0.1);
            transform: scale(1.1);
          }

          .hamburger {
            width: 20px;
            height: 2px;
            background: #00d4ff;
            margin: 4px 0;
            transition: 0.3s;
            transform-origin: center;
          }

          .hamburger.active:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .hamburger.active:nth-child(2) {
            opacity: 0;
          }

          .hamburger.active:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
          }

          .navbar-nav {
            display: flex;
            list-style: none;
            gap: 0.75rem;
            align-items: center;
            margin: 0;
            padding: 0;
            flex-shrink: 1;
            overflow: hidden;
          }

          .nav-item {
            position: relative;
            flex-shrink: 0;
          }

          .nav-Link {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.85rem;
            padding: 0.4rem 0.6rem;
            border-radius: 20px;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            display: block;
            white-space: nowrap;
          }

          .nav-Link:hover {
            color: #00d4ff;
            background: rgba(0, 212, 255, 0.1);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 212, 255, 0.2);
          }

          .nav-Link.active {
            background: linear-gradient(135deg, #00d4ff, #0099cc);
            color: white;
            box-shadow: 0 6px 15px rgba(0, 212, 255, 0.4);
          }

          .premium-link {
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: #333;
          }

          .premium-link:hover {
            background: linear-gradient(135deg, #ffed4e, #fff176);
            color: #000;
          }

          .search-form {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            flex-shrink: 1;
            min-width: 200px;
          }

          .search-input {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 0.5rem 1rem;
            color: white;
            font-size: 0.85rem;
            width: 140px;
            transition: all 0.3s ease;
            box-sizing: border-box;
          }

          .search-input::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }

          .search-input:focus {
            outline: none;
            border-color: #00d4ff;
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
            background: rgba(255, 255, 255, 0.15);
            width: 160px;
          }

          .search-btn {
            background: linear-gradient(135deg, #00ff88, #00d4aa);
            border: none;
            border-radius: 15px;
            padding: 0.5rem 1rem;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            font-size: 0.75rem;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .search-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 255, 136, 0.4);
            background: linear-gradient(135deg, #00d4aa, #00b894);
          }

          .auth-section {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-shrink: 0;
            min-width: 120px;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.8rem;
            white-space: nowrap;
          }

          .user-avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 2px solid #00d4ff;
            box-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
            flex-shrink: 0;
          }

          .auth-btn {
            background: linear-gradient(135deg, #00d4ff, #0099cc);
            border: none;
            border-radius: 15px;
            padding: 0.5rem 0.8rem;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            font-size: 0.75rem;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .auth-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4);
            background: linear-gradient(135deg, #0099cc, #006bb3);
          }

          .logout-btn {
            background: linear-gradient(135deg, #ff4757, #ff3742);
          }

          .logout-btn:hover {
            background: linear-gradient(135deg, #ff3742, #e63946);
            box-shadow: 0 8px 20px rgba(255, 71, 87, 0.4);
          }

          /* Mobile Styles */
          @media (max-width: 1024px) {
            .navbar-nav {
              gap: 0.5rem;
            }
            
            .nav-Link {
              font-size: 0.8rem;
              padding: 0.3rem 0.5rem;
            }
            
            .search-input {
              width: 120px;
            }
            
            .search-input:focus {
              width: 140px;
            }
          }

          @media (max-width: 768px) {
            .navbar-toggle {
              display: block;
            }

            .navbar-content {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              width: 100%;
              background: rgba(26, 26, 46, 0.98);
              backdrop-filter: blur(20px);
              flex-direction: column;
              gap: 1rem;
              padding: 1rem;
              border-top: 1px solid rgba(0, 212, 255, 0.2);
              transform: translateY(-20px);
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            }

            .navbar-content.open {
              transform: translateY(0);
              opacity: 1;
              visibility: visible;
            }

            .navbar-nav {
              flex-direction: column;
              width: 100%;
              gap: 0.5rem;
            }

            .nav-item {
              width: 100%;
            }

            .nav-Link {
              display: block;
              width: 100%;
              text-align: center;
              padding: 0.75rem;
            }

            .search-form {
              width: 100%;
              flex-direction: column;
              gap: 1rem;
              min-width: unset;
            }

            .search-input {
              width: 100%;
            }

            .search-input:focus {
              width: 100%;
            }

            .search-btn {
              width: 100%;
            }

            .auth-section {
              width: 100%;
              flex-direction: column;
              gap: 1rem;
              min-width: unset;
            }

            .user-info {
              justify-content: center;
            }

            .auth-btn {
              width: 100%;
              padding: 0.75rem;
            }
          }

          /* Prevent horizontal overflow */
          * {
            box-sizing: border-box;
          }

          body {
            overflow-x: hidden;
          }
        `}
      </style>

      <nav className="modern-navbar">
        <div className="navbar-container">
          <Link className="navbar-brand" to="/">
            PRIMETIME
          </Link>

          <button className="navbar-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
          </button>

          <div className={`navbar-content ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-Link active" to="/technology">
                  TECH
                </Link>
              </li>

              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link className="nav-Link premium-link" to="/premium">
                      ⭐ PREMIUM
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-Link active" to="/profile">
                      PROFILE
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <div className="search-form">
              <input
                className="search-input"
                type="search"
                placeholder="Search news..."
                aria-label="Search"
              />
              <button className="search-btn" type="button">
                Search
              </button>
            </div>

            <div className="auth-section">
              {isLoading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="user-info">Loading...</span>
                  <button
                    className="auth-btn"
                    onClick={() => loginWithRedirect()}
                    style={{ opacity: 0.7 }}
                  >
                    Sign In
                  </button>
                </div>
              ) : error ? (
                <div>
                  <span className="user-info" style={{ color: '#ff4757' }}>
                    Auth Error: {error.message}
                  </span>
                  <button
                    className="auth-btn"
                    onClick={() => loginWithRedirect()}
                  >
                    Try Again
                  </button>
                </div>
              ) : isAuthenticated ? (
                <>
                  <div className="user-info">
                    {user?.picture && (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="user-avatar"
                      />
                    )}
                    <span>Welcome, {user?.name?.split(' ')[0] || 'User'}!</span>
                  </div>
                  <button
                    className="auth-btn logout-btn"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <span className="user-info">Sign in for premium features</span>
                  <button
                    className="auth-btn"
                    onClick={() => loginWithRedirect()}
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;