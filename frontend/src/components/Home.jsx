import React, { useEffect } from 'react'
import Hero from './Hero'
import Category from './Category'
import Services from './Services'
import Products from './Products'
import Slider from 'react-slick'
import Button from './Button'
import Heading from './Heading'
import axios from 'axios'
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle
} from "react-icons/fa"
import Footer from './Footer'

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
  {
    id: 4,
    icon: <FaCheckCircle className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
]


const HeroSlide = [
  {
    id: 1,
    img: "burger.png",
    title: "PAKORA",
    description: "onent’s content.",
  },
  {
    id: 2,
    img: "thali.png",
    title: "PAKORA",
    description: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },
  {
    id: 3,
    img: "pasta.png",
    title: "PAKORA",
    description: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },


]
function Home({ showData, setShowData , searchTerm ,setShowContent}) {


  // const addCart = (idMeal, strMealThumb, strMeal, strArea, strInstructions , strCategory) => {
  //   const obj = {
  //     idMeal, strMealThumb, strMeal, strArea, strInstructions , strCategory
  //   }
  //   setAddCart([...addCart, obj])
  // }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const MyapiFunction = async () => {

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
      const meals = response.data.meals || [];
      //   setOriginalData(meals);
      console.log(response);

      setShowData(meals);
      console.log(showData);
    } catch (error) {
      console.error("API Error", error);
    }
  }
  useEffect(() => {
    MyapiFunction(); 33

  }, []);

  return (
    //  hero-bg-color 
    <>
      <div>
        <Hero />
        <Category />

        <Services />

        <Products showData={showData} 
        setShowData={setShowData} 
        searchTerm={searchTerm} 
        setShowContent={setShowContent} />
        <Footer />


      </div>
    </>
  )
}

export default Home
