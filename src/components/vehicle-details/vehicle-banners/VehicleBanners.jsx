import styles from "./style.module.css";
import testImg from "../../../assets/images/jpg/test_details.jpg";

export const VehicleBanners = () => {
  return (
    <div className={styles.banner}>
      <img src={testImg} alt="" className={styles.banner_img}/>
    </div>
  );
};
