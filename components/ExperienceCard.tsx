import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <div className='flex space-x-5'>
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
      hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer</h4>
        <p className='font-bold text-2xl mt-1'>FETS</p>

        <p className="uppercase py-5 text-gray-300">Started work 1st, March 2022 - Till date</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Analyzed user requirements and defined technical specifications.</li>
          <li>Designed, implemented, and tested software solutions.</li>
          <li>Collaborated with other engineers, designers, and stakeholders to ensure the smooth delivery of software projects.</li>
          <li>Maintained and improved existing software systems</li>
          <li>Participated in code reviews and provided constructive feedback to peers.</li>
        </ul>
      </div>
      
      </article>

      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
      hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer Intern</h4>
        <p className='font-bold text-2xl mt-1'>PGPT</p>

        <p className="uppercase py-5 text-gray-300">Started work July, 2021 - Feb, 2022</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Designed and implemented server-side logic and APIs.</li>
          <li>Developed and maintained database systems, including data modeling and performance optimization.</li>
          <li>Implemented security measures to protect software solution and its data.</li>
          <li>Monitored and troubleshooted production systems</li>
        </ul>
      </div>
      
      </article>

      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
      hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer Intern</h4>
        <p className='font-bold text-2xl mt-1'>ITEX</p>

        <p className="uppercase py-5 text-gray-300">Started work May, 2019 - Dec, 2019</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Developed and implemented user interface designs that are responsive and mobile friendly.</li>
          <li>Built reusable components and libraries for future use.</li>
          <li>Maintained existing applications and developed new features.</li>
          <li>Stayed up to date with emerging frontend technologies and frameworks.</li>
        </ul>
      </div>
      
      </article>
    </div>

    
  )
}