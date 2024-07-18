import { CardBanner } from "./CardBanner";
import { CardContent } from "./CardContent";

export const VehicleCard = ({ vehicle }) => {
  const { _id, banner, details, price } = vehicle;

  return (
    <div className="w-full max-w-96">
      <CardBanner banner={banner} />
      <CardContent
        id={_id}
        title={details.title}
        tagline={details.tagline}
        condition={details.condition}
        mileage={details.mileage}
        fuel={details.fuel}
        price={price}
      />
    </div>
  );
};
