import { RenderField } from "../../../../global/fields/RenderField";
// import styles from "./style.module.css";

export const Features = () => {
  return (
    <div className="vehicle_category">
      <h5 className="vehicle_category_title">Features</h5>
      <RenderField
        attributes={{
          type: "input",
          inputType: "checkbox",
          label: "Air Conditioner",
        }}
      />
    </div>
  );
};

// const FeatureRecords = ({records}) => {
//     return (
//         <ul className={styles.features_records}>
//             {records.map((record)=>(
//                 <
//             ))}
//         </ul>
//     )
// }
//
// const FeatureRecord = ({record}) => {
//     return (
//         <li className={styles.features_record}>
//             <RenderField attributes={{type:'input',inputType:'check',label:'Air Conditioner'}}/>
//         </li>
//     )
// }
