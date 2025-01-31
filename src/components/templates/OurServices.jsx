import React from "react";
import { FaHome, FaCar, FaBriefcase, FaUser } from "react-icons/fa"; // Importing icons
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "../layout/Header";
import "../../styles/Header.css"; 
import "../../global style/style.css";

function OurServices() {
  return (

    
    <div className="container text-center mt-5">
     
            <Header />
            <div className="page-content"> </div>
            <div className="background-container"></div> {/* Separate background layer */}
             
            <h2 className="loan-heading">Our Loan Services</h2>
            <p className="loan-description">
             We provide a range of loans tailored to meet your financial needs. Choose from our loan options below:
            </p>
      
      <div className="row g-4">
      
        {/* Home Loan */}
        <div className="col-md-3">
          <button className="btn btn-outline-primary w-100 p-2 d-flex flex-column align-items-center">
          <div className="icon-container bg-primary text-white p-4 rounded-circle">
            <FaHome size={30} className="mb-2" /> Home Loan
          </div>
          </button>
        </div>


        {/* Car Loan */}
        <div className="col-md-3">
          <button className="btn btn-outline-success w-100 p-2 d-flex flex-column align-items-center">
          <div className="icon-container bg-success text-white p-4 rounded-circle">
            <FaCar size={30} className="mb-2" /> Car Loan
          </div>
          </button>
        </div>

        {/* Business Loan */}
        <div className="col-md-3">
          <button className="btn btn-outline-danger w-100 p-2 d-flex flex-column align-items-center">
          <div className="icon-container bg-danger text-white p-4 rounded-circle">
            <FaBriefcase size={30} className="mb-2" /> Business Loan
            </div>
          </button>
        </div>

        {/* Personal Loan */}
        <div className="col-md-3">
          <button className="btn btn-outline-secondary w-100 p-2 d-flex flex-column align-items-center">
          <div className="icon-container bg-secondary text-white p-4 rounded-circle">
            <FaUser size={30} className="mb-2" /> Personal Loan
          </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
