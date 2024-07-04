import { RenderField } from "../../global/fields/RenderField";

export const Media = ({ setMedia }) => {
  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-7 pb-2 font-600">Media</h5>
      <div className="flex gap-5 mb-5">
        <RenderField
          attributes={{
            type: "text",
            name: "url",
            placeholder: "Place Image Link",
            setValues: setMedia,
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            name: "image2",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            name: "image3",
            placeholder: "Place Image Link",
          }}
        />
      </div>
      <div className="flex gap-5">
        <RenderField
          attributes={{
            type: "text",
            name: "image4",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            name: "image5",
            placeholder: "Place Image Link",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            name: "image6",
            placeholder: "Place Image Link",
          }}
        />
      </div>
    </div>
  );
};
