import { Link } from "react-router-dom";

export const HomeHero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern flex justify-center items-center">
      <div className="flex flex-col items-center">
        <p className="mb-3 text-md text-gray-300">Explore our vehicle catalog</p>
        <h1 className="text-center mb-10 text-5xl text-white uppercase">
          find your perfect vehicle
        </h1>
        <Link to="/catalog" className="bg-cape-light uppercase text-md font-600 text-white p-4 w-full max-w-56 text-center">Explore</Link>
      </div>
    </section>
  );
};
