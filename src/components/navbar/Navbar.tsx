import { useState } from "react";

export const Navbar = () => {
  const [open,setOpen]=useState(true);
  const toggle = () => {
    setOpen(!open);
  }
  if (open) {
    return (
      <nav className="bg-gray-50 md:bg-transparent border-gray-200 top-0 z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-10 md:px-[20px] xl:px-[0px]">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <h3 className="text-primary-blue self-center text-2xl font-bold whitespace-nowrap ml-[35px] md:ml-[0px] mt-[35px] md:mt-[0px]">Litigade</h3>
            </a>
            <ul className="flex flex-row items-center content-center md:hidden mr-[35px] md:mr-[0px] mt-[35px] md:mt-[0px]">
            <li>
                  <a href="#" className="md:hidden block py-3 px-3 rounded text-gray-text md:border-0 md:p-0 text-sm ml-[7px]">
                    <img src="lupa.svg" alt="search" />
                  </a>
                  </li>
                  <li>
                  <a href="#" className="md:hidden block py-2 px-3 rounded text-gray-text md:border-0 md:p-0 text-sm">
                    <img src="carrito.svg" alt="search" />
                  </a>
                  </li>
                  <li>
                  <a href="#" className="md:hidden block py-2 px-3 rounded text-gray-text md:border-0 md:p-0 text-sm">
                    <img src="hamburger.svg" alt="menu" onClick={toggle} />
                  </a>
                  </li>
            </ul>
            {/* <button data-collapse-toggle="navbar-default" type="button" className="mr-[35px] md:mr-[0px] mt-[35px] md:mt-[0px] inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button> */}
            {/* Esta parte se pone block en md */}
            <div className="flex flex-col text-center w-full md:block md:w-auto" id="navbar-default">
              <ul className="md:font-semibold font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent font-open-sans">
                  <li>
                  <a href="#" className="block py-2 px-3 text-gray-text rounded md:p-0 md:text-sm text-[30px]" aria-current="page">Home</a>
                  </li>
                  <li>
                  <a href="#" className="block py-2 px-3 rounded text-gray-text md:border-0 md:p-0 md:text-sm text-[30px]">Product</a>
                  </li>
                  <li>
                  <a href="#" className="block py-2 px-3 rounded text-gray-text md:border-0 md:p-0 md:text-sm text-[30px]">Pricing</a>
                  </li>
                  <li>
                  <a href="#" className="block py-2 px-3 rounded text-gray-text md:border-0 md:p-0 md:text-sm text-[30px] mb-[39px] md:mb-0">Contact</a>
                  </li>
                  <li>
                  <a href="#" className="hidden md:block py-3 px-3 rounded text-gray-text md:border-0 md:p-0 text-sm ml-[7px]">
                    <img src="lupa.svg" alt="search" />
                  </a>
                  </li>
                  <li>
                  <a href="#" className="hidden md:block py-2 px-3 rounded text-gray-text md:border-0 md:p-0 text-sm">
                    <img src="carrito.svg" alt="search" />
                  </a>
                  </li>
              </ul>
            </div>
        </div>
      </nav>
  
    )
  } else {
    return (
      <div className="prov-nav flex items-end justify-end h-4vh p-2">
        <img src="hamburger.svg" alt="menu" onClick={toggle} />
      </div>
    )
  }
}
