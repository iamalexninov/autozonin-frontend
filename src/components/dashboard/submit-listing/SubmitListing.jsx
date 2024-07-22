import { useState } from "react";

import { useCreateVehicle } from "../../../hooks/useCreateVehicle";

import { MainDetails } from "./MainDetails";
import { Media } from "./Media";
import { Price } from "./Price";
import { Features } from "./Features";
import { useNavigate } from "react-router-dom";

export const SubmitListing = () => {
  const [details, setDetails] = useState({
    title: "",
    tagline: "",
    category: "",
    label: "",
    condition: "",
    type: "",
    make: "",
    model: "",
    specification: "",
    year: "",
    driveType: "",
    transmission: "",
    fuel: "",
    mileage: "",
    engineSize: "",
    cylinder: "",
    color: "",
    doors: "",
    vin: "",
    description: "",
  });

  const [banner, setBanner] = useState({ banner: "" });
  const [price, setPrice] = useState({ price: 0 });
  const [features, setFeatures] = useState({
    interior: [],
    exterior: [],
    safety: [],
    comfort: [],
  });

  const navigate = useNavigate();
  const { createRecord } = useCreateVehicle();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecord({
      banner: banner.banner,
      details: details,
      features: features,
      price: price.price,
    });
    navigate("/");
  };

  return (
    <div className="px-10 py-10 w-full">
      <h2 className="text-2xl mb-10">Add Vehicle Listing</h2>
      <form onSubmit={handleSubmit}>
        <MainDetails setDetails={setDetails} />
        <Features features={features} setFeatures={setFeatures} />
        <Media setMedia={setBanner} />
        <Price setPrice={setPrice} />
        <button className="bg-cape-green text-white w-full max-w-80 p-4 uppercase font-600 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};
