import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import Pricing_Section from "../Pricing_Section/Pricing_Section";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPenNib, FaShoppingCart, FaGamepad } from "react-icons/fa";
import { MdOutlineWeb, MdOutlineSecurity, MdOutlineDesignServices } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import Why_Choose_us from "../Why_Choose_us/Why_Choose_us";
const Services = () => {
  const services = [
    {
      title: "Website Design & Development",
      description: "Transform your online presence with responsive, user-friendly website design and development.",
      icon: <MdOutlineWeb className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Software Development",
      description: "Custom software solutions to streamline operations and drive business growth.",
      icon: <FaLaptopCode className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Cloud Computing",
      description: "Secure, scalable cloud solutions: IaaS, PaaS, SaaS for seamless operations.",
      icon: <FaCloud className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile apps with seamless performance for iOS and Android.",
      icon: <FaMobileAlt className="h-8 w-8 text-pink-500" />,
    },
    {
      title: "UI/UX Design",
      description: "User-centric designs ensuring seamless and engaging digital experiences.",
      icon: <MdOutlineDesignServices className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Web Application Development",
      description: "Robust and scalable web applications tailored to your business needs.",
      icon: <MdOutlineWeb className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Digital Marketing",
      description: "Enhance brand visibility and engagement with SEO, social media, and PPC strategies.",
      icon: <SiGooglemarketingplatform className="h-8 w-8 text-red-500" />,
    },
    {
      title: "E-Commerce Solutions",
      description: "Custom eCommerce platforms to scale your online business seamlessly.",
      icon: <FaShoppingCart className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Game Development",
      description: "Immersive game development for mobile, PC, and consoles.",
      icon: <FaGamepad className="h-8 w-8 text-indigo-500" />,
    },
  ];

  return (
    <>
      <div className="min-h-screen container mx-auto py-16 md:px-0 px-4">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium text-gray-600 uppercase">Empowering Businesses with Technology</p>
          <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
            Cutting-Edge IT <br />
            <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">Solutions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We specialize in crafting technology-driven solutions to help businesses grow and scale. 
            From web and mobile applications to cloud and cybersecurity, we provide comprehensive IT services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Link to={`/service/${service.title}`} key={index} className="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-black border cursor-pointer">
              <div className="mb-6">{service.icon}</div>
              <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* <Why_Choose_us/> */}
      <Pricing_Section />
    </>
  );
};

export default Services;
