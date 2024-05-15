import { Hero } from "../components/hero/Hero";
import { AutoHub } from "../components/auto-hub/AutoHub";
import { OurLeaders } from "../components/our-leaders/OurLeaders";

export const Team = () => {
  return (
    <>
      <Hero type="generic" page="Team" text="meet our team" />
      <OurLeaders />
      <AutoHub />
    </>
  );
};
