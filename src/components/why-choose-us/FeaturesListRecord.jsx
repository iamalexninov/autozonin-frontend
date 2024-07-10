export const FeaturesListRecord = ({ record }) => {
  return (
    <li className="max-w-72">
      <p className="mb-3 text-base font-600">{record.type}</p>
      <p>{record.desc}</p>
    </li>
  );
};
