import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get("http://localhost:8081/enquiry/expose-enquiries");
        setEnquiries(response.data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">View Enquiries</h2>
      {enquiries.length === 0 ? (
        <p className="text-center text-muted">No enquiries found.</p>
      ) : (
        <table className="table table-striped table-bordered mt-4">
          <thead className="table-dark">
            <tr>
            
              <th>ID</th>
              <th>Full Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Loan Type</th>
              <th>Age</th>
              <th>PAN Card</th>
              <th>RegisterOn</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry,index) => (
              <tr key={index}>
                <td>{enquiry.enquiryId}</td>
                <td>{enquiry.customerFullName}</td>
                <td>{enquiry.contactNumber}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.loanType}</td>
                <td>{enquiry.age}</td>
                <td>{enquiry.panCard}</td>
                <td>{enquiry.registeredOn}</td>
                <td>{enquiry.enquiryStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewEnquiry;
