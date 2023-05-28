'use client'

import React,{useState} from 'react'
import Link from 'next/link'



const Navbar = () => {

  // onClick 핸들러를 정의하여 부드러운 스크롤 애니메이션 만들기
  const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <div className='flex bg-black h-80 w-[100vw] items-center justify-center text-white lg:items-start 
    lg:justify-start lg:h-screen lg:w-[17vw] lg:absolute z-10 navbar'>
        <div className=' mt-8 ml-6'>
            <ul className='text-3xl space-y-6 navlist'>
                <li><Link href='/' onClick={handleScroll}>Home</Link></li>
                <li><Link href='#resume' onClick={handleScroll}  >Resume</Link></li>
                <li><Link href='https://github.com/ckdtns5262'>Github</Link></li>
                <li><Link href='#project' onClick={handleScroll}>Project</Link></li>
                <li><Link href='/more'>More</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar