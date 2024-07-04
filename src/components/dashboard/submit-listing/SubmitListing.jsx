import { useState } from "react";

import { useCreateVehicle } from "../../../hooks/useCreateVehicle";

import { MainDetails } from "./main-details/MainDetails";
import { Media } from "./media/Media";
import { Price } from "./Price";

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
    await createRecord({ details: details, banners: media, price: price });
  };

  return (
    <div className="px-10 py-10 w-full">
      <h2 className="text-2xl mb-10">Add Vehicle Listing</h2>
      <form onSubmit={handleSubmit}>
        <MainDetails setDetails={setDetails} />
        <Media setMedia={setMedia} />
        <Price setPrice={setPrice} />
        <button>Submit</button>
      </form>
    </div>
  );
};
