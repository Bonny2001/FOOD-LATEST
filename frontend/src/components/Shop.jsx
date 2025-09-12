import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cartContext } from './cartContext'
import Heading from './Heading'
import axios from 'axios'
import { ToastContainer, toast, Slide, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
const Shop = ({ searchTerm }) => {
    const { showContent, loginStatus, setAddCart, addCart } = useContext(cartContext);
    const [addSearch, setSearch] = useState([]);
    const MyapiFunction = async () => {

        try {

            const responseSearch = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);

            const mealsSearch = responseSearch.data.meals || [];
            setSearch(mealsSearch);
            console.log(addSearch);
            console.log(responseSearch);
            console.log(mealsSearch);



            // console.log(showData);
        } catch (error) {
            console.error("API Error", error);
        }
    }
    useEffect(() => {
        MyapiFunction();

    }, [searchTerm]);

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

    return (<>
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
        <div className="container mt-20 p-4">

            {/* Header Section  */}
            <Heading
                title="Out product"
                subtitle="Explore  our Product" />

            {/* Body Section  */}
            <div className='mb-10 '>
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 place-items-center'>
                    {/* Card Section */}
                    {
                        addSearch.map((data) => (
                            <div className='group' key={data.idMeal}>
                                <div className='relative space-y-3'>
                                    <img src={data.strMealThumb} alt="" className='h-[150px] w-[160px] object-cover rounded-md' />
                                    <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                                          w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 h-full rounded'>

                                        <button
                                            className={`bg-red-600 text-white
                                                         curser-pointer hover:scale-105 duration-300
                                                    py-2 px-8 rounded-full relative z-10 `}
                                            onClick={() => addItem(data.idMeal, data.strMealThumb, data.strMeal, data.strArea, data.strInstructions, data.strCategory, data.strIngredient1)}
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



        </div>
    </>
    )
}

export default Shop
