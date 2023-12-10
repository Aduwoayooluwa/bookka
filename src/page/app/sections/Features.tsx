import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
      <div className='py-10 md:py-20'>
          <p className='text-blue-600 text-center font-semibold text-sm md:text-lg'>Our Features</p>

          <section className='flex space-y-8 md:space-y-0 items-start flex-wrap justify-around container pt-10 w-full'>

              <div className='w-full md:w-[265px] grid place-items-center' >
                  <div className='bg-[#25D9D9] w-[75px] h-[75px] rounded'>
                      <p className='text-black'>H</p>
                  </div>
                  <h2 className='font-semibold my-5'>Instant Invoice Creation</h2>

                  <p className='text-center'>
                      Create and dispatch professional invoices with ease and speed.
                  </p>
              </div>

              <div className='w-full md:w-[265px] grid place-items-center'>
                  <div className='bg-[#0898E7] w-[75px] h-[75px] rounded'>
                      <p className='text-black'>H</p>
                  </div>
                  <h2 className='font-semibold my-5'>Expense Management</h2>

                  <p className='text-center'>Track all business expenses with precision for optimal financial control.</p>
              </div>

              <div className='w-full md:w-[265px] grid place-items-center'>
                  <div className='bg-[#FF9066] w-[75px] h-[75px] rounded'>
                      <p className='text-black'>H</p>
                  </div>
                  <h2 className='font-semibold my-5'>Brand Management</h2>

                  <p className='text-center'>
                      A One-to platform to manage your brand with ease
                  </p>
              </div>

              <div className='w-full md:w-[265px] grid place-items-center'> 
                  <div className='bg-yellow-400 w-[75px] h-[75px] rounded'>
                      <p className='text-black'>H</p>
                  </div>
                  <h2 className='font-semibold my-5'>Financial Insights</h2>

                  <p className='text-center'>
                      Gain valuable insights through detailed, user-friendly financial reports.
                  </p>
              </div>
          </section>
    </div>
  )
}

export default Features