import styles from "./style.module.css";
import { stats } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";

export const Stats = () => {
  return (
    <section className={styles.stats}>
      <Wrapper>
        <StatsRecords records={stats} />
      </Wrapper>
    </section>
  );
};

const StatsRecords = ({ records }) => {
  return (
    <ul className={styles.stats_records}>
      {records.map((record) => (
        <StatsRecord key={record.type} record={record} />
      ))}
    </ul>
  );
};

const StatsRecord = ({ record }) => {
  return (
    <li className={styles.stats_record}>
      <p className={styles.stats_value}>{record.value}</p>
      <p className={styles.stats_type}>{record.type}</p>
    </li>
  );
};
