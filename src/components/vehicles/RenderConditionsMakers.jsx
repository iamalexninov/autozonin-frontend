import { useState } from "react";
import { carConditions, carPopularMakes } from "../../utils/helpers";

export const RenderConditionsMakers = ({ type }) => {
  return (
    <TypeEntries
      type={type}
      entries={
        type === "conditions"
          ? carConditions
          : type === "makers"
          ? carPopularMakes
          : null
      }
    />
  );
};

const TypeEntries = ({ type, entries }) => {
  const [active, setActive] = useState(
    type === "conditions"
      ? carConditions[0].value
      : type === "makers"
      ? carPopularMakes[0].value
      : null
  );

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
