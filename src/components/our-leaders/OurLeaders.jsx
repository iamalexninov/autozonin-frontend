import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionTextContent } from "../global/section-text-content/SectionTextContent";
import { MemberAlex } from "./our-leaders-member/MemberAlex";
import { MemberPeter } from "./our-leaders-member/MemberPeter";

export const OurLeaders = () => {
  return (
    <section className={styles.team}>
      <Wrapper>
        <SectionTextContent
          title="our leaders"
          paragraph="Meet our visionary leaders, driving our team towards excellence with their expertise, passion, and commitment."
        />
        <MemberAlex />
        <MemberPeter />
      </Wrapper>
    </section>
  );
};
