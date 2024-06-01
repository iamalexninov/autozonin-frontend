import { endpoints, isDashboardPath } from "../utils/endpoints";
import { Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Vehicles } from "../pages/Vehicles";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { DashboardAside } from "../components/dashboard/dashboard-aside/DashboardAside";
import { SubmitListing } from "../components/dashboard/submit-listing/SubmitListing";

import { Auth } from "../pages/Auth/Auth";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {isDashboardPath(pathname) && <DashboardAside />}
      <main>
        <Routes>
          <Route path={endpoints.home} element={<Home />} />
          <Route path={endpoints.about} element={<About />} />
          <Route path={endpoints.vehicles} element={<Vehicles />} />
          <Route path={endpoints.blog} element={<Blog />} />
          <Route path={endpoints.login} element={<Auth />} />
          <Route path={endpoints.register} element={<Auth />} />
          <Route path={endpoints.contact} element={<Contact />} />
          <Route path={endpoints.dashboardSubmit} element={<SubmitListing />} />
        </Routes>
      </main>
      {!isDashboardPath(pathname) && <Footer />}
    </>
  );
};
