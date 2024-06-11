import styles from "./style.module.css";
import { offices } from "./Text";

import { GlobalIcon } from "../../global/GlobalIcon";

export const Offices = () => {
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
