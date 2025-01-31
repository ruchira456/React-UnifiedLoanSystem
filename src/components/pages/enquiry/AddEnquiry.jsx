import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaPhone, FaEnvelope, FaFileAlt } from "react-icons/fa";

const AddEnquiry = () => {
  const [enquiry, setEnquiry] = useState({
    customerFullName: "",
    contactNumber: "",
    email: "",
    loanType: "",
    age: "",
    panCard: "",
    enquiryStatus: "REGISTERED",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8081/enquiry/save-enquiry", enquiry);
      setMessage("Enquiry added successfully!");
      setEnquiry({
        customerFullName: "",
        contactNumber: "",
        email: "",
        loanType: "",
        age: "",
        panCard: "",
        enquiryStatus: "REGISTERED",
      });
    } catch (error) {
      setMessage("Error adding enquiry. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">Add Enquiry</h2>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} className="p-4 shadow bg-light rounded">
        <div className="mb-3">
          <label className="form-label">
            <FaUser className="me-2 text-primary" /> Full Name
          </label>
          <input
            type="text"
            className="form-control"
            name="customerFullName"
            value={enquiry.customerFullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FaPhone className="me-2 text-primary" /> Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            name="contactNumber"
            value={enquiry.contactNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FaEnvelope className="me-2 text-primary" /> Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={enquiry.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FaFileAlt className="me-2 text-primary" /> Loan Type
          </label>
          <select
            className="form-select"
            name="loanType"
            value={enquiry.loanType}
            onChange={handleChange}
            required
          >
            <option value="">Select Loan Type</option>
            <option value="Housing">Housing Loan</option>
            <option value="Car">Car Loan</option>
            <option value="Business">Business Loan</option>
            <option value="Personal">Personal Loan</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default AddEnquiry;
