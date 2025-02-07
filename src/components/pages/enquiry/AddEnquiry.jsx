import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaUser, FaPhone, FaEnvelope, FaFileAlt, FaCalendar, FaIdCard } from "react-icons/fa";
import Header from "../../layout/Header";
import "../../../styles/AddEnquiry.css";

const AddEnquiry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8081/visitor/enquiry/save-enquiry", data);
      setMessage("Enquiry added successfully!");
      reset(); // Reset form fields after successful submission
    } catch (error) {
      setMessage("Error adding enquiry. Please try again.");
    }
  };

  return (
    <div className="container mt-4">

<Header />
<h2 className="text-center text-black">
"Need Financial Support? Let’s Get You Started with a Quick Loan Enquiry!" 
</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow bg-light rounded">
        <div className="mb-3">
          <label className="form-label">
            <FaUser className="me-2 text-primary" /> Full Name
          </label>
          <input
            type="text"
            className="form-control"
            {...register("customerFullName", { required: "Full name is required" })}
          />
          {errors.customerFullName && (
            <small className="text-danger">{errors.customerFullName.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FaPhone className="me-2 text-primary" /> Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.contactNumber && (
            <small className="text-danger">{errors.contactNumber.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FaEnvelope className="me-2 text-primary" /> Email
          </label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FaFileAlt className="me-2 text-primary" /> Loan Type
          </label>
          <select className="form-select" {...register("loanType", { required: "Loan type is required" })}>
            <option value="">Select Loan Type</option>
            <option value="Housing">Housing Loan</option>
            <option value="Car">Car Loan</option>
            <option value="Business">Business Loan</option>
            <option value="Personal">Personal Loan</option>
          </select>
          {errors.loanType && <small className="text-danger">{errors.loanType.message}</small>}
        </div>

         <div className="mb-3">
          <label className="form-label">
            <FaCalendar className="me-2 text-primary" /> Age
          </label>
          <input
            type="number"
            className="form-control"
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 60, message: "Age must not exceed 60" },
            })}
          />
          {errors.age && <small className="text-danger">{errors.age.message}</small>}
        </div>

       
        <div className="mb-3">
          <label className="form-label">
            <FaIdCard className="me-2 text-primary" /> PAN Card Number
          </label>
          <input
            type="text"
            className="form-control"
            {...register("panCard", {
              required: "PAN card is required",
              pattern: {
                value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                message: "Invalid PAN card format",
              },
            })}
          />
          {errors.panCard && <small className="text-danger">{errors.panCard.message}</small>}
        </div>

        <button type="submit" className="btn btn-success w-100" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default AddEnquiry;
