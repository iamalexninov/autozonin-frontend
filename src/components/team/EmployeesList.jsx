import pavel from "../../assets/images/jpg/pavel.jpg";
import nadq from "../../assets/images/jpg/nadq.jpg";
import stefan from "../../assets/images/jpg/stefan.jpg";
import petq from "../../assets/images/jpg/petq.jpg";

import { EmployeesListRecord } from "./EmployeesListRecord";

export const EmployeesList = () => {
  const employeesmockdata = [
    {
      img: pavel,
      name: "Pavel Velichkov",
      role: "Software Tester",
    },
    {
      img: nadq,
      name: "Nadq Stoeva",
      role: "Software Developer",
    },
    {
      img: petq,
      name: "Petq Ninova",
      role: "UI/UX Designer",
    },
    {
      img: stefan,
      name: "Stefan Petrov",
      role: "Software Developer",
    },
  ];

  return (
    <ul className="flex flex-wrap gap-3 justify-center">
      {employeesmockdata.map((record) => (
        <EmployeesListRecord key={record.name} record={record} />
      ))}
    </ul>
  );
};
