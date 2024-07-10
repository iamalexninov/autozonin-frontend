import { ServicesListRecord } from "./ServicesListRecord";

export const ServicesList = () => {
  const featuresmockdata = [
    "Virtual Vehicle Tours",
    "Live Chat Assitance",
    "Online Financing Application",
  ];

  return (
    <ul className="flex flex-col gap-3 mb-12">
      {featuresmockdata.map((feature) => (
        <ServicesListRecord feature={feature} key={feature} />
      ))}
    </ul>
  );
};
