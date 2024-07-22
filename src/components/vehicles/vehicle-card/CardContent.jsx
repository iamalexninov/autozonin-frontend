import { CardDetails } from "./CardDetails";
import { CardSpecs } from "./CardSpecs";

export const CardContent = ({
  id,
  make,
  model,
  title,
  tagline,
  condition,
  mileage,
  fuel,
  price,
}) => {
  return (
    <div className="rounded-b-3xl border border-b-gray-400 p-6 bg-white">
      <p className="text-sm uppercase mb-2 font-600 text-gray-500">{`${make} ${model}`}</p>
      <h3 className="uppercase mb-1 font-700 text-lg">{title}</h3>
      <p className="text-gray-400">{tagline}</p>
      <CardSpecs condition={condition} mileage={mileage} fuel={fuel} />
      <CardDetails id={id} price={price} />
    </div>
  );
};
