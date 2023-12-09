import Invoice from '@/page/invoice'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='grid place-items-center w-full p-10 md:p-20'>
        <h1 className='font-medium text-center text-5xl w-full my-10 md:w-2/3'>
        Create fast and professional
          Invoice in few steps
          </h1>
          <Invoice />
    </div>
  )
}

export default page