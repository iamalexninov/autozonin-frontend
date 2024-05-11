import { ServiceWelcome } from "./service-welcome/ServiceWelcome";
import { ServiceFeatures } from "./service-features/ServiceFeatures";

export const Service = () => {
  return (
    <section>
      <ServiceWelcome />
      <ServiceFeatures />
    </section>
  );
};
