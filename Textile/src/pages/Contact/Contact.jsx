import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../../pages/Contact/ContactForm";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation happens once
    });
  }, []);

  return (
    <div className="contact p-10 bg-gradient-to-r from-blue-50 to-green-50 min-h-screen">
      {/* Contact Section Header */}
      <div className="text-center m-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Reach out to us with your questions or
          feedback.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>
        <ContactForm />
      </div>

      {/* Contact Information */}
      <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="600">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h3>
        <p className="text-lg text-gray-600">
          123 Textile Road, Fabric City, 12345
        </p>
        <p className="text-lg text-gray-600">
          Email: contact@textilecompany.com
        </p>
        <p className="text-lg text-gray-600">Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default Contact;
