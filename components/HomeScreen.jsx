import {FaTwitter , FaLinkedin ,FaDiscord }  from 'react-icons/fa'
import Image from 'next/image'
import Pikachu from '../public/Pikachu.png'
import TypewriterEffect from './Type'
const HomeScreen = () => {
  return (
    
    <div className='flex  w-full h-screen dark:bg-gray-900'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600 text-4xl pb-4'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold dark:text-blue-100 text-green-900 '>
          Abhishek Singh
        </h1>
        <div className=' invisible md:visible'>

        <p className='text-red-400 text-4xl  p-4'>and, I am a</p>
        <h2 className='text-7xl sm:text-7xl font-bold dark:text-[#c4b84e] text-gray-700'>
        <TypewriterEffect  />
        </h2>
        </div>
     
    </div>
    
    <div className='mx-auto mt-32'>

    <Image className='bg-gradient-to-b from-cyan-500 to-red-300 rounded-full ' src={Pikachu} />
    </div>
    </div>
  )
}

export default HomeScreen