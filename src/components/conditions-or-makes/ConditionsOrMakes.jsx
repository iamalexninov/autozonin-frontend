import styles from "./style.module.css";
import { conditions, makes } from "./Text";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const ConditionsOrMakes = ({ type }) => {
  const renderComponentByType = {};

  return renderComponentByType[type];
};

const Records = ({ type, records }) => {
  const [clicked, setClicked] = useState(records[0].text);

  return (
    <ul className={styles.types_records}>
      {records.map((record) => (
        <Record
          key={record.text}
          type={type}
          record={record}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </ul>
  );
};

const Record = ({ type, record, clicked, setClicked }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(record.text);
    navigate(record.path);
  };

  return (
    <li className={styles.types_record}>
      <Link
        to={record.path}
        className={
          clicked === record.text
            ? [styles.types_link, styles.active].join(" ")
            : styles.types_link
        }
        style={type === "makes" ? { color: "var(--light-gray)" } : null}
        onClick={handleClick}
      >
        {record.text}
      </Link>
    </li>
  );
};
