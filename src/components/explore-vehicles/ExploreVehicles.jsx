import styles from "./style.module.css";
import { conditions } from "./Text";

import { Link } from "react-router-dom";
import { useState } from "react";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { AllVehiclesCard } from "../cards/all-vehicles-card/AllVehiclesCard";

export const ExploreVehicles = () => {
  return (
    <section className={styles.vehicles}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Explore All Vehicles"
          linkPath="/catalogue"
          linkText="View All"
        />
        <ConditionRecords records={conditions} />
        <AllVehiclesCard />
        <AllVehiclesCard />
        <AllVehiclesCard />
      </Wrapper>
    </section>
  );
};

const ConditionRecords = ({ records }) => {
  const [clickedCondition, setClickedCondition] = useState("All");

  return (
    <ul className={styles.vehicles_conditions}>
      {records.map((record) => (
        <ConditionRecord
          key={record.text}
          record={record}
          clickedCondition={clickedCondition}
          setClickedCondition={setClickedCondition}
        />
      ))}
    </ul>
  );
};

const ConditionRecord = ({ record, clickedCondition, setClickedCondition }) => {
  const handleClickedCondition = (e) => {
    e.preventDefault();
    setClickedCondition(record.text);
  };

  return (
    <li className={styles.vehicles_condition}>
      <Link
        to={record.path}
        className={
          clickedCondition === record.text
            ? [styles.vehicles_path, styles.active].join(" ")
            : styles.vehicles_path
        }
        onClick={handleClickedCondition}
      >
        {record.text}
      </Link>
    </li>
  );
};
