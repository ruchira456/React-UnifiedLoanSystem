import React from 'react'
import { Link } from 'react-router-dom'
             //  props={
            //             user:{}
             //         }
function ProfileNav({user}) {
  return (
    <div className='bg-primary p-2 d-flex justify-content-between'>
          <div className='d-flex'>
              <img src={`data:image/jpeg;base64,${user.employeeImage}`} 
                   width={'80px'} style={ {border:'2px solid white', borderRadius:'180px'}}/>
               <div className='mt-2 ms-3'>
                  <h1 className='fs-4 text-white'>Name:{`${user.employeeFirstName} ${user.employeeMiddleName} ${user.employeeLastName}`} </h1>
                  <h2 className='fs-6 text-warning'>User Type: {user.userType}</h2>
                </div>    
          </div>

          <div className='mt-3'>
              <Link className='btn btn-danger ' to={'/'}>Logout</Link>
          </div>
    </div>
  )
}

export default ProfileNav