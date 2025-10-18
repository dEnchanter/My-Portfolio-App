import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon 
          url="https://github.com/dEnchanter" 
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon 
          url="https://linkedin.com/in/afolabi-opaleye" 
          fgColor='gray'
          bgColor='transparent'
        />
        {/* <SocialIcon 
          url="https://www.youtube.com/sonnysangha" 
          fgColor='gray'
          bgColor='transparent'
        /> */}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer gap-4'>
        <Link href="/resume">
          <button className='hidden md:inline-flex text-sm uppercase tracking-wide px-4 py-2 border border-gray-500 rounded-full hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 transition-all'>
            Resume
          </button>
        </Link>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        {/* <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p> */}
      </motion.div>
    </header>
  )
}