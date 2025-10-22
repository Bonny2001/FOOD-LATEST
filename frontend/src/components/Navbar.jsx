import React, { useContext, useState } from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa"
import { HiMenuAlt3, HiX } from "react-icons/hi" 
import { useNavigate } from 'react-router-dom'
import { cartContext } from './cartContext'

const MenuLink = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/shop" },
  { id: 3, name: "About", link: "/about" },
]

function Navbar({ profile, setSearchTerm, myname, updateName }) {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const { addCart, myMongoId } = useContext(cartContext);
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setShowContent(true);
      if (showContent) {
        navigate("/shop")
      }
    }
  };

  return (
    <div className="
      bg-white  
      dark:bg-gray-900
      dark:text-white
      shadow-md fixed top-0 left-0 right-0 z-50
    ">
      <div className='pb-4'>
        {profile && (
          <div className='p-[2px] text-sm bg-orange-600 font-bold text-gray-100 text-center mb-1'>
            50% ON YOUR FIRST ORDER {updateName}
          </div>
        )}

        <div className="container flex justify-between pt-1 items-center">
          {/* Logo */}
          <div className='flex items-center gap-8'>

         
            <a href="/"
            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
            style={{ fontFamily: "Bebas Neue , sans-serif" }}
          >
            Foodify
          </a>

          {/* Desktop Menu */}
          <div className='hidden lg:block'>
            <ul className='flex items-center gap-4'>
              {MenuLink.map((data) => (
                <li key={data.id}>
                  <button
                    onClick={() => navigate(data.link)}
                    className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                  >
                    {data.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
               </div>
          {/* Right Side */}
          <div className='flex items-center gap-4'>
            {/* Search (only desktop) */}
            <div className='relative group hidden sm:block lg:block'>
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder='Search'
                className='search-bar rounded-full pl-4'
              />
              <IoMdSearch
                className='text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary duration-200 absolute top-1/2 -translate-y-1/2 right-3'
              />
            </div>

            {/* Profile or Join Now */}
            {profile ? (
              <div className='flex flex-row items-center gap-1'>
                <button
                  className='flex justify-center items-center gap-1'
                  onClick={() => navigate("/update_profile/" + myMongoId)}
                >
                  <img className='h-6 rounded-sm' src="avatar.png" alt="Avatar" />
                  <p className='text-[10px] font-bold italic text-gray-600'>{updateName}</p>
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/sign-in")}
                className='bg-primary text-gray-100 hover:scale-105 duration-300 py-1 px-6 rounded-full'
              >
                Join Now
              </button>
            )}

            {/* Cart */}
            <button onClick={() => navigate("/card")} className='relative p-3'>
              <FaShoppingCart className='text-md text-gray-600 dark:text-gray-400' />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                {addCart.length}
              </div>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-800 shadow-md px-6 py-4 space-y-6">
            {/* Mobile Search */}
            <div className='relative group'>
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder='Search'
                className='w-full rounded-full pl-4 pr-8 py-2 border dark:bg-gray-700'
              />
              <IoMdSearch
                className='text-xl text-gray-600 dark:text-gray-300 absolute top-1/2 -translate-y-1/2 right-3'
              />
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col gap-4">
              {MenuLink.map((data) => (
                <li key={data.id}>
                  <button
                    onClick={() => {
                      navigate(data.link);
                      setMenuOpen(false); 
                    }}
                    className="block w-full text-left font-semibold text-gray-600 dark:text-gray-200 hover:text-primary"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
