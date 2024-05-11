'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import CDC from '../../../public/cdc.png'
import Wegoo from '../../../public/wegoo.png'
import SL from '../../../public/sl.png'
import Aarambh from '../../../public/aarambh.png'
import Typing from '../../../public/typing.png'
import SQ from '../../../public/sq.png'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'CDC Web portal',
    description:
      'A comprehensive college information system for North-Eastern Hill University (NEHU) that handles affiliated colleges, providing centralized management of academic and administrative data.',
    img: CDC,
    githubLink: '',
    websiteLink: 'http://cdc.nenu.ac.in',
  },
  {
    id: 2,
    title: 'WeGoo Bike Taxi Service',
    description:
      'An innovative bike taxi service website similar to Rapido, built using React.js and Tailwind CSS. Collaborated with my friend Anupam Kumar Singh on this project.',
    img: Wegoo,
    githubLink: '',
    websiteLink: 'https://wegoo.in',
  },
  {
    id: 3,
    title: 'Solve Litigation',
    description:
      'A MERN stack website providing access to the latest court judgments in India, legal advice, and study materials for law students and professionals.',
    img: SL,
    githubLink: '',
    websiteLink: 'https://solvelitigation.com',
  },
  {
    id: 4,
    title: 'Aarambh Hotel and Banquet Website',
    description:
      'Collaborated with my friend Anupam Kumar Singh to create a modern and responsive website for Aarambh Hotel and Banquet using React.js and Tailwind CSS.',
    img: Aarambh,
    githubLink: '',
    websiteLink: 'https://aarambhhotelandbanquet.com',
  },
  {
    id: 5,
    title: 'Typing Speed Test Website',
    description:
      'Developed a React-based typing speed test website that allows users to evaluate their typing skills and improve their speed and accuracy.',
    img: Typing,
    githubLink: '',
    websiteLink: 'https://typingtest.tech',
  },
  {
    id: 6,
    title: 'Smart Quize',
    description:
      'A WordPress website providing the latest job opportunity news, exam updates, and quizzes for students and job seekers. Collaborated with my friend Anupam Kumar Singh on this project.',
    img: SQ,
    githubLink: '',
    websiteLink: 'https://smartquize.com',
  },
]

const Projects = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='min-h-[200vh] bg-[#0a0524] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div>
          <div className='h-[80vh] flex flex-col justify-center items-center'>
            <p className='text-5xl text-green-500 font-bold'>My Works</p>
            <p className='py-5 max-sm:text-justify text-center'>
              Here, you&apos;ll find a showcase of projects I&apos;ve poured my
              heart and soul into. From sleek websites to innovative
              applications, each project reflects my passion for web development
              and commitment to excellence. Take a look around and get inspired
              by what&apos;s possible!
            </p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 pb-10 gap-7'>
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                img={project.img}
                githubLink={project.githubLink}
                websiteLink={project.websiteLink}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Card = ({ title, description, img, githubLink, websiteLink }) => {
  return (
    <div className='border border-gray-700 bg-[#12102b] rounded-2xl p-12'>
      <div className='flex flex-col gap-3'>
        <p className='text-3xl font-semibold'>{title}</p>
        <Image src={img} alt='' className='w-full rounded-2xl' />
        <p className='text-lg'>{description}</p>
        <div className='flex max-md:justify-center gap-4 md:gap-6 pt-3'>
          <Link target='_blank' href={githubLink}>
            <button className='p-2 bg-green-500 text-white font-semibold px-5 rounded-xl'>
              Github
            </button>
          </Link>
          <Link href={websiteLink} target='_blank'>
            <button className='p-2 bg-[#782192] text-white font-semibold px-6 rounded-xl'>
              Link
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
