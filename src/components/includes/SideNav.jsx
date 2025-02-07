import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/SideNav.css"

//usertype->option
// ADMIN-> Add Employee,View Employee,App Statastics
// CRM->  Pending Enquiries , Send Feedback, Apply for Loan,View Pending Loan Application

const basePath="/unified-loan-system/"
const options={
       ADMIN:[
         {label:'Add Employee' ,path:basePath+"add_employee"},
         {label:'View Employee' , path:basePath+"view_employee"},
         {label:'App Statastics' , path:basePath+"app_info"}
       ],
       CRM:[
        {label:'Pending Enquiries' ,path:basePath+"view_enquiry/PENDING"},
        {label:'Send Feedback' ,path:basePath+"view_enquiry/VERIFIED"},
        {label:'Pending Applications' ,path:basePath+"pending_applications"},
        
       ],
       OE: [
        { label: 'Process Loan Enquiries', path: basePath + "process_loan_enquiries" },
        // { label: 'Document Management', path: basePath + "document_management" },
        // { label: 'Loan Disbursement', path: basePath + "loan_disbursement" },
        // { label: 'Overdue Loans', path: basePath + "overdue_loans" }
      ]

    }

function SideNav({ userType }) {
  return (
    <div className="sidenav-container sidebar" >
      {userType &&
        options[userType].map((option, index) => (
          <Link key={index} className="sidenav-button" to={option.path}>
             <i className="bi bi-clipboard-check me-2"></i> {/* Bootstrap icon */}
            {option.label}
          </Link>
        ))}

    </div>
  );
}

export default SideNav;

