import styles from "./style.module.css";
import { GlobalIcon } from "../../global/GlobalIcon";

export const ContactDetails = () => {
  const contacts = [
    {
      icon: "location",
      label: "Address",
      value: "2 Dondukov Blvd, Sofia, Bulgaria",
    },
    {
      icon: "email",
      label: "Email",
      value: "zonin@gmail.com",
    },
    {
      icon: "phone",
      label: "Phone Number",
      value: "+359 896 35 9864",
    },
  ];

  const socials = ["facebook", "twitter", "instagram", "linkedin"];

  return (
    <div className={styles.contact}>
      <h5 className={styles.contact_header}>Contact Details</h5>
      <p className={styles.contact_desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        provident sed tempore repellendus deserunt, quisquam maxime assumenda.
      </p>
      <ContactRecords records={contacts} />
      <SocialRecords records={socials} />
    </div>
  );
};

const ContactRecords = ({ records }) => {
  return (
    <ul className={styles.contact_records}>
      {records.map((record) => (
        <ContactRecord key={record.label} record={record} />
      ))}
    </ul>
  );
};

const ContactRecord = ({ record }) => {
  return (
    <li className={styles.contact_record}>
      <div className={styles.contact_record_icon}>
        <GlobalIcon type={record.icon} size={25} />
      </div>
      <div className={styles.contact_record_info}>
        <p>{record.label}</p>
        <p>{record.value}</p>
      </div>
    </li>
  );
};

const SocialRecords = ({ records }) => {
  return (
    <ul className={styles.contact_social_records}>
      {records.map((record) => (
        <SocialRecord key={record} record={record} />
      ))}
    </ul>
  );
};

const SocialRecord = ({ record }) => {
  return (
    <li className={styles.contact_social_record}>
      <GlobalIcon type={record} />
    </li>
  );
};
