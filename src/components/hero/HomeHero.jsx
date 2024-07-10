import { RenderField } from "../global/fields/RenderField";

export const HomeHero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern flex justify-center items-center">
      <div className="px-5 py-9 w-full xl:w-2/4">
        <h1 className="text-center mb-10 text-4xl text-white uppercase">
          find your perfect vehicle
        </h1>
        <form className="bg-white rounded flex flex-col justify-between gap-3 p-4 md:flex-row mb-10">
          <div className="w-full max-w-56">
            <RenderField
              attributes={{
                type: "select",
                placeholder: "Condition",
              }}
            />
          </div>
          <div className="w-full max-w-56">
            <RenderField
              attributes={{ type: "select", placeholder: "Makers" }}
            />
          </div>
          <div className="w-full max-w-56">
            <RenderField
              attributes={{ type: "select", placeholder: "Models" }}
            />
          </div>
          <button className="bg-cape-green w-full md:w-48 text-center p-3 rounded text-white uppercase">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
