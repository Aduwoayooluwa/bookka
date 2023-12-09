"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preference from "./index"
import Web5Config from "./Web5Config";
import CreateAccount from '../auth/create-account';

const steps = [
  // {
  //   title: "Access Account",
  //   content: <CreateAccount />
  // },
  {
    title: 'Enable Protocol',
    content: <div></div>
  },
  {
    title: 'Choose Preference',
    content: <div></div>
  }
];


const Stepper = () => {
  // state to manage the current step
  const [currentStep, setCurrentStep] = useState(0);

  // functions to move to the next step and previous step
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // aimation variants. These is the animations used to animates each of the stepper elements and contentd. 
  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

    const lineVariants = {
    inactive: { width: '0%' },
    active: { width: '100%' },
  };

  const circleVariants = {
    inactive: { scale: 1, background: '#fff' },
    active: { scale: 1.2, background: '#0f62fe' },
  };

  return (
    <div className="stepper-container container py-10 h-screen grid place-items-center mx-auto">

        <div className="steps-indicator md:w-[500px] flex justify-between w-full mb-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative flex flex-col items-center"
          >
   
            <motion.div
              variants={circleVariants}
              animate={currentStep >= index ? 'active' : 'inactive'}
            className={`${index ? "text-black" : "text-white"} w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center`}
            >
              {index + 1}
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div
                
                className="h-1 bg-blue-500 absolute top-1/2 -right-full z-[-1]"
                variants={lineVariants}
                initial="inactive"
                animate={currentStep > index ? 'active' : 'inactive'}
                transition={{ duration: 0.5 }}
                style={{ width: '200%' }} 
              />
            )}
          </motion.div>
        ))}
      </div>

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


      <div className="flex justify-between space-x-8 mt-4">
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
