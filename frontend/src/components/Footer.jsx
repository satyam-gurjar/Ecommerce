import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>About</h4>
            <Link to="/footer-info">Contact Us</Link>
            <Link to="/about">About Us</Link>
            <Link to="/footer-info"></Link>
            <Link to="/footer-info"></Link>
            <Link to="/footer-info"></Link>
            <Link to="/footer-info"></Link>
          </div>
                  
          <div className="footer-column">
            <h4>Help</h4>
            <Link to="/footer-info">Payments</Link>
            <Link to="/footer-info">Shipping</Link>
            <Link to="/footer-info">Cancellation & Returns</Link>
            <Link to="/footer-info">FAQ</Link>
          </div>

          <div className="footer-column">
            <h4>Consumer Policy</h4>
            <Link to="/footer-info">Terms Of Use</Link>
            <Link to="/footer-info">Privacy Policy</Link>
            <Link to="/footer-info"></Link>
            <Link to="/footer-info"></Link>
            <Link to="/footer-info"></Link>
            <Link to="/footer-info"></Link>
          </div>

          <div className="footer-column footer-address">
            <h4>Mail Us</h4>
            <p>traditionssaha@gmail.com</p>
          </div>

          <div className="footer-column footer-address">
            <h4></h4>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>

        <div className="footer-meta">
          &copy; {new Date().getFullYear()} Saha Traditions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
