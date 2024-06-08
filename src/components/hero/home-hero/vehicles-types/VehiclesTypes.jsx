import styles from "./style.module.css";

export const VehiclesTypes = () => {
  const types = [
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
      <TypesRecords records={types} />
    </div>
  );
};

const TypesRecords = ({ records }) => {
  return (
    <ul className={styles.types_records}>
      {records.map((record) => (
        <TypesRecord key={record} record={record} />
      ))}
    </ul>
  );
};

const TypesRecord = ({ record }) => {
  return (
    <li className={styles.types_record}>
      <p>{record}</p>
    </li>
  );
};
