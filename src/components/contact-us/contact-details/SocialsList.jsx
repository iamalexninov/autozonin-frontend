import { SocialsListRecord } from "./SocialsListRecord";

export const SocialsList = () => {
  const socialsmockdata = ["facebook", "twitter", "linkedin"];

  return (
    <ul className="flex gap-5">
      {socialsmockdata.map((record) => (
        <SocialsListRecord key={record} record={record} />
      ))}
    </ul>
  );
};
