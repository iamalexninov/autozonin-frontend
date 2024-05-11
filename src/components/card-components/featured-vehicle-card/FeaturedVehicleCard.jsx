import styles from "./style.module.css";

import { FeaturedVehicleCardPoster } from "./featured-vehicle-card-poster/FeaturedVehicleCardPoster";
import { FeaturedVehicleCardText } from "./featured-vehicle-card-text/FeaturedVehicleCardText";
import { FeaturedVehicleCardSpecifications } from "./featured-vehicle-card-specifications/FeaturedVehicleCardSpecifications";

export const FeaturedVehicleCard = ({
  logo,
  detailsPath,
  price,
  make,
  model,
  description,
  year,
  mileage,
  condition,
  horsepower,
}) => {
  return (
    <div className={styles.card}>
      {/* TODO: Alt should be the name of the vehicle - make + model */}
      <FeaturedVehicleCardPoster
        logo={logo}
        detailsPath={detailsPath}
        make={make}
        model={model}
        price={price}
      />
      <FeaturedVehicleCardText
        make={make}
        model={model}
        description={description}
      />
      <FeaturedVehicleCardSpecifications
        year={year}
        mileage={mileage}
        condition={condition}
        horsepower={horsepower}
      />
    </div>
  );
};
