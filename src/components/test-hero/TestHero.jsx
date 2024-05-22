import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { Link } from "react-router-dom";

export const TestHero = () => {
  return (
    <section className={styles.hero}>
      <Wrapper>
        <div className={styles.hero_content}>
          <ol className={styles.hero_pages}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About Us</li>
          </ol>
          <h2>About Us</h2>
        </div>
      </Wrapper>
    </section>
  );
};
