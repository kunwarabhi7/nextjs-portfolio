import { useState } from 'react'
import Logo from '../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsLinkedin, BsMoonFill, BsTwitter} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {CgMenuGridR} from 'react-icons/cg' 
import {GiCrossedSwords} from 'react-icons/gi' 



const NavBar = ({darkmode , setDarkmode}) => {
  const [sideBar ,setSideBar] = useState(false)

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <div className='p-0 md:p-2  dark:bg-gray-900 shadow-lg '>
        <ul className='hidden fixed top-0 left-0 right-0 md:flex  justify-between '>
            <Link href='/'>
              <li className='w-64 h-20  dark:text-white'>
                <Image className='cursor-pointer' src={Logo}/>
              </li>
            </Link>
            <div className='flex my-4 px-3 justify-evenly'>

            <Link href='/'>
              <li className=' px-3 hover:underline font-bold dark:text-white'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className='px-3  hover:underline font-bold dark:text-white'>
                Skills
              </li>
            </Link>
            <Link href='/'>
              <li className='px-3 hover:underline font-bold dark:text-white'>
                Projects
              </li>
            </Link>
            <Link href='/'>
              <li className='px-3 hover:underline font-bold dark:text-white'>
                Experience
              </li>
            </Link>
            <Link href='/'>
              <li className='px-3 hover:underline font-bold dark:text-white'>
                Contact
              </li>
            </Link>
            <li className=' cursor-pointer dark:text-white'><BsMoonFill onClick={()=> setDarkmode(!darkmode)} size={30}/></li>
            </div>
        </ul>

        {/* Mobile View */}
        <div className='md:hidden flex justify-between'>
        <Link href='/'>
              <li className='w-48 h-12  dark:text-white'>
                <Image className='cursor-pointer' src={Logo}/>
              </li>
            </Link>
        <div className='pt-4 pr-4 flex'>
        <li className=' cursor-pointer dark:text-white'><BsMoonFill onClick={()=> setDarkmode(!darkmode)} size={30}/></li>
<CgMenuGridR onClick={handleSideBar} className='text-red-500' size={50} />
        </div>
        </div>
        {/* OverLay */}
        <div className={sideBar ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70': 'hidden'}>

<div className= {sideBar ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-gray-900' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
<div>
  <div className='flex justify-between text-black dark:text-white p-4'>
    <Image src={Logo} width='196' height='72' />
    <GiCrossedSwords onClick={handleSideBar}  size={40} />

  </div>
  <p className='dark:text-green-300 text-green-800 text-center font-bold text-xl  sm:p-3 sm:text-3xl  shadow-xl'>Front End Web Dev</p>
  <ul className='pt-8'>
  <Link href='/'>
              <li className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                Skills
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline  text-2xl font-bold py-4 text-green-800 dark:text-white'>
                Projects
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                Experience
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                Contact
              </li>
            </Link>
            
  </ul>
</div>
<div className=' pt-4'>
  <p className='text-center text-2xl text-green-800 font-bold p-2 lg:p-4'>
    Let's Connect 
    </p>
    <div className='flex justify-around'>
      <div className='rounded-full shadow-lg shadow-gray-400 hover:scale-105  p-3 ease-in duration-300'>
      <BsLinkedin size={25} />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 hover:scale-105  p-3 ease-in duration-300'>
 <BsGithub />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 hover:scale-105  p-3 ease-in duration-300'>
      <BsTwitter />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 hover:scale-105  p-3 ease-in duration-300'>
      <SiGmail />
      </div>

    </div>
</div>
</div>
        </div>
    </div>
  )
}

export default NavBar