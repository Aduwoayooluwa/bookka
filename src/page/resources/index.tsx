"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

type PreferenceType = 'bookkeeping' | 'invoice';

const PreferenceSelector= ({ setCurrentStep}: Readonly<{setCurrentStep: React.Dispatch<React.SetStateAction<number>>}>) => {
    // state to set the preference of a user. either bookkeeping or invoice. 
  const [preference, setPreference] = useState<PreferenceType | string>("");
    const router = useRouter();

    const handleSelection = (type: PreferenceType) => {
    //   function to handle selection. then route to the selected dashboard view
      setPreference(type);
      console.log(type)

    if (preference === "invoice") {
    router.push("/invoice")
    }
    else if (preference === "bookkeeping") {
        router.push("/bookkeeping")
    }
    else {
      return;
      }
  };

  return (
      <main className="flex flex-col p-3 justify-center items-center h-full">
        <div>
            <p className="font-medium text-lg">Select your focus: 📚 Bookkeeping for financial tracking, or 📄 Invoicing for managing client bills</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          
            <motion.div 
                className="p-10 m-5 bg-blue-500 text-white rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSelection('bookkeeping')}
            >
                Bookkeeping
            </motion.div>

            <motion.div 
                className="p-10 m-5 bg-green-500 text-white rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSelection('invoice')}
            >
                Invoice
            </motion.div>
          </div>
          
           <Button className="bg-blue-600" onClick={() => {
                setCurrentStep((prev) => prev - 1);
            }}>Back</Button>
      </main>
  );
};

export default PreferenceSelector;
