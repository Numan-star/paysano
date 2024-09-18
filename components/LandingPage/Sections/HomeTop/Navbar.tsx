"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import { useLanguage } from "@/context/LanguageContext";
import globe from "@/public/language.svg";
import dropdownicon from "@/public/dropdown.svg";
import lineIcon from "@/public/line.svg";
import carticon from "@/public/cart.svg";


import { translations } from "@/constants/translations";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const changeLanguage = (lang: keyof typeof translations) => {
    setLanguage(lang);
    setDropdownVisible(false);
  };

  return (
    <nav className={`flexBetween`}>
      <Link href="/" className="lg:padding-container mt-5">
        <Image src="/logo-main.svg" alt="logo" width={90} height={29} />
      </Link>

      <ul className="hidden bg-green h-full gap-12 lg:flex px-8 py-4 rounded">
        {t('NAV_LINKS').map((link) => (
          <Link href={link.href} key={link.key} className="text-regular-16 flexCenter cursor-pointer pb-1 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}

        <Image src={lineIcon} alt="line" width={2} height={2} className="cursor-pointer " />
        {/*  <div className="flex gap-4">
          <Image src={usericon} alt="user" width={30} height={30} className="inline-block" />
          <Image src={carticon} alt="cart" width={30} height={30} className="inline-block" />
        </div> */}
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
            <Image src={globe} alt="globe" />
            <p className="text-lg px-2 font-semibold">{language === 'en' ? 'English' : 'Italian'}</p>
            <Image src={dropdownicon} alt="dropdown" />
          </div>
          {dropdownVisible && (
            <div className="absolute top-11 right-0 bg-white p-3 rounded shadow-lg">
              <p className="text-lg font-semibold p-3 cursor-pointer" onClick={() => changeLanguage('en')}>English</p>
              <p className="text-lg font-semibold p-3 cursor-pointer" onClick={() => changeLanguage('it')}>Italian</p>
            </div>
          )}
        </div>
      </ul>

      <Image
        src="/home/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      {/* <div
        className={`fixed top-0 left-0 w-full h-full bg-green z-50 transform ${openMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-between p-4">
          <Link href="/" className="lg:padding-container">
            <Image src="/logo-main.svg" alt="logo" width={74} height={29} className="bg-white p-3 rounded-xl" />
          </Link>
          <CancelSharpIcon
            fontSize="large"
            className="cursor-pointer text-black"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-center gap-8 mt-8">
          {t('NAV_LINKS').map((link) => (
            <Link href={link.href} key={link.key} className="text-regular-16 flexCenter cursor-pointer pb-1 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))} */}

      {/* <Link href="/getstarted">
            <Image src="/search.svg" alt="search" width={24} height={24} className="inline-block cursor-pointer " />
          </Link> */}
      {/* <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <Image src={globe} alt="globe" />
              <p className="text-lg px-2">{language === 'en' ? 'English' : 'Italian'}</p>
              <Image src={dropdownicon} alt="dropdown" />
            </div>
            {dropdownVisible && (
              <div className="absolute top-11 right-0 bg-white p-3 rounded shadow-lg">
                <p className="text-lg font-semibold p-3 cursor-pointer" onClick={() => changeLanguage('en')}>English</p>
                <p className="text-lg font-semibold p-3 cursor-pointer" onClick={() => changeLanguage('it')}>Italian</p>
              </div>
            )}
          </div>
        </ul>
      </div> */}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-green z-50 transform ${openMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
        style={{ width: '50%' }}  // Adjust width as needed
      >
        <div className="flex justify-between p-4">
          <Link href="/" className="lg:padding-container">
            <Image src="/logo-main.svg" alt="logo" width={74} height={29} className="bg-white p-3 rounded-xl" />
          </Link>
          <CancelSharpIcon
            fontSize="large"
            className="cursor-pointer text-black"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-center gap-8 mt-8">
          {t('NAV_LINKS').map((link) => (
            <Link href={link.href} key={link.key} className="text-regular-16 flexCenter cursor-pointer pb-1 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}

          {/* <Link href="/getstarted">
      <Image src="/search.svg" alt="search" width={24} height={24} className="inline-block cursor-pointer " />
    </Link> */}
          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <Image src={globe} alt="globe" />
              <p className="text-lg px-2">{language === 'en' ? 'English' : 'Italian'}</p>
              <Image src={dropdownicon} alt="dropdown" />
            </div>
            {dropdownVisible && (
              <div className="absolute top-11 right-0 bg-white p-3 rounded shadow-lg">
                <p className="text-lg font-semibold p-3 cursor-pointer" onClick={() => changeLanguage('en')}>English</p>
                <p className="text-lg font-semibold p-3 cursor-pointer" onClick={() => changeLanguage('it')}>Italian</p>
              </div>
            )}
          </div>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
