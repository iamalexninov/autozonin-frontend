import { GlobalIcon } from "../../global/GlobalIcon";

export const CardSpecs = ({ condition, mileage, fuel }) => {
  const specs = [
    {
      icon: "filter",
      entry: condition,
    },
    {
      icon: "speedometer",
      entry: mileage,
    },
    {
      icon: "petrol",
      entry: fuel,
    },
  ];

  return (
    <div className="flex flex-wrap justify-around gap-3 my-8 border-y-2 py-3">
      {specs &&
        specs.map((spec) => (
          <CardSpec key={spec.entry} icon={spec.icon} entry={spec.entry} />
        ))}
    </div>
  );
};

const CardSpec = ({ icon, entry }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-cape-green">
        <GlobalIcon type={icon} />
      </div>
      <p className="text-gray-400">{entry}</p>
    </div>
  );
};