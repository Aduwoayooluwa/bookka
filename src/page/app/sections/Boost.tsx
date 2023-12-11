import Image from 'next/image'
import React from 'react'
import CheckIcon from "@/assets/icons/check_icon.png";
import { motion } from 'framer-motion';
type Props = {}

const Boost = (props: Props) => {
  return (
        <motion.div
          
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className='container py-10 md:py-20'>
          <div className='flex   items-center flex-col md:flex-row justify-center space-x-0 space-y-6 md:space-y-0 md:space-x-10 '>
              <section className='w-full md:w-[35%]'>
                  <Image src={"/main_2.png"} alt="Main Bookka image" width={600} height={700} />
              </section>
              
              <section className='w-full md:w-[35%] mt-10 md:mt-0'>
                  <h1 className='leading-normal md:leading-snug  text-2xl md:text-[40px] font-medium'>
                      Boost your Business with our platform superpower
                  </h1>

                  <p className="text-sm my-5 font-normal">Create Decentralized Invoices that converts with ease.</p>

                  <ol className='space-y-3'>
                      <li className='flex items-center space-x-3'>
                          <Image src={CheckIcon} alt="icon check" width={20} height={20} />
                          <p>Invoice Creation</p>
                      </li>

                      <li className='flex items-center space-x-3'>
                          <Image src={CheckIcon} alt="icon check" width={20} height={20} />
                          <p>Bookkeeping</p>
                      </li>

                      <li className='flex items-center space-x-3'>
                          <Image src={CheckIcon} alt="icon check" width={20} height={20} />
                          <p>Brand Management</p>
                      </li>
                  </ol>
              </section>
          </div>
    </motion.div>
  )
}

export default Boost