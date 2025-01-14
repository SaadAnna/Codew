import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fotter from "./Pages/Fotter";
/* eslint-disable react/no-unescaped-entities */
export default function Projectdetails() {
  useEffect(() => {
    AOS.init();
  }, []);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hsd7sgl",
        "template_0ljx3wf",
        e.target,
        "ihsMFKjornDQXuhwB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Codew | Project Details</title>
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
      >
        <h1 className="text-4xl font-Text font-medium lg:text-6xl text-black">
          Start your project
        </h1>
        <p className="text-neutral-600 text-xl lg:text-xl font-Text mt-6">
          Fill Out The Form Below To Begin Your Journey with Codew. We'll Review{" "}
          <br />
          Your Project Details And Get Back To You Within 24 Hours.{" "}
        </p>
      </div>
      <form
        data-aos="fade-up"
        data-aos-duration="900"
        className=" w-4/5 lg:w-fit lg:h-fit p-10 mx-auto mt-52  flex flex-col justify-start items-start text-start  rounded-lg border border-solid border-neutral-200 pb-16 pt-16 pl-8 bg-transparent  lg:flex lg:mt-72  lg:flex-col lg:justify-start lg:items-start lg:text-start  lg:rounded-lg lg:border lg:border-solid lg:border-neutral-200 lg:pb-3 lg:pt-3 lg:pl-8 lg:bg-transparent"
        onSubmit={sendEmail}
      >
        <div className="block gap-7 w-full  lg:flex lg:justify-between">
          <div className="flex flex-col text-start">
            <label
              htmlFor="fristname"
              className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800 lg:font-Text lg:font-medium "
            >
              {" "}
              First Name
            </label>
            <input
              id="fristname"
              autoComplete="given-name"
              placeholder="exemple:Jhon"
              className=" w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border placeholder:font-normal border-solid border-neutral-200 mt-2 focus:outline-none   focus:border-black rounded-lg lg:w-96 lg:h-9 lg:placeholder:text-base lg:font-Text lg:font-normal lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
              type="text"
              required
              name="first_name"
            />
          </div>
          <div className="flex flex-col text-start">
            <label
              htmlFor="lastname"
              className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800  lg:font-Text lg:font-medium "
            >
              {" "}
              Last Name
            </label>
            <input
              id="lastname"
              placeholder="exemple:Doe"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid  placeholder:font-normal border-neutral-200 rounded-lg    focus:outline-none focus:border-black lg:w-96 lg:h-9 lg:font-Text lg:font-normal lg:placeholder:text-base lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
              type="text"
              required
              name="last_name"
            />
          </div>
        </div>
        <label
          htmlFor="email"
          className="text-lg mt-5 text-neutral-800 font-Text font-medium "
        >
          Email
        </label>
        <input
          id="email"
          autoComplete="off"
          placeholder="exemple:jhon@gmail.com"
          className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base placeholder:font-normal  focus:outline-none focus:border-black"
          type="email"
          name="user-email"
          required
        />
        <label
          htmlFor="companyname"
          className="text-lg mt-5 text-neutral-800 font-Text font-medium "
        >
          Company Name (Optional)
        </label>
        <input
          id="companyname"
          placeholder="Company Name"
          className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border placeholder:font-normal border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base focus:outline-none   focus:border-black"
          type="text"
          name="user_company"
        />
        <label
          htmlFor="projecttype"
          className="text-lg mt-5 text-neutral-800 font-Text font-medium "
        >
          Project Type
        </label>
        <input
          id="projecttype"
          placeholder="eg: e-commerce, portfolio"
          className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
          type="text"
          name="user_project"
          required
        />
        <label
          htmlFor="projectdescription"
          className="text-lg mt-5 text-neutral-800 font-Text font-medium "
        >
          {" "}
          Project Description
        </label>
        <textarea
          id="projectdescription"
          placeholder="What Are The Site Specifications"
          className="w-full h-44 font-Text font-normal text-base pl-2 text-neutral-900 pt-2 border placeholder:font-normal  border-solid border-neutral-200 rounded-lg lg:placeholder:text-base mt-2 focus:outline-none   focus:border-black"
          name="message"
          required
        />
        <label
          htmlFor="budget"
          className="text-lg mt-5 text-neutral-800 font-Text font-medium "
        >
          {" "}
          Budget
        </label>
        <input
          id="budget"
          placeholder="eg: 100$-5000$"
          className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
          type="number"
          name="user_budget"
          required
        />
        <label
          htmlFor="projecttimeline"
          className="text-lg mt-5 text-neutral-800 font-Text font-medium "
        >
          {" "}
          Project Timeline
        </label>
        <input
          id="projecttimeline"
          placeholder="eg: 1 months, 5 months"
          className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
          type="number"
          name="user_timeline"
          required
        />
        <label
          htmlFor="aditionalinformation"
          className="text-lg mt-5 text-neutral-800 font-Text font-medium "
        >
          {" "}
          Aditional Information
        </label>
        <textarea
          id="aditionalinformation"
          placeholder="Any Other Details You'd Like Share About Your projects ?"
          className="w-full h-24 font-Text font-normal text-base pl-2 text-neutral-900 pt-2 border placeholder:font-normal  border-solid border-neutral-200 rounded-lg lg:placeholder:text-base mt-2 focus:outline-none   focus:border-black"
          name="user_additional"
          required
        />
        <input
          className="font-normal font-Text text-white mt-5 text-xl mx-auto w-full h-fit pl-20 pr-20 cursor-pointer  pt-2 pb-2 rounded-lg bg-black hover:bg-neutral-900"
          type="submit"
          value="Submit"
        />
      </form>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
      >
        <h1 className="text-5xl font-bold text-black font-Text">
          What happens next?
        </h1>
        <p className="text-neutral-600 text-lg font-Text mt-5">
          Our streamlined process to kickstart your project
        </p>
      </div>
      <div className=" max-w-7xl px-4 sm:px-6 lg:px-8  flex  flex-wrap justify-items-center itmes-center mt-44 gap-20   lg:gap-56 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="  block text-start gap-5 lg:flex lg:gap-5 "
        >
          <div className=" w-fit h-fit mb-4  p-3 rounded-full bg-black">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1 text-start justify-start items-start">
            <h3 className="text-xl font-Text font-medium text-black ">
              Confirmation Email
            </h3>
            <p className="text-neutral-600 text-lg font-Text mt-1">
              You'll receive an email confirming
              <br /> that we've received your project <br /> details.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" block text-start gap-5  lg:flex lg:gap-5 "
        >
          <div className="w-fit mb-4 h-fit p-3 rounded-full bg-black">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1 mb-2 text-start justify-start items-start">
            <h3 className="text-xl font-Text font-medium text-black ">
              Initial Review
            </h3>
            <p className="text-neutral-600 text-lg font-Text mt-1">
              Our team will review your <br />
              project details within 1-2 business
              <br /> days.
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-7xl px-4 sm:px-6 lg:px-8  flex  flex-wrap justify-items-center itmes-center mt-44 gap-20   lg:gap-56 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" block text-start gap-5 lg:flex lg:gap-5 "
        >
          <div className="w-fit mb-4 h-fit p-3 rounded-full bg-black">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1 text-start justify-start items-start">
            <h3 className="text-xl font-Text font-medium text-black ">
              Follow-up Call
            </h3>
            <p className="text-neutral-600 text-lg font-Text mt-1">
              We'll schedule a call to discuss <br /> your project in more
              detail and
              <br /> answer any questions.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" block text-start gap-5 lg:flex lg:gap-5 "
        >
          <div className="w-fit h-fit p-3 mb-4 rounded-full bg-black">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1 text-start justify-start items-start">
            <h3 className="text-xl font-Text font-medium text-black ">
              Proposal
            </h3>
            <p className="text-neutral-600 text-lg font-Text mt-1">
              Based on our discussion, we'll
              <br /> prepare and send you a detailed <br />
              project proposal.
            </p>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}
