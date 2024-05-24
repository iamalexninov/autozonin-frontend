import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { BlogCard } from "../../cards/blog-card/BlogCard";

export const ArticlesListing = () => {
  return (
    <section className={styles.articles}>
      <Wrapper>
        <div className={styles.articles_records}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Wrapper>
    </section>
  );
};
