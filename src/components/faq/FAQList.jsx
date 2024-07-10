import { FAQListRecord } from "./FAQListRecord";

export const FAQList = () => {
  const questionsmockdata = [
    {
      id: 1,
      question:
        "What types of financing options are available at your dealership?",
      answer:
        "At our dealership, we offer a range of financing options tailored to fit your needs. These include traditional auto loans, lease agreements, and financing for both new and used vehicles. Our finance team works with multiple lenders to secure competitive rates and flexible terms, ensuring you find a financing solution that suits your budget.",
    },
    {
      id: 2,
      question: "Can I trade in my current vehicle at your dealership?",
      answer:
        "Yes, we accept trade-ins! Trading in your current vehicle can help offset the cost of your new purchase or lease. Our team will assess the value of your trade-in based on factors such as its condition, mileage, and market demand. We strive to offer fair and competitive trade-in values to our customers.",
    },
    {
      id: 3,
      question:
        "Do you offer warranties or extended service plans for vehicles?",
      answer:
        "Absolutely! We understand the importance of peace of mind when it comes to your vehicle purchase. That`s why we offer warranties and extended service plans to protect your investment. These plans typically cover repairs and maintenance beyond the manufacturer`s warranty period, providing added protection against unexpected expenses.",
    },
    {
      id: 4,
      question: "Can I test drive a vehicle before making a purchase?",
      answer:
        "Yes, we encourage all customers to test drive the vehicles they`re interested in. A test drive allows you to experience firsthand how the vehicle handles, its comfort level, and its features. Simply schedule a test drive with one of our sales representatives, and we`ll make sure to accommodate your request.",
    },
    {
      id: 5,
      question:
        "Are there any additional fees or charges I should be aware of?",
      answer:
        "Transparency is important to us, so we strive to be upfront about any fees or charges associated with your purchase. While there may be certain fees such as sales tax, registration, and documentation fees, we`ll clearly outline these costs before you make any commitments. Our goal is to ensure that you have a clear understanding of the total cost of your purchase or lease.",
    },
  ];

  return (
    <ul className="flex flex-col gap-14 m-auto lg:max-w-3xl">
      {questionsmockdata.map((record) => (
        <FAQListRecord key={record.id} record={record} />
      ))}
    </ul>
  );
};
