import styles from "./style.module.css";

import { SectionHeaderWithLinkBtn } from "../../global/section-header-link-btn/SectionHeaderWithLinkBtn";

export const PopularMakers = () => {
  return (
    <section className={styles.popular}>
      <SectionHeaderWithLinkBtn
        color="light"
        header="Popular Makers"
        linkPath="/catalog"
        linkText="Explore"
      />
    </section>
  );
};

const PopularEntries = () => {
  return <div className={styles.popular_makers}></div>;
};
