import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '../layouts/Navigation'
import Link from 'next/link'
type Props = {}

const Hero = (props: Props) => {
  return (
       <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className='w-full lg:h-screen md:h-[700px] min-h-screen bg-[#F6F8FB]'>
          <Navigation />
          <div className='w-full container justify-around items-center flex flex-col md:flex-row'>
               <section className='w-full order-1 md:order-none md:w-[550px] lg:w-[45%]'>
                    <h1 className='font-medium text-3xl my-5 md:text-5xl lg:text-[54px]'>
                        Decentralized invoice and Bookkeeping platform
                    </h1>

                    <p className='text-sm font-medium'>Streamline Your Business Finances with Advanced Web5 Technology</p>

                    <Button className='bg-blue-600 my-10 md:my-20'><Link href={"/auth"}>Get Started</Link></Button>
              </section>
              
              <section className=''>
                  <Image src={"/man_image.png"} alt={"Man image bookka"} width={400} height={600} />
              </section>
         </div>
    </motion.div>
  )
}

export default Hero