import { motion } from 'framer-motion'
import React from 'react'




type Props = {}

function Card({}: Props) {
  return ( 
   <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
    initial={{
        y:-100,
        opacity:0,
    }}
    transition={{duration:1.2}}
    whileInView={{
        opacity:1, y:0
    }}

    className=' w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object cover object-center' 
    src="https://res.cloudinary.com/rifat1411/image/upload/v1666617008/photos/rifat-df0a1f00f0e157bd459b4d023832bdcd_bks23k.png" alt="" />


    <div className='px-0 md:px-10'>
        <h4 className=' text-4xl font-light'>
            CEO of LazyCompany
        </h4>
        <p className='font-bold text-2xl mt-1'>Lazy Company</p>
        <div className='flex space-x-2 my-2' >
            <img className='h-10 w-10 rounded-full' src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" />
            
        </div>
        <p className='uppercase py-5 text-gray-300'> started work....End</p>
        <ul className=' list-disc space-y-4 ml-5 text-lg'>
            <li>Summary PointsSummary </li>
            <li>Summary PointsSummary </li>
            <li>Summary PointsSummary </li>
            <li>Summary PointsSummary </li>
        </ul>
    </div>

   </article>
  )
}

export default Card