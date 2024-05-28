import { VehiclesCatalogue } from "./vehicles/VehiclesCatalogue";

export const Catalogues = ({ type }) => {
  const renderCatalogue = {
    vehicles: <VehiclesCatalogue />,
    blog: "",
  };

  return renderCatalogue[type];
};
