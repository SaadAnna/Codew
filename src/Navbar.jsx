import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the navbar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed mt-10 to align with the section */}
        <div className="flex justify-between items-center text-start">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="Landingpage"
                className="text-4xl font-Text font-medium lg:text-4xl text-black"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Codew
              </Link>
            </div>
          </div>

          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black"
              aria-expanded={isOpen ? "true" : "false"}
            >
              {!isOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-black w-11/12 mx-auto mt-6 text-center rounded">
          <div className="px-2 pt-2 pb-3">
            <Link
              to="/Landingpage"
              className="text-white font-Text block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/Servicespage"
              className="text-white font-Text block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              to="/Contactpage"
              className="text-white font-Text block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
            <Link
              to="/Aboutpage"
              className="text-white font-Text block px-3 py-2 rounded-md text-base font-medium"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
