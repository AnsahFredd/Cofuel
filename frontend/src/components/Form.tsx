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
              <option value="" disabled selected>
                Wedding Ceremony
              </option>
              <option value="" disabled selected>
                Birthday Party
              </option>
              <option value="" disabled selected>
                Formal Dinner
              </option>
              <option value="" disabled selected>
                Graduation Ceremony
              </option>
              <option value="" disabled selected>
                Funerals
              </option>
              <option value="" disabled selected>
                Cooperate Meeting
              </option>
              <option value="" disabled selected>
                Other
              </option>
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
              <option value="">SMS</option>
              <option value="">Voice Call</option>
              <option value="">WhatsApp</option>
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
