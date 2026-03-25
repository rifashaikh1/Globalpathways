import React from "react";
import "../styles/home.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h3>Global Pathways AI</h3>
          <p>
            Empowering students with AI-powered career guidance
            and university matching.
          </p>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
          <p>App</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <p>Help Center</p>
          <p>Guides</p>
          <p>Support</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Global Pathways AI
      </div>

    </footer>
  );
}

export default Footer;