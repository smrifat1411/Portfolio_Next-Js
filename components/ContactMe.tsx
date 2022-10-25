import React from "react";
import { PhoneIcon,EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid'
type Props = {};

function ContactMe({}: Props) {
  return (
    <div className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center
    ">
      <h3 className="  top-24 uppercase tracking-[10px] text-gray-500 text-2xl">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className=" text-2xl font-semibold text-center">I have got just what you need,
            <span className=" decoration-indigo-500 underline"> Lets Talk</span>
        </h4>
        <div className="space-y-10 ">
            <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className=" text-green-600 h-7 w-7 animate-pulse"/>
                <p className="text-2xl">+12345678</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className=" text-green-600 h-7 w-7 animate-pulse"/>
                <p className="text-1xl">smrifat1411@gmail.com</p>
            </div>
            <div className="flex items-center space-x-5 justify-center ">
                <MapIcon className=" text-green-600 h-7 w-7 animate-pulse"/>
                <p className="text-1xl">Developer Lane</p>
            </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
            <div className=" flex space-x-2">
                <input placeholder="Name" className="contactInput" type="text" />
                <input placeholder="Email" className="contactInput"type="email" />
            </div>
            <input placeholder="Subject" className="contactInput" type="text" />
            <textarea placeholder="Message" className="contactInput"/>
            <button className=" bg-green-500 py-5 px-10 rounded-md text-black font-bold text-lg" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
