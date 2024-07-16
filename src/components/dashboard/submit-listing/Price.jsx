export const Price = () => {
  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-3 pb-2 font-600">Price</h5>
      <div className="w-full">
        <input
          type="number"
          name="price"
          id="price"
          min={0}
          max={500000}
          placeholder="Ex:10 000€"
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
};
