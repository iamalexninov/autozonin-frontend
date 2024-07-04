import { Route, Routes } from "react-router-dom";
import { endpoints } from "../utils/endpoints";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Catalog } from "../pages/Catalog";
import { Auth } from "../pages/Auth";
import { Contact } from "../pages/Contact";
import { VehiclesDetails } from "../components/vehicles/vehicle-details/VehiclesDetails";

export const MainLayout = () => {
  return (
    <Routes>
      <Route path={endpoints.home} element={<Home />} />
      <Route path={endpoints.about} element={<About />} />
      <Route path={endpoints.catalog} element={<Catalog />} />
      <Route path={endpoints.auth} element={<Auth />} />
      <Route path={endpoints.contact} element={<Contact />} />
      <Route path='/catalog/:id' element={<VehiclesDetails />} />
    </Routes>
  );
};
