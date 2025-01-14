/* eslint-disable react/no-unescaped-entities */
import FourthProjectImage from "./www.reallygreatsite.com (7).png";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Fotter from "./Pages/Fotter";
export default function Secondproject() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Codew | Project overview</title>
      </Helmet>
      <div className=" flex flex-col justify-center items-center mt-40 mx-auto text-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-4xl font-Text font-medium  leading-8 lg:text-5xl text-black"
        >
          Naturalit :A site to buy <br />
          everything related to natural <br />
          foods{" "}
        </h1>{" "}
      </div>
      <img
        data-aos="fade-up"
        loading="lazy"
        data-aos-duration="900"
        className="w-3/4  object-cover rounded-sm mt-44 mx-auto"
        src={FourthProjectImage}
      />
      <div  data-aos="fade-up"
          data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-32'>
      <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          Welcome to your one-stop shop for all things natural and wholesome!
          Whether you're looking for organic pantry staples, farm-fresh produce,
          or nutritious snacks, we provide a wide selection of high-quality
          natural foods to support a healthy and sustainable lifestyle.{" "}
        </h1>
      </div>
      <div  data-aos="fade-up"
          data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          From organic fruits and vegetables to minimally processed grains,
          nuts, and seeds, our store is dedicated to offering foods that are
          free from artificial additives and preservatives. We carefully source
          products from trusted farmers and producers who prioritize
          sustainability, ethical farming practices, and the highest nutritional
          standards.{" "}
        </h1>
      </div>
      <div  data-aos="fade-up"
          data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          Explore a variety of categories including organic groceries,
          gluten-free and plant-based options, superfoods, and more. Our
          collection is designed to cater to every diet, from vegan and
          vegetarian to paleo and keto, ensuring you find the best natural foods
          that fit your lifestyle.{" "}
        </h1>
      </div>
      <div  data-aos="fade-up"
          data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          With easy browsing, personalized recommendations, and community
          reviews, finding the right natural foods has never been simpler.
          Nourish your body with nature’s finest ingredients—shop with us today
          and embrace a healthier, more natural way of living!{" "}
        </h1>
      </div>

      <div 
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
     >        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className=" text-4xl font-Text font-medium leading-8 lg:text-5xl text-black"
        >
          More projects.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-neutral-600 text-lg lg:text-xl font-Text mt-6"
        >
          Learn more about our projects{" "}
        </p>
      </div>
      <div  data-aos="fade-up"
          data-aos-duration="900" className="flex flex-wrap justify-center mt-32 mx-auto  gap-52">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-11/12  md:w-96 md:h-96  border border-solid border-neutral-200 rounded-xl  mt-14  block text-start p-4 hover:bg-neutral-100 cursor-pointer"
        >
          <sapn className="font-Text font-meduim text-lg text-neutral-500">
            Novembre, 2020
          </sapn>
          <h1 className="text-3xl mt-4 font-Text font-medium  leading-8 lg:text-3xl text-black">
            Printit
          </h1>
          <p className="text-neutral-600 lowercase text-lg lg:text-xl font-Text mt-6">
            A Website For Printing On Demand For All The Products That The
            Customer Wants, And Also With The Designs That The Customer Chooses
          </p>
          <div className="flex gap-1 cursor-pointer">
            <Link
              to="/Fourthproject"
              className="font-Text text-lg  text-black relative top-7"
              onClick={handleClick}
            >
              Read more{" "}
            </Link>
            <svg
              className="w-7 h-w-7 text-black mt-8 dark:text-white"
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
          className="w-11/12  md:w-96 md:h-96  border border-solid border-neutral-200 rounded-xl mt-14   block text-start p-4 hover:bg-neutral-100 cursor-pointer"
        >
          <sapn className="font-Text font-meduim text-lg text-neutral-500">
            Octobre, 2022
          </sapn>
          <h1 className="text-3xl mt-4 font-Text font-medium  leading-8 lg:text-3xl text-black">
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
              className="font-Text text-lg  text-black relative top-7"
              onClick={handleClick}
            >
              Read more{" "}
            </Link>{" "}
            <svg
              className="w-7 h-w-7 text-black mt-8 dark:text-white"
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

    <Fotter/>
    </div>
  );
}
