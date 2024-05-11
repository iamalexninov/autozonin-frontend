import styles from "./style.module.css";

import coupe from "../../../assets/images/svg/coupe.svg";
import hatchback from "../../../assets/images/svg/hatchback.svg";
import sedan from "../../../assets/images/svg/sedan.svg";
import stationWagon from "../../../assets/images/svg/station wagon.svg";
import suv from "../../../assets/images/svg/suv.svg";

import { Link } from "react-router-dom";

import { BrowseList } from "../browse-items/BrowseList";

export const BrowseByType = () => {
  const mockdata = [
    {
      logo: coupe,
      unit: "Coupe",
      // TODO: Replace from server
      quantity: 3,
    },
    {
      logo: hatchback,
      unit: "Hatchback",
      quantity: 5,
    },
    {
      logo: sedan,
      unit: "Sedan",
      quantity: 4,
    },
    {
      logo: stationWagon,
      unit: "Station Wagon",
      quantity: 2,
    },
    {
      logo: suv,
      unit: "SUV",
      quantity: 3,
    },
  ];

  return (
    <div className={styles.identifier}>
      <div className={styles.identifier_text}>
        <h3>browse by type</h3>
        <h3 className={styles.identifier_text_line}>/</h3>
        <h4 className={styles.identifier_text_all}>
          <Link to="/catalogue">show all</Link>
        </h4>
      </div>
      <BrowseList items={mockdata}/>
    </div>
  );
};
