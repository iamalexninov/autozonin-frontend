import { Routes, Route } from "react-router-dom";
import { endpoints } from "../utils/endpoints";

import { SubmitListing } from "../components/dashboard/submit-listing/SubmitListing";
import { ChangePassword } from "../components/dashboard/change-password/ChangePassword";
import { MyProfile } from "../components/dashboard/my-profile/MyProfile";

export const DashboardLayout = () => {
  return (
    <Routes>
      <Route path={endpoints.dashboardSubmit} element={<SubmitListing />} />
      <Route
        path={endpoints.dashboardChangePass}
        element={<ChangePassword />}
      />
      <Route path={endpoints.dashboardProfile} element={<MyProfile />} />
    </Routes>
  );
};
