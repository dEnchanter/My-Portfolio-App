import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <div className='flex space-x-5'>

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
      hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer (Contract)</h4>
        <p className='font-bold text-2xl mt-1'>META AFRICA</p>

        <p className="uppercase py-5 text-gray-300">Started work 3rd, November 2024 - 1st, April 2024</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              tailored the needs of a basketball agency, enabling scouts to track and evaluate players in Mali league tournaments efficiently.
            </li>
            <li>
             Implemented a comprehensive player profiling system, showcasing individual player stats, performance videos, and career highlights to provide scouts with in-depth insights.
            </li>
            <li>
              Incorporated real-time updates and notifications for scouts, ensuring they stay informed about upcoming talents and key tournament events, enhancing scouting effectiveness.
            </li>
          </ul>
      </div>
      
      </article>

      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
      hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer (Contract)</h4>
        <p className='font-bold text-2xl mt-1'>BeGreat Finance</p>

        <p className="uppercase py-5 text-gray-300">Started work 15th, March 2023 - Till date</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              Led the development of BeGreat Finance's web application, 
              offering a comprehensive suite of investment tools aimed at enhancing market navigation for users.
            </li>
            <li>
              Engineered a user-friendly interface that simplifies investment decision-making, 
              with features for entering and exiting trades, monitoring market trends, and assessing volatility.
            </li>
            <li>
              Integrated advanced analytics to visually represent the impact of news on market prices, 
              enabling users to make informed trading decisions based on real-time data.
            </li>
          </ul>
      </div>
      
      </article>

      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
      hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer</h4>
        <p className='font-bold text-2xl mt-1'>FETS</p>

        <p className="uppercase py-5 text-gray-300">Started work 1st, March 2022 - Till date</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>
              Implemented a comprehensive Terminal Management System (TMS) for POS Agency Banking, 
              optimizing operational efficiency and enhancing transaction security.
            </li>
            <li>
              Developed a robust mobile money solution, enabling seamless and secure digital financial transactions for users on the go.
            </li>
            <li>
              Created value-added service solutions, integrating utility payments,
              airtime top-ups, and other services into a single platform for enhanced customer convenience.
            </li>
            <li>
              Spearheaded multiple payment integrations, facilitating a wide range of payment options and improving service accessibility for users.
            </li>
          </ul>
      </div>
      
      </article>

      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-10 md:mt-[8rem] md:py-5 opacity-40
      hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer (Backend)</h4>
        <p className='font-bold text-2xl mt-1'>PGPT</p>

        <p className="uppercase py-5 text-gray-300">Started work July, 2021 - Feb, 2022</p>
        
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
        <h4 className='text-4xl font-light'>Software Developer (Frontend)</h4>
        <p className='font-bold text-2xl mt-1'>ITEX</p>

        <p className="uppercase py-5 text-gray-300">Started work May, 2019 - Dec, 2019</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Leveraged top frontend frameworks like React and Angular to design and develop dynamic, responsive web applications, 
            ensuring optimal performance and user experience across devices.</li>
          <li>Utilized React Native for crafting cross-platform mobile applications, 
            achieving native-like performance and seamless integration on both iOS and Android.</li>
          <li>Conducted regular maintenance and iterative feature enhancements of existing applications, 
            improving functionality and user satisfaction.</li>
          <li>Continuously explored and integrated emerging frontend technologies, 
            keeping applications modern and competitive in the fast-evolving digital landscape.</li>
        </ul>
      </div>
      
      </article>
    </div>

    
  )
}