import {BsMoonFill} from 'react-icons/bs'
import Logo from '../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
const NavBar = ({darkmode , setDarkmode}) => {
  return (
    <div className='p-2 dark:bg-gray-900 '>
        <ul className='flex  justify-between '>
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
    </div>
  )
}

export default NavBar