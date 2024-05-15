import { Hero } from "../components/hero/Hero";
import { VehiclesCatalogue } from "../components/vehicles-catalogue/VehiclesCatalogue";
import { AutoHub } from "../components/auto-hub/AutoHub";

export const Vehicles = () => {
  return (
    <>
      <Hero type="generic" page="Vehicles Catalogue" text="Browse on our catalogue" />
      <VehiclesCatalogue />
      <AutoHub />
    </>
  );
};
