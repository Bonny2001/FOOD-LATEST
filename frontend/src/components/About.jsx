import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    return (
        <>
          <div className="pt-30 min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <header className="max-w-3xl text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          About <span className="text-orange-600">Foodify</span>
        </h1>
        <p className="text-sm text-gray-600">
          Delivering delicious meals from top restaurants, right to your doorstep.  
          We combine convenience, quality, and affordability to make your food experience better.
        </p>
      </header>

      {/* Mission Section */}
      <section className="max-w-4xl bg-white rounded-xl p-6 mb-10 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Our mission is simple: connect people with the food they love.  
          Whether it’s a quick snack or a family dinner, we ensure every order 
          is prepared fresh, packed with care, and delivered on time.  
          We’re committed to building trust and making food delivery a seamless experience.
        </p>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl w-full mb-10">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Our Core Values
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
            <h3 className="text-lg font-bold text-orange-600 mb-1">Quality</h3>
            <p className="text-sm text-gray-600">
              Partnering with trusted restaurants to bring you fresh, high-quality meals.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
            <h3 className="text-lg font-bold text-orange-600 mb-1">Reliability</h3>
            <p className="text-sm text-gray-600">
              Fast, on-time deliveries so you can enjoy your meals without delays.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
            <h3 className="text-lg font-bold text-orange-600 mb-1">Affordability</h3>
            <p className="text-sm text-gray-600">
              Great food at the best prices — because quality should be accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="max-w-5xl w-full mb-10">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
            <img
              src="https://via.placeholder.com/120"
              alt="Team member"
              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-orange-200 shadow-sm"
            />
            <h3 className="text-base font-bold text-gray-800">John Doe</h3>
            <p className="text-xs text-gray-500">Founder & CEO</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
            <img
              src="https://via.placeholder.com/120"
              alt="Team member"
              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-orange-200 shadow-sm"
            />
            <h3 className="text-base font-bold text-gray-800">Jane Smith</h3>
            <p className="text-xs text-gray-500">Head of Operations</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition">
            <img
              src="https://via.placeholder.com/120"
              alt="Team member"
              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-orange-200 shadow-sm"
            />
            <h3 className="text-base font-bold text-gray-800">Alex Brown</h3>
            <p className="text-xs text-gray-500">Customer Success Manager</p>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="max-w-3xl text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Hungry? Let’s Get You Started!
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Explore our menu and order your favorite meals in just a few clicks.
        </p>
        <button onClick={navigate("/shop")} className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm shadow-sm transition">
          Order Now
        </button>
      </section>
    </div>
        </>
    )
}

export default About
