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

      <div className='grid grid-cols-4 gap-5 absolute md:top-48'>
        <Skill src="/js.png" />
        <Skill src="/typescript.png" />
        <Skill src="/react.png" />
        <Skill src="/nextjs.png" />
        <Skill src="/tailwind.png" />
        <Skill src="/node.png" />
        <Skill src="/express.png" />
        <Skill src="/mongo.png" />
        <Skill src="/postgres.png" directionLeft />
        <Skill src="/sanity.png" directionLeft />
        <Skill src="/go.png" directionLeft />
        <Skill src="/github.png" directionLeft />
      </div>
    </motion.div>
  )
}

export default Skills;