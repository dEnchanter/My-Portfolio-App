import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  src: any;
}

function Skill({ directionLeft, src }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        className='rounded-full border border-gray-500 object-cover h-24 w-24
        xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    </div>
  )
}

export default Skill