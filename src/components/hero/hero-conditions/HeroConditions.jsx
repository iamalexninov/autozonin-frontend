import styles from "./style.module.css";

import { useState } from "react";

export const HeroConditions = () => {
  const [clicked, setClicked] = useState("All");
  const conditions = ["All", "New", "Used", "Damaged"];

  return (
    <div className={styles.conditions}>
      <ConditionsRecords
        records={conditions}
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
};

const ConditionsRecords = ({ records, clicked, setClicked }) => {
  return (
    <ul className={styles.conditions_records}>
      {records.map((record) => (
        <ConditionRecord
          key={record}
          record={record}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </ul>
  );
};

const ConditionRecord = ({ record, clicked, setClicked }) => {
  const handleClick = () => {
    setClicked(record);
  };

  return (
    <li
      className={clicked === record ? styles.active : styles.conditions_record}
      onClick={handleClick}
    >
      {record}
    </li>
  );
};
