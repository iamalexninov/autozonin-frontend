import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";

export const AboutPreview = () => {
  return (
    <section className={styles.about}>
      <Wrapper>
        <div className={styles.about_content}>
          <h3>
            We Value Our Clients And Want Them To Have An Excellent Experience.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque officiis, natus eius nemo non optio, mollitia exercitationem
            corporis eaque quis quas in eos magnam modi ad nisi, ratione vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque officiis, natus eius nemo non optio, mollitia exercitationem
            corporis eaque quis quas in eos magnam modi ad nisi, ratione vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque officiis, natus eius nemo non optio, mollitia exercitationem
            corporis eaque quis quas in eos magnam modi ad nisi, ratione vitae.
          </p>
        </div>
        <div className={styles.about_gallery}>

        </div>
      </Wrapper>
    </section>
  );
};
