import React from "react";

const Form = () => {
  return (
    <div className="p-4">
      <form action="" className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mr-auto mb-2">
              Full Name
            </label>
            <input
              required
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
              required
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
              required
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
              name=""
              id=""
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            >
              <option value="event_type">Wedding Ceremony</option>
              <option value="event_type">Birthday Party</option>
              <option value="event_type">Formal Dinner</option>
              <option value="event_type">Graduation Ceremony</option>
              <option value="event_type">Funerals</option>
              <option value="event_type">Cooperate Meeting</option>
              <option value="event_type">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Event Date
            </label>
            <input
              required
              type="date"
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Event Location
            </label>
            <input
              required
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
              required
              name=""
              id=""
              placeholder="Send us a message"
              className="w-full lg:w-[300px] p-2 h-[160px] border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mr-auto mb-2">
              Budget
            </label>
            <input
              required
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
              name=""
              id=""
              className="w-full lg:w-[300px] p-2 border rounded-[6px] focus:border-0 focus:outline-0 focus:ring-2 focus:ring-yellow-500"
            >
              <option value="contact">SMS</option>
              <option value="contact">Voice Call</option>
              <option value="contact">WhatsApp</option>
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
