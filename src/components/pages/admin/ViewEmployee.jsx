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
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>id</th>
            <th>EmployeeFirstName</th>
            <th>EmployeeMiddleName</th>
            <th>EmployeeLastName</th>
            <th>EmployeeEmail</th>
            <th>employeeSalary</th>
            <th>employeeAge</th>
            <th>employeeusername</th>
            <th>employeeAge</th>
            <th>employeeImage</th>
            <th>employeePancard</th>
            <th>userType</th>
            <th>username</th>
            <th>password</th>


          </tr>
        </thead>
        <tbody>
          {
            employeeDetails.map((u, index) => <tr key={index}>
              <td>{u.employeeIdentifier}</td>
              <td>{u.employeeFirstName}</td>
              <td>{u.employeeMiddleName}</td>
              <td>{u.employeeLastName}</td>
              <td>{u.employeeEmail}</td>
              <td>{u.employeeSalary}</td>
              <td>{u.employeeAge}</td>
              <td>{u.userType}</td>
              <td>{u.username}</td>
              <td>{u.password}</td>
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