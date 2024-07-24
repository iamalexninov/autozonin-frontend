import audi from "../../assets/images/svg/audi.svg";
import mercedes from "../../assets/images/svg/mercedes.svg";
import bmw from "../../assets/images/svg/bmw.svg";
import honda from "../../assets/images/svg/honda.svg";
import ford from "../../assets/images/svg/ford.svg";
import lexus from "../../assets/images/svg/lexus.svg";

import { BrandsListRecord } from "./BrandsListRecord";

export const BrandsList = () => {
  const brandsmockdata = [
    {
      banner: audi,
      brand: "Audi",
    },
    {
      banner: mercedes,
      brand: "Mercedes-Benz",
    },
    {
      banner: bmw,
      brand: "BMW",
    },
    {
      banner: honda,
      brand: "Honda",
    },
    {
      banner: ford,
      brand: "Ford",
    },
    {
      banner: lexus,
      brand: "Lexus",
    },
  ];

  return (
    <ul className="flex gap-10 flex-wrap justify-center">
      {brandsmockdata.map((record) => (
        <BrandsListRecord key={record.brand} record={record} />
      ))}
    </ul>
  );
};
