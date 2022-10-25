import { motion } from "framer-motion";
import React from "react";
import Card from "./Card";
import Card2 from "./Card2";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5
    }}
    className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">

      <h3 className=" absolute top-10 uppercase tracking-[10px] text-gray-500 text-2xl">
       Experience
      </h3>
      <div className=" w-full h-[90%] flex space-x-5 mt-12 overflow-x-scroll p-10 snap-x snap-mandatory">
        {/* experience card */}
        
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        
      </div>
    </motion.div>
  );
};

export default WorkExperience;
