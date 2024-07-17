import { useState } from "react";
import {
  carConditions,
  carModels,
  colors,
  fuels,
  labels,
  transmissions,
  types,
} from "../../../utils/helpers";
import { InputField } from "../../global/fields/InputField";
import { SelectField } from "../../global/fields/SelectField";
import { Textarea } from "../../global/fields/Textarea";

export const MainDetails = ({ setDetails }) => {
  const [models, setModels] = useState([]);
  const [specifications, setSpecifications] = useState([]);

  const handleMakeChange = (e) => {
    const selected = e.target.value;

    const make = carModels.find((spec) => spec.value === selected);

    if (make) {
      setModels(make.models);
    } else {
      setModels([]);
    }
  };

  const handleModelChange = (e) => {
    const selected = e.target.value;

    const model = models.find((mod) => mod.value === selected);
    console.log(model);
    console.log(selected);

    if (model) {
      setSpecifications(model.modifications);
    } else {
      setSpecifications([]);
    }
  };

  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-7 pb-2 font-600">Vehicle Details</h5>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <InputField
          type="text"
          name="title"
          label="Title"
          placeholder="Mercedes-Benz C300"
          setValues={setDetails}
        />
        <InputField
          type="text"
          name="tagline"
          label="Tagline"
          placeholder="Excellent performance..."
          setValues={setDetails}
        />
        <SelectField
          options={labels}
          initialOption="Select Label"
          label="Label"
          name="label"
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <SelectField
          name="make"
          initialOption="Select Make"
          label="Make"
          options={carModels}
          onClick={handleMakeChange}
          setValues={setDetails}
        />
        <SelectField
          name="model"
          initialOption="Models"
          label="Model"
          options={models}
          onClick={handleModelChange}
          setValues={setDetails}
        />
        <SelectField
          name="specification"
          initialOption="Select Spec"
          label="Srecification"
          options={specifications}
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <SelectField
          name="condition"
          label="Condition"
          initialOption="Select Condition"
          options={carConditions}
          setValues={setDetails}
        />
        <SelectField
          name="type"
          label="Types"
          initialOption="Select Types"
          options={types}
          setValues={setDetails}
        />
        <SelectField
          name="transmission"
          label="Transmission"
          initialOption="Select Transmission"
          options={transmissions}
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <InputField
          type="number"
          label="Year"
          name="year"
          placeholder="Enter Year:"
          setValues={setDetails}
        />
        <InputField
          type="number"
          label="Mileage"
          name="mileage"
          placeholder="Enter Mileage:"
          setValues={setDetails}
        />
        <SelectField
          label="Color"
          name="color"
          options={colors}
          initialOption="Select Color"
          setValues={setDetails}
        />
        <SelectField
          label="Fuel"
          name="fuel"
          options={fuels}
          initialOption="Select Fuel"
          setValues={setDetails}
        />
      </div>
      <Textarea
        label="Listing Description"
        name="description"
        placeholder="Describe"
        setValues={setDetails}
      />
    </div>
  );
};
