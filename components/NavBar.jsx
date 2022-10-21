import {BsMoonFill} from 'react-icons/bs'

const NavBar = ({darkmode , setDarkmode}) => {
  return (
    <div className='p-2 dark:bg-gray-900'>
        <ul className='flex  justify-between '>
            <li className='text-2xl font-bold cursor-pointer dark:text-white'>Home</li>
            <div className='flex m-2 px-4 '>

            <li className='bg-cyan-500 px-2 py-2 rounded-md text-white  pr-4 mr-2 cursor-pointer '>Resume</li>
            <li className=' cursor-pointer dark:text-white'><BsMoonFill onClick={()=> setDarkmode(!darkmode)} size={30}/></li>
            </div>
        </ul>
    </div>
  )
}

export default NavBar