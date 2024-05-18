import styles from "./style.module.css";

import audi from "../../assets/images/svg/audi.svg";
import mercedes from "../../assets/images/svg/mercedes.svg";
import bmw from "../../assets/images/svg/bmw.svg";
import honda from "../../assets/images/svg/honda.svg";
import ford from "../../assets/images/svg/ford.svg";
import lexus from "../../assets/images/svg/lexus.svg";

import { Link } from "react-router-dom";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";

export const ExplorePremiumBrands = () => {
  const brands = [
    {
      banner: audi,
      brand: "Audi",
    },
    {
      banner: mercedes,
      brand: "Mercedes",
    },
    {
      banner: bmw,
      brand: "BMW",
    },
    {
      banner: honda,
      brand: "Honda",
    },
    {
      banner: ford,
      brand: "Ford",
    },
    {
      banner: lexus,
      brand: "Lexus",
    },
  ];

  return (
    <section className={styles.premium_brands}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Explore Our Premium Brands"
          linkPath="/catalogue"
          linkText="Show All Brands"
        />
        <BrandsRecords records={brands} />
      </Wrapper>
    </section>
  );
};

const BrandsRecords = ({ records }) => {
  return (
    <ul className={styles.records}>
      {records.map((record) => (
        <BrandsRecord key={record} record={record} />
      ))}
    </ul>
  );
};

const BrandsRecord = ({ record }) => {
  return (
    <li className={styles.record}>
      <Link to="/catalogue">
        <img
          className={styles.record_banner}
          src={record.banner}
          alt={record.brand}
        />
        <p className={styles.record_brand}>{record.brand}</p>
      </Link>
    </li>
  );
};
