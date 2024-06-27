import { Wrapper } from "../global/wrapper/Wrapper";
import { AboutPreviewText } from "./AboutPreviewContent";
import { AboutPreviewGallery } from "./AboutPreviewGallery";

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
