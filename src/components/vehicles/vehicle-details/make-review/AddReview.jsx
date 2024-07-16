export const AddReview = () => {
  return (
    <form>
      <h3 className="text-xl font-600 mb-8">Add a Review</h3>

      <div className="flex flex-col gap-5 mb-5 sm:flex-row">
        <input
          type="text"
          name="name"
          id=""
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="email"
          id=""
          className="w-full py-3 px-2 border border-gray-300 rounded-lg"
        />
      </div>
      <textarea name="" id="" placeholder="Describe..."></textarea>
      <button className="w-full max-w-48 uppercase p-3 bg-cape-green text-white rounded-md hover:bg-cape-light font-600 mt-8">
        add review
      </button>
    </form>
  );
};
