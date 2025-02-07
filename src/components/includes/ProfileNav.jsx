import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

function ProfileNav({ user }) {
  return (
    <div className="p-3 d-flex justify-content-between align-items-center"
      style={{
        background: "linear-gradient(135deg,rgb(94, 128, 166),rgb(47, 55, 64))", // Dual-tone shadow effect
        boxShadow: "0px 4px 10px rgba(212, 21, 21, 0.2)"
      }}
    >
      {/* Profile Section */}
      <div className="d-flex align-items-center">
        <img 
          src={`data:image/jpeg;base64,${user.employeeImage}`}
          width="70px" height="70px"
          style={{
            border: '3px solid white',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          alt="User Profile"
        />
        <div className="ms-3 text-white">
          <h1 className="fs-5 fw-bold mb-1">
            {user.employeeFirstName} {user.employeeMiddleName} {user.employeeLastName}
          </h1>
          <h2 className="fs-6 fw-light text-white-50">User Type: {user.userType}</h2>
        </div>
      </div>

      {/* Stylish Logout Button */}
      <div>
        <Link to={'/'} className="btn btn-danger d-flex align-items-center px-3 py-2 shadow">
          <i className="bi bi-box-arrow-right fs-8 me-2"></i> Log Out
        </Link>
      </div>
    </div>
  );
}

export default ProfileNav;
