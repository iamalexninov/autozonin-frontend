import { useState } from "react";
import { conditions } from "../../utils/helpers";

export const RenderConditionsMakers = ({ type }) => {
  const popularMakes = ["Mercedes", "BMW", "Audi", "VW", "Honda"];

  return (
    <TypeEntries
      type={type}
      entries={
        type === "conditions"
          ? conditions
          : type === "makers"
          ? popularMakes
          : null
      }
    />
  );
};

const TypeEntries = ({ type, entries }) => {
  const [active, setActive] = useState(entries[0]);

  const handleOnClick = (value) => {
    setActive(value);
  };

  return (
    <ul className="flex gap-5 mb-10">
      {entries.map((entry) => (
        <li
          key={entry.value}
          className={`${
            active === entry.value
              ? `${
                  type === "conditions"
                    ? "border-b-2 border-cape-green"
                    : type === "makers"
                    ? "border-b-2 border-white"
                    : null
                }`
              : null
          } cursor-pointer p-1 font-600 text-lg ${
            type === "condition"
              ? "text-black"
              : type === "makers"
              ? "text-white"
              : null
          }`}
          onClick={() => handleOnClick(entry.value)}
        >
          {entry.label}
        </li>
      ))}
    </ul>
  );
};
