import {BsMoonFill} from 'react-icons/bs'
const NavBar = () => {
  return (
    <div className='p-2'>
        <ul className='flex  justify-between '>
            <li className='text-2xl font-bold cursor-pointer'>Home</li>
            <div className='flex m-2 px-4 '>

            <li className='bg-cyan-500 px-2 py-2 rounded-md text-white  pr-4 mr-2 cursor-pointer '>Resume</li>
            <li className=' cursor-pointer'><BsMoonFill size={30}/></li>
            </div>
        </ul>
    </div>
  )
}

export default NavBar