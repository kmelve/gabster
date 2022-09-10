import React, {useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import NavLogo from '../public/assets/logo.png'
import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow,setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#19253B');
    const [linkColor, setLinkColor] = useState('#ecf0f3');

    const router = useRouter();

   useEffect(() => {
     if (
       router.asPath === '/property' ||
       router.asPath === '/crypto' ||
       router.asPath === '/netflix' ||
       router.asPath === '/twitch'
     ) {
       setNavBg('transparent');
       setLinkColor('#ecf0f3');
     } else {
       setNavBg('#19253B');
       setLinkColor('#ecf0f3');
     }
   }, [router]);

    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect( ()=>{
        const handleShadow = () =>{
            if(window.scrollY >= 90){
                setShadow(true)
            }
            else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    
    },[])


  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='60'
              height='60'
              className='cursor-pointer'
            /> 
            
          </a>
          
        </Link>
        
        <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex' >
                <Link href='/'><li className='ml-10 text-sm uppercase hover:border-b'><a>Home</a></li></Link>
                <Link href='/#about'><li className='ml-10 text-sm uppercase hover:border-b'><a>About</a></li></Link>
                <Link href='/#skills'><li className='ml-10 text-sm uppercase hover:border-b'><a>Skills</a></li></Link>
                <Link href='/#projects'><li className='ml-10 text-sm uppercase hover:border-b'><a>Projects</a></li></Link>
                <Link href='/#contact'><li className='ml-10 text-sm uppercase hover:border-b'><a>Contact</a></li></Link>
                <Link href='/blog'><li className='ml-10 text-sm uppercase hover:border-b'><a>Blog(Coming Soon!)</a></li></Link>
            </ul>
            <div onClick={handleNav} className='md:hidden text-white'>
                <AiOutlineMenu size={25} />
            </div>
        </div>
        </div>
        
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
                nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w=[60%] md:w-[45%] h-screen bg-[#ecf0f3] text-[#333333] p-10 eas-in duration-500' 
                : 'fixed left-[-100%] top-0 eas-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <Link href='/'> 
                    <Image onClick={()=> setNav(false)} className='cursor-pointer' src={NavLogo} alt='/' width='50' height='50'/>
                     </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's Build Legendary Stuff!</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'><li  onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li></Link>
                        <Link href='/#about'><li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li></Link>
                        <Link href='/#skills'><li  onClick={()=> setNav(false)}className='py-4 text-sm'>Skills</li></Link>
                        <Link href='/#projects'><li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li></Link>
                        <Link href='/#contact'><li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li></Link>
                        <Link href='/blog'><li onClick={()=> setNav(false)} className='py-4 text-sm'>Blog(Coming Soon!)</li></Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Connect with Me!</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar