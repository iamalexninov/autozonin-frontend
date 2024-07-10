import { Link } from "react-router-dom";
import { Wrapper } from "../global/Wrapper";
import { GlobalIcon } from "../global/GlobalIcon";

export const GenericHero = ({ header, title }) => {
  return (
    <section className="flex items-center pt-28 pb-5 mb-14 bg-cape-light">
      <Wrapper>
        <div className="flex items-center gap-2 text-white">
          <Link to="/">Home</Link>
          <GlobalIcon type="arrowRight" size={15} />
          <p className="font-600">{header}</p>
        </div>
        <h2 className="text-2xl font-600">{title}</h2>
      </Wrapper>
    </section>
  );
};
