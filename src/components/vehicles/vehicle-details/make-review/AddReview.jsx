import { RenderField } from "../../../global/fields/RenderField";

export const AddReview = () => {
  return (
    <form>
      <h3 className="text-xl font-600 mb-8">Add a Review</h3>
      <div className="flex flex-col gap-5 mb-5 sm:flex-row">
        <RenderField
          attributes={{
            type: "text",
            label: "Name",
            name: "name",
            placeholder: "ex: Alex Ninov..",
          }}
        />
        <RenderField
          attributes={{
            type: "text",
            label: "Email",
            name: "email",
            placeholder: "ex: aleks@gmail.com",
          }}
        />
      </div>
      <RenderField
        attributes={{
          type: "textarea",
          label: "Review",
          placeholder: "Describe...",
          name: "review",
        }}
      />
      <button className="w-full max-w-48 uppercase p-3 bg-cape-green text-white rounded-md hover:bg-cape-light font-600 mt-8">
        add review
      </button>
    </form>
  );
};
