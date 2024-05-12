import styles from "./style.module.css";

import { AutoMarket } from "./auto-market/AutoMarket";

export const AutoHub = () => {
  const marketListing = ["seeker", "seller"];

  return (
    <section className={styles.hub}>
      {marketListing.map((comp) => (
        <AutoMarket key={comp} renderComp={comp} />
      ))}
    </section>
  );
};
