import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Form = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding Ceremony",
    eventDate: "",
    eventLocation: "",
    message: "",
    budget: "",
    contactMethod: "SMS",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    toast.success("Form submitted successfully", {
      duration: 5000,
      style: {
        border: "1px solid #a38e13",
        padding: "12px",
        color: "#a38e13",
        fontSize: "16px",
        borderRadius: "10px",
      },
      iconTheme: {
        primary: "#a38e13",
        secondary: "#FFFAEE",
      },
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "Wedding Ceremony",
      eventDate: "",
      eventLocation: "",
      message: "",
      budget: "",
      contactMethod: "SMS",
    });
  };
  return (
    <div className="p-4">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mr-auto mb-2">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              placeholder="example@email.com"
              type="email"
              className="w-full lg:w-[300px] p-2  border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              required
              onChange={handleChange}
              placeholder="Enter phone number"
              type="tel"
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Event Type
            </label>
            <select
              required
              name="eventType"
              onChange={handleChange}
              value={formData.eventType}
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            >
              <option value="Wedding Ceremony">Wedding Ceremony</option>
              <option value="Birthday Parties">Birthday Parties</option>
              <option value="Formal Dinner">Formal Dinner</option>
              <option value="Graduations">Graduations</option>
              <option value="Funerals">Funerals</option>
              <option value="Baby Outdooring">Baby Outdooring</option>
              <option value="Cooperate Meeting">Cooperate Meeting</option>
              <option value="Trade Fairs & Exhibition">
                Trade Fairs & Exhibition
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Event Date
            </label>
            <input
              name="eventDate"
              value={formData.eventDate}
              required
              onChange={handleChange}
              type="date"
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Event Location
            </label>
            <input
              name="eventLocation"
              value={formData.eventLocation}
              required
              onChange={handleChange}
              placeholder="eg: New York"
              type="text"
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex flex-col md:col-span-2 lg:col-span-1">
            <label htmlFor="" className="mr-auto mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              required
              onChange={handleChange}
              name="message"
              placeholder="Send us a message"
              className="w-full lg:w-[300px] p-2 h-[160px] border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Budget
            </label>
            <input
              name="budget"
              value={formData.budget}
              required
              onChange={handleChange}
              type="text"
              placeholder="Enter your budget"
              className="w-full lg:w-[300px] p-2  border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Preferred Contact Method
            </label>
            <select
              required
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            >
              <option value="SMS">SMS</option>
              <option value="Voice Call">Voice Call</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-[200px] h-[50px] bg-[#141212] px-3 py-3 mt-6 mb-16 text-center text-white rounded-md font-[700] text-xl cursor-pointer hover:bg-[#111111f3] transition-transform duration-300 hover:scale-105 hover:bg-opacity-80"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
