import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-semibold text-gray-800">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-semibold text-gray-800">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-lg font-semibold text-gray-800"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-2 border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message"
          rows="5"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
