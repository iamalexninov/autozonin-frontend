import styles from "./style.module.css";
import { brands } from "./Text";

import { Link } from "react-router-dom";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";

export const ExplorePremiumBrands = ({ type }) => {
  const customStyles = {
    position: "relative",
    top: "-80px",
    borderRadius: "50px 50px 0px 0px",
  };

  return (
    <section
      className={styles.premium_brands}
      style={type !== "generic" ? customStyles : null}
    >
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Explore Our Premium Brands"
          linkPath="/catalogue"
          linkText="Show All"
        />
        <BrandsRecords records={brands} />
      </Wrapper>
    </section>
  );
};

const BrandsRecords = ({ records }) => {
  return (
    <ul className={styles.premium_records}>
      {records.map((record) => (
        <BrandsRecord key={record.brand} record={record} />
      ))}
    </ul>
  );
};

const BrandsRecord = ({ record }) => {
  return (
    <li className={styles.premium_record}>
      <Link to="/catalogue" className={styles.premium_link}>
        <img
          className={styles.premium_banner}
          src={record.banner}
          alt={record.brand}
        />
        <p className={styles.premium_brand}>{record.brand}</p>
      </Link>
    </li>
  );
};
