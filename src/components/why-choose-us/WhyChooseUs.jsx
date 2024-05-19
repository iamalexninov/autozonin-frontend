import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";

export const WhyChooseUs = () => {
  const featuresmockdata = [
    {
      type: "Comprehensive Inventory Management System",
      desc: "An integrated system for managing and displaying new and used car inventories online, allowing customers to easily browse and check real-time availability.",
    },
    {
      type: "Customer Relationship Management System",
      desc: "A CRM tailored for dealerships helps manage customer interactions, track leads, schedule test drives, and improve follow-ups, fostering long-term relationships and increasing sales.",
    },
    {
      type: "On-Site Financing and Insurance Services",
      desc: "Providing financing and insurance options on-site streamlines the purchasing process, enabling customers to complete all necessary paperwork conveniently at the dealership.",
    },
    {
      type: "Service and Maintenance Department",
      desc: "A fully equipped service department offering routine maintenance, repairs, and parts replacement enhances post-sale customer satisfaction and encourages repeat business.",
    },
  ];

  return (
    <section className={styles.features}>
      <Wrapper>
        <h3 className={styles.features_header}>Why Choose Us?</h3>
        <FeaturesRecords records={featuresmockdata} />
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
      <p className={styles.features_record_type}>{record.type}</p>
      <p className={styles.features_record_desc}>{record.desc}</p>
    </li>
  );
};
