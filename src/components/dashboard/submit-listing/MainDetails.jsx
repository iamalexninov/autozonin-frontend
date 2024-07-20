import { useState } from "react";
import {
  carMakesAndModels,
  categories,
  colors,
  conditions,
  cylinders,
  doors,
  driveTypes,
  fuelTypes,
  labels,
  transmissions,
  types,
} from "../../../utils/helpers";
import { InputField } from "../../global/fields/InputField";
import { SelectField } from "../../global/fields/SelectField";
import { Textarea } from "../../global/fields/Textarea";

export const MainDetails = ({ setDetails }) => {
  const [models, setModels] = useState([]);

  const handleMakeChange = (e) => {
    const selected = e.target.value;

    const make = carMakesAndModels.find((spec) => spec.name === selected);

    if (make) {
      setModels(make.models);
    } else {
      setModels([]);
    }
  };

  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-7 pb-2 font-600">Vehicle Details</h5>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <InputField
          type="text"
          name="title"
          label="Listing Title"
          placeholder="Enter Title.."
          setValues={setDetails}
        />
        <InputField
          type="text"
          name="tagline"
          label="Tagline"
          placeholder="Enter Tagline.."
          setValues={setDetails}
        />
        <SelectField
          options={categories}
          initialOption="Select Category"
          label="Category"
          name="category"
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <SelectField
          options={labels}
          initialOption="Enter Label.."
          label="Label"
          name="label"
          setValues={setDetails}
        />
        <SelectField
          options={conditions}
          initialOption="Enter Condition.."
          label="Condition"
          name="condition"
          setValues={setDetails}
        />
        <SelectField
          options={types}
          initialOption="Enter Type.."
          label="Type"
          name="type"
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <SelectField
          options={carMakesAndModels}
          onClick={handleMakeChange}
          name="make"
          initialOption="Enter Make.."
          label="Make"
          setValues={setDetails}
        />
        <SelectField
          options={models}
          name="model"
          initialOption="Enter Model.."
          label="Model"
          setValues={setDetails}
        />
        <InputField
          type="text"
          label="Specification"
          name="specification"
          placeholder="Enter Specification.."
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <InputField
          type="number"
          label="Year"
          placeholder="Enter Year.."
          name="year"
          setValues={setDetails}
        />
        <SelectField
          options={driveTypes}
          name="driveType"
          initialOption="Enter Drive.."
          label="Drive Type"
          setValues={setDetails}
        />
        <SelectField
          options={transmissions}
          name="transmission"
          initialOption="Enter Transmission.."
          label="Transmission"
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <SelectField
          options={fuelTypes}
          name="fuel"
          label="Fuel"
          initialOption="Enter Fuel.."
          setValues={setDetails}
        />
        <InputField
          type="number"
          label="Mileage"
          name="mileage"
          setValues={setDetails}
          placeholder="Enter Mileage.."
          max={500000}
        />
        <InputField
          type="number"
          label="Engine Size"
          placeholder="Engine Size in Nm.."
          max={1000}
          name="engineSize"
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <SelectField
          name="cylinder"
          initialOption="Enter Cylinder.."
          label="Cylinder"
          options={cylinders}
          setValues={setDetails}
        />
        <SelectField
          name="color"
          initialOption="Enter Color.."
          label="Color"
          options={colors}
          setValues={setDetails}
        />
        <SelectField
          name="door"
          initialOption="Enter Door.."
          label="Door"
          options={doors}
          setValues={setDetails}
        />
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row max-w-md">
        <InputField
          type="text"
          label="VIN"
          name="vin"
          placeholder="Enter VIN.."
          setValues={setDetails}
        />
      </div>
      <Textarea
        label="Listing Description"
        name="description"
        placeholder="Enter Description.."
        setValues={setDetails}
      />
    </div>
  );
};
