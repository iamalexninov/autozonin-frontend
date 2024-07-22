export const Info = ({ title, tagline }) => {
  return (
    <div>
      <h5 className="text-3xl font-600 mb-2">{title ? title : "Loading..."}</h5>
      <p className="text-lg text-slate-600">
        {tagline ? tagline : "Loading..."}
      </p>
    </div>
  );
};
