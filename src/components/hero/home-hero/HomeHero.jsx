import { HeroSearch } from "./HeroSearch";

export const HomeHero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern flex justify-center items-center w-full">
      <div className="flex flex-col items-center">
        <p className="mb-3 text-md text-gray-300">
          Explore our vehicle catalog
        </p>
        <h1 className="text-center mb-10 text-5xl text-white uppercase">
          find your perfect vehicle
        </h1>
        <HeroSearch />
      </div>
    </section>
  );
};
