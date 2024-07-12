import { useState } from "react";

import { useCreateVehicle } from "../../../hooks/useCreateVehicle";

import { MainDetails } from "./MainDetails";
import { Media } from "./Media";
import { Price } from "./Price";
import { Features } from "./Features";

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
    fuelType: "",
    mileage: "",
    engineSize: "",
    torque: "",
    cylinder: "",
    color: "",
    doors: "",
    offerType: "",
    vin: "",
    description: "",
  });

  const [media, setMedia] = useState({
    url: "",
  });

  const [features, setFeatures] = useState({
    interior: [],
    exterior: [],
    comfort: [],
    safety: [],
  });

  const [price, setPrice] = useState({
    amount: 0,
    currency: "€",
    negotiable: false,
    leaseAvailable: false,
    leaseInitialPayment: 0,
    monthlyPayment: 0,
  });

  const { createRecord } = useCreateVehicle();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecord({
      details: details,
      banners: media,
      features: features,
      price: price,
    });
  };

  return (
    <div className="px-10 py-10 w-full">
      <h2 className="text-2xl mb-10">Add Vehicle Listing</h2>
      <form onSubmit={handleSubmit}>
        <MainDetails setDetails={setDetails} />
        <Media setMedia={setMedia} />
        <Features values={features} setValues={setFeatures} />
        <Price setPrice={setPrice} />
        <button className="bg-cape-green text-white w-full max-w-80 p-4 uppercase font-600 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};
