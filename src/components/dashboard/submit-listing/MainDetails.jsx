import { useState } from "react";
import {
  carConditions,
  carModels,
  colors,
  labels,
  types,
} from "../../../utils/helpers";

export const MainDetails = ({ setDetails }) => {
  const [models, setModels] = useState([]);
  const [specifications, setSpecifications] = useState([]);

  const handleMakeChange = (e) => {
    const selected = e.target.value;

    const make = carModels.find((spec) => spec.make === selected);
    if (make) {
      setModels(make.models);
    } else {
      setModels([]);
    }
  };

  const handleModelChange = (e) => {
    const selected = e.target.value;

    const model = models.find((mod) => mod.name === selected);
    if (model) {
      setSpecifications(model.modifications);
    } else {
      setSpecifications([]);
    }
  };

  const handleOnChange = (e) => {
    console.log(e.target);
  };

  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-7 pb-2 font-600">Vehicle Details</h5>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <div className="w-full">
          <label htmlFor="title" className="pl-1 text-sm mb-1">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleOnChange}
            placeholder="Ex:Mercedes-Benz C-Class C300"
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="tagline" className="pl-1 text-sm mb-1">
            Tagline:
          </label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            onChange={handleOnChange}
            placeholder="Ex:The epitome of style and comfort"
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="label" className="pl-1 text-sm mb-1">
            Label:
          </label>
          <select
            name="label"
            id="label"
            onChange={handleOnChange}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Label</option>
            {labels.map((entry) => (
              <option key={entry.label} value={entry.value}>
                {entry.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <div className="flex flex-col w-full">
          <label htmlFor="make" className="pl-1 text-sm mb-1">
            Make:
          </label>
          <select
            name="make"
            id="make"
            onChange={handleOnChange}
            onClick={handleMakeChange}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Make</option>
            {carModels.map((entry) => (
              <option key={entry.make} value={entry.make}>
                {entry.make}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="model" className="pl-1 text-sm mb-1">
            Model:
          </label>
          <select
            name="model"
            id="model"
            onChange={handleOnChange}
            onClick={handleModelChange}
            disabled={!models.length}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Model</option>
            {models.map((entry) => (
              <option key={entry.name} value={entry.name}>
                {entry.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="specifications" className="pl-1 text-sm mb-1">
            Specifications:
          </label>
          <select
            name="specifications"
            id="specifications"
            onChange={handleOnChange}
            disabled={!specifications.length}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Specification</option>
            {specifications.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <div className="flex flex-col w-full">
          <label htmlFor="condition" className="pl-1 text-sm mb-1">
            Condition:
          </label>
          <select
            name="condition"
            id="condition"
            onChange={handleOnChange}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Condition</option>
            {carConditions.map((entry) => (
              <option key={entry.label} value={entry.value}>
                {entry.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="type" className="pl-1 text-sm mb-1">
            Type:
          </label>
          <select
            name="type"
            id="type"
            onChange={handleOnChange}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Type</option>
            {types.map((entry) => (
              <option key={entry.label} value={entry.value}>
                {entry.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="transmission" className="pl-1 text-sm mb-1">
            Type:
          </label>
          <select
            name="transmission"
            id="transmission"
            onChange={handleOnChange}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Transmission</option>
            {types.map((entry) => (
              <option key={entry.label} value={entry.value}>
                {entry.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <div className="w-full">
          <label htmlFor="year" className="pl-1 text-sm mb-1">
            Year:
          </label>
          <input
            type="number"
            name="year"
            id="year"
            onChange={handleOnChange}
            min={0}
            max={2024}
            placeholder="Ex:2022"
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="mileage" className="pl-1 text-sm mb-1">
            Mileage:
          </label>
          <input
            type="number"
            name="mileage"
            id="mileage"
            onChange={handleOnChange}
            min={0}
            max={500000}
            placeholder="Ex:50 000"
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="color" className="pl-1 text-sm mb-1">
            Color:
          </label>
          <select
            name="color"
            id="color"
            onChange={handleOnChange}
            className="w-full py-3 px-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Color</option>
            {colors.map((entry) => (
              <option key={entry.label} value={entry.value}>
                {entry.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="desc" className="pl-1 text-sm mb-1">
          Listing Description
        </label>
        <textarea
          name="description"
          id="desc"
          onChange={handleOnChange}
          placeholder="Describe..."
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        ></textarea>
      </div>
    </div>
  );
};
