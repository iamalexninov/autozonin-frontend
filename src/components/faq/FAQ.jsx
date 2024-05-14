import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionTextContent } from "../global/section-text-content/SectionTextContent";
import { FAQQuestions } from "./faq-items/FAQQuestions";
import { FAQTouch } from "./faq-touch/FAQTouch";

export const FAQ = () => {
  const mockdata = [
    {
      question:
        "What financing options are available for purchasing a car from your dealership?",
      answer:
        "We offer a variety of financing options tailored to fit your needs. These may include traditional auto loans, leasing options, or special financing programs. Our finance team will work with you to find the best solution that suits your budget and credit situation.",
    },
    {
      question: "Do you accept trade-ins?",
      answer:
        "Yes, we accept trade-ins! We understand that many customers may want to trade in their current vehicle towards the purchase of a new one. Our dealership offers competitive trade-in values, and our team will assess the value of your trade-in based on factors such as its condition, mileage, and market demand.",
    },
    {
      question: "What warranty options do you offer on your vehicles?",
      answer:
        "Our dealership provides various warranty options to give you peace of mind with your purchase. Depending on the vehicle, you may have the option to purchase extended warranties or certified pre-owned warranties, which can cover repairs and maintenance beyond the manufacturer's warranty period. Our sales team can provide detailed information on available warranty coverage for specific vehicles.",
    },
    {
      question: "Can I schedule a test drive?",
      answer:
        "Absolutely! We encourage customers to schedule test drives to experience our vehicles firsthand. You can easily schedule a test drive by contacting our sales team via phone or through our website. We'll work with you to arrange a convenient time for you to test drive the car you're interested in.",
    },
    {
      question: "Are your vehicles inspected and certified before sale?",
      answer:
        "Yes, all of our vehicles undergo a rigorous inspection process to ensure their quality and reliability. Our certified technicians thoroughly inspect each vehicle for any mechanical issues or safety concerns. Additionally, we offer certified pre-owned (CPO) vehicles that have undergone an even more extensive inspection and come with additional benefits such as warranty coverage and roadside assistance.",
    },
  ];

  return (
    <section className={styles.faq}>
      <Wrapper>
        <SectionTextContent
          title="we're here to answer all your questions."
          paragraph="If you are new to Zonin Showroom or looking for key questions, this section will help you learn more about the platform and its features."
        />
        <FAQQuestions questions={mockdata} />
        <FAQTouch />
      </Wrapper>
    </section>
  );
};
