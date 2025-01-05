import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Textile Company. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-white hover:text-gray-200 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-200 mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
