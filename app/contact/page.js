
'use client'
import {motion} from 'framer-motion'



export default function Contact(){
    return (
        <motion.div
        initial={{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 1.5}}
        className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-12 uppercase tracking-[20px] text-black font-bold text-3xl'>Contact</h3>
        <motion.img
        initial={{
            x : -200,
            opacity : 0
        }}
        transition={{duration : 1.2}}
        whileInView={{opacity : 1, x : 0}}
        src='images/profile.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[550px]'
        />
         <div className='space-y-10 px-0 md:px-10'>
         <ul className=''>
                <li>Email
                    <p>ckdgus5262@gmail.com</p>
                </li>
                <li>Email</li>
                <li>Phone</li>
                <li>Notion</li>
            </ul>
       
    </div>
        </motion.div>
    )
}