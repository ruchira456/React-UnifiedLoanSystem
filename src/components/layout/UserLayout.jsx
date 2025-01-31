import React, { useEffect, useState } from 'react'
import SideNav from '../includes/SideNav';
import ProfileNav from '../includes/ProfileNav';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from '../pages/admin/AddEmployee';
import ViewEmployee from '../pages/admin/ViewEmployee';
import ViewEnquiry from '../pages/enquiry/ViewEnquiry';
import ViewLoanForms from '../pages/loanApplication/ViewLoanForms';

function UserLayout() {
 const [user,setUser] =useState({});

  const getCurrentUser= ()=>{
    const user_json   =sessionStorage.getItem("user");
    const user=JSON.parse(user_json);
    setUser(user);       
  }

  useEffect(getCurrentUser,[]);
  return (
    <div>
         <ProfileNav user={user} />
         <div className='row'>
            <div className='col col-3'>
                <SideNav userType={user.userType}/>
            </div>
            <div className='col col-9'>
          

              <Routes>
                {/* ADMIN */}
                  <Route path="add_employee" element={<AddEmployee/>}></Route>
                  <Route path="view_employee" element={<ViewEmployee/>}></Route>

                  {/*CRM  */}
                  <Route path="view_enquiry/:status" element={<ViewEnquiry/>}></Route>
                  <Route path="pending_applications" element={<ViewLoanForms/>}></Route>
              </Routes>


            </div>
         </div>
    </div>
  )
}

export default UserLayout





//       <Header />
//       <Routes>
//         {/* Define routes specific to logged-in users */}
//         <Route path="dashboard" element={<div>User Dashboard</div>} />
//         <Route path="profile" element={<div>User Profile</div>} />
//         <Route path="settings" element={<div>User Settings</div>} />
//       </Routes>
//     </>
//   );
// }

// export default UserLayout;

