/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Servicespage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Codew | Services</title>
      </Helmet>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 flex flex-col w-full h-full justify-start items-start justify-items-start text-start "
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-4xl font-Text font-medium lg:text-6xl text-black"
        >
          Get the best services from
          <br /> Codew and increase your <br /> project's chances of success.{" "}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-neutral-600 text-xl lg:text-xl font-Text mt-6"
        >
          We create stunning, responsive, and high-performance
          <br /> front-end solutions tailored to your business needs.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-80 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
      >
        <h1 className="text-4xl font-Text font-medium leading-8 lg:text-5xl text-black">
          Our expertise{" "}
        </h1>
        <p className="text-neutral-600 text-lg lg:text-xl font-Text mt-6">
          Our most important experience in the <br /> field of front-end design
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-32 mx-auto gap-20 justify-items-center items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
          </svg>
          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            Tailwindcss
          </h4>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
            <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
          </svg>

          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            React
          </h4>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
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
              d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
            />
          </svg>

          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            Design
          </h4>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
          </svg>

          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            HTML
          </h4>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-44 mx-auto gap-20 justify-items-center items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
          </svg>

          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            CSS
          </h4>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
              clipRule="evenodd"
            />
          </svg>

          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            Git Hub
          </h4>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3.87H4v16h8v-13h5v13h3v-16h-8Z"
            />
          </svg>

          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            NPM
          </h4>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className=" w-72 h-40 border border-solid border-neutral-200 rounded-lg block justify-center text-center mt-5 items-center cursor-pointer hover:bg-neutral-100 lg:w-44 lg:h-40 lg:border lg:border-solid lg:border-neutral-200 lg:rounded-lg lg:block lg:justify-center lg:text-center lg:items-center  lg:cursor-pointer lg:hover:bg-neutral-100"
        >
          <svg
            className="w-10 h-10 m-auto mt-3 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 20v-5h2v6.988H3V15h1.98v5H17Z" />
            <path d="m6.84 14.522 8.73 1.825.369-1.755-8.73-1.825-.369 1.755Zm1.155-4.323 8.083 3.764.739-1.617-8.083-3.787-.739 1.64Zm3.372-5.481L10.235 6.08l6.859 5.704 1.132-1.362-6.859-5.704ZM15.57 17H6.655v2h8.915v-2ZM12.861 3.111l6.193 6.415 1.414-1.415-6.43-6.177-1.177 1.177Z" />
          </svg>

          <h4 className="font-Text text-black font-semibold text-xl mt-4">
            Stackoverflow
          </h4>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-4xl font-Text font-medium leading-8 lg:text-5xl text-black"
        >
          Our services{" "}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-lg text-neutral-600 lg:text-lg font-Text mt-6"
        >
          We provide our services with high quality
          <br /> ratings and reasonable prices.{" "}
        </p>
      </div>

      <div className=" flex flex-wrap justify-center mt-32 gap-20  lg:gap-52 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12  p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
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
          <h1 className="text-3xl mt-3 font-Text font-medium  leading-8 lg:text-3xl text-black">
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
          className="   w-11/12  p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
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

          <h1 className="text-3xl mt-3 font-Text font-medium  leading-8 lg:text-3xl text-black">
            Front-End development
          </h1>
          <p className="text-neutral-600 lowercase font-normal text-xl font-Text mt-4">
            Build Responsive And Interactive Web Applications Using Modern
            Front-End Technologies.
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center mt-32  gap-20 lg:gap-52 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="   w-11/12  p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
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

          <h1 className="text-3xl mt-3 font-Text font-medium  leading-8 lg:text-3xl text-black">
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
          className="   w-11/12  p-5 mt-10 md:w-96 md:h-96 border border-solid border-neutral-200 lg:p-5 rounded-lg cursor-pointer"
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

          <h1 className="text-3xl mt-3 font-Text font-medium  leading-8 lg:text-3xl text-black">
            Shopify Stores Development
          </h1>
          <p className="text-neutral-600 lowercase font-normal text-xl font-Text mt-4">
            Development Shopify Stores with High-Quality And
            Add E-commerce Features
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex justify-center items-center text-center mx-auto mt-14"
      >
        <Link
          to="/Choseservice"
          className="text-white font-Text text-lg bg-black relative top-10 pl-14 pr-14 pt-3 pb-3  rounded-sm hover:bg-neutral-900"
          onClick={handleClick}
        >
          Get Started{" "}
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-72 flex flex-col w-full h-full justify-start items-start justify-items-start text-start "
      >
        <h1 className="text-4xl font-Text font-medium leading-8 lg:text-5xl text-black">
          Our process{" "}
        </h1>
        <p className="text-lg text-neutral-600 lg:text-lg font-Text mt-6">
          The processes we take to create your website with <br /> the best
          possible quality{" "}
        </p>
      </div>

      <div className="flex flex-wrap mt-40 mx-auto ">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-center items-center mt-9 mx-auto"
        >
          <div className="w-16 h-16 m-auto rounded-full mt-4 bg-neutral-300 flex items-center justify-center mb-4 z-10">
            <svg
              className="w-10 h-10 text-gray-950 dark:text-white"
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
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <h1 className="text-black  font-Text font-bold text-2xl">Search</h1>
          <p className="text-neutral-600 font-normal lowercase text-base font-Text mt-1">
            We Analyze Your Needs And <br />
            Project Requirements.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-center items-center mt-9 mx-auto"
        >
          <div className="w-16 h-16 m-auto rounded-full mt-4 bg-neutral-300 flex items-center justify-center mb-4 z-10">
            <svg
              className="w-10 h-10  text-gray-950 dark:text-white"
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
          </div>
          <h1 className="text-black  font-Text font-bold text-2xl">Design</h1>
          <p className="text-neutral-600 font-normal lowercase text-base font-Text mt-1">
            Our Team Creates Intuitive And <br />
            Appealing UI/UX Designs.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-center items-center mt-9 mx-auto"
        >
          <div className="w-16 h-16 m-auto rounded-full mt-4 bg-neutral-300 flex items-center justify-center mb-4 z-10">
            <svg
              className="w-10 h-10 text-gray-950 dark:text-white"
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
          </div>
          <h1 className="text-black  font-Text font-bold text-2xl">
            Development
          </h1>
          <p className="text-neutral-600 font-normal lowercase text-base font-Text mt-1">
            We Build Your Front-End Using <br />
            Cutting-Edge Technologies.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-center items-center mt-9 mx-auto"
        >
          <div className="w-16 h-16 m-auto rounded-full mt-4 bg-neutral-300 flex items-center justify-center mb-4 z-10">
            <svg
              className="w-10 h-10 text-gray-950 dark:text-white"
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
                d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
              />
            </svg>
          </div>
          <h1 className="text-black  font-Text font-bold text-2xl">Testing</h1>
          <p className="text-neutral-600 font-normal lowercase text-base font-Text mt-1">
            Rigorous Testing Ensures A Bug-Free
            <br /> And Smooth User Experience.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-center items-center mt-9 mx-auto"
        >
          <div className="w-16 h-16 m-auto rounded-full mt-4 bg-neutral-300 flex items-center justify-center mb-4 z-10">
            <svg
              className="w-10 h-10 text-gray-950 dark:text-white"
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
                d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              />
            </svg>
          </div>
          <h1 className="text-black  font-Text font-bold text-2xl">
            Deployment
          </h1>
          <p className="text-neutral-600 font-normal lowercase text-base font-Text mt-1">
            We Launch Your Project Using <br />
            Efficient Deployment Strategies.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-center items-center mt-9 mx-auto"
        >
          <div className="w-16 h-16 m-auto rounded-full mt-4 bg-neutral-300 flex items-center justify-center mb-4 z-10">
            <svg
              className="w-10 h-10 m-auto text-gray-950 dark:text-white"
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
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
          </div>
          <h1 className="text-black  font-Text font-bold text-2xl">
            Maintenance
          </h1>
          <p className="text-neutral-600 font-normal lowercase text-base font-Text mt-1">
            Ongoing Support And Updates Keep <br /> Your Project Running
            Smoothly.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 flex flex-col w-full h-full justify-start items-start justify-items-start text-start  "
      >
        <h1 className="font-Text text-black  mt-3 font-bold text-3xl md:text-5xl">
          Ready to elevate your front-end?
        </h1>
        <p className="text-neutral-600 font-meduim lowercase text-lg lg:text-xl font-Text mt-11">
          Lets discuss how we can help bring your vision <br /> to life with
          cutting-edge front-end development.
        </p>
        <Link
          to="/Contactpage"
          className="text-white font-Text text-lg bg-black relative top-10 p-3 rounded-sm hover:bg-neutral-800"
          onClick={handleClick}
        >
          Get In Touch
        </Link>
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
