
import ResumeContent from "@/components/ResumeContent"
import {motion} from 'framer-motion'
import React, { useEffect } from "react"




export default function Resume(){



    return (
        <section id="resume" className={``}>
            <section className="p-2">
                <div className="border-border-b-1 mt-8"/>
                <div>
                <h1 className="text-4xl font-semibold ml-auto lg:ml-96">이창현 | Resume</h1>
                    <div className="flex items-center justify-center mt-5 space-x-5 resume">
                    <motion.img 
                    initial={{
                        x : -200,
                        opacity:0
                    }}
                    transition= {{
                        duration : 1.2
                    }}
                    whileInView ={{opacity : 1, x: 0}}
                    src='https://lh3.googleusercontent.com/a/AEdFTp47ruPSo8qausxv8B4lPZTdmg6AQEXA-EY-PA6P=s192-c-rg-br100'
                    className="rounded-full h-64 w-64 mr-12"/>
                   <motion.ul 
                   initial = {{
                    x : 200,
                    opacity : 0
                   }}
                   transition={{
                    duration : 1.2
                   }}
                   whileInView ={{opacity : 1, x: 0}}
                    className="space-y-9 ml-4">
                    <div className="space-y-2">
                    <h3 className="font-semibold">- Contact</h3>
                    <li><span>Email.</span> ckdgus5262@gmail.com</li>   
                    <li><span>Phone.</span> 010-5523-5262</li> 
                    </div>
                    <div className="space-y-2">
                    <h3 className="font-semibold">- Channel</h3>
                    <li><span>GitHub.</span> <a href="https://github.com/ckdtns5262">github.com/ckdtns526</a></li> 
                    <li><span>Portfolio.</span> <a href="/">chang-hyun.com/portfolio</a></li>   
                    </div>
                   </motion.ul>
                    </div>
                </div>
            </section>
            <ResumeContent/>
        </section>
    )
}

