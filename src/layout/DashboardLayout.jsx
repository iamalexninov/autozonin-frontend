import { Routes, Route } from "react-router-dom";

import { SubmitListing } from "../components/dashboard/submit-listing/SubmitListing";
import { ChangePassword } from "../components/dashboard/change-password/ChangePassword";
import { MyProfile } from "../components/dashboard/my-profile/MyProfile";

export const DashboardLayout = () => {
  return (
    <Routes>
      {/* <Route path="/dashboard" element={< />} /> */}
      <Route path="/dashboard/profile" element={<MyProfile />} />
      {/* <Route path="/dashboard/my-listings" element={< />} /> */}
      {/* <Route path="/dashboard/favorite-listings" element={< />} /> */}
      <Route path="/dashboard/submit-listing" element={<SubmitListing />} />
      <Route path="/dashboard/change-password" element={<ChangePassword />} />
    </Routes>
  );
};
