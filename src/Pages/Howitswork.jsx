import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Howitswork (){
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-96 flex flex-col w-full h-full justify-start items-start justify-items-start text-start">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-4xl font-Text font-medium lg:text-5xl text-black"
        >
          How it works?
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-neutral-600  text-lg lg:text-xl font-Text mt-6"
        >
          Share your project. We handle the rest.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-wrap justify-center items-center text-center  gap-20">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-70 h-70 block m-auto mt-12 text-center"
        >
          <span className="font-Text text-5xl font-normal text-black m-auto">
            1
          </span>
          <h1 className="text-3xl mt-4 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Design
          </h1>
          <p className="text-neutral-600 text-lg lg:text-lg font-Text mt-4">
            Designers create prototypes <br /> and mockups for your <br />
            approval.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-70 h-70 block m-auto mt-12 text-center"
        >
          <span className="font-Text text-5xl font-normal text-black m-auto">
            2
          </span>
          <h1 className="text-3xl mt-4 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Code
          </h1>
          <p className="text-neutral-600 text-lg lg:text-lg font-Text mt-4">
            We create clean code that <br /> meets all your needs to create{" "}
            <br /> your website.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-70 h-70 block m-auto mt-12 text-center"
        >
          <span className="font-Text text-5xl font-normal text-black m-auto">
            3
          </span>
          <h1 className="text-3xl mt-4 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Puplish
          </h1>
          <p className="text-neutral-600 text-lg lg:text-lg font-Text mt-4">
            We publish your site in all the search <br /> engines you want and
            it is <br /> reviewed every day.
          </p>
        </div>
      </div>
        </div>
    );
}