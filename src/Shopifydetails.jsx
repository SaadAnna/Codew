/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Fotter from "./Pages/Fotter";
export default function Shopifydetails() {
  
  
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
                
                <title>Codew | Shopify Details</title>
                
            </Helmet>
          <div  data-aos="fade-up"
        data-aos-duration="900" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
        >
            <h1 className="text-4xl font-Text font-medium  lg:text-6xl text-black">
            Request your custom <br /> shopify store            </h1>
            <p className="text-neutral-600 text-xl lg:text-xl font-Text mt-6">
            Fill out the form below to start your journey<br />
             towards a powerful, customized Shopify store.
            </p>
              </div>
          <form  data-aos="fade-up"
        data-aos-duration="900"
        className=" w-4/5 lg:w-fit lg:h-fit p-10 mx-auto mt-52  flex flex-col justify-start items-start text-start  rounded-lg border border-solid border-neutral-200 pb-16 pt-16 pl-8 bg-transparent  lg:flex lg:mt-72  lg:flex-col lg:justify-start lg:items-start lg:text-start  lg:rounded-lg lg:border lg:border-solid lg:border-neutral-200 lg:pb-3 lg:pt-3 lg:pl-8 lg:bg-transparent"
        onSubmit={sendEmail}
          >
            <div className="block gap-7 w-full  lg:flex lg:justify-between">
              <div className="flex flex-col text-start">
                <label htmlFor='fullname' className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800 lg:font-Text lg:font-medium ">
                  {" "}
                 Full Name
                </label>
                <input
                  id="fullname"
                  autoComplete="given-name"
                  placeholder="Jhon Doe"
                  className=" w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border placeholder:font-normal border-solid border-neutral-200 mt-2 focus:outline-none   focus:border-black rounded-lg lg:w-96 lg:h-9 lg:placeholder:text-base lg:font-Text lg:font-normal lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
                  type="text"
                  required
                  name="first_name"
                />
              </div>
              <div className="flex flex-col text-start">
                <label htmlFor="email" className=" text-lg text-neutral-800 font-Text font-medium mt-7 lg:text-lg lg:text-neutral-800  lg:font-Text lg:font-medium ">
                  {" "}
                  Email
                </label>
                <input
                  id="email"
                  placeholder="exemple:jhon@gmail.com"
                  className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid  placeholder:font-normal border-neutral-200 rounded-lg    focus:outline-none focus:border-black lg:w-96 lg:h-9 lg:font-Text lg:font-normal lg:placeholder:text-base lg:text-base lg:pl-2 lg:text-neutral-900 lg:border lg:border-solid lg:border-neutral-200 lg:mt-2 lg:focus:outline-none   lg:focus:border-black lg:rounded-lg"
                  type="text"
                  required
                  name="user_email"
                />
              </div>
            </div>
            <label htmlFor="BusinessName" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            Business Name
            </label>
            <input
              id="BusinessName"
              autoComplete="off"
              placeholder="exemple:Codew"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base placeholder:font-normal  focus:outline-none focus:border-black"
              type="email"
              name="user_company"
              required
            />
            <label htmlFor="StoreType" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
            Store Type
            </label>
            <input
              id="Store Type"
              placeholder="eg: electronics, fashion, food"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border placeholder:font-normal border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base focus:outline-none   focus:border-black"
              type="text"
              name="user_project"
              required
            />
            <label htmlFor="ProductsNumber" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              Estimated Number of Products
            </label>
            <input
             id="projecttype"
              placeholder="eg: 100"
              className="w-full h-9 font-Text font-normal text-base pl-2 text-neutral-900 border border-solid border-neutral-200 rounded-lg mt-2 lg:placeholder:text-base  focus:outline-none   focus:border-black"
              type="number"
              name="last_name"
              required
            />
            <label htmlFor="CustomizationNeeds" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              {" "}
              Customization Needs
            </label>
            <textarea
              id="Customization Needs"
              placeholder="Describe any specific features or customizations you need"
              className="w-full h-32 font-Text font-normal text-base pl-2 text-neutral-900 pt-2 border placeholder:font-normal  border-solid border-neutral-200 rounded-lg lg:placeholder:text-base mt-2 focus:outline-none   focus:border-black"
              name="message"
              required
            />
              <label htmlFor="aditionalinformation" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
              {" "}
              Aditional Information
            </label>
            <textarea
              id="aditionalinformation"
              placeholder="Any Other Details You'd Like Share About Your projects ?"
              className="w-full h-32 font-Text font-normal text-base pl-2 text-neutral-900 pt-2 border placeholder:font-normal  border-solid border-neutral-200 rounded-lg lg:placeholder:text-base mt-2 focus:outline-none   focus:border-black"
              name="user_additional"
              required
            />
            <label htmlFor="budget" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
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
            <label htmlFor="projecttimeline" className="text-lg mt-5 text-neutral-800 font-Text font-medium ">
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
            <input
              className="font-normal font-Text text-white mt-5   text-xl m-auto w-full h-fit pl-20 pr-20 cursor-pointer  pt-2 pb-2 rounded-lg bg-black out-of-range:-none hover:bg-neutral-900"
              type="submit"
              value="Submit"
            />
          </form>
          <div  data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-72 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
         > 
    
          <h1 className="text-5xl font-bold text-black font-Text">Why Us?
          </h1>
          <p className="text-neutral-600 lowercase text-xl font-Text mt-5">Why Choose Our Shopify Development Services?</p>
          </div>
          <div className="flex flex-wrap justify-center mt-32  gap-20 mx-auto">
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  mx-auto mt-20 flex flex-col text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:flex lg:flex-col lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
</svg>

<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Custom Design</h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Unique, responsive designs<br /> tailored to your brand and optimized for conversions.
            </p>
          </div>
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  mx-auto mt-20 flex flex-col text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:block lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
</svg>

<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Clean Code</h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Custom features and integrations<br /> to enhance your store's  <br />capabilities.
            </p>
          </div>
         </div>
          <div className="flex flex-wrap justify-center mt-10 mx-auto  gap-20">
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  mx-auto mt-20 flex flex-col text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:block lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clipRule="evenodd"/>
</svg>

<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Speed </h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Fast-loading, SEO-friendly store<br /> s for better user experience and search rankings            </p>
          </div>
          
          <div  data-aos="fade-up"
        data-aos-duration="900" className="  mx-auto mt-20 flex flex-col text-start w-11/12 md:w-96 md:h-96 p-5 border border-solid border-neutral-200 rounded-lg lg:block lg:text-start lg:w-96 lg:h-72 lg:p-5 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg">
          <div className="flex gap-4">
          <svg className="w-10 h-10 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
</svg>


<h1 className="text-3xl  font-Text font-medium lg:text-3xl text-black">Ongoing Support</h1>
</div>
<p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
Dedicated assistance for updates<br /> maintenance, and future enhancements.
            </p>
          </div>
          </div>
        <Fotter/>
    </div>
      );
}