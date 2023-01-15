import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-8xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-10 uppercase tracking-[10px] text-gray-500 text-2xl">
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

        src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className=" space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">Some Words About Me</h4>
        <p className="text-base">
          I am a passionate engineering student who is looking for an
          opportunity to be a professional software engineer. I have a strong
          drive to develop the skills required to meet project milestones. I
          possess practical job experience on several projects as a remote
          freelance developer in an EU-based startup. Besides this, I am
          continuing problem-solving and volunteer works. Recently I joined as a
          scratch programming mentor in a volunteer organization called BdOSN.
        </p>
      </div>
    </motion.div>
  );
}
