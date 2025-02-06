import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewEmployee() {
  const [employee_details, setEmployee_Details] = useState([])
  const getAllEmployee = () => {
    axios.get("http://localhost:9095/employee_details/all_employee")
      .then(res => {

        if (res.status === 200) {
          setEmployee_Details(res.data);
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
    axios.delete(`http://localhost:9095/employee_details/delete_employee/${employeeIdentifier}`)
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
            <th>Employee Full Name</th>
            <th>EmployeeEmail</th>
            <th>employeeSalary</th>
            <th>employeeAge</th>
            <th>userType</th>
            <th>username</th>
            <th>password</th>
            <th>employeeImage</th>
            <th>employeePancard</th>
            <th>ACTION</th>


          </tr>
        </thead>
        <tbody>
          {
            employee_details.map((u, index) => <tr key={index}>
              <td>{u.employeeIdentifier}</td>
              <td>{u.employeeFirstName + " " + u.employeeMiddleName + " " + u.employeeLastName}</td>
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
              <td>
                <button className='btn btn-danger' onClick={() => deleteUser(u.employeeIdentifier)}>Delete</button>
                <Link className='btn btn-primary' to={`/edit-employee/${u.employeeIdentifier}`}>Edit</Link>
              </td>

            </tr>)
          }
        </tbody>
      </table>
    </div>
  )


}

export default ViewEmployee