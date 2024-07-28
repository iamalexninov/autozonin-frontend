import { useState } from "react";
import { SelectField } from "../../global/fields/SelectField";
import { conditions, carMakesAndModels } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

export const HeroSearch = () => {
  const [formData, setFormData] = useState({
    condition: "",
    make: "",
    model: "",
  });
  const [models, setModels] = useState([]);
  const navigate = useNavigate();

  const handleMakeChange = (e) => {
    const selected = e.target.value;

    const make = carMakesAndModels.find((make) => make.name === selected);
    make ? setModels(make.models) : setModels([]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      condition: formData.condition,
      make: formData.make,
      model: formData.model,
    }).toString();
    navigate(`/catalog?${params}`);
  };

  return (
    <form
      className="bg-white p-4 rounded-3xl flex flex-col items-center gap-3 lg:flex-row w-full max-w-screen-2xl"
      onSubmit={handleFormSubmit}
    >
      <SelectField
        initialOption="Enter Condition..."
        name="condition"
        options={conditions}
        setValues={setFormData}
      />
      <SelectField
        initialOption="Enter Make..."
        name="make"
        options={carMakesAndModels}
        setValues={setFormData}
        onClick={handleMakeChange}
      />
      <SelectField
        initialOption="Enter Model..."
        name="model"
        options={models}
        setValues={setFormData}
      />
      <button className="bg-cape-green w-full uppercase rounded-xl p-3 text-white">
        Search
      </button>
    </form>
  );
};
