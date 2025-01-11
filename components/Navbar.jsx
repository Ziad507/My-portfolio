"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";

import { useRef } from "react";
function Navbar({ isDark, setIsDark }) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  function openMenu() {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  function closeMenu() {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-white/20 " : ""
        }`}
      >
        <a href='#top'>
          <Image
            src={isDark?assets.logo_dark:assets.logo}
            alt='Logo'
            className='w-28 cursor-pointer mr-14'
          />
        </a>
        <ul
          className={`hidden md:flex items-center  gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            !isScroll ? "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent " : ""
          }`}
        >
          <li>
            <a href='#top'>Home</a>
          </li>
          <li>
            <a href='#about'>About me</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#work'>My Work</a>
          </li>
          <li>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>
        <div className='flex gap-4 items-center'>
          <button
            onClick={() => setIsDark(!isDark)}
            className='cursor-pointer  '
          >
            {isDark ? (
              <Image src={assets.sun_icon} alt='' className='w-6' />
            ) : (
              <Image src={assets.moon_icon} alt='' className='w-6' />
            )}
          </button>
          <a
            href='#contact'
            className='hidden lg:flex items-center gap-3 font-Ovo px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50 dark:hover:bg-lightHover  dark:hover:bg-opacity-30 duration-500 '
          >
            Contact
            <Image src={isDark?assets.arrow_icon_dark:assets.arrow_icon} alt='' className='w-3' />
          </a>
          <button className='md:hidden ml-3'>
            <Image
              onClick={openMenu}
              src={isDark ? assets.menu_white :assets.menu_black}
              alt='icon'
              className='w-6'
            />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white '
        >
          <div className=' absolute right-6 top-6 '>
            <Image
              onClick={closeMenu}
              src={isDark?assets.close_white:assets.close_black}
              alt=''
              className='cursor-pointer w-4'
            />
          </div>
          <li onClick={closeMenu}>
            <a href='#top'>Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href='#about'>About me</a>
          </li>
          <li onClick={closeMenu}>
            <a href='#services'>Services</a>
          </li>
          <li onClick={closeMenu}>
            <a href='#work'>My Work</a>
          </li>
          <li onClick={closeMenu}>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
