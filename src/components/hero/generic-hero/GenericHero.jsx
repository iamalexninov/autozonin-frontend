import styles from "./style.module.css";

import { Link } from "react-router-dom";

import { GlobalIcon } from "../../global/GlobalIcon";

export const GenericHero = ({ text, page }) => {
  return (
    <section className={styles.hero}>
      <div>
        <h4>{text}</h4>
        <div className={styles.hero_redirect}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <GlobalIcon type="arrowRight" />
          <p>{page}</p>
        </div>
      </div>
    </section>
  );
};
