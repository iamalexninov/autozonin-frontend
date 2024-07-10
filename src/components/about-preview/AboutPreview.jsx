import { Wrapper } from "../global/Wrapper";
import { AboutPreviewContent } from "./AboutPreviewContent";
import { AboutPreviewGallery } from "./AboutPreviewGallery";

export const AboutPreview = () => {
  return (
    <section>
      <Wrapper>
        <AboutPreviewContent />
        <AboutPreviewGallery />
      </Wrapper>
    </section>
  );
};
