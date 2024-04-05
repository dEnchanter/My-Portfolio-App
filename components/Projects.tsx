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
            p-20 md:p-44 h-screen'
          >
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  <Link href="https://begreat.finance"><a>BEGREAT FINANCE</a></Link>
                </span>{" "}
              </h4>

              <p className='text-lg text-center md:text-left'>
                Led the development of a cutting-edge SaaS application designed to empower users with advanced tools for navigating the financial markets. The platform provides analytics on market trends, entry and exit signals for trades, and the impact of news on market prices. With its intuitive, color-coded tools, users can easily understand market sentiments, price levels, and directional trends, enabling them to make informed investment decisions and capitalize on market conditions for profit.
              </p>
            </div>
          </div>

        
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
            p-20 md:p-44 h-screen'
          >
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  <Link href="https://metaafricasports.com"><a>META AFRICA SPORTS</a></Link>
                </span>{" "}
              </h4>

              <p className='text-lg text-center md:text-left'>
                Created a unique SaaS platform for a basketball agency aimed at revolutionizing the scouting process in Mali's league tournaments. This solution offers scouts a centralized portal to monitor, assess, and follow up on promising basketball talents. Features include player profiles, performance analytics, video highlights, and direct communication tools to broker deals between scouts and the agency, promoting talent discovery and career advancement for players.
              </p>
            </div>
          </div>

          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="http://tms.fetswallet.com:4004/login"><a>Terminal Management System</a></Link>
                </span>{" "}  
              </h4>

              <p className='text-lg text-center md:text-left'>
                Implemented a Terminal Management System that oversees the transaction and settlement processes for card transactions. This system is tailored for POS agency banking, providing a comprehensive solution for managing terminal networks, monitoring transaction flows, and facilitating the settlement process. It ensures high transaction processing efficiency, supports remote terminal management, and offers detailed reporting for financial oversight.
              </p>
            </div>
          </div>
    
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen'>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                <Link href="https://www.fetslimited.com/app/login"><a>Mobile Money Solution</a></Link>
                </span>{" "}
              </h4>

              <p className='text-lg text-center md:text-left'>
                Developed a robust and scalable Digital Wallet System designed to offer users seamless financial transactions over their mobile devices. This platform enables users to perform a wide range of transactions, including money transfers, bill payments, airtime top-ups, and access to microloans.
              </p>
            </div>
          </div>
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects