'use client'

import Image from 'next/image'
import HeroImg from '../../public/heroImg.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SocialLinks from './components/socialLinks'

const Home = () => {
  return (
    <motion.div
      className='lg:mt-28 bg-[#0a0524]'
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
          <p className='text-6xl max-md:text-4xl max-sm:text-center pb-5 font-bold bg-gradient-to-r from-red-700 to-blue-600 text-transparent bg-clip-text'>
            Designing impactful user experiences
          </p>
          <p className='text-lg max-sm:text-center max-md:pb-5'>
            Explore my portfolio showcasing web projects crafted with passion
            and expertise.
          </p>
          <div className='flex md:hidden justify-center'>
            <SocialLinks />
          </div>
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
