import { FeaturedVehicleCardPoster } from "./featured-vehicle-card-poster/FeaturedVehicleCardPoster";
import { FeaturedVehicleCardText } from "./featured-vehicle-card-text/FeaturedVehicleCardText";
import { FeaturedVehicleCardSpecifications } from "./featured-vehicle-card-specifications/FeaturedVehicleCardSpecifications";

export const FeaturedVehicleCard = ({ data }) => {
  return (
    <>
      {/* TODO: Alt should be the name of the vehicle - make + model */}
      <FeaturedVehicleCardPoster
        logo={data.logo}
        detailsPath={data.detailsPath}
        make={data.make}
        model={data.model}
        price={data.price}
      />
      <FeaturedVehicleCardText
        make={data.make}
        model={data.model}
        description={data.description}
      />
      <FeaturedVehicleCardSpecifications
        year={data.year}
        mileage={data.mileage}
        condition={data.condition}
      />
    </>
  );
};
