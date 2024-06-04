import { Route, Routes } from "react-router-dom";
import { endpoints } from "../utils/endpoints";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Vehicles } from "../pages/Vehicles";
import { Blog } from "../pages/Blog";
import { Auth } from "../pages/Auth/Auth";
import { Contact } from "../pages/Contact";

export const MainLayout = () => {
  return (
    <Routes>
      <Route path={endpoints.home} element={<Home />} />
      <Route path={endpoints.about} element={<About />} />
      <Route path={endpoints.vehicles} element={<Vehicles />} />
      <Route path={endpoints.blog} element={<Blog />} />
      <Route path={endpoints.login} element={<Auth />} />
      <Route path={endpoints.register} element={<Auth />} />
      <Route path={endpoints.contact} element={<Contact />} />
    </Routes>
  );
};
