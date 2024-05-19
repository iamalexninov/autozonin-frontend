import styles from "./style.module.css";
import serviceVideoImg from "../../../assets/images/jpg/bg-video.jpg";

import { GlobalIcon } from "../../global/GlobalIcon";

export const ServicesInfo = () => {
  const features = [
    "Virtual Vehicle Tours",
    "Live Chat Assitance",
    "Online Financing Application",
  ];

  return (
    <div className={styles.content}>
      <img
        className={styles.content_banner}
        src={serviceVideoImg}
        alt="Service Video"
      />
      <div className={styles.content_info}>
        <div className={styles.content_info_wrapper}>
          <h3 className={styles.content_info_header}>
            Your One Stop Destination for Vehicles Sales and Rentals.
          </h3>
          <p className={styles.content_info_desc}>
            Explore our diverse selection of vehicles for sale and discover
            hassle-free car shopping. Whether you`re buying, selling, or
            browsing, find the perfect ride with us today.
          </p>
          <ServicesFeaturesRecords records={features} />
          <button className={styles.content_info_btn}>
            <p>Get Started</p>
            <GlobalIcon type="arrowRightInline" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesFeaturesRecords = ({ records }) => {
  return (
    <ul className={styles.records}>
      {records.map((record) => (
        <ServicesFeaturesRecord key={record} record={record} />
      ))}
    </ul>
  );
};

const ServicesFeaturesRecord = ({ record }) => {
  return (
    <li className={styles.record}>
      <div className={styles.record_icon}>
        <GlobalIcon type="check" />
      </div>
      <p>{record}</p>
    </li>
  );
};
