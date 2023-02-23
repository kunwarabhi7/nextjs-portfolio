import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, skill, projectUrl, source }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className=' text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{skill}</p>
       <div className='flex justify-between'>

        <Link href={projectUrl}>
            <p className='text-center py-3 px-4  rounded-lg bg-white text-gray-700 font-bold  cursor-pointer'>Demo</p>
        </Link>
        <Link href={source}>
            <p className='text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold  cursor-pointer'>GitHub</p>
        </Link>
       </div>
    </div>
 </div>
  )
}

export default ProjectItem