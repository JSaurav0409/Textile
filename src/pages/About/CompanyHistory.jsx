import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HistoryImage from "../../assets/images/TextileHistory.jpg";
import VisionImage from "../../assets/images/vision.jpg";
import MissionImage from "../../assets/images/mission.jpg";

const CompanyHistory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Allow animation to trigger every time it comes into view (upward or downward scroll)
      offset: 100, // Offset to trigger animation a bit earlier
    });
  }, []);

  return (
    <section className="company-history p-10 bg-gradient-to-r from-gray-100 to-white">
      {/* Section Header */}
      <h2
        className="text-4xl font-bold text-center text-primary mb-20"
        data-aos="fade-up" // Adding fade-up animation on scroll
      >
        Our History
      </h2>

      {/* First Row: Image Left, Text Right */}
      <div className="mt-8 pt-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div
          className="image"
          data-aos="fade-right" // Fade-right animation for the left image
          data-aos-duration="1000"
        >
          <div className="relative group">
            <img
              src={HistoryImage}
              alt="Company History 1"
              className="w-full h-80 object-cover rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white font-bold text-lg">Our Journey Begins</p>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div
          className="text"
          data-aos="fade-left" // Fade-left animation for the text section
          data-aos-duration="1000"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Our journey began over two decades ago with a small workshop
            producing premium fabrics. Today, we’re a trusted name in the
            industry, delivering exceptional textiles worldwide.
          </p>
          <ul className="mt-6 list-disc pl-6 text-gray-600">
            <li>Founded in 2000 with a passionate team of 5</li>
            <li>Pioneered eco-friendly fabrics in 2005</li>
            <li>Expanded globally in 2010</li>
            <li>Celebrated 20 years of excellence in 2020</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 my-12 w-1/2 mx-auto" />

      {/* Second Row: Text Left, Image Right */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div
          className="text"
          data-aos="fade-right" // Fade-right animation for the left text section
          data-aos-duration="1000"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our vision is to create sustainable, innovative, and versatile
            textiles that empower industries and inspire creativity. We are
            committed to excellence and environmental stewardship.
          </p>
        </div>

        {/* Right Image Section */}
        <div
          className="image"
          data-aos="fade-left" // Fade-left animation for the image section
          data-aos-duration="1000"
        >
          <div className="relative group">
            <img
              src={VisionImage}
              alt="Company Vision"
              className="w-full h-80 object-cover rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white font-bold text-lg">Driving Innovation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 my-12 w-1/2 mx-auto" />

      {/* Third Row: Image Left, Text Right */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div
          className="image"
          data-aos="fade-right" // Fade-right animation for the image section
          data-aos-duration="1000"
        >
          <div className="relative group">
            <img
              src={MissionImage}
              alt="Company Mission"
              className="w-full h-80 object-cover rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white font-bold text-lg">Empowering Growth</p>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div
          className="text"
          data-aos="fade-left" // Fade-left animation for the text section
          data-aos-duration="1000"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide high-quality, sustainable, and innovative
            textile solutions that enhance lifestyles, empower industries, and
            foster global connections. We are dedicated to maintaining the
            highest standards of quality while championing environmental
            responsibility and social impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
