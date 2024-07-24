import { Wrapper } from "../global/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";
import { useGetVehicles } from "../../hooks/useGetVehicles";
import { VehicleCard } from "./vehicle-card/VehicleCard";

export const RecentAdded = () => {
  const { vehicles } = useGetVehicles();

  return (
    <section className="py-24 bg-cape-green">
      <Wrapper>
        <SectionHeaderWithLinkBtn
          color="light"
          header="Recent Added"
          linkPath="/catalog"
          linkText="Explore"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
          {vehicles &&
            vehicles
              .slice(0, 3)
              .map((v) => <VehicleCard vehicle={v} key={v.key} />)}
        </div>
      </Wrapper>
    </section>
  );
};
