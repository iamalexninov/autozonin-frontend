import { Wrapper } from "../global/wrapper/Wrapper";
import { Link } from "react-router-dom";

export const AutoHub = () => {
  return (
    <section className="py-24">
      <Wrapper>
        <div className="flex flex-col gap-5 lg:flex-row">
          <RenderAutohubSection
            title="Are You Looking For a Car?"
            path="/catalog"
            type="buying"
          />
          <RenderAutohubSection
            title="Do You Want to Sell a Car?"
            path="/dashboard/submit-listing"
            type="selling"
          />
        </div>
      </Wrapper>
    </section>
  );
};

const RenderAutohubSection = ({ title, desc, path, type }) => {
  return (
    <div
      className={`p-20 rounded ${
        type === "selling"
          ? "bg-midnight-cian"
          : type === "buying"
          ? "bg-midnight-yellow"
          : null
      }`}
    >
      <h3 className="text-xl uppercase mb-3">{title}</h3>
      <p className="mb-14">
        We are committed to providing our customers with exceptional service.
      </p>
      <Link to={path} className="bg-black p-5 px-10 text-white rounded uppercase">
        {type === 'selling' ? 'selling' : type === 'buying' ? 'buying' : null}
      </Link>
    </div>
  );
};
