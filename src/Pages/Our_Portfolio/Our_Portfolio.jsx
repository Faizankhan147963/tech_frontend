import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaPhone, FaTimes } from "react-icons/fa";
import careerconnect from '../../assets/careerconnect.png';
import careerconnectbig from '../../assets/careerconnectbig.png';
import electrohub from '../../assets/electrohub.png';
import elestrohubBig from '../../assets/elestrohubBig.png';
import learning from '../../assets/learning.png';
import learningcraftbig from '../../assets/learningcraftbig.png';
import eagle from '../../assets/eagle.png';
import eagleyessecuritybig from '../../assets/eagleyessecuritybig.png';

const portfolioItems = [
  {
    id: 2,
    name: "Learning Craft",
    description: "An innovative online learning platform offering a diverse range of courses, empowering individuals with skills and knowledge through interactive and engaging content",
    image: learning,
    instagram: "#",
    bigimage:learningcraftbig,
    twitter: "#",
    phone: "tel:+123456789",
  },
  {
    id: 1,
    name: "Career Connect",
    description: "A cutting-edge job portal that bridges the gap between job seekers and recruiters, providing a seamless hiring experience with advanced search and application features.",
    image: careerconnect,
    bigimage: careerconnectbig,
    instagram: "#",
    twitter: "#",
    phone: "tel:+123456789",
  },

  {
    id: 3,
    name: "Electro Hub",
    description: "A dynamic B2C e-commerce platform specializing in high-quality electronics and gadgets, providing a seamless shopping experience with secure transactions and fast delivery.",
    image: electrohub,
    bigimage: elestrohubBig,
    instagram: "#",
    twitter: "#",
    phone: "tel:+123456789",
  },
  {
    id: 4,
    name: "Eagle Eye Security",
    description: "A professional security agency website showcasing elite protection services, including armed and unarmed security, personal guards, and rapid response teams for ultimate safety.",
    image: eagle,
    bigimage:eagleyessecuritybig,
    instagram: "#",
    twitter: "#",
    phone: "tel:+123456789",
  },
];

const Our_Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex justify-center min-h-screen flex-col mb-8">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">
          Empowering Innovation, Elevating Businesses
        </h2>
        <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
          Transforming Ideas Into <br />
          <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">Digital Success</span>
        </h1>
        <p className="mx-auto mb-8 max-w-6xl text-gray-600">
          Our IT solutions are designed to drive efficiency, innovation, and scalability.
        </p>
      </div>

      <div className="flex gap-6 w-full container px-4 mx-auto">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="group relative w-1/3 h-[400px] overflow-hidden rounded-4xl cursor-pointer transition-all duration-500 hover:w-1/2"
            onClick={() => setSelectedItem(item)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black/80 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-2xl font-bold mb-5">{item.name}</h2>
              <p className="text-sm">{item.description}</p>
              <div className="flex gap-4 mt-3">
                <a href={item.instagram} className="text-lg hover:text-pink-500"><FaInstagram /></a>
                <a href={item.twitter} className="text-lg hover:text-blue-400"><FaTwitter /></a>
                <a href={item.phone} className="text-lg hover:text-green-400"><FaPhone /></a>
              </div>
            </div>
          </div>
        ))}
      </div>


      {selectedItem && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full shadow-lg">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={() => setSelectedItem(null)}
      >
        <FaTimes size={24} />
      </button>
      <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
      <div className="max-h-[80vh] overflow-auto scrollbar-hidden">
        <img
          src={selectedItem.bigimage || selectedItem.image}
          alt={selectedItem.name}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default Our_Portfolio;