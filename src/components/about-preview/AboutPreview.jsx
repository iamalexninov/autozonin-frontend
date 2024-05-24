import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { AboutPreviewText } from "./about-preview-text/AboutPreviewText";
import { AboutPreviewGallery } from "./about-preview-gallery/AboutPreviewGallery";

export const AboutPreview = () => {
  return (
    <section className={styles.about}>
      <Wrapper>
        <AboutPreviewText />
        <AboutPreviewGallery />
      </Wrapper>
    </section>
  );
};
