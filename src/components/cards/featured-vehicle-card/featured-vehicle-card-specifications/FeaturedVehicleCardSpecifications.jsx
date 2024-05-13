import styles from "./style.module.css";

import { FeaturedVehicleCardSpecification } from "./FeaturedVehicleCardSpecification";

export const FeaturedVehicleCardSpecifications = ({
  year,
  mileage,
  condition,
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
