import FifthProjectImage from './www.reallygreatsite.com (8).png';
import { Link } from 'react-router-dom';
import AOS from "aos";
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
import "aos/dist/aos.css";
import Fotter from './Pages/Fotter';
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
      <div className=' flex flex-col mx-auto justify-center items-center mt-40 text-center'>
 
      <h1  data-aos="fade-up"
      loading="lazy"
        data-aos-duration="900" className='text-4xl font-Text font-medium  leading-8 lg:text-5xl text-black'>Prinit
:A site for everything <br /> related to print on <br /> demand.</h1>       </div>
      <img  data-aos="fade-up"
        data-aos-duration="900" className="w-3/4  object-cover rounded-sm mt-44 mx-auto" src={FifthProjectImage} />
      <div  data-aos="fade-up"
        data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-32'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal  lg:text-xl text-neutral-600'>
Looking to turn your designs into products or start your own custom merchandise store? Our print-on-demand website is your ultimate resource for everything you need to bring your creative ideas to life. Whether you’re an artist, entrepreneur, or just someone with a great idea, we make it easy to design, create, and sell high-quality products without any upfront costs or inventory.
</h1>
 </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal  lg:text-xl text-neutral-600'>
Explore a wide range of customizable products—from apparel and accessories to home decor and more. Our easy-to-use platform allows you to upload your designs, choose your products, and have them printed and shipped directly to your customers, hassle-free. With no minimum orders and on-demand printing, you can scale your business on your own terms.</h1>
 </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal  lg:text-xl text-neutral-600'>
Stay ahead of the curve with our expert tips on design trends, marketing strategies, and the latest in e-commerce. Plus, gain access to real-time analytics, product mockups, and a supportive community of creators.</h1>
 </div>
      <div  data-aos="fade-up"
        data-aos-duration="900" className=' w-3/4 h-fit bg-transparent flex flex-col items-center mx-auto text-start mt-14'>

<h1  data-aos="fade-up"
        data-aos-duration="900" className='text-lg font-Text font-normal  lg:text-xl text-neutral-600'>

Ready to start your print-on-demand journey? Let us help you create, sell, and grow—your creativity, our platform! </h1>
 </div>
     
 <div 
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
     >
<h1 data-aos="fade-up"
    data-aos-duration="900" className=" text-4xl font-Text font-medium  leading-8 lg:text-5xl text-black">
More projects.
</h1>
<p data-aos="fade-up"
        data-aos-duration="900" className="text-neutral-600 text-lg lg:text-xl font-Text mt-6">
Learn more about our projects        </p>
</div>
<div  data-aos="fade-up"
        data-aos-duration="900" className="flex flex-wrap justify-center mt-32  gap-52">
<div data-aos="fade-up"
    data-aos-duration="900" className="w-11/12  md:w-96 md:h-96  border border-solid border-neutral-200 rounded-xl mt-14   block text-start p-4 hover:bg-neutral-100 cursor-pointer">
  <sapn className="font-Text font-meduim text-lg text-neutral-500">Novembre, 2020</sapn>
  <h1 className="text-3xl mt-4 font-Text font-medium  leading-8 lg:text-3xl text-black">
    Power Gym
  </h1>
  <p  className="text-neutral-600 text-lg lowercase lg:text-xl font-Text mt-6">
  A Gym Website Where You Can Work Out On
Your Own With A Personal Trainer Or Even Order
Anything Related To Sports From
Anywhere In The World. 
</p>
<div className="flex gap-1 cursor-pointer"> 
<Link
                to="/Thirdproject"
                className="font-Text text-lg  text-black relative top-7"
                onClick={handleClick}
              >
Read more              </Link> <svg className="w-7 h-w-7 text-black mt-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</div>
</div>

<div data-aos="fade-up"
    data-aos-duration="900" className="w-11/12  md:w-96 md:h-96  border border-solid border-neutral-200 rounded-xl mt-14   block text-start p-4 hover:bg-neutral-100 cursor-pointer ">
  <sapn className="font-Text font-meduim text-lg text-neutral-500">Decembre, 2021</sapn>
  <h1 className="text-3xl mt-4 font-Text font-medium  leading-8 lg:text-3xl text-black">
   Naturalit
  </h1>
  <p  className="text-neutral-600 text-lg lowercase lg:text-xl font-Text mt-6">
  A Site To Buy And Order Everything Related To Plants And Natural Products
That Are Harvested Directly From Nature And
Sold On This Site With
High Quality. 
</p>
<div className="flex gap-1 cursor-pointer"> 
<Link
                to="/Secondproject"
                className="font-Text text-lg  text-black relative top-7"
                onClick={handleClick}
              >
Read more              </Link> <svg className="w-7 h-w-7 text-black mt-8 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</div>
</div>


</div> 
<Fotter/>
    </div>
    )
}