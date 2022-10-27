import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen dark:bg-gray-900 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/36934eea-ca66-4590-ac83-76f4b0348cf3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-green-800  dark:text-gray-300'>Contact</p>
                <p className='dark:text-gray-300 text-green-800 py-4 pt-4'> Submit the form below or mail me an myemail - iamdevabhi@gmail.com. </p>
            </div>
            <input className=' bg-blue-800  text-gray-300  p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2  bg-blue-800 text-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className=' p-2 bg-blue-800 w-full  text-gray-300' name="message " rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'> Collaborate</button>
        </form>
    </div>
  )
}

export default Contact