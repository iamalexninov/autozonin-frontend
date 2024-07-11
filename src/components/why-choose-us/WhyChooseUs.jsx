import { Wrapper } from "../global/Wrapper";
import { FeaturesList } from "./FeaturesList";

export const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <Wrapper>
        <h3 className="text-2xl mb-10">Why Choose Us?</h3>
        <FeaturesList />
      </Wrapper>
    </section>
  );
};
