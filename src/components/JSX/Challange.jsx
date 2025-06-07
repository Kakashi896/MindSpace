import React from 'react'
import { motion } from 'framer-motion'

const challenges = [
  "Lack of Awareness",
  "Internal Struggles",
  "Loneliness and Isolation",
  "Work and Life Pressure",
  "Childhood Trauma and Abuse",
  "Negative Self-Talk",
  "Social Media Pressure",
  "Fear of Vulnerability",
  "Unhealthy Coping Mechanisms",
  "Lack of Emotional Support",
  "Burnout and Fatigue",
  "Grief and Loss",
  "Identity and Self-Worth Issues"
]


const Challenge = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-yellow-300 py-8 mt- mb-15">
      <motion.div
        className="flex gap-10"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear'
        }}
      >
        {[...challenges, ...challenges].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <h1 className="challenge montserrat tracking-tighter text-xl md:text-5xl  text-green-700  ">
              {item}
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Challenge
