import { useState } from "react";
import { InputField } from "../../../global/fields/InputField";
import { Textarea } from "../../../global/fields/Textarea";

export const AddReview = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('');
  const [review,setReview] = useState('')

  return (
    <form>
      <h3 className="text-xl font-600 mb-8">Add a Review</h3>
      <div className="flex flex-col gap-5 mb-5 sm:flex-row">
        <InputField type="text" name="username" label="Enter Username.." placeholder="iamalex" setValues={setUsername}/>
        <InputField type="text" name="email" label="Enter Email.." placeholder="alex@gmail.com" setValues={setEmail}/>
      </div>
      <Textarea label="Review" name="review" placeholder="Add Review" setValues={setReview}/>
      <button className="w-full max-w-48 uppercase p-3 bg-cape-green text-white rounded-md hover:bg-cape-light font-600 mt-8">
        add review
      </button>
    </form>
  );
};
