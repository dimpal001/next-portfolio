'use client'

import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '../../../public/githubIcon.svg'
import InstaIcon from '../../../public/instaIcon.svg'
import LinkedInIcon from '../../../public/linkedIn.svg'

const SocialLinks = () => {
  return (
    <div className='flex h-full gap-3 items-center'>
      <Link href={'https://github.com/dimpal001'} target='_blank'>
        <Image src={GithubIcon} alt='' className='w-[40px]' />
      </Link>
      <Link href={'https://instagram.com/dimple__'} target='_blank'>
        <Image src={InstaIcon} alt='' className='w-[35px]' />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/dimpal-das-0a098a165/'}
        target='_blank'
      >
        <Image src={LinkedInIcon} alt='' className='w-[40px]' />
      </Link>
    </div>
  )
}

export default SocialLinks
