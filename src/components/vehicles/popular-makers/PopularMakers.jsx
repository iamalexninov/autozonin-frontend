import styles from "./style.module.css";

import { SectionHeaderWithLinkBtn } from "../../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { RenderConditionsMakers } from "../render-conditions-makers/RenderConditionsMakers";
import { Wrapper } from "../../global/wrapper/Wrapper";
import { PopularMakesCard } from "../vehicle-cards/popular-makes-card/PopularMakesCard";

export const PopularMakers = () => {
  return (
    <section className={styles.popular}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color="light"
          header="Popular Makers"
          linkPath="/catalog"
          linkText="Explore"
        />
        <RenderConditionsMakers type="makers" />
        <PopularEntries />
      </Wrapper>
    </section>
  );
};

const PopularEntries = ({ entries }) => {
  return (
    <div className={styles.popular_makers}>
      <PopularMakesCard />
      <PopularMakesCard />
    </div>
  );
};
