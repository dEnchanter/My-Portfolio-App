import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

function Projects({}: Props) {
  // const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>
            
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  <Link href="http://45.33.3.35:6004/login"><a>IBEDC LOR</a></Link>
                </span>{" "}
                  Bills Management System
              </h4>

              <p className='text-lg text-center md:text-left'>
                Billing systems often include payment software that automates the process of collecting payments, 
                sending out recurring invoices, expense tracking, and invoice tracking.
              </p>
            </div>
          </div>

          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="http://tms.fetswallet.com:4004/login"><a>TMS</a></Link>
                </span>{" "}
                  Terminal Management System
              </h4>

              <p className='text-lg text-center md:text-left'>
               This comprehensive POS terminal system manages POS units' operation and enables powerful analytics and reporting on sales, products and transactions.
               Support of a wide range of payment methods.
              </p>
            </div>
          </div>

          
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="https://www.fetslimited.com/app/login"><a>FetsWallet</a></Link>
                </span>{" "}
                  Digital Wallet System
              </h4>

              <p className='text-lg text-center md:text-left'>
                A digital wallet software, an online service that enables individuals or businesses to make transactions electronically. 
              </p>
            </div>
          </div>

          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="https://merchant.fetswallet.com/"><a>Fets Merchant</a></Link>
                </span>{" "}
                  Merchant Platform
              </h4>

              <p className='text-lg text-center md:text-left'>
                A web platform for Fets Merchants, that enables them track transactions and also provides data analytics. 
              </p>
            </div>
          </div>
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects