import styles from "./style.module.css";

export const HeroTypes = () => {
  const vehiclesTypes = [
    "SUV",
    "Coupe",
    "Hatchback",
    "Sedan",
    "Hybrid",
    "Station Wagon",
  ];

  return (
    <div className={styles.types}>
      <p className={styles.types_info}>Or Browse Featured Model</p>
      <VehiclesTypesRecords records={vehiclesTypes} />
    </div>
  );
};

const VehiclesTypesRecords = ({ records }) => {
  return (
    <ul className={styles.records}>
      {records.map((record) => (
        <VehiclesTypeRecord key={record} record={record}/>
      ))}
    </ul>
  );
};

const VehiclesTypeRecord = ({ record }) => {
  return (
    <li className={styles.record}>
      <p>{record}</p>
    </li>
  );
};
