import { OfficesListRecord } from "./OfficesListRecord";

export const OfficesList = () => {
  const officesmockdata = [
    {
      town: "Sofia",
      address: "45 Vitosha Boulevard, Sofia 1000, Bulgaria",
      map: "",
      email: "zonincars@gmail.com",
      phone: "+359 88 765 4321",
    },
    {
      town: "Sofia",
      address: "7 Moskovska Street, Sofia 1000, Bulgarias",
      map: "",
      email: "zonincars@gmail.com",
      phone: "+359 2 987 6543",
    },
    {
      town: "Plovdiv",
      address: "12 Ivan Vazov Street, Plovdiv 4000, Bulgaria",
      map: "",
      email: "zonincars@gmail.com",
      phone: "+359 32 123 456",
    },
  ];

  return (
    <ul className="flex flex-col justify-between gap-5 lg:flex-row">
      {officesmockdata.map((record) => (
        <OfficesListRecord key={record.town} record={record} />
      ))}
    </ul>
  );
};
