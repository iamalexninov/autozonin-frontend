import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const FeaturedVehicleCardPoster = ({
  logo,
  detailsPath,
  make,
  model,
  price,
}) => {
  return (
    <div className={styles.card_poster}>
      <img className={styles.card_img} src={logo} alt={make + " " + model} />
      <div className={styles.card_details}>
        <Link to={detailsPath}>
          <GlobalIcon type="eye" size={25} />
        </Link>
      </div>
      <p className={styles.card_price}>Price: {price}</p>
    </div>
  );
};
