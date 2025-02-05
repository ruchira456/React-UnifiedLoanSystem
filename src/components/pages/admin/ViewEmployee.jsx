import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewEmployee() {
  
    const [employeeDetails, setEmployeeDetails] = useState([])
  const getAllEmployee = () => {
    axios.get("http://localhost:7088/employee_details/all_employee")
      .then(res => {

        if (res.status === 200) {
          setEmployeeDetails(res.data);
        }
        else {
          alert("Status Is not 200 ");
          alert("Something Wrong");
        }
      })
      .catch(error => alert(error.message));

  }

  useEffect(getAllEmployee, []);
  function deleteUser(employeeIdentifier) {
    axios.delete(`http://localhost:7088/employee_details/delete_employee/${employeeIdentifier}`)
      .then(res => {
        if (res.status === 200) {
          alert("employee deleted successfully");
          getAllEmployee();
        }
      })
  }

  return (
    <div >
      <h1 className='text-center'>Users Info</h1>
      <table className='table table-dark' style={{fontSize:"10px"}} width="75%">
        <thead>
          <tr>
            <th>id</th>
            <th>Employee Name</th>
     
            <th>EmployeeEmail</th>
            <th>employeeSalary</th>
            <th>employeeAge</th>
            <th>userType</th>
            <th>employeeImage</th>
            <th>employeePancard</th>
           
           


          </tr>
        </thead>
        <tbody>
          {
            employeeDetails.map((u, index) => <tr key={index}>
              <td>{u.employeeIdentifier}</td>
              <td>{` ${u.employeeFirstName} 
              ${u.employeeMiddleName} 
              ${u.employeeLastName}`}</td>
              <td>{u.employeeEmail}</td>
              <td>{u.employeeSalary}</td>
              <td>{u.employeeAge}</td>
              <td>{u.userType}</td>
              
              <td>
                <img alt="Image not found" src={`data:image/jpeg;base64,${u.employeeImage}`} width={'100px'} />
              </td>
              <td>
                <img alt="Image not found" src={`data:image/jpeg;base64,${u.employeePancard}`} width={'100px'} />
              </td>

             
         

            </tr>)
          }
        </tbody>
      </table>
    </div>
  )


  
}

export default ViewEmployee