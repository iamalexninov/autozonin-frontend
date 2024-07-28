import { Routes, Route } from "react-router-dom";

import { SubmitListing } from "../components/dashboard/submit-listing/SubmitListing";
import { Logout } from "../components/dashboard/Logout";

export const DashboardLayout = () => {
  return (
    <Routes>
      <Route path="/dashboard/submit-listing" element={<SubmitListing />} />
      <Route path="/dashboard/logout" element={<Logout />} />
    </Routes>
  );
};
