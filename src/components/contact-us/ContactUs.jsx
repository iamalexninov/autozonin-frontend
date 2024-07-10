import { Wrapper } from "../global/Wrapper";
import { GetInTouch } from "./GetInTouch";
import { ContactDetails } from "./contact-details/ContactDetails";
import { Offices } from "./offices/Offices";

export const ContactUs = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <GetInTouch />
          <ContactDetails />
        </div>
        <Offices />
      </Wrapper>
    </section>
  );
};
