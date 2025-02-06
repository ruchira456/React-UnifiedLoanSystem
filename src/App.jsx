import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import VisitorsLayout from "./components/layout/VisitorsLayout";
import UserLayout from "./components/layout/UserLayout";
import "./App.css"; // Global App-specific styles
import Homepage from "./components/templates/Homepage";
import OurServices from "./components/templates/OurServices";
import AddEnquiry from "./components/pages/enquiry/AddEnquiry";
import ViewEnquiry from "./components/pages/enquiry/ViewEnquiry";
import ViewEmployee from "./components/pages/admin/ViewEmployee";
import Edit from "./components/pages/admin/Edit";
import AdddEnEnquiry from "./components/pages/enquiry/AdddEnEnquiry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/visitor/*" element={<VisitorsLayout />} />
        <Route path="/unified-loan-system/*" element={<UserLayout />} />
        <Route path="/unified-loan-system/view_employee" element={<ViewEmployee />} />
        <Route path="/visitor/service" element={<OurServices />} />
        <Route path="/edit-employee/:id" element={<Edit />} />

        {/* Enquiry Routes */}
        <Route path="/visitor/enquiry" element={<AddEnquiry />} />
        <Route path="/visitor/enquiry/view" element={<ViewEnquiry />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;

