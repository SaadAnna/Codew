import CompanyImage from "./pexels-olia-danilevich-4974915 (1).jpg";
import FisrtProjectImage from "./www.reallygreatsite.com (5).png";
import SecondProjectImage from "./command-website.png";
import FirstCoustmer from "./First_coustmer.png";
import ThirdCoustmer from "./Third_coustmer.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Homepage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Codew - Home</title>
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="ml-5 block text-start justify-start items-start mt-28 lg:ml-8"
      >
        <h1 className="text-4xl font-Text font-medium lg:text-6xl text-black">
          Unleash And Advance Your <br /> Business Or Project To The <br />
          Furthest Limits Possibilitie <br />
          With Codew
        </h1>
        <p className="text-neutral-600 text-xl font-Text mt-6">
          Our Responsive Customizable Website Templates Help
          <br /> You Create A Professional Modern Website That
          <br /> Showcases Your Brand And Engages
          <br /> Your Audience.
        </p>
        <Link
          to="/Choseservice"
          className="text-white font-Text text-lg bg-black relative top-10 p-3 rounded-sm hover:bg-neutral-900"
          onClick={handleClick}
          >
          Get Started
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="ml-5 block text-start justify-start items-start mt-44 lg:ml-8"
      >
        <h1 className="text-4xl font-Text font-medium lg:text-5xl text-black">
          Our Services
        </h1>
        <p className="text-lg text-neutral-600 lg:text-xl font-Text mt-4">
          Web Design And Development Services To <br /> Meet Your Business
          Needs.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className=" block  items-center   m-auto lg:flex lg:justify-between lg:items-center lg:text-center lg:mt-16"
      >
        <div className="m-auto  w-10/12 cursor-pointer border border-neutral-200 rounded-2xl border-solid  block justify-center items-center text-start mt-20 pt-5 pb-5 pl-3 pr-3  lg:w-80 lg:h-80 lg:pl-4 lg:pr-4 lg:pb-8 lg:pt-8 lg:cursor-pointer lg:border lg:border-neutral-200 lg:rounded-2xl lg:border-solid  lg:block lg:justify-center lg:items-center lg:text-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z" />
          </svg>{" "}
          <h1 className="font-Text text-xl text-black mt-3 font-medium">
            Website Programming
          </h1>
          <p className="font-Text font-normal text-lg text-neutral-600 mt-3">
            Our Company Designs And Programs <br />
            The Front-End Of Websites With High <br /> Accuracy, Excellent
            Quality, And <br /> Fantastic Prices.
          </p>
        </div>
        <div className=" m-auto  w-10/12 cursor-pointer border border-neutral-200 rounded-2xl border-solid  block justify-center items-center text-start mt-20 pt-5 pb-5 pl-3 pr-3 lg:w-80 lg:h-80 lg:pl-4 lg:pr-4 lg:pb-8 lg:pt-8 lg:cursor-pointer lg:border lg:border-neutral-200 lg:rounded-2xl lg:border-solid  lg:block lg:justify-center lg:items-center lg:text-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6.373 16.199c3.809.315 2.446-3.73 5.97-3.769l1.526 1.274c.381 4.6-5.244 5.626-7.496 2.495zm8.293-3.396l-1.549-1.293c.457-2.18 1.854-4.188 3.267-5.51l3.362 2.804c-1.041 1.636-3.023 3.154-5.08 3.999z" />
          </svg>{" "}
          <h1 className="font-Text text-xl text-black mt-3 font-medium">
            Graphic Design
          </h1>
          <p className="font-Text font-normal text-lg text-neutral-600 mt-3">
            In Addition To Website Programming <br />
            Our Company Also Pre-Designs <br />
            The Front-End Of Your <br />
            Website.
          </p>
        </div>
        <div className="m-auto  w-10/12 cursor-pointer border border-neutral-200 rounded-2xl border-solid  block justify-center items-center text-start mt-20 pt-5 pb-5 pl-3 pr-3 lg:w-80 lg:h-80 lg:pl-4 lg:pr-4 lg:pb-8 lg:pt-8 lg:cursor-pointer lg:border lg:border-neutral-200 lg:rounded-2xl lg:border-solid  lg:block lg:justify-center lg:items-center lg:text-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z" />
          </svg>{" "}
          <h1 className="font-Text text-xl text-black mt-3 font-medium">
            IT Support
          </h1>
          <p className="font-Text font-normal text-lg text-neutral-600 mt-3">
            Our IT Support Team Is Available <br />
            24/7 To Help You With Any Technical
            <br />
            Issues Or Questions You <br />
            May Have.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className=" block m-auto mt-32 lg:flex  lg:justify-between lg:items-center lg:text-center lg:mt-32"
      >
        <div data-aos="fade-up"
        data-aos-duration="900"
        className="ml-5 block text-start justify-start items-start lg:ml-8">
          <h1 className="text-3xl font-Text  font-medium lg:text-4xl text-black">
          Exceptional
          Front-End 
          </h1>
          <p className="text-neutral-600 text-lg font-Text mt-6"> 
          At Codew We Specialize In Building Visually Stunning<br />
          And Highly Performant Web Applications.
          </p>
          <Link
            to="/Choseservice"
            className="text-white font-Text text-lg bg-black relative top-10 p-3 rounded-sm hover:bg-neutral-900"
            onClick={handleClick}
            >
            Get Started
          </Link>
        </div>
        <img data-aos="fade-up"
        data-aos-duration="900"
          className=" w-11/12 m-auto mt-32 lg:ml-5 lg:w-1/2 lg:mr-7 lg:rounded-lg"
          src={CompanyImage}
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="ml-5 block text-start justify-start items-start mt-28 lg:ml-8"
      >
        <h1 className="text-4xl font-Text font-medium lg:text-5xl text-black">
          Our Projects
        </h1>
        <p className="text-lg text-neutral-600 lg:text-xl font-Text mt-4">
          Check Out Some Of Our Latest Work And
          <br /> See How We Can Help Bring Your Vision To Life.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className=" block justify-center items-center text-center mt-32 lg:flex lg:justify-between lg:items-center lg:text-center lg:mt-32"
      >
        <div 
                data-aos="fade-up"
        data-aos-duration="900"
         className="block  m-auto rounded-lg text-start justify-start w-3/4 p-2 cursor-pointer border border-solid border-neutral-200 lg:block lg:rounded-lg lg:text-start lg:justify-start lg:w-96 lg:h-full lg:mt-10 lg:p-2 lg:cursor-pointer lg:border lg:border-solid lg:border-neutral-200">
          <img className="w-11/12 lg:w-full m-auto h-72 rounded-lg" src={FisrtProjectImage} />
          <h1 className="text-3xl font-Text font-medium mt-3 text-black">
            Travel Website
          </h1>
          <p className="text-neutral-600 text-lg font-Text mt-4">
            Front-End Website For Remote Travel Where You Can Book
            Accommodation, Food And Also <br />
            Flights To And Airport
            <br />
            From Anywhere In <br />
            The World
          </p>
        </div>
        <div         data-aos="fade-up"
        data-aos-duration="900" className="block m-auto mt-10  rounded-lg text-start justify-start w-3/4 p-2 cursor-pointer border border-solid border-neutral-200 lg:block lg:rounded-lg lg:text-start lg:justify-start lg:w-96 lg:h-full lg:pb-16 lg:p-2 lg:cursor-pointer lg:border lg:border-solid lg:border-neutral-200">
          <img className="w-11/12 m-auto box-border   lg:w-full h-72 rounded-lg" src={SecondProjectImage} />
          <h1 className="text-3xl font-Text font-medium mt-3 text-black">
            Order Website
          </h1>
          <p className="text-neutral-600 text-lg font-Text mt-4">
            A Company Website Through Which You <br />
            Can Order Anything You See From Any <br />
            Store And Anywhere In The <br />
            World.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex justify-center items-center text-center mt-14"
      >
        <Link
          to="/Workpage"
          className="text-white font-Text text-lg bg-black relative top-10 pl-14 pr-14 pt-3 pb-3  rounded-sm hover:bg-neutral-900"
          onClick={handleClick}
          >
          Learn More{" "}
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="ml-5 block text-start justify-start items-start mt-28 lg:ml-8"
      >
        <h1 className="text-4xl font-Text font-medium lg:text-5xl text-black">
          What Our Customers Say
        </h1>
        <p className="text-lg text-neutral-600 lg:text-xl font-Text mt-4">
          Hear From Our Satisfied Customers About Their Experience
          <br /> With Our Services.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className=" block m-auto justify-center items-center  lg:flex lg:justify-around lg:items-center lg:text-center lg:mt-32"
      >
        <div className="  w-10/12 block p-3 cursor-pointer text-start m-auto mt-10 rounded-lg gap-2 lg:w-96 lg:h-fit border border-solid border-neutral-200">
          <img className="w-16 h-16 rounded-full" src={FirstCoustmer} />
          <div className="flex gap-1 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
          </div>
          <h1 className="text-3xl font-Text font-medium mt-3 text-black">
            Mike Sendler
          </h1>
          <p className="text-neutral-600 text-lg font-Text mt-4">
            I Liked The Way Codew Team Dealt With Me. They Were Always Available{" "}
            <br />
            To Communicate And Modify According To My Requests. The Final Design
            <br />
            Was Smooth And Responsive
          </p>
        </div>

        <div className="  w-10/12 block p-3 text-start cursor-pointer m-auto mt-10 rounded-lg gap-2 lg:w-96 lg:h-fit border border-solid border-neutral-200">
          <img className="w-16 h-16 rounded-full" src={ThirdCoustmer} />
          <div className="flex gap-1 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
          </div>
          <h1 className="text-3xl font-Text font-medium mt-3 text-black">
            Melissa Miner
          </h1>

          <p className="text-neutral-600 text-lg font-Text mt-4">
            Codew Provided A Great Service In Terms Of Design And Communication.
            <br />
            I Expected More Innovation In Some Aspects, But Overall <br />
            I Am Satisfied With
            <br />
            The Results.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="  block mt-56 text-start ml-4 lg:flex lg:justify-between lg:items-center lg:text-center lg:mt-72 lg:ml-8"
      >
        <div className=" mt-10  lg:block lg:text-start  lg:justify-start lg:items-start">
          <h1 className="text-2xl font-Text font-medium  text-black">Codew</h1>
          <p className="text-neutral-600 text-base font-Text mt-4">
          Make Your Business More Famous By <br /> Designing A
          Wonderful And Attractive <br />Website With Codew.
          </p>
          <div className="flex gap-2 mt-3">
            <a href="#">
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
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
            <a href="#">
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
        <div className=" mt-16 lg:block lg:text-start lg:justify-start lg:items-start">
          <h1 className="text-2xlxl font-Text font-medium  text-black">
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
                to="/Workpage"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
                onClick={handleClick}
              >
                Work
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
        <div className=" mt-14  mr-14 lg:block lg:text-start lg:mr-14 lg:justify-start lg:items-start">
          <h1 className="text-2xlxl font-Text font-medium  text-black">
            Contact
          </h1>
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
                href="#"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Instagram
              </a>
              <a
                href="#"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Git Hub
              </a>
              <a
                href="#"
                className=" text-neutral-600 hover:text-black  text-base font-Text mt-4 block lg:text-neutral-600 lg:text-base lg:font-Text lg:mt-4 lg:block lg:hover:text-black"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-11/12 mt-14 bg-gray-200  m-auto " />
      <div className=" mt-14 pb-10 text-center  block justify-start items-start lg:pb-10 lg:flex lg:justify-between lg:items-start lg:mt-14 lg:m-auto">
        <h3 className=" text-neutral-600     text-base font-Text block lg:ml-10 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Build By Codew.
        </h3>
        <h3 className=" text-neutral-600    text-base font-Text block lg:mr-10 lg:text-neutral-600 lg:text-base lg:font-Text ">
          Copyright © 2024 Codew App Company.
        </h3>
      </div>
    </>
  );
}
