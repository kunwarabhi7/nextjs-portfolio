import {BsMoonFill} from 'react-icons/bs'
const NavBar = () => {
  return (
    <div className='p-2'>
        <ul className='flex  justify-between '>
            <li>Home</li>
            <div className='flex m-2 pr-8 '>

            <li className='pr-2 cursor-pointer'><BsMoonFill size={30}/></li>
            <li>Resume</li>
            </div>
        </ul>
    </div>
  )
}

export default NavBar