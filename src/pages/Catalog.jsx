import { GenericHero } from "../components/hero/GenericHero";
import { VehiclesCatalog } from "../components/vehicles/vehicle-catalog/VehiclesCatalog";

export const Catalog = () => {
  return (
    <>
      <GenericHero header="Catalogue" title="Vehicles Catalogue" />
      <VehiclesCatalog />
    </>
  );
};
