import React, { useContext, useState } from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa"
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { cartContext } from './cartContext'
import Button from './Button'
import { CartContext } from './Features/ContexProvider.jsx'
import { useEffect } from 'react'



const MenuLink = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Shop",
        link: "/shop"
    },
    {
        id: 3,
        name: "About",
        link: "/about"
    },
    // {
    //     id: 4,
    //     name: "Card",
    //     link: "/card"
    // },
]
function Navbar({ profile, setSearchTerm, myname , updateName}) {


    //   const {addCart , setAddCart} = useContext(cartContext)

    const [showContent, setShowContent] = useState(false);
    // const { cart, dispatch } = useContext(CartContext);
    // useContex 
    const { addCart, myMongoId, userName, setUserName } = useContext(cartContext)
    // const { id } = useParams()
    const navigate = useNavigate()
    // console.log(searchTerm);
    // console.log("myname:", myname);
   
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Prevent default form submission if the input is inside a form
            event.preventDefault();
            setShowContent(true); // Set state to show the new content
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
        fixed w-full z-50
        ">
            <div className='pb-4 '>

                {
                    profile ? (
                        <div className='p-[2px] text-sm bg-orange-600 font-bold text-gray-100 text-center mb-1'> 50% ON YOUR FIRST ORDER {updateName}</div>

                    ) : null

                }


                <div className="container flex justify-between pt-1">
                    {/* {Logo and Link Section} */}
                    <div className='flex gap-4 items-center'>
                        <a href="/"
                            className='text-primary 
                            font-semibold tracking-widest
                            text-2xl uppercase sm:text-3xl'
                            style={{ fontFamily: "Bebas Neue , sans-serif" }}
                        >Foodify</a>
                        <div>

                            {/* Menu Item */}

                            <div className='hidden lg:block'>
                                <ul className='flex items-center gap-4'>
                                    {MenuLink.map((data, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => navigate(data.link)}
                                                href={data.link}

                                                className='
                                                inline-block px-4
                                                font-semibold text-gray-500
                                                hover:text-black 
                                                dark:hover:text-white duration-200'>{data.name}
                                            </button>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* {Navbar Right Section} */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar Section */}
                        <div className=' relative group hidden sm:block'>
                            <input
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                                type="text" placeholder='Search'
                                className='search-bar  rounded-full pl-4' />
                            <IoMdSearch
                                className='text-xl text-gray-600 dark:text-gray-400
                                 group-hover:text-primary duration-200 
                                 absolute top-1/2 -translate-y-1/2 right-3'/>
                        </div>

                        {/* Dark Mode Section */}
                        {
                            profile ? (
                                <div className='flex flex-row items-center gap-1'>
                                    <button className=' flex justify-center items-center gap-1' onClick={() => navigate("/update_profile/" + myMongoId)}>
                                        <img className='h-6 rounded-sm' src="avatar.png" alt="Avatar" />
                                        <p className='   text-[10px] font-bold antialiased italic text-gray-600 '>{updateName}</p>
                                    </button>
                                    {/* border-black border-2 border-dotted p-1 rounded-sm  */}

                                </div>) :
                                (<div>
                                    <button
                                        onClick={() => navigate("/sign-in")}
                                        className={` bg-primary text-gray-100
                                     curser-pointer hover:scale-105 duration-300
                                     py-1 px-6 rounded-full relative z-10 `}
                                    >Join Now</button>

                                </div>)
                        }


                        {/* <Link to={'/card'}> */}
                        <button
                            onClick={() => navigate("/card")}
                            className='relative p-3'
                        // href="/card"
                        >
                            <FaShoppingCart
                                className='text-md text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white
                                rounded-full absolute top-0 right-0 flex items-center
                                justify-center text-xs'>
                                {/* {cart.length} */}
                                {addCart.length}
                            </div>
                        </button>

                        {/* </Link> */}






                        {/* Dark Mode Section */}
                        <div></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
