import { useLocation } from "react-router-dom";
import { isDashboardPath } from "../utils/helpers";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { DashboardAside } from "../components/dashboard/DashboardAside";
import { MainLayout } from "./MainLayout";
import { DashboardLayout } from "./DashboardLayout";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {!isDashboardPath(pathname) && <Navbar />}
      <main className={isDashboardPath(pathname) && "lg:flex lg:gap-10"}>
        {isDashboardPath(pathname) && <DashboardAside />}
        <MainLayout />
        <DashboardLayout />
      </main>
      {!isDashboardPath(pathname) && <Footer />}
    </>
  );
};
