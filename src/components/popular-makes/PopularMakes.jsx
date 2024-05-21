import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { PopularMakesCard } from "../cards/popular-makes-card/PopularMakesCard";

export const PopularMakes = () => {
  const makesmockdata = ["Audi", "Mercedes", "BMW", "Honda"];

  return (
    <section className={styles.makes}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Popular Makes"
          linkPath="/catalogue"
          linkText="View All"
        />
        <PopularMakesItems items={makesmockdata} />
        <div className={styles.makes_cards}>
          <PopularMakesCard />
          <PopularMakesCard />
        </div>
      </Wrapper>
    </section>
  );
};

const PopularMakesItems = ({ items }) => {
  return (
    <ul className={styles.makes_items}>
      {items.map((item) => (
        <PopularMakesItem key={item} item={item} />
      ))}
    </ul>
  );
};

const PopularMakesItem = ({ item }) => {
  return (
    <li className={styles.makes_entry}>
      <p>{item}</p>
    </li>
  );
};
