import { GlobalIcon } from "../global/GlobalIcon";

export const ServicesFeatures = () => {
  const features = [
    "Virtual Vehicle Tours",
    "Live Chat Assitance",
    "Online Financing Application",
  ];

  return (
    <ul className="flex flex-col gap-3 mb-12">
      {features.map((feature) => (
        <ServicesFeature feature={feature} key={feature} />
      ))}
    </ul>
  );
};

const ServicesFeature = ({ feature }) => {
  return (
    <li className="flex items-center gap-2">
      <div className="bg-cape-green text-white p-2 border rounded">
        <GlobalIcon type="check" />
      </div>
      <p>{feature}</p>
    </li>
  );
};
