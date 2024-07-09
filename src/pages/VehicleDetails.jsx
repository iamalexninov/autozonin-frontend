import { GenericHero } from "../components/hero/GenericHero";
import { VehicleDetailsSection } from "../components/vehicles/vehicle-details/VehicleDetailsSection";

export const VehicleDetails = () => {
  return (
    <>
      <GenericHero header="Details" title="Vehicle Details" />
      <VehicleDetailsSection />
    </>
  );
};
