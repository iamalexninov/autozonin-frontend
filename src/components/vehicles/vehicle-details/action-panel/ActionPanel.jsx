import { useState } from "react";
import { GlobalIcon } from "../../../global/GlobalIcon";
import { OfferPrice } from "./OfferPrice";
import { TestDrive } from "./TestDrive";

export const ActionPanel = () => {
  const [offerPrice, setOfferPrice] = useState(false);
  const [testDrive, setTestDrive] = useState(false);

  return (
    <>
      <div className="bg-slate-50 p-8 border border-gray-300 rounded-3xl mb-10">
        <p className="text-base font-600 mb-1">Our Price</p>
        <h5 className="text-2xl font-700 text-cape-green mb-5">$50,000</h5>
        <p className="text-base font-600 text-gray-500 mb-1">Leasing Offer:</p>
        <p className="text-base mb-8">
          Montly Payment: <span className="font-700 mx-1">$650</span>
          for <span className="font-700">36 months.</span>
        </p>
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
            <p>schedule test drive</p>  
          </button>
        </div>
      </div>
      <OfferPrice active={offerPrice} setActive={setOfferPrice} />
      <TestDrive active={testDrive} setActive={setTestDrive} />
    </>
  );
};
