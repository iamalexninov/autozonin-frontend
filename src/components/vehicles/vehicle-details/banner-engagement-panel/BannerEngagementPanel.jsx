import styles from "./style.module.css";

export const BannerEngagementPanel = ({ url, title }) => {
  return (
    <div className={styles.panel}>
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
