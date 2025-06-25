import React from 'react';

function Contact() {
  return (
    <section className="font-sans  py-15 px-[5%] text-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-7 text-4xl tracking-tight font-extrabold text-center  dark:text-white">
          Contact Us
        </h2>
       
        <form action="#" className="space-y-8 text-center">
          <div>
           
            <input
              type="name"
              id="name"
              className="bg-slate-800 shadow-sm bg-gray-50   text-lg rounded-lg semi-bold
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-50h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-neon placeholder:text-gray-400 focus:outline-none focus:ring-2"
              placeholder="Name"
              required
            />
          </div>
          <div>
           
            <input
              type="email"
              id="email"
              className="h-14 w-full text-lg  rounded-lg bg-gray-800 p-4 text-gray-50 ring-neon placeholder:text-gray-400 focus:outline-none focus:ring-2"
              placeholder="Email"
              required
            />
          </div>
          <div className="sm:col-span-2">
           
            <textarea
              id="message"
              rows="6"
              className="bg-slate-800 block p-2.5 w-full text-lg    bg-gray-50 rounded-lg shadow-sm 
              focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black bg-[#80ed99] rounded-lg
            hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-[#80ed99] dark:hover:bg-[#80ed99] dark:focus:ring-blue-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
