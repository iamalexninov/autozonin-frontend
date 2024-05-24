import { GenericHero } from "../components/hero/generic-hero/GenericHero";
import { ArticlesListing } from "../components/listings/articles-listing/ArticlesListing";

export const Blog = () => {
  return (
    <>
      <GenericHero
        header="Blog"
        title="Understanding Common Vehicle Categories: A Comprehensive Guide"
      />
      <ArticlesListing />
    </>
  );
};
