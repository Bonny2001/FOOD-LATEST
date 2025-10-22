import React, { useContext, useState } from 'react'
import Button from './Button'
import { useNavigate } from "react-router-dom";
import { cartContext } from './cartContext';
import { ToastContainer, toast, Slide, Bounce } from 'react-toastify';

import { CartContext } from "./Features/ContexProvider.jsx";
function ProductsCard({ data }) {
  // const navigate = useNavigate()

  // console.log(addCard.length);

  // useContex 
  const { addCart, setAddCart, setProfile, loginStatus  } = useContext(cartContext)
  console.log(addCart);

  const navigate = useNavigate()

  
  const addItem = (idMeal, strMealThumb, strMeal, strArea, strInstructions, strCategory, strIngredient1) => {
    if (loginStatus === true) {
      const obj = {
        idMeal, strMealThumb, strMeal, strArea, strInstructions, strCategory, strIngredient1
      }
      setAddCart([...addCart, obj])
      toast.success('Added to Cart', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      navigate('/sign-in')
    }
  }
  // console.log(addCart);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className='mb-10 '>
        <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 place-items-center'>
          {/* Card Section */}
          {
            data.map((data) => (
              
              <div className='group' key={data.idMeal}>
                <div className='relative space-y-3'>
                  <img src={data.strMealThumb} alt="" className='h-[150px] w-[160px] object-cover rounded-md' />
                  <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
              w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 h-full rounded'>

                    <button
                      className={`bg-red-600 text-white
                    curser-pointer hover:scale-105 duration-300
                    py-2 px-8 rounded-full relative z-10 `}


                      onClick={() => { addItem(data.idMeal, data.strMealThumb, data.strMeal, data.strArea, data.strInstructions, data.strCategory, data.strIngredient1) }

                      }
                    // onClick={() => dispatch({ type: "Add", product: data })}
                    >Order</button>

                  </div>
                </div>
                <div className='leading-7 text-center'>
                  <h2 className='font-bold'>{data.strMeal}</h2>
                  <p className='text-xs'>{data.strArea}</p>
                </div>
              </div>

            ))
          }

        </div>
      </div>
    </>
  )
}

export default ProductsCard
