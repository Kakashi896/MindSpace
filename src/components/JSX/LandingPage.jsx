import { motion } from "framer-motion"
import Navbar from './Navbar'
import Preloader from './Preloader'
import ChallengesSection from "./Challange"; 
import Features from "./Features"
import AboutUs from "./AboutUs"
import Footer from './Footer'
import Login from './LoginHome'
import { Link } from 'react-router-dom';


import "../../index.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Preloader />

      <div className="landing flex flex-col md:flex-row justify-between items-center pt-12 px-4  min-h-[100vh]">
  
  <motion.div 
    className="w-full md:w-2/3 mb-10 md:ml-5 md:mb-35 px-4"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 2.7, ease: 'easeOut' }}
  >
    <h1 className="text-3xl md:text-5xl lg:text-[4.1vw] font-extrabold leading-tight   text-[#1a1a1a]">
      Healthy Minds, Happy Lives,{" "}
      <span className="text-green-700">Mental Health</span> Consultancy
    </h1>
    <p className="mt-6 text-lg md:text-xl text-[#333]  font-medium">
    Guiding the mind from <span className="text-red-500">“kumati”</span> to <span className="text-green-700">“sumati”</span>
    </p>
    <Link to="/login-signup">
    <button className="mt-8 bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105">
      Get Started
    </button>
    </Link>
  </motion.div>

  <motion.div
    className="w-full md:w-[45vw] h-[50vh] md:h-[82vh] rounded-[2.5rem] bg-center bg-no-repeat bg-contain "
    style={{ backgroundImage: `url('/Photos/Hero.jpeg')` }}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, delay: 2.9, ease: 'easeOut' }}
  ></motion.div>
</div>

      <ChallengesSection />
      <Features/>
      <AboutUs/>
      <Login />
      <Footer /> 
    </>
  );
}

export default LandingPage;
