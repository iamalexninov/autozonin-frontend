import styles from "./style.module.css";

import { AutoMagazineCard } from "./auto-magazine-card/AutoMagazineCard";
import { FeaturedVehicleCard } from "./featured-vehicle-card/FeaturedVehicleCard";

export const RenderCard = ({ card, data }) => {
  const cards = {
    auto_magazine: AutoMagazineCard,
    featured_vehicle: FeaturedVehicleCard,
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
