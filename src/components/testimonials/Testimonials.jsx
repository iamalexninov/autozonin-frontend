import styles from "./style.module.css";

import user1 from "../../assets/images/jpg/nadq.jpg";
import user2 from "../../assets/images/jpg/pavel.jpg";
import user3 from "../../assets/images/jpg/petq.jpg";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GlobalIcon } from "../global/GlobalIcon";

export const Testimonials = () => {
  const reviews = [
    {
      title: "Great Work",
      opinion:
        "“ZoninCars made buying my SUV easy and stress-free. The team was knowledgeable, pricing was transparent, and financing options were great. Highly recommend!”",
      img: user1,
      name: "Emily L.",
      role: "Software Tester",
    },
    {
      title: "Perfect Quality",
      opinion:
        "“Selling my car through ZoninCars was stress-free. Fair appraisal, efficient paperwork handling. Definitely coming back.”",
      img: user2,
      name: "James P.",
      role: "Dealer - Mechanic",
    },
    {
      title: "Great Team",
      opinion:
        "“ZoninCars exceeded my expectations. Patient staff, great options, and top-notch service. Happy with my new car and the experience. Highly recommend.”",
      img: user3,
      name: "Sarah I.",
      role: "Dealership Owner",
    },
  ];

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
