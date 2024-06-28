import pic2 from "../../assets/images/jpg/about-pic-2.jpg";
import pic3 from "../../assets/images/jpg/about-pic-3.jpg";
import pic4 from "../../assets/images/jpg/about-pic-4.jpg";
import pic5 from "../../assets/images/jpg/about-pic-5.jpg";
import pic6 from "../../assets/images/jpg/about-pic-6.jpg";
import pic7 from "../../assets/images/jpg/about-pic-7.jpg";
import pic8 from "../../assets/images/jpg/about-pic-8.jpg";
import pic9 from "../../assets/images/jpg/about-pic-9.jpg";

export const AboutPreviewGallery = () => {
  return (
    <div className="flex flex-wrap py-20">
      <div className="basis-96 flex-grow max-w-full px-2">
        <img src={pic9} alt="About Preview Gallery Item" className="mt-3 rounded"/>
        <img src={pic2} alt="About Preview Gallery Item" className="mt-3 rounded"/>
        <img src={pic3} alt="About Preview Gallery Item" className="mt-3 rounded"/>
      </div>
      <div className="basis-96 flex-grow max-w-full px-2">
        <img src={pic4} alt="About Preview Gallery Item" className="mt-3 rounded"/>
        <img src={pic5} alt="About Preview Gallery Item" className="mt-3 rounded"/>
        <img src={pic6} alt="About Preview Gallery Item" className="mt-3 rounded"/>
      </div>
      <div className="basis-96 flex-grow max-w-full px-2">
        <img src={pic7} alt="About Preview Gallery Item" className="mt-3 rounded"/>
        <img src={pic8} alt="About Preview Gallery Item" className="mt-3 rounded"/>
      </div>
    </div>
  );
};
