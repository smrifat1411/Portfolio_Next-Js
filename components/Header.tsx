import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center'>
      <motion.div 
      initial={{ x:-500,
      opacity:0,
    scale:0.5
  }}
    animate={{
      x:0,
      opacity:1,
      scale:1
    }}
    transition={{
      duration:1
    }}
      className='flex flex-row items-center'>
      <SocialIcon url='facebook.com' fgColor='gray' bgColor='transparent'/>
      <SocialIcon url='youtube.com'fgColor='gray' bgColor='transparent'/>
      <SocialIcon url='twitter.com'fgColor='gray' bgColor='transparent'/>
      <SocialIcon url='github.com'fgColor='gray' bgColor='transparent'/>
      </motion.div>
      <motion.div initial={{ x:500,
      opacity:0,
    scale:0.5
  }}
    animate={{
      x:0,
      opacity:1,
      scale:1
    }}
    transition={{
      duration:1
    }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon className=' cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
        />
        <p className=' uppercase hidden md:inline-flex text-sm text-gray-400' > Talk with me</p>
      </motion.div>
    </header>
    
  )
}

export default Header