'use client'

import { motion } from 'framer-motion'
const Contact = () => {
  const text = 'Say Hello'
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex max-lg:flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className='lg:w-1/2 flex items-center justify-center'>
          <motion.div className='text-6xl max-lg:text-4xl font-bold'>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{' '}
            😊
          </motion.div>
        </div>
        <div className='lg:w-1/2 p-10 h-full'>
          <form className='h-full max-lg:h-[570px] rounded-xl bg-gradient-to-br from-[#851da5] to-[#0e053a] text-lg flex flex-col gap-5 justify-center p-10'>
            <span className='text-3xl'>
              Dear <strong>Dimpal Das</strong>,
            </span>
            <textarea
              required
              className='bg-transparent p-2 focus:outline-none border-b'
              placeholder='Write your message...'
              name=''
              id=''
              rows={3}
            ></textarea>
            <span>My email address is</span>
            <input
              required
              className='focus:outline-none p-2 bg-transparent border-b'
              placeholder='Write your email'
              type='email'
            />
            <span>Regards</span>
            <button
              type='submit'
              className='p-3 font-semibold text-white bg-black rounded-xl'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
