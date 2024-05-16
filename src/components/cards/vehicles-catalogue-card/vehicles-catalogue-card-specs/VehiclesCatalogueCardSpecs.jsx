import styles from "./style.module.css";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const VehiclesCatalogueCardSpecs = () => {
  const specsmockdata = [
    {
      icon: "calendar",
      spec: "Date:",
      value: "2023y.",
    },
    {
      icon: "car",
      spec: "Condition:",
      value: "Used",
    },
    {
      icon: "setting",
      spec: "Mileage:",
      value: "15000mi.",
    },
  ];

  return (
    <div className={styles.specs}>
      <SpecsEntries entries={specsmockdata} />
    </div>
  );
};

const SpecsEntries = ({ entries }) => {
  return entries.map((entry) => <SpecsEntry key={entry.spec} entry={entry} />);
};

const SpecsEntry = ({ entry }) => {
  return (
    <div className={styles.specs_entry}>
      <div className={styles.specs_entry_icon}>
        <GlobalIcon type={entry.icon} size={25} />
      </div>
      <div className={styles.specs_entry_info}>
        <p>{entry.spec}</p>
        <p>{entry.value}</p>
      </div>
    </div>
  );
};