import styles from "./style.module.css";
import { conditions, makes } from "./Text";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";

export const ConditionsOrMakes = ({ type }) => {
  return (
    <section className={styles.types}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color="dark"
          header={
            type === "makes"
              ? "Popular Makes"
              : type === "conditions"
              ? "Explore Vehicles"
              : null
          }
          linkPath="/catalogue"
          linkText="View All"
        />
        <Records
          records={
            type === "makes" ? makes : type === "conditions" ? conditions : null
          }
        />
        <CardList />
      </Wrapper>
    </section>
  );
};

const Records = ({ records }) => {
  const [clicked, setClicked] = useState(records[0].text);

  return (
    <ul className={styles.types_records}>
      {records.map((record) => (
        <Record
          key={record.text}
          record={record}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </ul>
  );
};

const Record = ({ record, clicked, setClicked }) => {
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
        onClick={handleClick}
      >
        {record.text}
      </Link>
    </li>
  );
};

const CardList = ({ type }) => {
  return (
    <>
      {type === "conditions" ? (
        <div className={styles.card_conditions}></div>
      ) : type === "makes" ? (
        <div className={styles.card_makes}></div>
      ) : null}
    </>
  );
};
