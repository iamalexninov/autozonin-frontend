import { GenericHero } from "../components/hero/generic-hero/GenericHero";
import { VehiclesListing } from "../components/listings/vehicles-listing/VehiclesListing";

export const Vehicles = () => {
  return (
    <>
      <GenericHero header="Catalogue" title="Vehicles Catalogue"/>
      <VehiclesListing />
    </>
  );
};
