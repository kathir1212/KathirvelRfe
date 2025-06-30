import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://serverbe-dydt.onrender.com/contact/contactform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });

        // ✅ Show Flowbite modal
        const modal = document.getElementById('successModal');
        if (modal) {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        }
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error.');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="font-sans py-15 px-[5%] text-white"
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-7 text-4xl tracking-tight font-extrabold text-center dark:text-white"
        >
          Contact Us
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-8 text-center"
        >
          <div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="h-14 w-full text-lg rounded-lg bg-gray-800 p-4 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="h-14 w-full text-lg rounded-lg bg-gray-800 p-4 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2"
              placeholder="Email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="bg-slate-800 block p-2.5 w-full text-lg rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black bg-[#80ed99] hover:bg-green-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Send message
          </button>
        </motion.form>
      </div>

      {/* ✅ Success Modal */}
      <div
        id="successModal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden fixed top-0 left-0 right-0 z-50 justify-center items-center w-full inset-0 h-modal h-full bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md h-full flex items-center justify-center">
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5"
              onClick={() => {
                const modal = document.getElementById('successModal');
                modal.classList.add('hidden');
                modal.classList.remove('flex');
              }}
            >
              ❌
            </button>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
              ✅
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Successfully sent your message!
            </p>
            <button
              type="button"
              className="py-2 px-3 text-sm font-medium text-black bg-[#80ed99] rounded-lg"
              onClick={() => {
                const modal = document.getElementById('successModal');
                modal.classList.add('hidden');
                modal.classList.remove('flex');
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
