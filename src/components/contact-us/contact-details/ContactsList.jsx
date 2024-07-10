import { ContactsListRecord } from "./ContactsListRecord";

export const ContactsList = () => {
  const contactsmockdata = [
    {
      icon: "location",
      label: "Address",
      value: "2 Dondukov Blvd, Sofia, Bulgaria",
    },
    {
      icon: "email",
      label: "Email",
      value: "zonin@gmail.com",
    },
    {
      icon: "phone",
      label: "Phone Number",
      value: "+359 896 35 9864",
    },
  ];

  return (
    <ul className="flex flex-col gap-7 mb-10">
      {contactsmockdata.map((record) => (
        <ContactsListRecord key={record.label} record={record} />
      ))}
    </ul>
  );
};
