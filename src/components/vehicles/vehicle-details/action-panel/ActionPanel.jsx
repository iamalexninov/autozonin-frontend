import { useState } from "react";
import { GlobalIcon } from "../../../global/GlobalIcon";
import { OfferPrice } from "./OfferPrice";
import { TestDrive } from "./TestDrive";

export const ActionPanel = ({price}) => {
  const [offerPrice, setOfferPrice] = useState(false);
  const [testDrive, setTestDrive] = useState(false);

  return (
    <>
      <div className="bg-white p-8 border border-gray-300 rounded-3xl mb-10">
        <p className="text-xl font-600 mb-1">Our Price</p>
        <h3 className="text-2xl font-700 text-cape-green mb-5">${price}</h3>
        <div className="flex flex-col gap-3">
          <button
            className="flex justify-center gap-2 uppercase p-4 bg-cape-green text-white rounded-md hover:bg-cape-light font-600"
            onClick={() => setOfferPrice(true)}
          >
            <GlobalIcon type="offer" />
            <p>make an offer</p>
          </button>
          <button
            className="flex justify-center gap-2 uppercase p-4 bg-slate-800 text-white rounded-md hover:bg-slate-600 font-600"
            onClick={() => setTestDrive(true)}
          >
            <GlobalIcon type="drive" />
            <p>test drive</p>  
          </button>
        </div>
      </div>
      <OfferPrice active={offerPrice} setActive={setOfferPrice} />
      <TestDrive active={testDrive} setActive={setTestDrive} />
    </>
  );
};
