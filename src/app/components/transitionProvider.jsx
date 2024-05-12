'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathName}
        className='w-screen h-screen text-gray-300 bg-[#0a0524]'
      >
        <motion.div
          className='w-screen h-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '100vh' }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className='fixed m-auto capitalize top-0 bottom-0 left-0 right-0 text-6xl lg:text-8xl font-bold z-50 w-fit h-fit bg-gradient-to-r from-[#782192] to-green-500 text-transparent bg-clip-text'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 0, transition: { delay: 0.2, duration: 0.9 } }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className='w-screen h-screen fixed bg-black bottom-0 rounded-t-[100px] z-30'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>{children}</div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
