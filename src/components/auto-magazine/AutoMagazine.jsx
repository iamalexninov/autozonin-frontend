import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { RenderCard } from "../cards/RenderCard";
import { SectionTextContent } from "../global/section-text-content/SectionTextContent";

export const AutoMagazine = () => {
  return (
    <section className={styles.magazine}>
      <Wrapper>
        <SectionTextContent
          title="auto magazine"
          paragraph="Hundreds of clients are thrilled by the service that we deliver and
            are happy to tell us. Read about vehicles and check our youtube
            reviews."
        />
        <ul className="cards_list">
          <RenderCard card="auto_magazine" />
          <RenderCard card="auto_magazine" />
          <RenderCard card="auto_magazine" />
        </ul>
      </Wrapper>
    </section>
  );
};

/*
Some categories:

Car Reviews: Evaluation
Maintenance Tips: Care
Vehicle Technology: Innovation
Classic Cars: Heritage
Driving Tips: Safety
Car Modifications and Customization: Personalization
Industry News and Updates: Insight
Environmental Impact: Sustainability
Car Buying Guides: Assistance
Travel and Adventure: Exploration
*/
