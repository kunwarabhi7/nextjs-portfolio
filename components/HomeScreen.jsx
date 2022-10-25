import Image from 'next/image'
import Pikachu from '../public/Pikachu.png'
const HomeScreen = () => {
  return (
    
    <div className='flex flex-col md:flex-row w-full h-screen dark:bg-gray-900'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto mt-auto  px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600 text-4xl sm:text-7xl pb-4'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold dark:text-blue-100 text-green-900 '>
          Abhishek Singh
        </h1>
        
     
    </div>
    
    <div className='mx-auto mt-4 md:mt-32 w-64 md:w-96 cursor-pointer   '>

    <Image className='bg-gradient-to-b z-auto  from-cyan-500 to-red-300  rounded-full' src={Pikachu} />
    </div>
    </div>
  )
}

export default HomeScreen