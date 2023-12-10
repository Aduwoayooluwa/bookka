"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { itemVariants, navItem, sideVariants } from './nav'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react"

type Props = {}

const Navigation = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false)


  return (
      <nav className='container relative p-3 flex items-center justify-between'>
          <Image src={"/logo.svg"} className='hidden md:flex' width={200} height={100} alt="bookka logo" />
      <Image src={"/logo.svg"} width={150} height={75} className='flex md:hidden' alt="bookka logo" />
      
          <ol className='hidden md:flex items-center space-x-8'>
        {
          navItem.map((nav) => {
            return (
              <AnimatePresence key={nav.id}>
                <motion.li
                className='hover:text-blue-600 hover:underline'  
                whileHover={{
                    scale: 1.1,
                    
              }}
              >
                <Link href={"/"}>{ nav.content }</Link>
              </motion.li>
              </AnimatePresence>
            )
          })
        }
        
        
      </ol>
      
      <Link  className='border hidden md:flex border-blue-600 hover:bg-blue-600 hover:text-white bg-transparent text-blue-600' href="/auth">Get Started</Link>
      <div className='flex md:hidden'>
        <Hamburger toggle={setIsNavOpen} toggled={isNavOpen} />
      </div>
      {
        isNavOpen && (
          <AnimatePresence>
            <motion.aside
              initial={{ width: 0 }} animate={{ width: 300 }}
              exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
              className='w-4/5 -px-3 h-screen absolute top-0 left-0 bg-blue-600 text-white z-20'>
              <motion.ol 
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants} className='p-6 relative h-full'>
                  {
                    navItem.map((nav) => {
                      return (
             
                          <motion.li variants={itemVariants} key={nav.id}
                          className=' text-start py-4 hover:underline text-lg'  
                          whileHover={{
                              scale: 1.1,
                              
                        }}
                        >
                          <Link href={"/"}>{ nav.content }</Link>
                        </motion.li>
                  
                      )
                    })
                } 
                
               <Link className='border absolute bottom-32 border-white hover:bg-blue-600 hover:text-blue-500 bg-white text-blue-600' href="/auth">Get Started</Link>
          </motion.ol>
          </motion.aside>
          </AnimatePresence>
        )
      }
    </nav>
  )
}

export default Navigation