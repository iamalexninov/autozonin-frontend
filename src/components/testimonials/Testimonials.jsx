import styles from "./style.module.css";
import { reviews } from "./Text";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GlobalIcon } from "../global/GlobalIcon";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials_wrapper}>
        <Wrapper>
          <h2 className={styles.testimonials_header}>What our customers say</h2>
          <TestimonialsRecords records={reviews} />
        </Wrapper>
      </div>
    </section>
  );
};

const TestimonialsRecords = ({ records }) => {
  return (
    <ul className={styles.records}>
      {records.map((record) => (
        <TestimonialsRecord key={record.title} record={record} />
      ))}
    </ul>
  );
};

const TestimonialsRecord = ({ record }) => {
  return (
    <li className={styles.record}>
      <div className={styles.record_title}>
        <h5>{record.title}</h5>
        <GlobalIcon type="quote" />
      </div>
      <p className={styles.record_opinion}>{record.opinion}</p>
      <div className={styles.record_user}>
        <img src={record.img} alt={record.name} />
        <div className={styles.record_user_info}>
          <p>{record.name}</p>
          <p>{record.role}</p>
        </div>
      </div>
    </li>
  );
};
