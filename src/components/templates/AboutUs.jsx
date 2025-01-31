import React from "react";
import "../../styles/AboutUs.css"; 

function AboutUs() {
  return (
    <div className="page-container">
      <div className="background-container"></div> {/* Separate background layer */}
      <div className="page-content"> </div>
      <div className="aboutus-content">

        <h1 className="aboutus-heading">About Unified Loan System</h1>
        <p>
          Welcome to <strong>Unified Loan System</strong>, your trusted partner
          in achieving your financial goals with ease and efficiency. We are
          committed to providing a seamless loan experience tailored to meet the
          diverse needs of individuals across the country.
        </p>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>
            <strong>Instant Approvals:</strong> Minimal documentation and quick
            approval process.
          </li>
          <li>
            <strong>High Loan Amount:</strong> Avail personal loans of up to ₹50
            lakh without collateral.
          </li>
          <li>
            <strong>Flexible Repayments:</strong> Choose repayment tenures that
            fit your plans.
          </li>
          <li>
            <strong>Transparent Process:</strong> No hidden costs, ensuring
            clarity and trust.
          </li>
          <li>
            <strong>Secure Platform:</strong> State-of-the-art security for
            your data.
          </li>
        </ul>
        <h3>Our Mission</h3>
        <p>
          Simplifying personal loans with quick, secure, and customized
          solutions to empower our customers.
        </p>
        <h3>Our Vision</h3>
        <p>
          To become the most trusted and preferred loan platform, ensuring
          access to financial resources for everyone.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
