import styles from "./style.module.css";
import { Wrapper } from "../global/wrapper/Wrapper";
import { VehiclesCatalogueCard } from "../cards/vehicles-catalogue-card/VehiclesCatalogueCard";
import { VehiclesCatalogueSearch } from "../vehicles-catalogue-search/VehiclesCatalogueSearch";
import { VehiclesCatalogueAvailable } from "../vehicles-catalogue-available/VehiclesCatalogueAvailable";

export const VehiclesCatalogue = () => {
  return (
    <section className={styles.catalogue}>
      <div className={styles.wrapper}>
        <div className={styles.catalogue_wrapper}>
          <VehiclesCatalogueSearch />
          <div className={styles.catalogue_wrapper_available}>
            <VehiclesCatalogueAvailable />
            <div className={styles.entries}>
              <VehiclesCatalogueCard />
              <VehiclesCatalogueCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
