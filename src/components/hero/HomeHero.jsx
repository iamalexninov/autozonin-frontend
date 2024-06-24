import { RenderField } from "../global/fields/RenderField";

export const HomeHero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern flex justify-center items-center">
      <div className="px-5 py-9 w-full xl:w-2/4">
        <h1 className="text-center mb-10 text-4xl text-white uppercase">
          find your perfect vehicle
        </h1>
        <form className="bg-white rounded flex flex-col justify-between p-4 md:flex-row mb-10">
          <RenderField
            attributes={{ type: "select", placeholder: "Conditions" }}
          />
          <RenderField attributes={{ type: "select", placeholder: "Makers" }} />
          <RenderField attributes={{ type: "select", placeholder: "Models" }} />
          <button className="bg-cape-green w-full md:w-48 text-center p-4 rounded text-white uppercase">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
