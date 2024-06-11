import styles from "./style.module.css";
import { members } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";

export const Team = () => {
  return (
    <section className={styles.team}>
      <Wrapper>
        <h3 className={styles.team_header}>Our Team</h3>
        <TeamRecords records={members} />
      </Wrapper>
    </section>
  );
};

const TeamRecords = ({ records }) => {
  return (
    <ul className={styles.team_records}>
      {records.map((record) => (
        <TeamRecord key={record.name} record={record} />
      ))}
    </ul>
  );
};

const TeamRecord = ({ record }) => {
  return (
    <li className={styles.team_record}>
      <img src={record.img} alt={record.name} />
      <div className={styles.team_record_info}>
        <p>{record.name}</p>
        <p>{record.role}</p>
      </div>
    </li>
  );
};
