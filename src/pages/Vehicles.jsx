import { GenericHero } from "../components/hero/generic-hero/GenericHero";
import { Catalogues } from "../components/catalogues/Catalogues";

export const Vehicles = () => {
  return (
    <>
      <GenericHero header="Catalogue" title="Vehicles Catalogue" />
      <Catalogues type="vehicles" />
    </>
  );
};
