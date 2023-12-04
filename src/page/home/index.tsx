"use client"

import { motion } from 'framer-motion';
import Navbar from '../layout/Navigation';
import Image from "next/image"
import FeaturesSection from './components/Features';
import HowItWorksSection from './components/HowItWorks';
import Footer from './components/Footer';
import Link from "next/link"

let imgLink  = "https://img.freepik.com/free-vector/account-concept-illustration_114360-279.jpg?w=740&t=st=1701702671~exp=1701703271~hmac=a6fe2e2db22ed260bcf41812d92fafa89417da7cacb8ecb0f081477ae5f8c3e1"

export default function HomePage() {
  return (
      <div className="">
    <div className='w-full rounded-b-[4rem] bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100'>
     <Navbar />
      <motion.div
        initial={{ scale: 0.9}}
        animate={{ scale: 1,  }}
        transition={{ duration: 1.5 }}
        className="text-center p-10"
      >
        <h1 className="text-4xl font-semibold">Your Invoice & Bookkeeping Solution</h1>
        <p className="text-xl mt-4">Effortlessly manage your business finances.</p>
        <button className="mt-6 rounded-full bg-blue-500 text-white py-2 px-4  hover:bg-blue-600">
          <Link href="/auth">Get Started</Link>
        </button>
          </motion.div>
          
          <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5 }}
        className='grid place-items-center'
      >
        <Image src={imgLink} alt="Bookkeeping" width={500} height={300} />
          </motion.div>
        </div>
          <FeaturesSection />
          <HowItWorksSection />
          <Footer />
    </div>
  );
}
