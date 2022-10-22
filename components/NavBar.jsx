import {BsMoonFill} from 'react-icons/bs'
import Logo from '../public/assets/logo.png'
import Image from 'next/image'
const NavBar = ({darkmode , setDarkmode}) => {
  return (
    <div className='p-2 dark:bg-gray-900'>
        <ul className='flex  justify-between '>
            <li className='w-64 h-20  dark:text-white'>
              <Image className='cursor-pointer' src={Logo}/>
            </li>
            <div className='flex my-4 px-4 '>

            <li className='bg-cyan-500 px-2 py-2 rounded-md text-white  pr-4 mr-2 cursor-pointer '>Resume</li>
            <li className=' cursor-pointer dark:text-white'><BsMoonFill onClick={()=> setDarkmode(!darkmode)} size={30}/></li>
            </div>
        </ul>
    </div>
  )
}

export default NavBar