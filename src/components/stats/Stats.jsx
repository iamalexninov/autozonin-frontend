import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";

export const Stats = () => {
  const statsmockdata = [
    {
      type: "cars for sale",
      value: "30K+",
    },
    {
      type: "dealer reviews",
      value: "2K+",
    },
    {
      type: "visitors per day",
      value: "1K+",
    },
    {
      type: "verified dealers",
      value: "1.5K+",
    },
  ];

  return (
    <section className={styles.stats}>
      <Wrapper>
        <StatsRecords records={statsmockdata} />
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

const StatsRecord = ({record}) => {
  return (
    <li className={styles.stats_record}>
      <p className={styles.stats_record_value}>{record.value}</p>
      <p className={styles.stats_record_type}>{record.type}</p>
    </li>
  );
};
