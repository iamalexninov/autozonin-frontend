import styles from "./style.module.css";

import { SectionHeaderWithLinkBtn } from "../../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { Wrapper } from "../../global/wrapper/Wrapper";
import { RenderConditionsMakers } from "../render-conditions-makers/RenderConditionsMakers";
import { PopularMakesCard } from "../vehicle-cards/popular-makes-card/PopularMakesCard";

import { useGetVehicles } from "../../../hooks/useGetVehicles";

export const PopularMakers = () => {
  const { vehicles } = useGetVehicles();

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
        <PopularEntries entries={vehicles}/>
      </Wrapper>
    </section>
  );
};

const PopularEntries = ({ entries }) => {
  return (
    <div className={styles.popular_makers}>
      {entries &&
        entries
          .slice(0, 2)
          .map((vehicle) => (
            <PopularMakesCard key={vehicle._id} vehicle={vehicle} />
          ))}
    </div>
  );
};
