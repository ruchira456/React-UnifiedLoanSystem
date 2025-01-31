import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const Enquiry = () => {
  return (
    <div className="container mt-4">
      <Header />
      <h2 className="text-center text-primary">Enquiry Management</h2>
      <div className="d-flex justify-content-center mt-4">
      <Link to="/visitor/enquiry/add" className="btn btn-success me-3">Add Enquiry</Link>
      <Link to="/visitor/enquiry/view" className="btn btn-primary">View Enquiries</Link>
      </div>
    </div>
  );
};

export default Enquiry;
