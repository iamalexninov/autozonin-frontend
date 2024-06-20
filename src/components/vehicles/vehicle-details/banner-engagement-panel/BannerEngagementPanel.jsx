import { GlobalIcon } from "../../../global/GlobalIcon";
import styles from "./style.module.css";

export const BannerEngagementPanel = ({ url, title }) => {
  return (
    <div className={styles.panel}>
      <EngagementRecords />
      <Banner url={url} title={title} />
    </div>
  );
};

const Banner = ({ url, title }) => {
  return (
    <div className={styles.panel_banner}>
      <img src={url} alt={title} />
    </div>
  );
};

const EngagementRecords = () => {
  const mockdata = [
    {
      icon: "share",
      text: "Share",
    },
    {
      icon: "favorite",
      text: "Save",
    },
    {
      icon: "like",
      text: "Like",
    },
  ];

  return (
    <div className={styles.panel_records}>
      {mockdata.map((record) => (
        <div className={styles.panel_record} key={record.icon}>
          <p>{record.text}</p>
          <div className={styles.panel_icon}>
            <GlobalIcon type={record.icon} size={18} />
          </div>
        </div>
      ))}
    </div>
  );
};
