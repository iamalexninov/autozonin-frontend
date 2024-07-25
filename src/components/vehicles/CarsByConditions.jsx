import { Wrapper } from "../global/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";
import { VehicleCard } from "./vehicle-card/VehicleCard";

import { useGetVehicles } from "../../hooks/useGetVehicles";
import { useState } from "react";
import { conditions } from "../../utils/helpers";

export const CarsByConditions = () => {
  const { vehicles } = useGetVehicles();
  const [condition, setCondition] = useState("");
  const [data, setData] = useState([]);

  const handleConditionClick = async (item) => {
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
        <ul>
          {conditions.map((c) => (
            <li key={c} onClick={() => handleConditionClick(c)}>
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
