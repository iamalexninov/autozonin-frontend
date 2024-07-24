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
  const [category, setCategory] = useState({ category: "" });
  const [condition, setCondition] = useState({ condition: "" });
  const [type, setType] = useState({ type: "" });
  const [make, setMake] = useState({ make: "" });
  const [model, setModel] = useState({ model: "" });
  const [models, setModels] = useState([]);
  const [data, setData] = useState([]);

  const { vehicles } = useGetVehicles();

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

    try {
      const params = new URLSearchParams({
        category: category.category,
        condition: condition.condition,
        type: type.type,
        make: make.make,
        model: model.model,
      }).toString();
      const response = await fetch(
        `http://localhost:5000/api/vehicles?${params}`
      );
      const vehicles = await response.json();
      setData(vehicles);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    const handleSearch = async () => {
      const params = new URLSearchParams(location.search);
      const item = params.get("make");

      const paramsSecond = new URLSearchParams({
        make: item,
      });
      const response = await fetch(
        `http://localhost:5000/api/vehicles?${paramsSecond}`
      );
      const vehicles = await response.json();
      setData(vehicles);
    };

    handleSearch();
  }, []);

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
          setValues={setCategory}
        />
        <SelectField
          initialOption="Enter Condition"
          name="condition"
          options={conditions}
          setValues={setCondition}
        />
        <SelectField
          initialOption="Enter Type"
          name="type"
          options={types}
          setValues={setType}
        />
        <SelectField
          initialOption="Enter Make"
          name="make"
          options={carMakesAndModels}
          setValues={setMake}
          onClick={handleMakeChange}
        />
        <SelectField
          initialOption="Enter Model"
          name="model"
          options={models}
          setValues={setModel}
        />
        <button className="text-white bg-cape-green w-full rounded-full">
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
