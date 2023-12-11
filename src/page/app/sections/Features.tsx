import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {}

const Features = (props: Props) => {
  return (
      <motion.div
            
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className='py-10 md:py-20'>
          <p className='text-blue-600 text-center font-semibold text-sm md:text-lg'>Our Features</p>

          <section className='flex space-y-8 md:space-y-0 items-start flex-wrap justify-around container pt-10 w-full'>

              <div className='w-full md:w-[265px] grid place-items-center' >
                  <div className='bg-[#25D9D9] grid place-items-center w-[75px] h-[75px] rounded'>
                       <Image width={60} height={60}  src={"/icons/invoice_icon.png"} alt={`booka icon`}  />
                  </div>
                  <h2 className='font-semibold my-5'>Instant Invoice Creation</h2>

                  <p className='text-center'>
                      Create and dispatch professional invoices with ease and speed.
                  </p>
              </div>

              <div className='w-full md:w-[265px] grid place-items-center'>
                  <div className='bg-[#0898E7] grid place-items-center w-[75px] h-[75px] rounded'>
                     <Image width={60} height={60}  src={"/icons/bookkeeping_icon.png"} alt={`booka icon`}  />
                  </div>
                  <h2 className='font-semibold my-5'>Expense Management</h2>

                  <p className='text-center'>Track all business expenses with precision for optimal financial control.</p>
              </div>

              <div className='w-full md:w-[265px] grid place-items-center'>
                  <div className='grid place-items-center bg-[#FF9066] w-[75px] h-[75px] rounded'>
                       <Image width={60} height={60}  src={"/icons/brand_icon.png"} alt={`booka icon`}  />
                  </div>
                  <h2 className='font-semibold my-5'>Brand Management</h2>

                  <p className='text-center'>
                      A One-to platform to manage your brand with ease
                  </p>
              </div>

              <div className='w-full md:w-[265px] grid place-items-center'> 
                  <div className='bg-yellow-400 grid place-items-center w-[75px] h-[75px] rounded'>
                      <Image width={60} height={60}  src={"/icons/expense_icon.png"} alt={`booka icon`}  />
                  </div>
                  <h2 className='font-semibold my-5'>Financial Insights</h2>

                  <p className='text-center'>
                      Gain valuable insights through detailed, user-friendly financial reports.
                  </p>
              </div>
          </section>
    </motion.div>
  )
}

export default Features