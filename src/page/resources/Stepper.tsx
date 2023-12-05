"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Preference from "./index"
import Web5Config from "./Web5Config";

const steps = [
  {
    title: 'Enable Protocol',
    content: <Web5Config />
  },
  {
    title: 'Choose Preference',
    content: <Preference />
  }
];


const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);


  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="stepper-container container h-screen grid place-items-center mx-auto">

      <motion.div
        key={currentStep}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "spring", stiffness: 300 }}
        className="p-4 border rounded-lg shadow-md"
      >
        {steps[currentStep].content}
      </motion.div>


      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={prevStep}
          >
            Back
          </motion.button>
        )}
        {currentStep < steps.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={nextStep}
          >
            Next
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
