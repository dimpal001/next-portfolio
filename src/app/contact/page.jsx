'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [isSent, setIsSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      setIsSent(false)
      setIsSending(true)
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbxnvvg5NVePUNisWIwsVpwXNm1ZuIV-YITHCprSHZu0jaT6qPsLBeT7MQMjpYWJ2Mo/exec',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(response.data)
      setIsSent(true)
      e.target.reset()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSending(false)
    }
  }

  const text = 'Say Hello'
  return (
    <motion.div
      className='min-h-full bg-[#0a0524]'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='flex pt-5 max-lg:flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
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
        <div className='lg:w-1/2 w-full p-2 pt-10 lg:p-10 h-full'>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className='form h-full max-lg:h-[570px] rounded-xl bg-gradient-to-br from-[#851da5] to-[#0e053a] text-lg flex flex-col gap-6 justify-center p-10'
          >
            <span className='text-3xl'>
              Dear <strong>Dimpal Das</strong>,
            </span>
            <textarea
              required
              name='Message'
              className='bg-transparent p-2 focus:outline-none border-b'
              placeholder='Write your message...'
              rows={2}
            ></textarea>
            <span>My email address is</span>
            <input
              required
              name='Email'
              className='focus:outline-none p-2 bg-transparent border-b'
              placeholder='Write your email'
              type='email'
            />
            <span>Regards</span>

            {isSent ? (
              <p className='text-sm text-center text-green-400 font-semibold'>
                Your message has been sent. Dimpal Das will get back to you
                shortly.
              </p>
            ) : (
              <button
                type='submit'
                className='p-3 font-semibold text-white bg-black rounded-xl'
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
