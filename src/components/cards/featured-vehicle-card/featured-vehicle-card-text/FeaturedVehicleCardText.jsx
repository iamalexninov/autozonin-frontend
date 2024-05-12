import styles from "./style.module.css";

export const FeaturedVehicleCardText = ({ make, model, description }) => {
  return (
    <div className={styles.card_text}>
      <h5 className={styles.card_make_model}>{make + " " + model}</h5>
      <p className={styles.card_description}>{description}</p>
    </div>
  );
};
