import React from "react";
import { useNavigate } from "react-router-dom";
import "../../global style/style.css"; // Global styles
import "../../styles/Homepage.css"; // Component-specific styles

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-overlay">
        <h1>Welcome to Unified Loan System</h1>
        <p>Empowering you to achieve your dreams with personal loans up to ₹50 lakh.</p>
        <button
          className="homepage-button"
          onClick={() => navigate("visitor")}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Homepage;
