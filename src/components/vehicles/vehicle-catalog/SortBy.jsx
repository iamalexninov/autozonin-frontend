export const SortBy = () => {
  return (
    <div className="flex items-center flex-wrap justify-between mb-8 gap-3">
      <p className="text-base text-gray-500">Available Vehicles: 24</p>
      <div className="flex items-center gap-3">
        <p className="text-base text-gray-500">Sort By:</p>
        <select className="w-full py-3 px-2 border border-gray-300 rounded-lg">
          <option value="">Sort</option>
        </select>
      </div>
    </div>
  );
};
