import { Link } from "react-router-dom";

import { GlobalIcon } from "../global/GlobalIcon";

export const VehicleCard = ({ cardType, vehicle }) => {
  const { _id, banners, details, price } = vehicle;

  return (
    <div className="w-full max-w-96">
      <CardBanner url={banners.url} title={details.title} />
      <CardContent
        id={_id}
        title={details.title}
        tagline={details.tagline}
        condition={details.condition}
        mileage={details.mileage}
        fuelType={details.fuelType}
        transmission={details.transmission}
        currency={price.currency}
        amount={price.amount}
      />
    </div>
  );
};

const CardBanner = ({ url, title }) => {
  return <img src={url} alt={title} className="w-full h-64 rounded-t-3xl" />;
};

const CardContent = ({
  id,
  title,
  tagline,
  condition,
  mileage,
  fuelType,
  transmission,
  currency,
  amount,
}) => {
  return (
    <div className="rounded-b-3xl border border-b-gray-400 p-6">
      <CardInfo title={title} tagline={tagline} />
      <CardSpecs
        condition={condition}
        mileage={mileage}
        fuelType={fuelType}
        transmission={transmission}
      />
      <CardDetails id={id} amount={amount} currency={currency} />
    </div>
  );
};

const CardInfo = ({ title, tagline }) => {
  return (
    <div>
      <h3 className="uppercase mb-1 font-700 text-lg">{title}</h3>
      <p className="text-gray-400">{tagline}</p>
    </div>
  );
};

const CardSpecs = ({ condition, mileage, fuelType, transmission }) => {
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
      entry: fuelType,
    },
    {
      icon: "transmission",
      entry: transmission,
    },
  ];

  return (
    <div className="flex justify-center gap-10 my-8 border-y-2 py-6">
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

const CardDetails = ({ id, currency, amount }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-700 text-xl">
        {currency}
        {amount}
      </p>
      <Link to={`/catalog/${id}`} className="flex items-center gap-1">
        <p className="hover:text-cape-green">More</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
