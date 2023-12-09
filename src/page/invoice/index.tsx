'use client'
import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import BusinessDetails from "./components/BusinessDetails";
import CustomerDetails from "./components/CustomerDetails";
import InvoiceForm from "./components/InvoiceForm";


const Stepper = () => {
  const steps = ["Business Details", "Customer Details", "Invoice"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <main className="w-full md:w-2/3">
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
          </div>
          
          <div>
              {currentStep === 1 && (<BusinessDetails setCurrentStep={setCurrentStep}  />)}
              {currentStep === 2 && (<CustomerDetails setCurrentStep={setCurrentStep}/>)}
              {currentStep === 3 && (<InvoiceForm />)}
        </div>
    </main>
  );
};

export default Stepper;