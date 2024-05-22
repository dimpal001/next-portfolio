'use client'

import Image from 'next/image'
import AboutImg from '../../../public/sign.png'
import Css from '../../../public/css.svg'
import Github from '../../../public/github.png'
import JavaScript from '../../../public/javascript.svg'
import Next from '../../../public/next.png'
import Html from '../../../public/html.svg'
import Node from '../../../public/node.svg'
import ReactImg from '../../../public/react.svg'
import Redux from '../../../public/redux.svg'
import Tailwind from '../../../public/tailwind.svg'
import TypeScript from '../../../public/typescript.svg'
import Bootstrap from '../../../public/bootstrap.svg'
import MUI from '../../../public/mui.svg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const skills = [
  { name: 'HTML', img: Html },
  { name: 'CSS', img: Css },
  { name: 'Github', img: Github },
  { name: 'Javascript', img: JavaScript },
  { name: 'Next.js', img: Next },
  { name: 'Node.js', img: Node },
  { name: 'React.js', img: ReactImg },
  { name: 'Redux', img: Redux },
  { name: 'Tailwind CSS', img: Tailwind },
  { name: 'TypeScript', img: TypeScript },
  { name: 'Bootstrap', img: Bootstrap },
  { name: 'MUI', img: MUI },
]

const About = () => {
  const skillsRef = useRef(null)

  const handleScrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <motion.div
      className='lg:h-[1000px] h-[1300px]'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full bg-[#0a0524] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className='flex h-[80vh] max-lg:flex-col-reverse gap-5 justify-between items-center'>
          <div className='lg:w-[35%] max-lg:p-10 flex justify-end'>
            <Image src={AboutImg} className='lg:w-[400px]' alt='' />
          </div>
          <div className='lg:w-[65%]'>
            <p className='text-5xl text-green-500 max-sm:text-4xl font-bold'>
              Get to know me
            </p>
            <p className='text-lg text-justify py-3'>
              Hey there, I&apos;m Dimpal Das, and I&apos;m really into all
              things IT. Currently, I&apos;m diving deep into the world of web
              development, learning about cool stuff like React.js, TailwindCSS,
              Node.js, MongoDB, Git/GitHub, and REST API. My ultimate goal? To
              create awesome, powerful websites that make a difference. I&apos;m
              always eager to learn new things and collaborate with others. So,
              let&apos;s team up and create something amazing together!
            </p>
            <div className='flex gap-5'>
              <Link href={'/contact'}>
                <button className='p-3 bg-green-500 text-white font-semibold px-4 rounded-xl'>
                  Hire Me
                </button>
              </Link>
              <button
                onClick={handleScrollToSkills}
                className='p-3 bg-[#782192] text-white font-semibold px-4 rounded-xl'
              >
                Skills
              </button>
            </div>
          </div>
        </div>
        <div ref={skillsRef} id='skills' className='mb-5' />
        <div className='flex justify-center flex-wrap py-10 gap-14 max-sm:gap- max-sm:grid grid-cols-3 place-items-center'>
          {skills.map((skill) => (
            <div
              className={`flex flex-col justify-center items-center`}
              key={skill.name}
            >
              <Image className='w-[50px]' src={skill.img} alt='' />
              <p className='max-sm:text-sm text-center'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default About
