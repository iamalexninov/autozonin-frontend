import { AddReview } from "./AddReview";
import { Reviews } from "./Reviews";

export const MakeReview = () => {
  return (
    <div className="bg-white p-8 border border-gray-300 rounded-3xl mb-10">
      <h3 className="text-xl font-600 mb-5">3 Reviews</h3>
      <Reviews />
      <div className="w-full my-10 border border-b-gray-300"></div>
      <AddReview />
    </div>
  );
};
