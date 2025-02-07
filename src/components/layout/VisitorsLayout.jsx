import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import AboutUs from '../templates/AboutUs';
import OurService from '../templates/OurServices';
import Login from '../templates/Login';
import ViewEnquiry from '../pages/enquiry/ViewEnquiry';
import AddEnquiry from '../pages/enquiry/AddEnquiry';




function VisitorsLayout() {
  return (
    <div>
    <Header/>
            <div style={{height:'600px'}}>
               <Routes>
                     <Route path="/" element={<AboutUs />} />
                     <Route path="about" element={<AboutUs />} />
                     <Route path="services" element={<OurService />} />
                     <Route path="login" element={<Login />} />
                     <Route path="addenquiry" element={<AddEnquiry />} />
                     <Route path="viewenquiry" element={<ViewEnquiry />} />
                  
               </Routes>
            </div>

    </div>
  );
}

export default VisitorsLayout;