import { Routes, Route } from "react-router-dom";

import { InProcess } from "../pages/InProcess";
import { SubmitListing } from "../components/dashboard/submit-listing/SubmitListing";
import { Logout } from "../components/dashboard/Logout";

export const DashboardLayout = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<InProcess />} />
      <Route path="/dashboard/profile" element={<InProcess />} />
      <Route path="/dashboard/my-listings" element={<InProcess />} />
      <Route path="/dashboard/favorite-listings" element={<InProcess />} />
      <Route path="/dashboard/submit-listing" element={<SubmitListing />} />
      <Route path="/dashboard/change-password" element={<InProcess />} />
      <Route path="/dashboard/logout" element={<Logout />} />
    </Routes>
  );
};
