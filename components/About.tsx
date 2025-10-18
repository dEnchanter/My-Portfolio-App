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
          Versatile Software Engineer with <strong>5+ years</strong> of expertise spanning <strong>AI/ML development, quantitative finance,
          and enterprise software engineering</strong>. Specialized in building production-grade financial systems while developing machine
          learning models that exploit market inefficiencies. Pioneer in integrating <strong>AI agents and Large Language Models (LLMs)</strong>
          into software development workflows and business applications.
        </p>
        <p className='text-sm'>
          Experienced in <strong>Web3/DAO technologies</strong> and blockchain-based solutions. Proven track record of architecting scalable
          fintech platforms processing <strong>60K+ daily transactions</strong> with <strong>$2M+ monthly transaction volume</strong> while
          conducting quantitative research and model development for algorithmic trading strategies. At the core of my expertise lies deep
          proficiency in JavaScript ecosystem, Spring Boot, Golang, Python/ML frameworks, and comprehensive understanding of payment gateway
          integrations, blockchain technology, and digital wallet services.
        </p>
        <p className='text-sm'>
          My passion for technology is matched by my commitment to creating user-centric solutions, demonstrated through contributions to
          projects that have processed millions in transactions securely and efficiently, while maintaining a focus on continuous learning
          in emerging technologies like AI, quantitative finance, and decentralized systems.
        </p>
      </div>

    </motion.div>
  )
}