import styles from "./style.module.css";
import { conditions, makes } from "./Text";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { PopularMakesCard } from "../cards/popular-makes-card/PopularMakesCard";
import { AllVehiclesCard } from "../cards/all-vehicles-card/AllVehiclesCard";

export const ConditionsOrMakes = ({ type }) => {
  return (
    <section
      className={styles.types}
      style={
        type === "makes"
          ? {
              backgroundColor: "var(--hunter-green)",
              paddingBlock: "6rem",
              color: "var(--white)",
            }
          : null
      }
    >
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color={
            type === "conditions" ? "dark" : type === "makes" ? "light" : null
          }
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
          type={type}
          records={
            type === "makes" ? makes : type === "conditions" ? conditions : null
          }
        />
        <CardList type={type} />
      </Wrapper>
    </section>
  );
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

const CardList = ({ type }) => {
  return (
    <>
      {type === "conditions" ? (
        <div className={styles.cards_conditions}>
          <AllVehiclesCard />
          <AllVehiclesCard />
          <AllVehiclesCard />
        </div>
      ) : type === "makes" ? (
        <div className={styles.cards_makes}>
          <PopularMakesCard />
          <PopularMakesCard />
        </div>
      ) : null}
    </>
  );
};
