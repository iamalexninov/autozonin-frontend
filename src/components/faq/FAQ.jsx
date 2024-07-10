import { Wrapper } from "../global/Wrapper";
import { FAQList } from "./FAQList";

export const FAQ = () => {
  return (
    <section className="py-14">
      <Wrapper>
        <h2 className="text-2xl mb-20 text-center">
          Frequently Asked Questions
        </h2>
        <FAQList />
      </Wrapper>
    </section>
  );
};