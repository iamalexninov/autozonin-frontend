import { Wrapper } from "../global/Wrapper";
import { EmployeesList } from "./EmployeesList";

export const Team = () => {
  return (
    <section className="py-14">
      <Wrapper>
        <h3 className="text-2xl mb-12 text-center">Our Team</h3>
        <EmployeesList />
      </Wrapper>
    </section>
  );
};