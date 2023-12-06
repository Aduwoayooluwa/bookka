"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "../layout/Navigation";
import FeaturesSection from "./components/Features";
import HowItWorksSection from "./components/HowItWorks";
import Image from "next/image";
import "./index.css";

type Props = {};
const imgLink =
  "https://img.freepik.com/free-vector/account-concept-illustration_114360-279.jpg?w=740&t=st=1701702671~exp=1701703271~hmac=a6fe2e2db22ed260bcf41812d92fafa89417da7cacb8ecb0f081477ae5f8c3e1";

const index = (props: Props) => {
  return (
    <div className="body bg-slate-100">
      <div className=" w-full rounded-b-[4rem] bg-white">
        <Navbar />
        <div className="bg-slate-100 hero flex flex-wrap justify-around items-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-start w-full md:w-[60%] p-10 hero-content "
          >
            <h1 className=" border-black text-4xl text-center font-semibold">
              Next-Gen Decentralized Bookkeeping <br /> & <br /> Invoicing
              Solution
            </h1>
            <p className="text-xl text-center mt-16 mx-auto w-10/12">
              Streamline Your Business Finances with Advanced Web5 Technology while experiencing a revolutionary approach to managing invoices
              and bookkeeping. 
            </p>
  
            {/* <div className="text-center"> */}
            <button className="md:mt-12 md:ml-60 m-0 rounded-sm uppercase bg-blue-500 text-white py-6 px-6 hover:bg-blue-600 md:bg-blue-600 ">
              <Link href="/auth">Start Managing Your Finances Today</Link>
            </button>
            {/* </div> */}
          </motion.div>

          {/* <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5 }}
        className='grid place-items-center'
      >
        <Image src={imgLink} alt="Bookkeeping" width={500} height={300} />
          </motion.div> */}
        </div>
      </div>
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default index;

// harnessing the power of decentralized networks
// for enhanced security and transparency. Experience real-time
// financial tracking and seamless integration with existing systems,
// tailored to the needs of modern businesses. Empower your financial
// management with cutting-edge technology that simplifies processes,
// ensures accuracy, and provides insightful analytics for smarter
// decision-making. 
