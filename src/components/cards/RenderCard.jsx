import styles from "./style.module.css";

import { AutoMagazineCard } from "./auto-magazine-card/AutoMagazineCard";
import { FeaturedVehicleCard } from "./featured-vehicle-card/FeaturedVehicleCard";
import { VehiclesCatalogueCard } from "./vehicles-catalogue-card/VehiclesCatalogueCard";

export const RenderCard = ({ card, data }) => {
  const cards = {
    auto_magazine: AutoMagazineCard,
    featured_vehicle: FeaturedVehicleCard,
    vehicles_catalogue: VehiclesCatalogueCard,
  };

  const renderClassNameByCard = {
    auto_magazine: styles.card_version1,
    featured_vehicle: styles.card_version1,
  };

  const CardComponent = cards[card] || null;

  return (
    <div className={renderClassNameByCard[card]}>
      <CardComponent data={data} />
    </div>
  );
};
