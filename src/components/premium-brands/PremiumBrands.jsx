import { brands } from "./Text";

import { Link } from "react-router-dom";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";

export const ExplorePremiumBrands = ({ type }) => {
  return (
    <section className="py-24 bg-gray-50">
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Explore Our Premium Brands"
          linkPath="/catalogue"
          linkText="View"
        />
        <BrandsRecords records={brands} />
      </Wrapper>
    </section>
  );
};

const BrandsRecords = ({ records }) => {
  return (
    <ul className="flex gap-10 flex-wrap justify-center">
      {records.map((record) => (
        <BrandsRecord key={record.brand} record={record} />
      ))}
    </ul>
  );
};

const BrandsRecord = ({ record }) => {
  return (
    <li className="rounded-lg border-cape-green border w-full max-w-48 p-8">
      <Link to="/catalogue" className="flex flex-col text-center items-center">
        <img src={record.banner} alt={record.brand} className="mb-4 w-24"/>
        <p className="uppercase">{record.brand}</p>
      </Link>
    </li>
  );
};
