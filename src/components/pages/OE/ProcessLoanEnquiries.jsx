import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../../global style/style.css";

const LoanEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // Added loading state

  useEffect(() => {
    axios
      .get(
        "http://localhost:8081/visitor/enquiry/expose-enquiries-by-status/PRIMARY_VERIFIED"
      )
      .then((response) => {
        setEnquiries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching registered enquiries:", error);
      });
  }, []);

  // Function to generate CIBIL score
  const handleGenerateCibil = async (enquiryId) => {
    setLoadingId(enquiryId); // Set loading state

    try {
      console.log("Sending request...");
      const response = await axios.patch(
        `http://localhost:8081/visitor/enquiry/generate_cibil/${enquiryId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const updatedEnquiry = response.data;

      // Update state with new CIBIL data
      setEnquiries((prevEnquiries) =>
        prevEnquiries.map((enquiry) =>
          enquiry.enquiryId === enquiryId ? updatedEnquiry : enquiry
        )
      );
    } catch (error) {
      console.error("Error generating CIBIL Score:", error);
      alert("Failed to generate CIBIL Score. Please try again.");
    } finally {
      setLoadingId(null); // Reset loading state
    }
  };

  return (
    <div className="container mt-4">
      {/* Page Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="custom-heading">
          <i className="bi bi-list-check"></i> Verified Loan Enquiries
        </h2>
      </div>

      {/* Enquiries Table */}
      {enquiries.length === 0 ? (
        <div className="alert alert-warning text-center">
          <i className="bi bi-exclamation-circle"></i> No registered enquiries found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover shadow text-center">
            <thead className="table-dark">
              <tr>
                <th className="align-middle">
                  <i className="bi bi-hash"></i> Enquiry ID
                </th>
                <th className="align-middle">
                  <i className="bi bi-person"></i> Customer Name
                </th>
                <th className="align-middle">
                  <i className="bi bi-telephone"></i> Contact Number
                </th>
                <th className="align-middle">
                  <i className="bi bi-envelope"></i> Email
                </th>
                <th className="align-middle">
                  <i className="bi bi-cash"></i> Loan Type
                </th>
                <th className="align-middle">
                  <i className="bi bi-calendar"></i> Age
                </th>
                <th className="align-middle">
                  <i className="bi bi-card-list"></i> Pan Card
                </th>
                <th className="align-middle">
                  <i className="bi bi-calendar-check"></i> Registered On
                </th>
                <th className="align-middle">
                  <i className="bi bi-action"></i> Action
                </th>
                <th className="align-middle">
                  <i className="bi bi-bar-chart"></i> CIBIL Score
                </th>
                <th className="align-middle">
                  <i className="bi bi-chat-left-text"></i> Remark
                </th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.enquiryId}>
                  <td className="align-middle">{enquiry.enquiryId}</td>
                  <td className="align-middle">{enquiry.customerFullName}</td>
                  <td className="align-middle">{enquiry.contactNumber}</td>
                  <td className="align-middle">{enquiry.email}</td>
                  <td className="align-middle">{enquiry.loanType}</td>
                  <td className="align-middle">{enquiry.age}</td>
                  <td className="align-middle">{enquiry.panCard}</td>
                  <td className="align-middle">
                    {new Date(enquiry.registeredOn).toLocaleDateString()}
                  </td>

                  {/* Conditionally Render 'Generate CIBIL' Button */}
                  <td className="align-middle">
                    {enquiry.cibilDetails?.cibilScore ? (
                      <span className="text-success">✔ CIBIL Generated</span>
                    ) : (
                      <button
                        className="btn btn-secondary btn-sm generate-cibil-btn"
                        onClick={() => handleGenerateCibil(enquiry.enquiryId)}
                        disabled={loadingId === enquiry.enquiryId} //  Disable when loading
                      >
                        {loadingId === enquiry.enquiryId
                          ? "Generating..."
                          : "Generate CIBIL"}
                      </button>
                    )}
                  </td>

                  <td className="align-middle">
                    {enquiry.cibilDetails?.cibilScore ?? "Not Generated"}
                  </td>
                  <td className="align-middle">
                    {enquiry.cibilDetails?.remark ?? "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoanEnquiries;
