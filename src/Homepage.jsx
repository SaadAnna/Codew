/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ThirdCoustmer from "./Third_coustmer.png";
import FirstCoustmer from "./First_coustmer.png";
import "aos/dist/aos.css";
export default function Homepage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
  
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Helmet>
        <title>Codew | Home</title>
      </Helmet> 
      <div
  data-aos="fade-up"
  data-aos-duration="900"
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
>
  <h1 className="text-4xl font-Text font-medium  lg:text-6xl text-black">
    Unleash and advance<br/>
    your business or project<br/>
    to the furthest limits<br/>
    possibilities with Codew<br/>
  </h1>
  <p className="text-neutral-600 text-xl lg:text-xl font-Text mt-6">
    Transform your ideas into a fully interactive and engaging<br/>
    website with our expert front-end development tailored to<br/>
    meet your specific needs.<br/>
  </p>
  <Link
    to="/Choseservice"
    className="text-white font-Text text-lg  bg-black relative top-10 pl-10 pr-10 pt-3 pb-3 rounded-sm hover:bg-neutral-900"
    onClick={handleClick}
  >
    Get Started{" "}
  </Link>
</div>

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
          Development Shopify Stores with High-Quality And Add E-commerce Features 
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-96 flex flex-col w-full h-full justify-start items-start justify-items-start text-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className=" text-4xl font-Text font-medium lg:text-5xl text-black"
        >
          What We've Built
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-neutral-600 text-lg lg:text-xl font-Text mt-6"
        >
          Bold designs, flawless execution.{" "}
        </p>
      </div>
      <div className=" flex flex-wrap justify-start mx-auto mt-32  gap-20">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <sapn className="font-Text font-meduim text-lg text-neutral-500">
            Octobre, 2022
          </sapn>
          <h1 className="text-3xl mt-4 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Monaro
          </h1>
          <p className="text-neutral-600 text-lg lowercase lg:text-xl font-Text mt-6">
            Front-End Website For Remote Travel Where You Can Book
            Accommodation, Food And Also Flights To And Airport From Anywhere In
            The World
          </p>
          <div className="flex gap-1 cursor-pointer">
            <Link
              to="/Firstproject"
              className="font-Text text-lg  text-black relative top-4"
              onClick={handleClick}
            >
              Read more{" "}
            </Link>{" "}
            <svg
              className="w-7 h-w-7 text-black mt-5 dark:text-white"
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <sapn className="font-Text font-meduim text-lg text-neutral-500">
            Decembre, 2021
          </sapn>
          <h1 className="text-3xl mt-4 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Naturalit
          </h1>
          <p className="text-neutral-600 text-lg lowercase lg:text-xl font-Text mt-6">
            A Site To Buy And Order Everything Related To Plants And Natural
            Products That Are Harvested Directly From Nature And Sold On This
            Site With High Quality.
          </p>
          <div className="flex gap-1 cursor-pointer">
            <Link
              to="/Secondproject"
              className="font-Text text-lg  text-black relative top-4"
              onClick={handleClick}
            >
              Read more{" "}
            </Link>{" "}
            <svg
              className="w-7 h-w-7 text-black mt-5 dark:text-white"
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-auto mt-32  gap-20">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <sapn className="font-Text font-meduim text-lg text-neutral-500">
            Novembre, 2020
          </sapn>
          <h1 className="text-3xl mt-4 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Power Gym
          </h1>
          <p className="text-neutral-600 text-lg lowercase lg:text-xl font-Text mt-6">
            A Gym Website Where You Can Work Out On Your Own With A Personal
            Trainer Or Even Order Anything Related To Sports From Anywhere In
            The World.
          </p>
          <div className="flex gap-1 cursor-pointer">
            <Link
              to="/Thirdproject"
              className="font-Text text-lg  text-black relative top-4"
              onClick={handleClick}
            >
              Read more{" "}
            </Link>{" "}
            <svg
              className="w-7 h-w-7 text-black mt-5 dark:text-white"
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12 m-auto p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
        >
          <sapn className="font-Text font-meduim text-lg text-neutral-500">
            Novembre, 2020
          </sapn>
          <h1 className="text-3xl mt-4 font-Text font-medium m-auto leading-8 lg:text-3xl text-black">
            Printit
          </h1>
          <p className="text-neutral-600 lowercase text-lg lg:text-xl font-Text mt-6">
            A Website For Printing On Demand For All The Products That The
            Customer Wants, And Also With The Designs That The Customer Chooses
          </p>
          <div className="flex gap-1 cursor-pointer">
            <Link
              to="/Fourthproject"
              className="font-Text text-lg  text-black relative top-4"
              onClick={handleClick}
            >
              Read more{" "}
            </Link>
            <svg
              className="w-7 h-w-7 text-black mt-5 dark:text-white"
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>

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

      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col mt-56 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:flex-row  md:justify-between md:items-center md:text-center lg:mt-72"
      >
        <div className=" mt-9  flex flex-col text-center justify-start items-start">
          <h1 className="text-2xl font-Text font-medium  text-black">Codew</h1>
          <p className="text-neutral-600 text-start text-base font-Text mt-4">
            make your business more famous by <br /> designing a wonderful and
            attractive <br />
            website with codew.
          </p>
          <div className="flex gap-2 mt-3">
            <a target="_blank" href="https://x.com/CodewFront_end">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/codew_dev/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
            <a target="_blank" href="https://www.youtube.com/@codew_dev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
              </svg>
            </a>
          </div>
        </div>
        <div className=" mt-16 flex flex-col text-start justify-start items-start">
          <h1 className="text-xl font-Text font-medium  text-black">
            Quick Links
          </h1>
          <ul>
            <li>
              <Link
                to="/Homepage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                Home
              </Link>
              <Link
                to="/Servicespage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                Services
              </Link>
              <Link
                to="/Aboutpage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                About Us
              </Link>
              <Link
                to="/Contactpage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className=" mt-16  mr-14 flex flex-col text-start  justify-start items-start">
          <h1 className="text-xl font-Text font-medium  text-black">Contact</h1>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://x.com/CodewFront_end"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Twitter
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/codew_dev/"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Instagram
              </a>
              <a
                target="_blank"
                href="https://github.com/Codew-dev"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Git Hub
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@codew_dev"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-11/12 mt-14 bg-neutral-200  mx-auto " />
      <div className=" mt-14 pb-10   text-center  block justify-start items-start lg:pb-10 lg:flex lg:justify-between lg:items-start lg:mt-14 lg:m-auto">
        <h3 className=" text-neutral-600 text-base font-Text block lg:ml-14 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Build By Codew.
        </h3>
        <h3 className=" text-neutral-600    text-base font-Text block lg:mr-10 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Copyright © 2024 Codew App Company.
        </h3>
      </div>
    </div>
  );
}
