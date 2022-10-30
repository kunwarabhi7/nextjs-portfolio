import Image from 'next/image'
import Hero from '../public/assets/dev.gif'

import TypewriterEffect from './Type'
const HomeScreen = () => {
  return (
    
    <div className='flex flex-col md:flex-row w-full h-[500px] dark:bg-gray-900'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto mt-auto  px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600 text-2xl sm:text-4xl pb-4'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold dark:text-blue-100 text-green-900 '>
          Abhishek Singh
        </h1>
        <p className='text-blue-600 text-2xl sm:text-4xl py-4'>and i am a</p>
<h1 className='text-4xl sm:text-7xl font-bold dark:text-yellow-400 text-yellow-500'><TypewriterEffect /></h1>
        
     
    </div>
    
    <div className='mx-auto mt-4 md:mt-32 w-64 md:w-96 cursor-pointer   '>

    <Image className='bg-gradient-to-b z-auto  from-cyan-500 to-red-300 dark:from-black dark:to-red-500  rounded-full ' src={Hero} />
    </div>
    </div>
  )
}

export default HomeScreen