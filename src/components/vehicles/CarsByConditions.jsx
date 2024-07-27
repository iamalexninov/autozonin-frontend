import { Wrapper } from "../global/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";
import { VehicleCard } from "./vehicle-card/VehicleCard";

import { useGetVehicles } from "../../hooks/useGetVehicles";
import { useEffect, useState } from "react";
import { conditions } from "../../utils/helpers";

export const CarsByConditions = () => {
  const [condition, setCondition] = useState("");
  const [searchData, setSearchData] = useState({ condition: "" });

  const { vehicles } = useGetVehicles(searchData);

  useEffect(() => {
    if (condition) {
      setSearchData({ condition });
    }
  }, [condition]);

  const handleConditionClick = async (selected) => {
    setCondition(selected);
  };

  return (
    <section className="py-24">
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color="dark"
          header="Explore Premium Cars"
          linkPath="/catalog"
          linkText="View"
        />
        <ul className="flex gap-4 mb-5">
          {conditions.map((c) => (
            <li
              key={c}
              onClick={() => handleConditionClick(c)}
              className="text-lg font-600 uppercase cursor-pointer"
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="flex gap-5 flex-wrap">
          {vehicles.slice(0, 3).map((vehicle) => (
            <VehicleCard
              key={vehicle._id}
              vehicle={vehicle}
              cardType="primary"
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
