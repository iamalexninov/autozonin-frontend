import styles from "./style.module.css";

import pavel from "../../assets/images/jpg/pavel.jpg";
import nadq from "../../assets/images/jpg/nadq.jpg";
import stefan from "../../assets/images/jpg/stefan.jpg";
import petq from "../../assets/images/jpg/petq.jpg";

import { Wrapper } from "../global/wrapper/Wrapper";

export const Team = () => {
  const teamMembers = [
    {
      img: pavel,
      name: "Pavel Velichkov",
      role: "Software Tester",
    },
    {
      img: nadq,
      name: "Nadq Stoeva",
      role: "Software redwqDeveloper",
    },
    {
      img: petq,
      name: "Petq Ninova",
      role: "UI/UX Designer",
    },
    {
      img: stefan,
      name: "Stefan Petrov",
      role: "Software Developer",
    },
  ];

  return (
    <section className={styles.team}>
      <Wrapper>
        <h3 className={styles.team_header}>Our Team</h3>
        <TeamRecords records={teamMembers} />
      </Wrapper>
    </section>
  );
};

const TeamRecords = ({ records }) => {};

const TeamRecord = ({ record }) => {};
