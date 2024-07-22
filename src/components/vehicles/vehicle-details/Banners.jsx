export const Banners = ({ banner }) => {
  return (
    <div className="w-full my-8">
      {banner ? <img src={banner} alt="Vehicle Banner" className="rounded-3xl"/> : <p>Loading...</p>}
    </div>
  );
};
