import { GenericHero } from "../components/hero/generic-hero/GenericHero";
import { VehiclesCatalogue } from "../components/catalogues/vehicles/VehiclesCatalogue";

export const Vehicles = () => {
  return (
    <>
      <GenericHero header="Catalogue" title="Vehicles Catalogue"/>
      <VehiclesCatalogue />
    </>
  );
};
