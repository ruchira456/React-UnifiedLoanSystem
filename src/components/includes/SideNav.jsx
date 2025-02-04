import React from 'react'
import { Link } from 'react-router-dom'

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
       OE:[]

    }

function SideNav({userType}) {
  return (
    <div className='bg-dark text-white mynav  ' style={{height:'620px'}}>
      
       {
         userType && options[userType].map((option,index)=> (
            <Link key={index} className='btn btn-light'
                  to={option.path}>{option.label}</Link>
        ))
       }
    
    </div>
  )
}

export default SideNav