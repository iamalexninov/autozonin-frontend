import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionHeaderWithLinkBtn } from "../global/section-header-link-btn/SectionHeaderWithLinkBtn";
import { BlogCard } from "../cards/blog-card/BlogCard";

export const LatestBlogPosts = () => {
  return (
    <section className={styles.blog}>
      <Wrapper>
        <SectionHeaderWithLinkBtn
          header="Latest Blog Posts"
          linkPath="/blog"
          linkText="View All"
        />
        <div className={styles.blog_cards}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Wrapper>
    </section>
  );
};
