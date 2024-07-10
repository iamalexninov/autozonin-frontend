import { Wrapper } from "../global/Wrapper";
import { ServicesBanner } from "./ServicesBanner";
import { ServicesContent } from "./ServicesContent";

export const Services = () => {
  return (
    <section className="bg-white py-24">
      <Wrapper>
        <div className="lg:flex lg:justify-between lg:gap-10 lg:items-center">
          <ServicesBanner />
          <ServicesContent />
        </div>
      </Wrapper>
    </section>
  );
};
