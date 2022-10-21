import {FaTwitter , FaLinkedin ,FaDiscord }  from 'react-icons/fa'
import Image from 'next/image'
import Pikachu from '../public/Pikachu.png'
const HomeScreen = () => {
  return (
    <div className='text-center p-4'>
      <h1 className='text-4xl font-bold text-green-500'>Abhishek Singh</h1>
      <h2 className='font-bold py-3 '>Front End Web Dev</h2>
      <p className='text-gray-700'>Build app using nextJS reactJS tailwind CSS, A freelancer and a gamer who codes . Also a passionate gymer</p>
    <div className='flex justify-center pt-4 '>
<FaTwitter className='text-blue-600 m-2' size={30} />
<FaLinkedin className='text-gray-600 m-2' size={30}/>
<FaDiscord  className='text-red-700 m-2' size={30}/>
    </div>
    <div className='mx-auto mt-8'>

    <Image className='bg-gradient-to-b from-cyan-500 to-red-300 rounded-full' src={Pikachu} />
    </div>
    </div>
  )
}

export default HomeScreen