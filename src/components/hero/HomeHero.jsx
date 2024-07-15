import { useState } from "react";
import { SelectField } from "../global/fields/SelectField";
import { carModels } from "../../utils/helpers";

export const HomeHero = () => {
  const [models, setModels] = useState([]);

  const handleMakeChange = (e) => {
    const selected = e.target.value;

    const make = carModels.find((spec) => spec.make === selected);
    if (make) {
      setModels(make.models);
    } else {
      setModels([]);
    }
  };

  return (
    <section className="min-h-screen bg-hero-pattern flex justify-center items-center">
      <div className="px-5 py-9 w-full xl:w-2/4">
        <h1 className="text-center mb-10 text-4xl text-white uppercase">
          find your perfect vehicle
        </h1>
        <form className="bg-white rounded flex flex-col justify-between gap-3 p-4 md:flex-row mb-10">
          <div className="w-full max-w-56">
            <SelectField
              options={[
                { label: "All", value: "all" },
                { label: "New", value: "new" },
                { label: "Used", value: "used" },
                { label: "Damaged", value: "damaged" },
              ]}
            />
          </div>
          <div className="w-full max-w-56">
            <select name="makes" onClick={handleMakeChange}>
              <option value="">Select Make</option>
              {carModels.map((make) => (
                <option key={make.make} value={make.make}>
                  {make.make}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full max-w-56">
            <select
              name="models"
              disabled={!models.length}
              className="w-full py-3 px-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Model</option>
              {models.map((model) => (
                <option key={model.name} value={model.name}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-cape-green w-full md:w-48 text-center p-3 rounded text-white uppercase">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
