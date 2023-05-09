import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex bg-black h-80 w-[100vw] items-center justify-center text-white lg:items-start lg:justify-start lg:h-screen lg:w-[17vw] lg:absolute z-10'>
        <div className=' mt-8 ml-6'>
            <ul className='text-3xl space-y-6'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='#resume'>Resume</Link></li>
                <li><Link href='https://github.com/ckdtns5262'>Github</Link></li>
                <li><Link href='/project'>Project</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar