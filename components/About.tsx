import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-8xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        //   viewport={{
        //     once:true
        //   }}

        src="https://res.cloudinary.com/rifat1411/image/upload/v1666617008/photos/rifat-df0a1f00f0e157bd459b4d023832bdcd_bks23k.png"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className=" space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">Some Words About Me</h4>
        <p className="text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. 
        </p>
      </div>
    </motion.div>
  );
}
