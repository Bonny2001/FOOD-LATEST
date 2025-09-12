import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Home from './components/Home'
import ProductsCard from './components/ProductsCard'
import Register from './components/Register'
import { cartContext } from './components/cartContext'
import Login from './components/Login'
// import mycart from './components/mycart'
import NewCart from './components/NewCart'
import ProfileUpdate from './components/ProfileUpdate'
import Shop from './components/Shop'
import Products from './components/Products'
import About from './components/About'


function App() {
  // useContex 

  // States 
  const [showData, setShowData] = useState([])
  const [loginStatus, setLoginStatus] = useState(false)
  const [addCart, setAddCart] = useState([])
  //state for Profile on Navbar
  const [profile, setProfile] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [showContent, setShowContent] = useState([]);
  // console.log("Search Term:", searchTerm);

  const [myMongoId, setMyId] = useState("");
  const [userName, setUserName] = useState("");
  // console.log(userName);
  
   const [myname, setName] = useState("")
      const [updateName, setUpdateName] = useState("")

  return (
    <div>

      <cartContext.Provider value={{ userName, setUserName, myMongoId, 
        setMyId, loginStatus,  setProfile, setLoginStatus, addCart, setAddCart, searchTerm, setShowContent, showContent }}>
        <BrowserRouter>
          <Navbar addCart={addCart} profile={profile} setSearchTerm={setSearchTerm} searchTerm={searchTerm} myname={myname} updateName={updateName} />
          <Routes >
            <Route path='/'
              element={<Home showData={showData} setShowContent={setShowContent}
                setShowData={setShowData} searchTerm={searchTerm} />} />
            <Route path='/card' element={<NewCart showData={showData} />} />
            {/* <Route path='/navbar' element={<Navbar />} /> */}
            <Route path='/sign-up' element={<Register />} />
            <Route path='/sign-in' element={<Login setProfile={setProfile} setLoginStatus={setLoginStatus} setName={setName} setUpdateName={setUpdateName}/>} />
            <Route path="/update_profile/:id" element={<ProfileUpdate myname={myname} setName={setName} updateName={updateName} setUpdateName={setUpdateName} />} />
            <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
            <Route path='/products' element={<Products />} />
            <Route path="/about" element={<About />} />



          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  )
}

export default App
