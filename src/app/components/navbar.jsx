'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, stagger } from 'framer-motion'
import Image from 'next/image'
import Sign from '../../../public/sign.png'
import InstaIcon from '../../../public/instaIcon.svg'
import LinkedInIcon from '../../../public/linkedIn.svg'
import GithubIcon from '../../../public/githubIcon.svg'

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/projects', title: 'Projects' },
  { url: '/contact', title: 'Contact' },
]

const topVariant = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: 'rgb(255,255,255)',
  },
}
const centerVariant = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
}
const bottomVariant = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: 'rgb(255,255,255)',
  },
}
const listVariant = {
  closed: {
    x: '100vw',
  },
  opened: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

const listItemVariant = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  return (
    <div className='h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* Link  */}
      <div className='hidden md:flex gap-3 text-xl font-semibold'>
        {links.map((link) => (
          <Link
            className={`${
              pathName === link.url ? 'text-white bg-[#782192]' : 'text-white'
            } px-4 py-1 rounded-xl`}
            key={link.url}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <Link href={'/'} className='flex justify-center items-center p-2'>
        <Image src={Sign} className='w-[120px]' alt='' />
      </Link>

      <div className='flex gap-3 items-center'>
        <Link href={'https://github.com/dimpal001'} target='_blank'>
          <Image src={GithubIcon} alt='' className='w-[40px]' />
        </Link>
        <Link href={'https://instagram.com/dimple__'} target='_blank'>
          <Image src={InstaIcon} alt='' className='w-[35px]' />
        </Link>
        <Link href={'https://linkedin.com/'} target='_blank'>
          <Image src={LinkedInIcon} alt='' className='w-[40px]' />
        </Link>
      </div>

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className='w-10 md:hidden h-8 flex flex-col z-[100] justify-between'
      >
        <motion.div
          variants={topVariant}
          animate={open ? 'opened' : 'closed'}
          className={`w-10 origin-left h-1 bg-white rounded`}
        />
        <motion.div
          variants={centerVariant}
          animate={open ? 'opened' : 'closed'}
          className={`w-10 origin-left h-1 bg-white rounded`}
        />
        <motion.div
          variants={bottomVariant}
          animate={open ? 'opened' : 'closed'}
          className={`w-10 origin-left h-1 bg-white rounded`}
        />
      </button>

      {/* Menu  */}
      {open && (
        <motion.div
          variants={listVariant}
          initial='closed'
          animate='opened'
          className='absolute z-50 top-0 left-0 w-screen h-screen bg-black text-white flex justify-center items-center flex-col gap-8'
        >
          {links.map((link) => (
            <motion.div
              onClick={() => setOpen(!open)}
              variants={listItemVariant}
              key={link.url}
            >
              <Link className='text-4xl font-semibold' href={link.url}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default Navbar
