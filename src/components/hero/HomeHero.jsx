import { useState } from "react";
import { carMakesAndModels, conditions } from "../../utils/helpers";
import { SelectField } from "../global/fields/SelectField";

export const HomeHero = () => {
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
    <section className="min-h-screen bg-hero-pattern flex justify-center items-center">
      <div className="px-5 py-9 w-full xl:w-2/4">
        <h1 className="text-center mb-10 text-4xl text-white uppercase">
          find your perfect vehicle
        </h1>
        <form className="bg-white rounded flex flex-col justify-between gap-3 p-4 md:flex-row mb-10">
          <div className="w-full">
            <SelectField
              initialOption="Enter Condition.."
              name="condition"
              options={conditions}
            />
          </div>
          <div className="w-full">
            <SelectField
              name="make"
              options={carMakesAndModels}
              initialOption="Enter Make.."
              onClick={handleMakeChange}
            />
          </div>
          <div className="w-full">
            <SelectField 
              name="model"
              options={models}
              initialOption="Enter Model.."
            />
          </div>
          <button className="bg-cape-green w-full text-center p-3 rounded text-white uppercase">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
