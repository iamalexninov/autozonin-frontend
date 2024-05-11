import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { ServiceFeaturesList } from "./ServiceFeaturesList";

export const ServiceFeatures = () => {
  const mockdata = [
    {
      id: "01.",
      heading: "virtual showroom tours",
      description:
        "Explore our diverse inventory online with detailed photos and specifications, and even schedule virtual test drives for added convenience.",
    },
    {
      id: "02.",
      heading: "transparent pricing",
      description:
        "Enjoy clear and upfront pricing on all vehicles, ensuring a hassle-free shopping experience without any hidden fees.",
    },
    {
      id: "03.",
      heading: "personalized financing",
      description:
        "Our finance experts offer tailored solutions to fit your needs and budget, including competitive rates and flexible repayment plans.",
    },
    {
      id: "04.",
      heading: "expectional service",
      description:
        "Experience friendly and attentive customer service from our knowledgeable team, dedicated to making your car buying journey seamless and satisfying.",
    },
  ];

  return (
    <div className={styles.service_features}>
      <Wrapper>
        <ServiceFeaturesList features={mockdata} />
      </Wrapper>
    </div>
  );
};
