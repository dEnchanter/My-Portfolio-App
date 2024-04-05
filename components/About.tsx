import { motion } from 'framer-motion';
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}    
    className='flex flex-col relative h-screen 
    text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img 
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{ once: true }}
        src='/fola2.jpeg'
        className='-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] mt-[5rem] xl:mt-[10rem]'
      />

      <div className='space-y-10 px:0 md:px-10'>
        <h4 className='mt-[5rem] text-4xl font-semibold'>Here is a {" "}<span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
        <p className='text-sm'>
          Ardent Software Engineer with a core foundation in computer science and extensive experience in the fast-paced fintech industry. Specialized in architecting and developing secure, 
          scalable payment solutions that drive financial inclusivity and streamline transaction processes. Over [5years] of hands-on experience in full-stack development, 
          I have contributed to the end-to-end delivery of cutting-edge financial technologies that solve complex challenges and enhance user experiences.
        </p>
        <p className='text-sm'>
          At the core of my expertise lies a deep proficiency in [Javascript and its ecosystem, Spring Boot(Java), Go, Rust, 
          and a nuanced understanding of payment gateway integrations, blockchain technology, and digital wallet services. 
          My passion for technology is matched by my commitment to creating user-centric solutions, demonstrated through my contributions to projects that have processed millions in transactions securely and efficiently.
        </p>
      </div>

    </motion.div>
  )
}