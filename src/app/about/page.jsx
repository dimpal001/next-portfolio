'use client'

import Image from 'next/image'
import AboutImg from '../../../public/about.svg'
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
import { motion } from 'framer-motion'

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
]

const About = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='min-h-[130vh] bg-[#0a0524] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className='flex h-[80vh] max-lg:flex-col-reverse gap-5 justify-between items-center'>
          <div className='lg:w-[65%]'>
            <p className='text-5xl text-green-500 max-sm:text-4xl font-bold'>
              Get to know me
            </p>
            <p className='text-lg py-3 max-sm:text-justify'>
              Hey there, I&apos;m Dimpal Das, and I&apos;m really into all
              things IT. Currently, I&apos;m diving deep into the world of web
              development, learning about cool stuff like React.js, TailwindCSS,
              Node.js, MongoDB, Git/GitHub, and REST API. My ultimate goal? To
              create awesome, powerful websites that make a difference. I&apos;m
              always eager to learn new things and collaborate with others. So,
              let&apos;s team up and create something amazing together!
            </p>
          </div>
          <div className='lg:w-[35%] max-lg:p-20 flex justify-end'>
            <Image src={AboutImg} className='lg:w-[400px]' alt='' />
          </div>
        </div>
        <div className='flex justify-center flex-wrap py-10 gap-14 max-sm:gap- max-sm:grid grid-cols-2'>
          {skills.map((skill) => (
            <div
              className='flex flex-col justify-center items-center'
              key={skill.name}
            >
              <Image className='w-[50px]' src={skill.img} alt='' />
              <p className='max-sm:text-sm'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default About
