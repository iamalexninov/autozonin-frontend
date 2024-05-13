import styles from "./style.module.css";

// TODO: change them
import bmw from "../../assets/images/jpg/test_bmw.jpg";
import mercedes from "../../assets/images/jpg/test_mercedes.jpg";
import porche from "../../assets/images/jpg/test_porche.jpg";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GlobalUnderline } from "../global/underline/GlobalUnderline";
import { RenderCard } from "../cards/RenderCard";
import { SectionTextContent } from "../global/section-text-content/SectionTextContent";

export const FeaturedVehicles = () => {
  // TODO: Should be at least 3, at most 6, consider Swapper
  const vehiclesmockdata = [
    {
      logo: bmw,
      detailsPath: "/bmw",
      price: "$58,000",
      make: "bwm",
      model: "m5 competition",
      description:
        "The 2022 BMW M5 Competition is a high-performance sedan that boasts a potent 4.4-liter twin-turbo V8 engine, delivering exhilarating acceleration and dynamic driving experience. With its sharp handling, aggressive styling, and luxurious interior, it epitomizes the perfect blend of power, refinement, and athleticism.",
      year: "2022",
      mileage: "50000km",
      condition: "Used",
      horsepower: "617hp",
    },
    {
      logo: mercedes,
      detailsPath: "/",
      price: "$65,000",
      make: "mercedes",
      model: "E63 AMG",
      description:
        "The 2022 Mercedes E63 AMG combines luxury with blistering performance, featuring a handcrafted 4.0-liter twin-turbo V8 engine and advanced all-wheel drive for impressive acceleration and handling. Its sophisticated design, opulent interior, and cutting-edge technology ensure a thrilling driving experience with uncompromised comfort and style.",
      year: "2022",
      mileage: "65000km",
      condition: "Used",
      horsepower: "603hp",
    },
    {
      logo: porche,
      detailsPath: "/",
      price: "$62,000",
      make: "Porche",
      model: "911 Carrera",
      description:
        "The 2022 Porsche 911 Carrera combines iconic design with exhilarating performance, featuring a range of potent flat-six engines delivering up to 640 horsepower in the Turbo S variant. Renowned for its precision engineering and agile handling, the 911 Carrera offers a thrilling driving experience matched with luxurious comfort and cutting-edge technology.",
      year: "2022",
      mileage: "62000km",
      condition: "Used",
      horsepower: "640hp",
    },
  ];

  return (
    <section className={styles.vehicles}>
      <Wrapper>
        <SectionTextContent
          title="featured vehicles"
          paragraph="Experience innovation and elegance with our latest featured
            vehicles, redefining performance and style for the future of
            driving."
        />
        <ul className="cards_list">
          {vehiclesmockdata.map((vehicle) => (
            <RenderCard
              card="featured_vehicle"
              key={vehicle.model}
              data={vehicle}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};
