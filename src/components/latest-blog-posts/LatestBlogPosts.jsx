import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/SectionHeaderWithLinkBtn";
// import { BlogCard } from "../cards/blog-card/BlogCard";

export const LatestBlogPosts = () => {
  return (
    <section className="py-24">
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Latest Blog Posts"
          linkPath="/blog"
          linkText="View All"
        />
        {/* TODO: Make a list, and fetch server data */}
        {/* <div className={styles.blog_cards}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div> */}
      </Wrapper>
    </section>
  );
};
