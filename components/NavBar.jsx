import { useState } from 'react'
import Logo from '../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsLinkedin, BsMoonFill, BsTwitter} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {CgMenuGridR} from 'react-icons/cg' 
import {GiCrossedSwords} from 'react-icons/gi' 


const NavBar = ({darkmode , setDarkmode}) => {
   const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
  
    setNav(!nav);
  };

 
  return (
    <div
      className='p-0 md:p-2 sticky top-0 z-50 bg-white   dark:bg-gray-900 shadow-lg '
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-gray-900'>
        <Link href='/'>
          <a>
            <Image
              src={Logo}
              alt='/'
              width='204'
              height='90'
              className='cursor-pointer w-64 h-20  dark:text-white'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='px-3 hover:underline text-green-800 font-bold dark:text-white'>
              <Link href='/'>Home</Link>
            </li>
            <li className='px-3 hover:underline text-green-800 font-bold dark:text-white'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='px-3 hover:underline font-bold text-green-800 dark:text-white'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='px-3 hover:underline font-bold text-green-800 dark:text-white'>
              <Link href='/#experience'>Experience</Link>
            </li>
           
            <li className='px-3 hover:underline font-bold text-green-800 dark:text-white'>
              <Link href='/#contact'>Contact</Link>
            </li>
            <li className=' cursor-pointer dark:text-white'><BsMoonFill onClick={()=> setDarkmode(!darkmode)} size={30}/></li>
          </ul>
          {/* Hamburger Icon */}
          <div
            className='md:hidden text-green-800 flex items-'
          >
            <CgMenuGridR   onClick={handleNav}  size={50} />
            <li className=' cursor-pointer dark:text-white pl-8'><BsMoonFill onClick={()=> setDarkmode(!darkmode)} size={30}/></li>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-gray-900'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex justify-between text-black dark:text-white p-4'>
              <Link href='/'>
                <a>
                  <Image
                    src={Logo}
                    width='187'
                    height='132'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className=' p-3 cursor-pointer'
              >
                <GiCrossedSwords size={40}/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='dark:text-green-300 text-green-800 text-center font-bold text-xl  sm:p-1 sm:text-2xl  shadow-xl'>
                Let&#39;s build something 
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                  Home
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                Projects
                </li>
              </Link>
              <Link href='/#experience'>
                <li onClick={() => setNav(false)} className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                  Experience
                </li>
              </Link>
              
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className=' px-3 hover:underline text-2xl font-bold py-4 text-green-800 dark:text-white'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-2'>
              <p className=' text-green-900 text-bolder text-2xl text-center'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                <a
                  href='https://www.linkedin.com/in/kunwarabhi7/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg dark:text-white shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsLinkedin />
                  </div>
                </a>
                <a
                  href='https://github.com/kunwarabhi7'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg dark:text-white shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsGithub />
                  </div>
                </a>
                <Link href='https://www.twitter.com/kunwarabhi7'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 dark:text-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsTwitter />
                  </div>
                </Link>
                <a href="mailto:iamdevabhi@gmail.com">
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 dark:text-white p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <SiGmail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Icon */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-gray-500'>
          <a className='flex justify-between items-center w-full text-gray-300 bg-gray-500' href="https://www.linkedin.com/in/kunwarabhi7/">Linkedin
          <BsLinkedin size={35} className='mr-2'/>
          </a>
</li>
<li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-blue-400'>
          <a className='flex justify-between items-center w-full text-gray-100 bg-blue-400' href="https://twitter.com/kunwarabhi7">Twitter
          <BsTwitter size={35} className='mr-2 bg-blue-400'/>
          </a>
</li>
<li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#333333]'>
          <a className='flex justify-between items-center w-full text-gray-300 bg-[#333333]' href="https://github.com/kunwarabhi7">GitHub
          <BsGithub size={35}className='mr-2 bg-[#333333]'/>
          </a>
</li>
<li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[0px] duration-500 bg-blue-800'>
          <a className='flex justify-between items-center w-full text-gray-300 bg-blue-800' href="mailto:iamdevabhi@gmail.com">E-Mail
          <SiGmail size={35} className='mr-2 bg-blue-800'/>
          </a>
</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;