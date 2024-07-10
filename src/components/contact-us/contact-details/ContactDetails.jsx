import { ContactsList } from "./ContactsList";
import { SocialsList } from "./SocialsList";

export const ContactDetails = () => {
  return (
    <div className="w-full rounded-xl p-10 border border-gray-400">
      <h5 className="mb-5 text-xl">Contact Details</h5>
      <p className="mb-8 text-sm text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        provident sed tempore repellendus deserunt, quisquam maxime assumenda.
      </p>
      <ContactsList />
      <SocialsList />
    </div>
  );
};
