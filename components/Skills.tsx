import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center xl:flex-row max-w-[2000px]
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 text-gray-400 tracking-[3px] text-sm'>
        HOVER OVER A SKILL FOR CURRENT PROFICIENCY
      </h3>

      <div className='grid grid-cols-4 gap-5 absolute md:top-48'>
        {/* Frontend */}
        <Skill src="/js.png" />
        <Skill src="/typescript.png" />
        <Skill src="/react.png" />
        <Skill src="/nextjs.png" />
        <Skill src="/tailwind.png" />

        {/* Backend */}
        <Skill src="/node.png" directionLeft />
        <Skill src="/express.png" directionLeft />
        <Skill src="/go.png" directionLeft />

        {/* Database */}
        <Skill src="/postgres.png" />
        <Skill src="/mongo.png" />

        {/* Blockchain */}
        <Skill src="/solidity.png" directionLeft />

        {/* Tools */}
        <Skill src="/github.png" />
        <Skill src="/git.png" directionLeft />

        {/* Additional (Spring Boot, Python ML, Kafka, Redis, Docker, Kubernetes would need icons) */}
      </div>
    </motion.div>
  )
}

export default Skills;