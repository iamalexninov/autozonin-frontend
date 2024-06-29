import { questions } from "./Text";

import { useState } from "react";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GlobalIcon } from "../global/GlobalIcon";

export const FAQ = () => {
  return (
    <section className="py-14">
      <Wrapper>
        <h2 className="text-2xl mb-20 text-center">
          Frequently Asked Questions
        </h2>
        <FAQRecords records={questions} />
      </Wrapper>
    </section>
  );
};

const FAQRecords = ({ records }) => {
  return (
    <ul className="flex flex-col gap-14 m-auto lg:max-w-3xl">
      {records.map((record) => (
        <FAQRecord key={record.id} record={record} />
      ))}
    </ul>
  );
};

const FAQRecord = ({ record }) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className="py-3" onClick={handleOnClick}>
      <div className="flex justify-between items-center">
        <h5 className="text-base font-600">{record.question}</h5>
        <div className="bg-cape-light text-white p-3 rounded-full">
          {clicked ? (
            <GlobalIcon type="minus" size={18} />
          ) : (
            <GlobalIcon type="plus" size={18} />
          )}
        </div>
      </div>
      {clicked && (
        <p className="text-sm mt-5 bg-cape-light p-5 rounded text-white text-center">
          {record.answer}
        </p>
      )}
    </li>
  );
};
