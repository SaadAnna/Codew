import ThirdCoustmer from "./Third_coustmer.png";
import FirstCoustmer from "./First_coustmer.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Usersreview(){
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
          What our customers say
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-neutral-600 text-lg lg:text-xl font-Text mt-6"
        >
          What they said about our work{" "}
        </p>
      </div>
      <div className=" flex flex-wrap justify-start mx-auto mt-32  gap-20">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-11/12 md:w-96 md:h-96 text-start border border-solid border-neutral-200 rounded-xl p-6 mt-14 m-auto"
        >
          <div className="flex items-center mb-4 gap-4">
            <img
              className="w-10 h-10 object-contain rounded-full"
              src={FirstCoustmer}
            />
            <h1 className=" font-Text font-medium leading-8 lg:text-xl text-black ">
              Mike sendler
            </h1>
          </div>
          <p className="text-neutral-600 text-lg lg:text-xl font-Text mt-6">
            i liked the way codew team dealt with me. they were always available{" "}
            to communicate and modify according to my requests. the final design
            was smooth and responsive
          </p>
          <div className="flex items-center mb-4 mt-4">
            <svg
              className="w-6 h-6 text-yellow-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-11/12 md:w-96 md:h-96 text-start border border-solid border-neutral-200 rounded-xl p-6 mt-14 m-auto"
        >
          <div className="flex items-center mb-4 gap-4">
            <img
              className="w-10 h-10 object-contain rounded-full"
              src={ThirdCoustmer}
            />
            <h1 className=" font-Text font-medium leading-8 lg:text-xl text-black ">
              Jhon alex
            </h1>
          </div>
          <p className="text-neutral-600 text-lg lg:text-xl font-Text mt-6">
            codew provided a great service in terms of design and communication.
            i expected more innovation in some aspects, but overall i am
            satisfied with the results
          </p>
          <div className="flex items-center mb-4 mt-4">
            <svg
              className="w-6 h-6 text-yellow-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          </div>
        </div>
      </div>
        </div>
    );
}