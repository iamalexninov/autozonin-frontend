import styles from "./style.module.css";
import { conditions, makers } from "./Text";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RenderConditionsMakers = ({ type }) => {
  return (
    <TypeEntries
      type={type}
      entries={
        type === "conditions" ? conditions : type === "makers" ? makers : null
      }
    />
  );
};

const TypeEntries = ({ type, entries }) => {
  const [clicked, setClicked] = useState(entries[0].text);

  return (
    <ul className={styles.types_records}>
      {entries.map((entry) => (
        <TypeEntry
          key={entry.text}
          type={type}
          entry={entry}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </ul>
  );
};

const TypeEntry = ({ type, entry, clicked, setClicked }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(entry.text);
    // navigate(entry.path);
  };

  return (
    <li className={styles.types_record}>
      <Link
        to={entry.path}
        className={
          clicked === entry.text
            ? [styles.types_link, styles.active].join(" ")
            : styles.types_link
        }
        // style={type === "makers" ? { color: "var(--light-gray)" } : null}
        onClick={handleClick}
      >
        {entry.text}
      </Link>
    </li>
  );
};
