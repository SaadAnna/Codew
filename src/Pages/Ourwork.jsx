/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Ourwork(){
         useEffect(() => {
                AOS.init();
              }, []);
              const handleClick = () => {
                window.scrollTo(0, 0);
              };
    return(
        <div>
            
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
                        Temse
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
        </div>
    );
}