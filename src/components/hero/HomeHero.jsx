import { useState } from "react";
import { carModels, carConditions } from "../../utils/helpers";

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
          <div className="w-full">
            <select
              name="conditions"
              className="w-full py-3 px-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Condition</option>
              {carConditions.map((condition) => (
                <option key={condition.label} value={condition.value}>
                  {condition.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <select
              name="makes"
              onClick={handleMakeChange}
              className="w-full py-3 px-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Make</option>
              {carModels.map((make) => (
                <option key={make.make} value={make.make}>
                  {make.make}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
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
          <button className="bg-cape-green w-full text-center p-3 rounded text-white uppercase">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
