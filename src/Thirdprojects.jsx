/* eslint-disable react/no-unescaped-entities */
import ThirdProjectImage from "./gym-website.png";
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
    <div  className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Codew | Project overview</title>
      </Helmet>
      <div className=" flex flex-col mx-auto justify-center items-center mt-40 text-center">
        <h1
          data-aos="fade-up"
          loading="lazy"
          data-aos-duration="900"
          className="text-4xl font-Text font-medium leading-8 lg:text-5xl text-black"
        >
          Power gym :A website dedicated to <br /> everything related to
          weightlifting <br /> and sports.{" "}
        </h1>{" "}
      </div>
      <img
        data-aos="fade-up"
        data-aos-duration="900"
        className="w-3/4  object-cover rounded-sm mt-44 mx-auto"
        src={ThirdProjectImage}
      />
      <div  data-aos="fade-up"
        data-aos-duration="900" className=" w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start  mt-32">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          Whether you're a seasoned lifter or just starting your fitness
          journey, our website is your go-to resource for everything related to
          weightlifting and sports. From in-depth training guides and workout
          routines to expert tips and cutting-edge equipment reviews, we provide
          everything you need to push your limits and reach new heights.
        </h1>
      </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=" w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start  mt-14">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          Explore our vast collection of articles, video tutorials, and
          personalized workout plans, all designed to help you optimize your
          training. Get insights into the latest trends in fitness, discover the
          best gear for your goals, and join a thriving community of like-minded
          athletes sharing real-life stories, advice, and motivation.
        </h1>
      </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=" w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start  mt-14">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          Ready to unlock your full potential? Dive into our expert-curated
          content, stay up to date with the latest sports news, and access
          exclusive deals on top fitness products. Whether you’re aiming for
          personal bests in the gym or looking to enhance your overall athletic
          performance, we’re here to guide you every step of the way.{" "}
        </h1>
      </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=" w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start  mt-14">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg font-Text font-normal lg:text-xl text-neutral-600"
        >
          Join us and discover how you can elevate your fitness, transform your
          body, and push your limits with confidence. Your ultimate sports and
          weightlifting journey starts here!
        </h1>
      </div>

      <div 
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
     >          <h1
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
        data-aos-duration="900" className="flex flex-wrap justify-center mt-32  gap-52">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-11/12  md:w-96 md:h-96  border border-solid border-neutral-200 rounded-xl mt-14 m-auto  block text-start p-4 hover:bg-neutral-100 cursor-pointer"
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

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-11/12  md:w-96 md:h-96  border border-solid border-neutral-200 rounded-xl mt-14 m-auto  block text-start p-4 hover:bg-neutral-100 cursor-pointer "
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
