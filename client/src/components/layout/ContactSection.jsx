import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mx-4 bg-white shadow-lg rounded-md my-4">
      <section className="max-w-6xl mx-auto px-6 py-16 md:flex md:justify-between">
        {/* Left Side - Contact Details */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            Feel free to use the form or drop us an email. Old-fashioned phone
            calls work too.
          </p>

          <div className="mt-6 space-y-4 text-gray-800">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-orange-500 text-xl" />
              <span className="text-lg">9045171501</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-orange-500 text-xl" />
              <span className="text-lg">vaibhavchitranshbdn@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <span className="text-lg">
                Hostel-6 MNIT <br /> Malaviya Nagar, Jaipur
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Last"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="xxx-xxx-xxxx (Optional)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Type your message..."
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
