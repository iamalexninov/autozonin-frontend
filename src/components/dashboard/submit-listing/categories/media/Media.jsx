import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const Media = () => {
  return (
    <div className="vehicle_category">
      <h5 className="vehicle_category_title">Media</h5>
      <div className={styles.images_box}>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Upload Image",
            name: "image1",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Upload Image",
            name: "image2",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Upload Image",
            name: "image3",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Upload Image",
            name: "image4",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Upload Image",
            name: "image5",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            label: "Upload Image",
            name: "image6",
            placeholder: "Place Image Link",
          }}
        />
      </div>
      <RenderField
        attributes={{
          type: "input",
          inputType: "text",
          label: "Video Link",
          name: "video",
          placeholder: "Enter Youtube or Vimeo url..",
        }}
      />
    </div>
  );
};
