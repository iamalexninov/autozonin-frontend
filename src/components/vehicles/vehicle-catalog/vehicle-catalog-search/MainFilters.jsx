export const MainFilters = () => {
  return (
    <div className="flex flex-wrap gap-3 lg:flex-nowrap">
      <div className="w-full">
        <select
          name="condition"
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Condition</option>
        </select>
      </div>
      <div className="w-full">
        <select
          name="category"
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Category</option>
        </select>
      </div>
      <div className="w-full">
        <select
          name="type"
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Type</option>
        </select>
      </div>
      <div className="w-full">
        <select
          name="make"
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Make</option>
        </select>
      </div>
      <div className="w-full">
        <select
          name="model"
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Model</option>
        </select>
      </div>
      <button
        className="text-white bg-cape-green w-full rounded-full"
      >
        Search
      </button>
    </div>
  );
};
