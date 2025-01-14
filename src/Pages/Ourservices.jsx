import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Ourservices() {
     useEffect(() => {
            AOS.init();
          }, []);
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-96 flex flex-col w-full h-full justify-start items-start justify-items-start text-start">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-4xl font-Text font-medium lg:text-5xl text-black"
        >
          What We Offer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-neutral-600 text-lg lg:text-xl font-Text mt-6"
        >
          A brief introduction to our core services{" "}
        </p>
      </div>

      <div className=" flex flex-wrap justify-start mx-auto mt-32  gap-20">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <svg
            className="w-14 h-14  mt-4 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M15.514 3.293a1 1 0 0 0-1.415 0L12.151 5.24a.93.93 0 0 1 .056.052l6.5 6.5a.97.97 0 0 1 .052.056L20.707 9.9a1 1 0 0 0 0-1.415l-5.193-5.193ZM7.004 8.27l3.892-1.46 6.293 6.293-1.46 3.893a1 1 0 0 1-.603.591l-9.494 3.355a1 1 0 0 1-.98-.18l6.452-6.453a1 1 0 0 0-1.414-1.414l-6.453 6.452a1 1 0 0 1-.18-.98l3.355-9.494a1 1 0 0 1 .591-.603Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-3xl mt-3 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Create Modern User Interface
          </h1>
          <p className="text-neutral-600 lowercase font-normal text-xl font-Text mt-4">
            Create Intuitive And Visually Appealing User Interfaces That Enhance
            User Experience.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <svg
            className="w-14 h-14  mt-4 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>

          <h1 className="text-3xl mt-3 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Front-End development
          </h1>
          <p className="text-neutral-600 lowercase font-normal text-xl font-Text mt-4">
            Build Responsive And Interactive Web Applications Using Modern
            Front-End Technologies.
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center mx-auto mt-32  gap-20">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <svg
            className="w-14 h-14  mt-4 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
            />
          </svg>

          <h1 className="text-3xl mt-3 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Performance Optimization
          </h1>
          <p className="text-neutral-600 lowercase font-normal text-xl font-Text mt-4">
            Optimize Your Web Applications For Speed And Efficiency To Improve
            User Satisfaction And SEO.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <svg
            className="w-14 h-14  mt-4  text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
            />
          </svg>

          <h1 className="text-3xl mt-3 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Shopify Store Development
          </h1>
          <p className="text-neutral-600 lowercase font-normal text-xl font-Text mt-4">
            Development Shopify Stores with High-Quality And Add E-commerce
            Features
          </p>
        </div>
      </div>
        </div>
    );
}