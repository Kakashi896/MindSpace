import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Featured = () => {
  const featureData = [
    {
      title: "AI-Powered Mental Health Coach",
      image: "https://plus.unsplash.com/premium_vector-1682269300973-8070788723b8?q=80&w=2242&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D",
      path: "/ai-coach",
      description: "Talk to an empathetic AI coach that adapts to your mood, needs, and mindset—offering personalized guidance, support, and daily check-ins."
    },
    
    {
      title: "Virtual Meditation Room",
      image: "https://img.freepik.com/premium-photo/man-yellow-shirt-is-doing-yoga_1013369-93214.jpg?semt=ais_hybrid&w=740",
      path: "/meditation-room",
      description: "Enter immersive meditation spaces like gardens, ocean shores, or starry nights—each designed to calm your mind and elevate your focus."
    },
    {
      title: "Mythology-Based Healing",
      image: "https://img.freepik.com/free-photo/anime-style-character-meditating-contemplating-mindfulness_23-2151476702.jpg?semt=ais_hybrid&w=740",
      path: "/mythology-healing",
      description: "Discover ancient wisdom from Hindu mythology, with stories and symbolic lessons that mirror modern-day struggles and offer healing insights."
    },
    {
      title: "Vent Out Zone",
      image: "https://images.unsplash.com/photo-1723688958678-6c471759df97",
      path: "/mindful-gaming",
      description: "Play soothing, mindful games that promote emotional regulation, self-reflection, and focus—all while having fun and leveling up mentally."
    },
    {
      title: "Personal Specialist Corner",
      image: "https://img.freepik.com/free-vector/flat-patient-doctor-with-syringe-taking-blood-sample-tube-laboratory-woman-doing-medical-test-procedure-analysis-diagnosis-diseases-lab-research-checkup-health-concept_88138-942.jpg?semt=ais_hybrid&w=740",
      path: "/specialist-corner",
      description: "Connect with certified therapists, coaches, or spiritual guides based on your preferences—get personalized help in a safe, private space."
    }
  ];

  return (
    <section id="features" className="w-[95%] m-auto px-6 sm:px-12 py-20 ">
      {/* Section Header */}
      <div className="flex flex-col  sm:flex-row sm:items-center gap-4 mb-16">
        <h1 className='text-[10vw] sm:text-5xl font-bold font-["Rubik Distressed"] tracking-tight text-black whitespace-nowrap'>
          Features of Mindspace
        </h1>
        <div className="flex-1 h-px bg-green-500 mt-3 sm:mt-5"></div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-40 w-[90%] mx-auto">
      {featureData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-12 md:gap-20`}
        >
          {/* Image Block */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 h-[50vh] overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          {/* Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
              {item.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {item.description}
            </p>
            <Link to={item.path}>
              {/* <button className="mt-6 px-10 py-4 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 shadow-lg transition-all duration-300">
                Explore
              </button> */}
            </Link>
          </motion.div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Featured;
