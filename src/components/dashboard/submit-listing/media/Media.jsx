import styles from "./style.module.css";

import { RenderField } from "../../../global/fields/RenderField";

export const Media = ({ setMedia }) => {
  return (
    <div className="vehicle_category">
      <h5 className="vehicle_category_title">Media</h5>
      <div className={styles.images_box}>
        <RenderField
          attributes={{
            type: "text",
            label: "Upload Image",
            name: "url",
            placeholder: "Place Image Link",
            setValues: setMedia,
          }}
        />
        {/* <RenderField
          attributes={{
            type: "text",
            label: "Upload Image",
            name: "image2",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Upload Image",
            name: "image3",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Upload Image",
            name: "image4",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Upload Image",
            name: "image5",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Upload Image",
            name: "image6",
            placeholder: "Place Image Link",
          }}
        /> */}
      </div>
    </div>
  );
};
