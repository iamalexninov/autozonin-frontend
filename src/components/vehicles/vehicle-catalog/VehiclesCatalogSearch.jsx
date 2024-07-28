import { useEffect, useState } from "react";
import {
  carMakesAndModels,
  categories,
  conditions,
  types,
} from "../../../utils/helpers";
import { SelectField } from "../../global/fields/SelectField";
import { VehicleCard } from "../vehicle-card/VehicleCard";
import { useGetVehicles } from "../../../hooks/useGetVehicles";
import { useLocation } from "react-router-dom";

export const VehiclesCatalogSearch = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [formData, setFormData] = useState({
    category: "",
    condition: query.get("condition") || "",
    type: "",
    make: query.get("make") || "",
    model: query.get("model") || "",
  });
  const [models, setModels] = useState([]);
  const [searchData, setSearchData] = useState(formData);
  const [data, setData] = useState([]);

  const { vehicles } = useGetVehicles(searchData);

  useEffect(() => {
    setData(vehicles);
  }, [vehicles]);

  const handleMakeChange = (e) => {
    const selected = e.target.value;

    const make = carMakesAndModels.find((car) => car.name === selected);
    if (make) {
      setModels(make.models);
    } else {
      setModels([]);
    }
  };

  const handleFormSearch = async (e) => {
    e.preventDefault();
    setSearchData(formData);
  };

  return (
    <div className="mb-9 bg-white">
      <form
        className="flex flex-wrap gap-3 lg:flex-nowrap"
        onSubmit={handleFormSearch}
      >
        <SelectField
          initialOption="Enter Category"
          name="category"
          options={categories}
          setValues={setFormData}
        />
        <SelectField
          initialOption="Enter Condition"
          name="condition"
          options={conditions}
          setValues={setFormData}
        />
        <SelectField
          initialOption="Enter Type"
          name="type"
          options={types}
          setValues={setFormData}
        />
        <SelectField
          initialOption="Enter Make"
          name="make"
          options={carMakesAndModels}
          setValues={setFormData}
          onClick={handleMakeChange}
        />
        <SelectField
          initialOption="Enter Model"
          name="model"
          options={models}
          setValues={setFormData}
        />
        <button className="text-white bg-cape-green w-full rounded-full p-3">
          Search
        </button>
      </form>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {data.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle._id} />
        ))}
      </div>
    </div>
  );
};
