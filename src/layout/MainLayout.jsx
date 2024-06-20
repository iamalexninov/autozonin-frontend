import { Route, Routes } from "react-router-dom";
import { endpoints } from "../utils/endpoints";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Catalog } from "../pages/Catalog";
import { Blog } from "../pages/Blog";
import { Auth } from "../pages/Auth/Auth";
import { Contact } from "../pages/Contact";
import { VehiclesDetails } from "../components/vehicles/vehicle-details/VehiclesDetails";

export const MainLayout = () => {
  return (
    <Routes>
      <Route path={endpoints.home} element={<Home />} />
      <Route path={endpoints.about} element={<About />} />
      <Route path={endpoints.catalog} element={<Catalog />} />
      <Route path={endpoints.blog} element={<Blog />} />
      <Route path={endpoints.login} element={<Auth />} />
      <Route path={endpoints.register} element={<Auth />} />
      <Route path={endpoints.contact} element={<Contact />} />
      <Route path='/catalog/:id' element={<VehiclesDetails />} />
    </Routes>
  );
};
