import { useGetVehicle } from "../../../hooks/useGetVehicle";

export const Info = ({ id }) => {
  const { vehicle } = useGetVehicle(id);

  return (
    <div>
      <h5 className="text-3xl font-600 mb-2">{vehicle.details && vehicle?.details.title}</h5>
      <p className="text-lg text-slate-600">{vehicle.details && vehicle?.details.tagline}</p>
    </div>
  );
};
