import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Catalog } from "../pages/Catalog";
import { Auth } from "../pages/Auth";
import { Contact } from "../pages/Contact";
import { VehicleDetails } from "../pages/VehicleDetails";

export const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/user" element={<Auth />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/catalog/:id" element={<VehicleDetails />} />
    </Routes>
  );
};
