import { Wrapper } from "../global/wrapper/Wrapper";
import styles from "./style.module.css";

export const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <Wrapper>
        <div className={styles.subscribe_content}>
          <div className={styles.subscribe_text}>
            <h3>Join Zonin Dealership</h3>
            <p>Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className={styles.subscribe_field}>
            <input type="text" placeholder="Your email address..." />
            <button>Join</button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
