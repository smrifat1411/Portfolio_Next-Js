import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://youtube.com/channel/UC3o_47hLX7EhhW5btfwdr_Q"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://gitlab.com/smrifat1411"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/smrifat1411"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/smrifat1411/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className=" cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          onClick={(e) => {
            window.location.href = "mailto:smrifat1411@gmail.com";
          }}
        />
        <p
          className=" uppercase hidden md:inline-flex text-sm text-gray-400"
          onClick={(e) => {
            window.location.href = "mailto:smrifat1411@gmail.com";
          }}
        >
          Talk with me
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
