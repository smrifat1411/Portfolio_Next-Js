import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BackgroundAnimation from "./BackgroundAnimation";
import image1 from "../public/r.png";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundAnimation />
      <img
        className=" relative rounded-full h-36 w-36 mx-auto object-cover"
        src="https://196034-584727-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/Dan-Clark-Software-Engineer-Round.jpg"
        alt=""
      />
      <div className=" z-30">
        <h1 className=" text-5xl lg:text-7xl font-semibold px-10">
          <span className="mr-3">
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={true}
              cursor
              cursorStyle="_"
              cursorColor="green"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </h1>
        <div className=" pt-5 z-50">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>

          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#Projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
