// Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Navbar: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('Services');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePageChange = (page: string) => {
    setActivePage(page);
    setIsOpen(false); // Menutup navbar setelah memilih halaman
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
       <Link href="/">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" alt="Company Logo" className="h-12" />
          </a>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:w-auto ${isOpen ? '' : 'hidden'} md:block`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/">
                <a className={`block py-2 px-3 rounded md:p-0 dark:text-white md:dark:text-blue-500 ${activePage === 'Home' ? 'text-gray-900 md:text-blue-700 md:p-0 dark:text-white' : 'hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`} aria-current="page" onClick={() => handlePageChange('Home')}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`block py-2 px-3 rounded md:p-0 dark:text-white md:dark:text-blue-500 ${activePage === 'About' ? 'text-blue-700 md:text-blue-700 md:p-0 dark:text-white' : 'hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`} aria-current="page" onClick={() => handlePageChange('About')}>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={`block py-2 px-3 rounded md:p-0 dark:text-white md:dark:text-blue-500 ${activePage === 'Services' ? 'text-blue-700 md:text-blue-700 md:p-0 dark:text-white' : 'hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`} aria-current="page" onClick={() => handlePageChange('Services')}>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <a  className={`block py-2 px-3 rounded md:p-0 dark:text-white md:dark:text-blue-500 ${activePage === 'Team' ? 'text-blue-700 md:text-blue-700 md:p-0 dark:text-white' : 'hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`} aria-current="page" onClick={() => handlePageChange('Team')}>Team</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
