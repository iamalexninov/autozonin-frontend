import { isDashboardPath } from "../utils/endpoints";
import { useLocation } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { DashboardAside } from "../components/dashboard/dashboard-aside/DashboardAside";

import { MainLayout } from "./MainLayout";
import { DashboardLayout } from "./DashboardLayout";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <main className={isDashboardPath(pathname) && "dashboard"}>
        {isDashboardPath(pathname) && <DashboardAside />}
        <MainLayout />
        <DashboardLayout />
      </main>
      {!isDashboardPath(pathname) && <Footer />}
    </>
  );
};
