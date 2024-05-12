import styles from "./style.module.css";

import { FeaturedVehicleCardSpecification } from "./FeaturedVehicleCardSpecification";

export const FeaturedVehicleCardSpecifications = ({
  year,
  mileage,
  condition,
  horsepower,
}) => {
  const specifications = [
    {
      icon: "calendar",
      item: year,
    },
    {
      icon: "setting",
      item: mileage,
    },
    {
      icon: "car",
      item: condition,
    },
    {
      icon: "speedometer",
      item: horsepower,
    },
  ];

  return (
    <ul className={styles.specifications}>
      {specifications.map((specification) => (
        <FeaturedVehicleCardSpecification
          key={specification.item}
          icon={specification.icon}
          item={specification.item}
        />
      ))}
    </ul>
  );
};
