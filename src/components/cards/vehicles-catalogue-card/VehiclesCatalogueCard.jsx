import styles from "./style.module.css";
import test from "../../../assets/images/jpg/test_bmw.jpg";
import { Link } from "react-router-dom";
import { GlobalIcon } from "../../global/GlobalIcon";

// Subcomponents
// [x] - make,model, by dealer
// [x] - quick view container, promote add and add to favourite
// [] - banner
// [] - specification - registration date, condition and mileage
// [] - price and view more

export const VehiclesCatalogueCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_info}>
        <CardInfo />
        <CardTools />
      </div>
      <CardBanner />
    </div>
  );
};

const CardBanner = ({ make, model }) => {
  return (
    <div>
      <img src={test} alt={make + " " + model} />
    </div>
  );
};

const CardInfo = () => {
  return (
    <div className={styles.info}>
      <h5 className={styles.info_make_model}>bmw m5 competition</h5>
      <p className={styles.info_dealer}>
        By <Link to="/profile">Alex Ninov</Link>
      </p>
    </div>
  );
};

const CardTools = () => {
  return (
    <div className={styles.tools}>
      <div className={styles.tools_item}>
        <GlobalIcon type="eye" size={22}/>
      </div>
      <div className={styles.tools_item}>
        <GlobalIcon type="flag" size={22}/>
      </div>
      <div className={styles.tools_item}>
        <GlobalIcon type="promote" size={22}/>
      </div>
    </div>
  );
};
