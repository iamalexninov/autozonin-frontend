import { useGetVehicle } from "../../../hooks/useGetVehicle";

export const Banners = ({ id }) => {
  const { vehicle } = useGetVehicle(id);

  return (
    <div className="w-full my-8">
      {vehicle && vehicle.banners ? (
        <img
          src={vehicle.banners.url}
          alt=""
          className="rounded-md object-cover w-full"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
