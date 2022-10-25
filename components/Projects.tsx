import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className=" absolute top-10 uppercase tracking-[10px] text-gray-500 text-2xl">
        Projects
      </h3>
     

      <div className=" mt-8 relative w-full flex overflow-x-scroll snap-x snap-mandatory  z-20">
        {projects.map((p, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <motion.img
            initial={{
              y:-300,
              opacity:0
            }}
            transition={{
              duration:1.3
            }}
            whileInView={{
              opacity:1,y:0
            }}
              src="https://cdn.dribbble.com/users/702789/screenshots/14160476/media/73be226f4990a451cfc905b0217f2d88.png?compress=1&resize=400x300"
              alt=""
              className=" w-[400px] sm:w-[250px] md:w-[400px]"
            />
            <div>
            <h3 className=" text-center mb-6 uppercase tracking-[3px] text-white-500 text-sm">
       Slide to Watch all Projects
      </h3>
              <h4 className="text-4xl font-semibold text-center mb-8">
                <span className=" underline decoration-green">
                  {" "}
                  Case Study {i + 1} of {projects.length}:
                </span>
                Facebook clone
              </h4>
              <p className="text-lg text-center md:text-left">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
          </div>
        ))}
      </div>
     
      <div className=" w-full absolute top-[30%] bg-[#3A5361] left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
