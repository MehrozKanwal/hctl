import React from 'react'
import Image from 'next/image'
import Logo from "../asset/logo.svg"

function Navbar() {
  return (
    <div>
    <div className="navbar stickey top-0 bg-base-100 shadow-md p-4 pb-4 pr-6 pl-7">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>ABOUT US</a></li>
        <li tabIndex={0}>
          <a className="justify-between">BLOGS</a>
        </li>
        <li><a>SERVICES</a></li>
        <li><a>SIGNUP</a></li>
        <li><a>LOGIN</a></li>
      </ul>
    </div>
    <div>
    <Image className='w-48'
            src={Logo}
            alt='htcl-logo'
             />
    </div>
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0 font-bold ">
      <li className='text-appColor'><a>ABOUT US</a></li>
      <li className='text-appColor'><a>BLOGS</a></li>
      <li className='text-appColor'><a>SERVICES</a></li>
      <span class="dvivder">
        <div class="divider divider-horizontal mt-4 h4"></div>
      </span>
      <li><a></a>
      <span class="cursor-pointer rounded-full px-10 py-0 whitespace-nowrap shadow-md  hover:scale-110  text-xs bg-appColor text-white flex items-center
       leading-snug  hover:opacity-75 ">SIGNUP</span>
      </li>
      <li><a></a>
      <span class="cursor-pointer rounded-full px-10 py-2.5 whitespace-nowrap shadow-md  hover:scale-110 text-xs flex items-center text-white bg-appColor
         hover:opacity-75 ">LOGIN</span>
      </li>
     
    </ul>
  </div>
  
</div>
        
    </div>
  )
}

export default Navbar