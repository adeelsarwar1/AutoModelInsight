import React from 'react';
import Navbar from '../Common/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#3F418C] text-white font-poppins">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between py-24 px-8 md:px-16">
        {/* Left Side: Header and Section Content */}
        <div className="md:w-3/5 flex flex-col justify-center items-center text-center animate-fadeIn h-full space-y-8">
          <h1 className="text-5xl font-bold">AutoModel Insight</h1>
          <p className="text-xl">Revolutionizing Car Detection and 3D Modeling</p>
          <a href="#features" className="inline-block px-10 py-3 bg-white text-black rounded-lg shadow-lg  hover:px-12 transition duration-300">
            Learn More
          </a>
          <div className="flex justify-around py-10 space-x-4">
            <div className="w-1/2 bg-white bg-opacity-10 p-6 hover:p-4 rounded-lg shadow-lg animate-slideIn">
              <h2 className="text-2xl font-semibold mb-2">Car Detection</h2>
              <p>Upload an image and let our AI detect the car model instantly.</p>
            </div>
            <div className="w-1/2 bg-white bg-opacity-10 p-6 hover:p-4 rounded-lg shadow-lg animate-slideIn">
              <h2 className="text-2xl font-semibold mb-2">3D Modeling & Customization</h2>
              <p>Experience the future of car customization with our 3D tools.</p>
            </div>
          </div>
        </div>
        {/* Right Side: Car Image */}
        <div className="md:w-2/5 mt-8 md:mt-0 animate-slideIn hover:shadow-lg hover:rounded-lg">
          <img src="Assets/Images/BG.png" alt="Car" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;