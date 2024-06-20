import styles from "./style.module.css";

import { Link } from "react-router-dom";

import { GlobalIcon } from "../../global/GlobalIcon";

export const VehicleCard = ({ cardType, vehicle }) => {
  const { _id, banners, details, price } = vehicle;

  return (
    <div className={styles.card}>
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
  return (
    <div className={styles.card_banner}>
      <img src={url} alt={title} className={styles.card_img}/>
    </div>
  );
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
    <div className={styles.card_content}>
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
    <div className={styles.card_info}>
      <p className={styles.card_title}>{title}</p>
      <p className={styles.card_tagline}>{tagline}</p>
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
    <div className={styles.card_specs}>
      {specs &&
        specs.map((spec) => (
          <CardSpec key={spec.entry} icon={spec.icon} entry={spec.entry} />
        ))}
    </div>
  );
};

const CardSpec = ({ icon, entry }) => {
  return (
    <div className={styles.card_spec}>
      <GlobalIcon type={icon} size={18} />
      <p>{entry}</p>
    </div>
  );
};

const CardDetails = ({ id, currency, amount }) => {
  return (
    <div className={styles.card_details}>
      <p className={styles.card_price}>
        {currency}
        {amount}
      </p>
      <Link to={`/catalog/${id}`} className={styles.card_btn}>
        <p>More</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
