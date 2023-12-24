import React, { useState } from 'react';
import logo from '../images/logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex items-start justify-end w-full sm:fixed relative'>
      <div className='w-6/12 px-10 sm:px-28 py-10 sm:py-14'>
        <img src={logo} alt="" />
      </div>
      <div className={`lg:flex gap-10 pr-28 items-start min-h-72 rounded-bl-3xl pt-14 bg-[#eef3f6] justify-end w-6/12`}>
        <ul className='hidden lg:flex gap-10 cursor-pointer list-none'>
          <li className='text-[#5b5f71] cursor-pointer font-bold text-xl hover:text-underline'>PRODUCTS</li>
          <li className='text-[#5b5f71] cursor-pointer font-bold text-xl'>FEATURES</li>
          <li className='text-[#5b5f71] cursor-pointer font-bold text-xl'>PRICING</li>
        </ul>
        <div className='lg:flex gap-10'>
          <span className='text-[#a0a1ac] font-extrabold text-2xl'>•</span>
          <h1 className='text-[#a0a1ac] cursor-pointer font-bold text-xl'>LOGIN</h1>
        </div>
      </div>
      <div className='lg:hidden flex items-start px-10 sm:px-0 py-10 sm:py-0 bg-[#eef3f6] min-h-72 gap-5 cursor-pointer' onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className='text-2xl'>&times;</span>
        ) : (
          <span className='text-2xl'>&#9776;</span>
        )}
      </div>
      {isMenuOpen && (
        <div className='lg:hidden flex flex-col gap-5'>
          <ul className='flex flex-col gap-5'>
            <li className='text-[#5b5f71] cursor-pointer font-bold text-xl hover:text-underline'>PRODUCTS</li>
            <li className='text-[#5b5f71] cursor-pointer font-bold text-xl'>FEATURES</li>
            <li className='text-[#5b5f71] cursor-pointer font-bold text-xl'>PRICING</li>
          </ul>
          <div className='flex gap-5'>
            <span className='text-[#a0a1ac] font-extrabold text-2xl'>•</span>
            <h1 className='text-[#a0a1ac] cursor-pointer font-bold text-xl'>LOGIN</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
