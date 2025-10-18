import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';	
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Afolabi Opaleye",
      "Software Engineering Lead",
      "AI & LLMs Specialist",
      "Quantitative Finance Developer",
      "Web3 & DAO Architect",
      "Algorithmic Trading Expert",
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        src='/fola4.jpeg'
        alt=''
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Senior Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href="/resume">
            <button className='heroButton'>Resume</button>
          </Link>
        </div>
      </div>
    </div>
  )
}