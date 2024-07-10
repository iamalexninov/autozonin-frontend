import { Wrapper } from "../global/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";
import { BrandsList } from "./BrandsList";

export const ExplorePremiumBrands = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Explore Our Premium Brands"
          linkPath="/catalogue"
          linkText="View"
        />
        <BrandsList />
      </Wrapper>
    </section>
  );
};
