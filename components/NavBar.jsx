import {BsMoonFill} from 'react-icons/bs'
import Logo from '../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {CgMenuGridR} from 'react-icons/cg' 
import {GiCrossedSwords} from 'react-icons/gi' 


const NavBar = ({darkmode , setDarkmode}) => {
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
        <div className='md:hidden flex justify-between'>
        <Link href='/'>
              <li className='w-48 h-12  dark:text-white'>
                <Image className='cursor-pointer' src={Logo}/>
              </li>
            </Link>
        <div className='pt-4 pr-4'>
<CgMenuGridR className='text-red-500' size={50} />
        </div>
        </div>
        <div className='fixed top-0 left-0  w-full h-screen bg-black/70'>
<div className='fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900'>
<div>
  <div className='flex justify-between text-white p-4'>
    <Image src={Logo} width='196' height='72' />
    <GiCrossedSwords  size={40} />

  </div>
  <p className='text-green-300 text-center font-bold text-3xl   p-8'>Front End Web Dev</p>
  <ul className='pt-8'>
  <Link href='/'>
              <li className=' px-3 hover:underline text-4xl font-bold py-4 text-white dark:text-black'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline text-4xl font-bold py-4 text-white dark:text-black'>
                Skills
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline  text-4xl font-bold py-4 text-white dark:text-black'>
                Projects
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline text-4xl font-bold py-4 text-white dark:text-black'>
                Experience
              </li>
            </Link>
            <Link href='/'>
              <li className=' px-3 hover:underline text-4xl font-bold py-4 text-white dark:text-black'>
                Contact
              </li>
            </Link>
            
  </ul>
</div>
</div>
        </div>
    </div>
  )
}

export default NavBar