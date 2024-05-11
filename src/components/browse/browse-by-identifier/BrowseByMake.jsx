import styles from "./style.module.css";

import audi from "../../../assets/images/svg/audi.svg";
import bmw from "../../../assets/images/svg/bmw.svg";
import ford from "../../../assets/images/svg/ford.svg";
import honda from "../../../assets/images/svg/honda.svg";
import mazda from "../../../assets/images/svg/mazda.svg";
import mercedes from "../../../assets/images/svg/mercedes.svg";
import toyota from "../../../assets/images/svg/toyota.svg";
import lexus from "../../../assets/images/svg/lexus.svg";

import { Link } from "react-router-dom";

import { BrowseList } from "../browse-items/BrowseList";

export const BrowseByMake = () => {
  const mockdata = [
    {
      logo: audi,
      unit: "Audi",
      // TODO: Replace from server
      quantity: 3,
    },
    {
      logo: bmw,
      unit: "Bmw",
      quantity: 6,
    },
    {
      logo: ford,
      unit: "Ford",
      quantity: 3,
    },
    {
      logo: honda,
      unit: "Honda",
      quantity: 8,
    },
    {
      logo: mazda,
      unit: "Mazda",
      quantity: 5,
    },
    {
      logo: mercedes,
      unit: "Mercedes",
      quantity: 4,
    },
    {
      logo: toyota,
      unit: "Toyota",
      quantity: 2,
    },
    {
      logo: lexus,
      unit: "Lexus",
      quantity: 4,
    },
  ];

  return (
    <div className={styles.identifier}>
      <div className={styles.identifier_text}>
        <h3>browse by make</h3>
        <h3 className={styles.identifier_text_line}>/</h3>
        <h4 className={styles.identifier_text_all}>
          <Link to="/catalogue">show all</Link>
        </h4>
      </div>
      <BrowseList items={mockdata}/>
    </div>
  );
};
