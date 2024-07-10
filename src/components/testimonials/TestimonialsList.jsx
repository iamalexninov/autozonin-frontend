import user1 from "../../assets/images/jpg/nadq.jpg";
import user2 from "../../assets/images/jpg/pavel.jpg";
import user3 from "../../assets/images/jpg/petq.jpg";

import { TestimonialsListRecord } from "./TestimonialsListRecord";

export const TestimonialsList = () => {
  const testimonialsmockdata = [
    {
      title: "Great Work",
      opinion:
        "“ZoninCars made buying my SUV easy and stress-free. The team was knowledgeable, pricing was transparent, and financing options were great. Highly recommend!”",
      img: user1,
      name: "Emily L.",
      role: "Software Tester",
    },
    {
      title: "Perfect Quality",
      opinion:
        "“Selling my car through ZoninCars was stress-free. Fair appraisal, efficient paperwork handling. Definitely coming back.”",
      img: user2,
      name: "James P.",
      role: "Dealer - Mechanic",
    },
    {
      title: "Great Team",
      opinion:
        "“ZoninCars exceeded my expectations. Patient staff, great options, and top-notch service. Happy with my new car and the experience. Highly recommend.”",
      img: user3,
      name: "Sarah I.",
      role: "Dealership Owner",
    },
  ];

  return (
    <ul className="flex flex-wrap gap-5 justify-center">
      {testimonialsmockdata.map((record) => (
        <TestimonialsListRecord key={record.title} record={record} />
      ))}
    </ul>
  );
};
