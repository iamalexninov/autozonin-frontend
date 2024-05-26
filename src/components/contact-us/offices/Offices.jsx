import styles from "./style.module.css";
import { GlobalIcon } from "../../global/GlobalIcon";

export const Offices = () => {
  const offices = [
    {
      town: "Sofia",
      address: "45 Vitosha Boulevard, Sofia 1000, Bulgaria",
      map: "",
      email: "zonincars@gmail.com",
      phone: "+359 88 765 4321",
    },
    {
      town: "Sofia",
      address: "7 Moskovska Street, Sofia 1000, Bulgarias",
      map: "",
      email: "zonincars@gmail.com",
      phone: "+359 2 987 6543",
    },
    {
      town: "Plovdiv",
      address: "12 Ivan Vazov Street, Plovdiv 4000, Bulgaria",
      map: "",
      email: "zonincars@gmail.com",
      phone: "+359 32 123 456",
    },
  ];

  return (
    <div className={styles.offices}>
      <h2 className={styles.offices_title}>Our Offices</h2>
      <OfficeRecords records={offices} />
    </div>
  );
};

const OfficeRecords = ({ records }) => {
  return (
    <ul className={styles.office_records}>
      {records.map((record) => (
        <OfficeRecord key={record.town} record={record} />
      ))}
    </ul>
  );
};

const OfficeRecord = ({ record }) => {
  return (
    <li className={styles.office_record}>
      <p className={styles.office_record_town}>{record.town}</p>
      <p className={styles.office_record_address}>{record.address}</p>
      <div className={styles.office_record_map}>
        <p>See on Map</p>
        <GlobalIcon type="arrowRightInline" />
      </div>
      <div className={styles.office_record_hub}>
        <div className={styles.office_record_hub_item}>
          <GlobalIcon type="email" />
          <p>{record.email}</p>
        </div>
        <div className={styles.office_record_hub_item}>
          <GlobalIcon type="phone" />
          <p>{record.phone}</p>
        </div>
      </div>
    </li>
  );
};
