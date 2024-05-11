'use client'

import Image from 'next/image'
import HeroImg from '../../public/heroImg.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Home = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='flex max-md:flex-col items-center gap-5 h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Image Box */}
        <div className='lg:w-[35%] max-md:px-7'>
          <Image src={HeroImg} alt='' />
        </div>

        {/* Text Box  */}
        <div className='lg:w-[65%]'>
          <p className='text-6xl max-md:text-4xl pb-5 font-bold bg-gradient-to-r from-red-700 to-blue-600 text-transparent bg-clip-text'>
            Designing impactful user experiences
          </p>
          <p className='text-lg max-md:pb-5'>
            Delve into my portfolio of expertly crafted web projects, each
            showcasing creativity, skill, and passion for web development
            excellence.
          </p>
          <div className='flex max-md:justify-center gap-4 md:gap-8 py-5'>
            <Link href={'/projects'}>
              <button className='p-3 bg-green-500 text-white font-semibold px-4 rounded-xl'>
                View My Works
              </button>
            </Link>
            <Link href={'/contact'}>
              <button className='p-3 bg-[#782192] text-white font-semibold px-4 rounded-xl'>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
