'use client'
import {motion} from 'framer-motion'
import Navbar from "@/components/Navbar";
import Resume from "./Resume";
import Content from "@/components/Content";
import { AiOutlineDown } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen text-white bg-[url('/images/bg1.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
        <div className="bg-black w-full h-full bg-opacity-50">
          <Navbar />
          <Content/>
          <motion.div
          animate= {{
            y : [0,30,20,10]
          }}
          transition={{
            duration : 1,
            repeat : Infinity,
            
          }}
           className="flex items-center justify-center mt-48">
            <AiOutlineDown size={25}/>
          </motion.div>
        </div>
      </div>
      <Resume />
    </>
  );
}
