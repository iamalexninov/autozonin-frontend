import { Wrapper } from "../global/Wrapper";
import { TestimonialsList } from "./TestimonialsList";

export const Testimonials = () => {
  return (
    <section className="py-14">
      <Wrapper>
        <h2 className="text-2xl mb-10 text-center">What Our Customers Say</h2>
        <TestimonialsList />
      </Wrapper>
    </section>
  );
};
