export const CardBanner = ({ banner }) => {
  return (
    <div className="h-64">
      <img src={banner} alt="Vehicle Image" className="object-cover h-full"/>
    </div>
  );
};
