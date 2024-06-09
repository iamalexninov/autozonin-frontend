import styles from "./style.module.css";
import { features } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";

export const WhyChooseUs = () => {
  return (
    <section className={styles.features}>
      <Wrapper>
        <h3 className={styles.features_title}>Why Choose Us?</h3>
        <FeaturesRecords records={features} />
      </Wrapper>
    </section>
  );
};

const FeaturesRecords = ({ records }) => {
  return (
    <ul className={styles.features_records}>
      {records.map((record) => (
        <FeaturesRecord key={record.type} record={record} />
      ))}
    </ul>
  );
};

const FeaturesRecord = ({ record }) => {
  return (
    <li className={styles.features_record}>
      <p className={styles.features_type}>{record.type}</p>
      <p className={styles.features_desc}>{record.desc}</p>
    </li>
  );
};
