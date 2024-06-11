import { Wrapper } from "../global/wrapper/Wrapper";
import { AboutPreviewText } from "./about-preview-text/AboutPreviewText";
import { AboutPreviewGallery } from "./about-preview-gallery/AboutPreviewGallery";

export const AboutPreview = () => {
  return (
    <section>
      <Wrapper>
        <AboutPreviewText />
        <AboutPreviewGallery />
      </Wrapper>
    </section>
  );
};
