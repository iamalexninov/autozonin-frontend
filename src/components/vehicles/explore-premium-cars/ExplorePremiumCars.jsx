import { SectionHeaderWithLinkBtn } from "../../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import styles from "./style.module.css";

export const ExplorePremiumCars = () => {
  // TODO: fetch latest added

  return (
    <section className={styles.car}>
      <SectionHeaderWithLinkBtn
        color="dark"
        header="Explore Premium Cars"
        linkPath="/catalog"
        linkText="View All"
      />
    </section>
  );
};

const CarEntries = ({ entries }) => {
  return <div className={styles.car_entries}></div>;
};
