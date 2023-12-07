"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type PreferenceType = 'bookkeeping' | 'invoice';

const PreferenceSelector: React.FC = () => {
  const [preference, setPreference] = useState<PreferenceType | string>("");
    const router = useRouter();

  const handleSelection = (type: PreferenceType) => {
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
      </main>
  );
};

export default PreferenceSelector;
