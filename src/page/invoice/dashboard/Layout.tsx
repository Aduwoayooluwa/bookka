import React, { useState } from 'react'
import { HomeIcon, WalletIcon, UsersIcon, TicketIcon } from '.'
import Image from "next/image"
import { Squash as Hamburger } from "hamburger-react"
import { motion, AnimatePresence } from "framer-motion";
import { sideVariants } from '@/page/app/layouts/nav';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
      <div className='flex items-start w-full'>
          <div className='fixed left-0 w-full md:w-fit bg-white'>
                 <header className="flex justify-between items-center border-b w-full p-4">
                    <div className="flex w-full justify-between items-center space-x-4">
                    <Image
                        src={"/logo.svg"}
                        className=""
                        width={200}
                        height={100}
                        alt="bookka logo"
                    />
                    <div className='flex md:hidden'>
                        <Hamburger toggle={setIsSidebarOpen} toggled={isSidebarOpen} />
                    </div>

                    </div>
                </header>
                <aside className="hidden md:block  sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
                <div className="flex items-center mb-4 space-x-1">
                    <h1 className="text-2xl">Dashboard</h1>
                </div>
                <nav className="space-y-2">
                    <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                    <HomeIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Home</span>
                    </button>
                    <Link href="/invoice" className="w-full flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-800">
                    <WalletIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Invoices</span>
                    </Link>
                    <Link href="/bookkeeping" className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                    <UsersIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Bookkeeping</span>
                    </Link>
                    <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                    <TicketIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Profile</span>
                    </button>
                </nav>
              </aside>
              

        {
        isSidebarOpen && 
          <AnimatePresence>
            <motion.aside
              initial={{ width: 0 }} animate={{ width: 300 }}
              exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
              className='w-4/5 -px-3 h-[50vh] absolute top-0 left-0 bg-white z-60'>
              <motion.aside
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants} className='p-6 relative h-full'>
                    <button className="w-full my-5 flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                    <HomeIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Home</span>
                    </button>
                    <button className="w-full my-5 flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-800">
                    <WalletIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Invoices</span>
                    </button>
                    <button className="w-full my-5 flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                    <UsersIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Bookkeeping</span>
                    </button>
                    <button className="w-full my-5 flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                    <TicketIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Tax</span>
                    </button>
                                  
                    <Button onClick={() => {
                        setIsSidebarOpen(false)
                    }} className='bg-red-600 hover:bg-red-800 my-10 text-white'>Close</Button>
                </motion.aside>
          </motion.aside>
          </AnimatePresence>
        
      }
          </div>

          <div className='w-full mt-20 md:mt-0 md:w-[70%] ml-0 md:ml-[20%]'>
              { children}
          </div>

    </div>
  )
}

export default Layout