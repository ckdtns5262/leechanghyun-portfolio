
'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {BsArrowLeft} from 'react-icons/bs'

export default function Contact() {

    const router = useRouter()
    const [show, setShow] = useState()

    return (
        <>        
        <BsArrowLeft size={30} className="ml-2 absolute z-30 cursor-pointer" onClick={()=>{router.back(-1)}}/>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className='absolute top-7 uppercase tracking-[20px] text-black font-bold text-3xl'>More</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='images/profile.jpg'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[550px]'
            />
            <div className='space-y-10 px-0 md:px-10 text-lg mb-36'>
                <ul className='space-y-6 font-semibold '>
                    <li className='flex '>
                        <p>Email : </p>
                        <a className='ml-1' href='mailto:ckdgus5262@gmail.com'>ckdgus5262@gmail.com</a>  
                    </li>
                    <li className='flex'>
                        <p>Phone : </p>
                        <p className='ml-1'>010-5523-5262</p>
                    </li>
                    <li className='flex'>
                        <p>Github : </p>
                        <a className='ml-1' href='https://github.com/ckdtns5262'>https://github.com/ckdtns5262</a>
                    </li>
                </ul>
              
                <div className='flex flex-col space-y-5'>
                <button onClick={()=>setShow(!show)}>펼쳐보기</button>
                    {show ?  <p>아직 부족하지만 점진적으로 발전해나가고 있는 중입니다.<br/>
                        새로운 언어, 라이브러리를 공부하는것을 선호하며 원만히 수용합니다.<br/>
                        포트폴리오는 계속해서 버젼 업그레이드 진행예정입니다. <br/>
                        감사합니다.
                    </p> : '' }
                  
                </div>

            </div>
        </motion.div>
        </>

    )
}