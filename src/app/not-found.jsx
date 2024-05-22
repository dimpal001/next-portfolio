'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
const NotFound = () => {
  return (
    <motion.div
      className='min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <p className='text-[250px] max-md:text-[150px] font-extrabold bg-gradient-to-r from-red-700 to-blue-600 text-transparent bg-clip-text'>
        404
      </p>
      <p className='text-2xl -mt-[30px] lg:-mt-[70px]'>Page Not found</p>
      <Link href={'/'}>
        <button className='p-3 mt-5 bg-green-500 text-white font-semibold px-4 rounded-xl'>
          Return to Homepage
        </button>
      </Link>
    </motion.div>
  )
}

export default NotFound
