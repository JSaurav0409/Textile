import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg">
          &copy; 2025 Textile Company. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="text-white hover:text-gray-200 mx-2 text-xs sm:text-sm md:text-base"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 mx-2 text-xs sm:text-sm md:text-base"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
