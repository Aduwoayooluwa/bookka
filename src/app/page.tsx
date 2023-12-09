"use client"
import React, { useState } from "react";
import Stepper from "@/page/resources/Stepper";
import Navigation from "@/page/layout/Navigation";
import CreateAccount from "@/page/auth/create-account";
import { TiTick } from "react-icons/ti";
import PreferenceSelector from "@/page/resources";
import Web5Config from "@/page/resources/Web5Config";
import "../page/invoice/stepper.css"

export default function Page() {
  const authSteps = ["Enter DiD", "Configure Protocol", "Choose Preference"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setCompleteStep] = useState(false);

    return (
        <main className="overflow-hidden h-screen bg-gray-100">
            <div className="absolute top-0 w-full">
                <Navigation />
            </div>
            <div className="h-full grid place-items-center w-full">
                <main className="w-full md:w-2/3 lg:w-1/2">
                    <div className="flex justify-between">
                      {authSteps?.map((step, i) => (
                        <div
                          key={i}
                          className={`step-item ${currentStep === i + 1 && "active"} ${
                            (i + 1 < currentStep || complete) && "complete"
                          } `}
                        >
                          <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                          </div>
                          <p className="text-black">{step}</p>
                        </div>
                      ))}
                        </div>
                        
                        <div className="shadow mt-10">
                            {currentStep === 1 && (<CreateAccount setCurrentStep={setCurrentStep}  />)}
                            {currentStep === 2 && (<Web5Config setCurrentStep={setCurrentStep}/>)}
                            {currentStep === 3 && (<PreferenceSelector setCurrentStep={setCurrentStep} />)}
                      </div>
                  </main>
            </div>
        </main>
    )
}