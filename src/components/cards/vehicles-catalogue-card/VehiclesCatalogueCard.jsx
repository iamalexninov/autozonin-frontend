import styles from "./style.module.css";

import { VehiclesCatalogueCardInfo } from "./vehicles-catalogue-card-info/VehiclesCatalogueCardInfo";
import { VehiclesCatalogueCardTools } from "./vehicles-catalogue-card-tools/VehiclesCatalogueCardTools";
import { VehiclesCatalogueCardBanner } from "./vehicles-catalogue-card-banner/VehiclesCatalogueCardBanner";
import { VehiclesCatalogueCardSpecs } from "./vehicles-catalogue-card-specs/VehiclesCatalogueCardSpecs";
import { VehiclesCatalogueCardDetails } from "./vehicles-catalogue-card-details/VehiclesCatalogueCardDetails";

export const VehiclesCatalogueCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_info}>
        <VehiclesCatalogueCardInfo />
        <VehiclesCatalogueCardTools />
      </div>
      <VehiclesCatalogueCardBanner />
      <VehiclesCatalogueCardSpecs />
      <VehiclesCatalogueCardDetails />
    </div>
  );
};