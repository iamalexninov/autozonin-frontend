import { Wrapper } from "../global/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";
import { VehicleCard } from "./vehicle-card/VehicleCard";

import { useGetVehicles } from "../../hooks/useGetVehicles";
import { useEffect, useState } from "react";
import { conditions } from "../../utils/helpers";

export const CarsByConditions = () => {
  const { vehicles } = useGetVehicles();
  const [condition, setCondition] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(vehicles);
  }, [vehicles]);

  const handleConditionClick = async (e, item) => {
    e.preventDefault();
    setCondition(item);

    const params = new URLSearchParams({ condition: condition }).toString();
    const response = await fetch(
      `http://localhost:5000/api/vehicles?${params}`
    );
    const json = await response.json();
    setData(json);
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
              onClick={(e) => handleConditionClick(e, c)}
              className="text-lg font-600 uppercase cursor-pointer"
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="flex gap-5 flex-wrap">
          {data.slice(0, 3).map((vehicle) => (
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
