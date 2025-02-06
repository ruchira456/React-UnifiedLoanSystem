import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css"; // Add this line to include the CSS file.
import { Search } from "lucide-react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar p-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Unified Loan System" height="100" />
        </Link>

        {/* Search Bar */}
        <form className="search-bar mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
          />
          <button type="submit" className="btn search-btn">
            <Search size={20} color="#fff" /> {/* Icon as the button content */}
          </button>
        </form>

        {/* Navigation Buttons */}
        <div className="d-flex">
          <Link className="btn btn-primary me-2 nav-btn" to={'/visitor/about'}>About Us</Link>
          <Link className="btn btn-info me-2 nav-btn" to={'/visitor/service'}>Our Services</Link>
          <Link className="btn btn-warning me-2 nav-btn" to={'/visitor/contact'}>Contact Us</Link>
          <Link className="btn btn-success me-2 nav-btn" to={'/visitor/calculator'}>EMI Calculator</Link>
          <Link className="btn btn-danger me-2 nav-btn" to={'/visitor/enquiry'}>Enquiry</Link> 
          <Link className="btn btn-primary me-2 nav-btn" to={'/visitor/login'}>Login</Link>

        </div>
      </div>
    </nav>
  );
}

export default Header;
