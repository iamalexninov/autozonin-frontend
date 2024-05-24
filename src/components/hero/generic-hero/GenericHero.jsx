import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { Wrapper } from "../../global/wrapper/Wrapper";

export const GenericHero = ({ header, title }) => {
  return (
    <section className={styles.hero}>
      <Wrapper>
        <div className={styles.hero_content}>
          <ol className={styles.hero_pages}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{header}</li>
          </ol>
          <h2>{title}</h2>
        </div>
      </Wrapper>
    </section>
  );
};
