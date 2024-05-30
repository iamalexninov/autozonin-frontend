import { RenderField } from "../../../../global/fields/RenderField";
import styles from "./style.module.css";

export const FeatureFilters = () => {
  const features = [
    {
      name: "air-conditioner",
      label: "Air Conditioner",
    },
    {
      name: "apple-carplay",
      label: "Apple CarPlay",
    },
    {
      name: "child-safety-locks",
      label: "Child Safety Locks",
    },
    {
      name: "fog-lights-front",
      label: "Fog Lights Front",
    },
    {
      name: "leather-seats",
      label: "Leather Seats",
    },
    {
      name: "power-steering",
      label: "Power Steering",
    },
    {
      name: "stability-control",
      label: "Stability Control",
    },
    {
      name: "traction-control",
      label: "Traction Control",
    },
    {
      name: "android-auto",
      label: "Android Auto",
    },
    {
      name: "bluetooth",
      label: "Bluetooth",
    },
    {
      name: "digital-odometer",
      label: "Digital Odometer",
    },
    {
      name: "heater",
      label: "Heater",
    },
    {
      name: "panoramic-moonroof",
      label: "Panoramic Moonroof",
    },
    {
      name: "rain-sensing-wiper",
      label: "Rain Sensing Wiper",
    },
    {
      name: "tachometer",
      label: "Tachometer",
    },
    {
      name: "vanity-mirror",
      label: "Vanity Mirror",
    },
    {
      name: "anti-lock-braking",
      label: "Anti-lock Braking",
    },
    {
      name: "brake-assist",
      label: "Brake Assist",
    },
    {
      name: "driver-air-bag",
      label: "Driver Air Bag",
    },
    {
      name: "homelink",
      label: "HomeLink",
    },
    {
      name: "power-door-locks",
      label: "Power Door Locks",
    },
    {
      name: "rear-spoiler",
      label: "Rear Spoiler",
    },
    {
      name: "touchscreen-display",
      label: "Touchscreen Display",
    },
    {
      name: "windows-electric",
      label: "Windows - Electric",
    },
  ];

  return (
    <div className={styles.features}>
      <p>Features</p>
      <FeatureRecords records={features} />
    </div>
  );
};

const FeatureRecords = ({ records }) => {
  return (
    <ul className={styles.features_records}>
      {records.map((record) => (
        <FeatureRecord key={record.name} record={record} />
      ))}
    </ul>
  );
};

const FeatureRecord = ({ record }) => {
  return (
    <li className={styles.features_record}>
      <RenderField
        attributes={{
          type: "input",
          inputType: "checkbox",
          name: record.name,
          label: record.label,
        }}
      />
    </li>
  );
};
