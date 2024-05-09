import { endpoints } from "../utils/endpoints";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Vehicles } from "../pages/Vehicles";
import { Team } from "../pages/Team";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

import { MobileMenuContextProvider } from "../contexts/MobileMenuContext";

export const Layout = () => {
  return (
    <MobileMenuContextProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path={endpoints.home} element={<Home />} />
            <Route path={endpoints.about} element={<About />} />
            <Route path={endpoints.vehicles} element={<Vehicles />} />
            <Route path={endpoints.team} element={<Team />} />
            <Route path={endpoints.blog} element={<Blog />} />
            <Route path={endpoints.contact} element={<Contact />} />
            <Route path={endpoints.login} element={<Login />} />
            <Route path={endpoints.register} element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </MobileMenuContextProvider>
  );
};
