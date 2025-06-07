// ContactUs.jsx
import { motion } from "framer-motion";
import Navbar from "../JSX/Navbar";

export default function ContactUs() {
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-yellow-100 to-teal-200  flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white  sm:p-10 rounded-3xl shadow-xl"
      >

        <div className="text-center mb-8">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-green-700 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            Need a hand? We're here 🌿
          </motion.h1>
          <p className="text-gray-500">
            Whether it's a question, feedback, or just some love—drop us a line!
          </p>
        </div>

        
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
          <select className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:ring-2 focus:ring-green-400 outline-none">
            <option>Select Topic</option>
            <option>Feedback</option>
            <option>Issue or Bug</option>
            <option>Spiritual Query</option>
            <option>Therapy Request</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Your Message..."
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none resize-none"
            rows="4"
          ></textarea>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-3 px-6 rounded-2xl shadow-md transition"
          >
            Send Message 💌
          </motion.button>
        </form>

        {/* Footer Message */}
        <div className="text-center text-sm text-gray-600 mt-6">
          🤗 You’re not alone. Arogyam is always with you.
        </div>
      </motion.div>
    </div>
    </>
  );
}
