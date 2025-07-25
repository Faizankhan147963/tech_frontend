import React from "react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlinePhone, AiOutlineRight } from "react-icons/ai"
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import pickup from '../../assets/pickup.png'
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeTab, setActiveTab] = useState("web-development")
  const [activeProductTab, setActiveProductTab] = useState("fixora")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const [mobileSubcategory, setMobileSubcategory] = useState(null)
  const [menuTransitioning, setMenuTransitioning] = useState(false)

  // Separate refs for each menu
  const servicesMenuRef = useRef(null)
  const productsMenuRef = useRef(null)
  const companyMenuRef = useRef(null)
  const softwareMenuRef = useRef(null)

  // Product data
  const products = [
    {
      key: "fixora",
      name: "Fixora",
      title: "Service Provider App Solution",
      description:
        "Multiple Service Provider platform offering AC Service, Painting, Plumbing, Electrical work, and various home maintenance services. Connect customers with verified service professionals.",
      features: [
        "Multi-Service Platform (AC, Painting, etc.)",
        "Service Provider Registration & Verification",
        "Real-time Booking & Scheduling",
        "GPS Tracking & Navigation",
        "Payment Gateway Integration",
        "Rating & Review System",
        "Customer Support Chat",
        "Service History & Analytics",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Fixora+Service+App",
    },
    {
      key: "pickup-now",
      name: "Pickup Now",
      title: "Car Booking Solution",
      description:
        "A comprehensive car booking and ride-sharing solution connecting passengers with drivers. Features real-time tracking, secure payments, and efficient ride management.",
      features: [
        "Real-time Car Booking & Tracking",
        "Driver & Passenger Profiles",
        "Route Optimization & Navigation",
        "Secure Payment Processing",
        "Ride History & Analytics",
        "Emergency Contact System",
        "Multi-vehicle Type Support",
        "Admin Dashboard & Management",
      ],
      image: pickup,
    },
    {
      key: "learning-craft",
      name: "Learning Craft",
      title: "Learning Management Software Solution",
      description:
        "A comprehensive Learning Management System with role-based architecture supporting Students, Instructors, and Super Admins. Features interactive learning experiences, course management.",
      features: [
        "Student Dashboard & Course Enrollment",
        "Instructor Course Creation & Management",
        "Interactive Video Lessons & Quizzes",
        "Progress Tracking & Analytics",
        "Assignment & Grade Management",
        "Discussion Forums & Messaging",
        "Certificate Generation",
        "Mobile-Responsive Design",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Learning+Craft+LMS",
    },
    {
      key: "medcare-hospital",
      name: "Medcare Hospital",
      title: "Hospital Management Software Solution",
      description:
        "A comprehensive hospital management system designed to streamline operations and improve patient care. Supports Doctors, Nurses, Admins, and Laboratory staff with real-time dashboards.",
      features: [
        "Patient Registration & Medical Records",
        "Doctor & Nurse Scheduling",
        "Appointment Management System",
        "Billing & Insurance Processing",
        "Laboratory Test Management",
        "Pharmacy Inventory Control",
        "Emergency Response System",
        "Real-time Analytics Dashboard",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Medcare+Hospital+System",
    },
    {
      key: "grocify",
      name: "GROCIFY",
      title: "Grocery Management Software Solution",
      description:
        "A full-featured Grocery Management System tailored for supermarkets and retail chains. Supports product management, inventory tracking, sales & POS, order and supplier handling.",
      features: [
        "Product Catalog & Inventory Management",
        "Point of Sale (POS) System",
        "Supplier & Purchase Order Management",
        "Customer Management & Loyalty Programs",
        "Sales Analytics & Reporting",
        "Multi-location Store Support",
        "Barcode Scanning & Printing",
        "Staff Management & Permissions",
      ],
      image: "/placeholder.svg?height=400&width=600&text=GROCIFY+Management+System",
    },
    
  ]

  // Function to handle menu click (Toggles dropdown only)
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  // Handle tab clicks for services
  const handleServiceTabClick = (tabKey, event) => {
    event.preventDefault()
    event.stopPropagation()
    setActiveTab(tabKey)
  }

  // Handle tab clicks for products
  const handleProductTabClick = (tabKey, event) => {
    event.preventDefault()
    event.stopPropagation()
    setActiveProductTab(tabKey)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside all menu containers
      const isOutsideServices = servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)
      const isOutsideProducts = productsMenuRef.current && !productsMenuRef.current.contains(event.target)
      const isOutsideCompany = companyMenuRef.current && !companyMenuRef.current.contains(event.target)
      const isOutsideSoftware = softwareMenuRef.current && !softwareMenuRef.current.contains(event.target)

      if (isOutsideServices && isOutsideProducts && isOutsideCompany && isOutsideSoftware) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle mobile menu navigation with transition
  const handleMobileMenuClick = (menu) => {
    setMenuTransitioning(true)
    setTimeout(() => {
      setMobileSubmenu(menu)
      setMobileSubcategory(null)
      setMenuTransitioning(false)
    }, 300)
  }

  const handleMobileSubcategoryClick = (subcategory) => {
    setMenuTransitioning(true)
    setTimeout(() => {
      setMobileSubcategory(subcategory)
      setMenuTransitioning(false)
    }, 300)
  }

  const goBackToMainMenu = () => {
    setMenuTransitioning(true)
    setTimeout(() => {
      setMobileSubmenu(null)
      setMobileSubcategory(null)
      setMenuTransitioning(false)
    }, 300)
  }

  const goBackToSubmenu = () => {
    setMenuTransitioning(true)
    setTimeout(() => {
      setMobileSubcategory(null)
      setMenuTransitioning(false)
    }, 300)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <header className="z-50 sticky top-0">
      <nav className="bg-black border-b">
        <div className="container mx-auto md:px-0 px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0" style={{ userSelect: "none" }}>
              <Link to="/" className="flex items-center">
                <span className="text-3xl font-bold text-white">TECH</span>
                <span className="bg-[#53CBFF] text-black px-2 mx-1 text-2xl font-bold">CAREER</span>
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {/* Home */}
              <div className="relative">
                <Link
                  to={"/"}
                  className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#53CBFF] py-2"
                >
                  <span>Home</span>
                </Link>
              </div>

              {/* Our Services */}
              <div ref={servicesMenuRef} className="relative">
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#53CBFF] py-2"
                    onMouseEnter={() => handleMenuClick("services")}
                    onClick={() => handleMenuClick("services")}
                  >
                    <span>Our Services</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeMenu === "services" && (
                    <div className="absolute top-full -left-54 w-screen max-w-6xl bg-black shadow-lg border rounded-b-4xl mt-4 z-50">
                      <h1 className="ml-7 mt-5 text-3xl font-bold text-white mb-3">
                        <Typewriter
                          words={["Services   "]}
                          typeSpeed={100}
                          cursor
                          cursorStyle="|"
                          delaySpeed={1000}
                          loop={1}
                        />
                      </h1>
                      <div className="flex">
                        {/* Sidebar Tabs */}
                        <div className="w-72 p-4">
                          {[
                            { key: "web-development", label: "Web Development" },
                            { key: "web-design", label: "Web Design (UI/UX)" },
                            { key: "app-development", label: "App Development" },
                            { key: "app-design", label: "App Design" },
                            { key: "seo-marketing", label: "SEO & Marketing" },
                          ].map(({ key, label }) => (
                            <button
                              key={key}
                              onClick={(e) => handleServiceTabClick(key, e)}
                              className={`cursor-pointer flex items-center justify-between w-full text-left px-4 py-2 rounded-full border border-gray-600 hover:text-black mb-1 transition duration-300 ${
                                activeTab === key
                                  ? "bg-[#53CBFF] border font-bold text-black"
                                  : "hover:bg-gray-100 text-white"
                              }`}
                            >
                              {label}
                              <AiOutlineRight
                                className={`ml-2 transition-transform duration-300 ${
                                  activeTab === key ? "text-black font-bold" : "text-gray-400"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                        {/* Dynamic Content Display */}
                        <div className="flex-1 p-8 -mt-3">
                          {activeTab === "web-development" && (
                            <div>
                              <h3 className="text-lg font-semibold mb-4 underline text-white">
                                Web Development Services
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Frontend Development (React, Vue, Angular)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Backend Development (Node.js, Laravel)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Full-Stack Development
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  E-Commerce Development (Shopify)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Custom Web Applications
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Content Management Systems (WordPress)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  API Development & Integration
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Progressive Web Apps (PWAs)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  UI/UX & Responsive Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Website Maintenance & Optimization
                                </a>
                              </div>
                            </div>
                          )}
                          {activeTab === "web-design" && (
                            <div>
                              <h3 className="text-lg font-semibold mb-4 underline text-white">Web & UI/UX Design</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  UI/UX Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Website Wireframing & Prototyping
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Landing Page Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Responsive Web Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Mobile App UI Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  E-Commerce Website Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Dark & Light Mode UI Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Branding & Visual Identity
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Web Animations & Micro-Interactions
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Dashboard & Admin Panel UI Design
                                </a>
                              </div>
                            </div>
                          )}
                          {activeTab === "app-development" && (
                            <div>
                              <h3 className="text-lg font-semibold mb-4 underline text-white">App Development</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  iOS App Development
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Android App Development
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Cross-Platform Apps (React Native, Flutter)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Progressive Web Apps (PWAs)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Wearable & IoT App Development
                                </a>
                              </div>
                            </div>
                          )}
                          {activeTab === "app-design" && (
                            <div>
                              <h3 className="text-lg font-semibold mb-4 underline text-white">App Design</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Mobile UI/UX Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Prototype & Wireframe Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Interactive Mockups
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Gesture-Based UI Design
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Dark & Light Mode UI
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Icon & Illustration Design
                                </a>
                              </div>
                            </div>
                          )}
                          {activeTab === "seo-marketing" && (
                            <div>
                              <h3 className="text-lg font-semibold mb-4 underline text-white">
                                SEO & Digital Marketing
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  SEO Optimization
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Content Marketing
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  PPC Advertising (Google Ads, Facebook Ads)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Social Media Marketing
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Email Marketing & Automation
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Local SEO & Google My Business
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Affiliate Marketing
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Conversion Rate Optimization (CRO)
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Influencer Marketing
                                </a>
                                <a href="#" className="text-sm text-gray-400 hover:text-[#53CBFF]">
                                  Reputation Management
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Our Products */}
              <div ref={productsMenuRef} className="relative">
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#53CBFF] py-2"
                    onMouseEnter={() => handleMenuClick("products")}
                    onClick={() => handleMenuClick("products")}
                  >
                    <span>Our Products</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeMenu === "products" && (
                    <div className="absolute top-full -left-96 w-screen max-w-7xl bg-black shadow-lg border rounded-b-4xl mt-4 z-50">
                      <h1 className="ml-7 mt-5 text-3xl font-bold text-white mb-3">
                        <Typewriter
                          words={["Our Products   "]}
                          typeSpeed={100}
                          cursor
                          cursorStyle="|"
                          delaySpeed={1000}
                          loop={1}
                        />
                      </h1>
                      <div className="flex">
                        {/* Left Side - Product Tabs */}
                        <div className="w-80 p-4">
                          {products.map((product) => (
                            <button
                              key={product.key}
                              onClick={(e) => handleProductTabClick(product.key, e)}
                              className={`cursor-pointer flex items-center justify-between w-full text-left px-4 py-3 rounded-4xl border border-gray-600 hover:text-black mb-2 transition duration-300 ${
                                activeProductTab === product.key
                                  ? "bg-[#53CBFF] border font-bold text-black"
                                  : "hover:bg-gray-100 text-white"
                              }`}
                            >
                              <div>
                                <div className="font-semibold">{product.name}</div>
                                {/* <div className="text-xs opacity-75">{product.title}</div> */}
                              </div>
                              <AiOutlineRight
                                className={`ml-2 transition-transform duration-300 ${
                                  activeProductTab === product.key ? "text-black font-bold" : "text-gray-400"
                                }`}
                              />
                            </button>
                          ))}
                        </div>

                        {/* Center - About The App */}
                        <div className="flex-1 p-6">
                          {products.map(
                            (product) =>
                              activeProductTab === product.key && (
                                <div key={product.key}>
                                  <h3 className="text-xl font-bold mb-3 text-white underline"> {product.name}</h3>
                                  <h4 className="text-lg font-semibold mb-3 text-[#53CBFF]">{product.title}</h4>
                                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                                  <h5 className="text-md font-semibold mb-3 text-white">Key Features:</h5>
                                  <div className="grid grid-cols-2 gap-2">
                                    {product.features.map((feature, index) => (
                                      <div key={index} className="flex items-center text-sm text-gray-400">
                                        <span className="w-2 h-2 bg-[#53CBFF] rounded-full mr-2 flex-shrink-0"></span>
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-4">
                                    <a href="#" className="text-[#53CBFF] text-sm hover:underline font-semibold">
                                      Learn more about {product.name} →
                                    </a>
                                  </div>
                                </div>
                              ),
                          )}
                        </div>

                      
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Company */}
              <div className="relative" ref={companyMenuRef}>
                <button
                  className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#53CBFF] py-2"
                  onMouseEnter={() => handleMenuClick("company")}
                  onClick={() => handleMenuClick("company")}
                >
                  <span>Company</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMenu === "company" && (
                  <div className="absolute top-full -left-94 w-screen max-w-6xl bg-black shadow-lg border rounded-b-4xl mt-4 transition-all z-50">
                    <h1 className="ml-7 mt-5 text-3xl font-bold text-white">
                      <Typewriter
                        words={["Company"]}
                        typeSpeed={100}
                        cursor
                        cursorStyle="|"
                        delaySpeed={1000}
                        loop={1}
                      />
                    </h1>
                    <div className="grid grid-cols-3 gap-8 p-8">
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Who We Are</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          Innovating the future with cutting-edge IT solutions.
                        </p>
                        <a href="#" className="text-white text-sm hover:underline">
                          Learn more →
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Join Our Team</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          Explore exciting career opportunities in the tech world.
                        </p>
                        <a href="#" className="text-white text-sm hover:underline">
                          Learn more →
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Tech Insights</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          Stay updated with the latest trends and innovations in IT.
                        </p>
                        <a href="#" className="text-white text-sm hover:underline">
                          Learn more →
                        </a>
                      </div>
                    </div>
                    {/* Social Links Section */}
                    <div className="grid grid-cols-3 gap-8 p-8 bg-gray-100 rounded-b-4xl">
                      <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black font-semibold"
                      >
                        <FaLinkedin size={24} />
                        <span>techcareer</span>
                      </a>
                      <a
                        href="mailto:your.email@example.com"
                        className="flex items-center gap-2 text-black font-semibold"
                      >
                        <FaEnvelope size={24} />
                        <span>info@techcareer.com</span>
                      </a>
                      <a
                        href="https://wa.me/yourwhatsappnumber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black font-semibold"
                      >
                        <FaWhatsapp size={24} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Software solutions */}
              <div className="relative" ref={softwareMenuRef}>
                <button
                  className="flex items-center space-x-1 text-sm font-medium text-white hover:text-[#53CBFF] py-2"
                  onMouseEnter={() => handleMenuClick("software-solutions")}
                  onClick={() => handleMenuClick("software-solutions")}
                >
                  <span>Software Solutions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMenu === "software-solutions" && (
                  <div className="absolute top-full -left-128 w-screen max-w-6xl bg-black shadow-lg border rounded-b-4xl mt-4 z-50">
                    <h1 className="ml-7 mt-5 text-3xl font-bold text-white">
                      <Typewriter
                        words={["Software Solutions"]}
                        typeSpeed={100}
                        cursor
                        cursorStyle="|"
                        delaySpeed={1000}
                        loop={1}
                      />
                    </h1>
                    <div className="grid grid-cols-3 gap-8 p-8">
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Cloud Solutions</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          Scale your business with secure and efficient cloud computing services.
                        </p>
                        <a href="#" className="text-white text-sm hover:underline">
                          Learn more →
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Cybersecurity</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          Protect your digital assets with our advanced security solutions.
                        </p>
                        <a href="#" className="text-white text-sm hover:underline">
                          Learn more →
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">AI & Data Analytics</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          Unlock insights and drive growth with powerful AI-driven analytics.
                        </p>
                        <a href="#" className="text-white text-sm hover:underline">
                          Learn more →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/help" className="text-sm font-medium text-white hover:text-[#53CBFF]">
                Help & Support
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link
                to={"/contact"}
                className="text-sm font-medium px-4 py-2 bg-[#53CBFF] hover:text-black hover:bg-white text-gray-700 rounded-full flex items-center space-x-2 transition-all duration-300"
              >
                <AiOutlinePhone className="text-lg rotate-90" />
                <span className="font-bold">Contact With Us</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="text-white hover:text-[#53CBFF]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-full bg-black border-r border-gray-800 transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full relative overflow-hidden">
            {/* Logo */}
            <div className="p-4 border-b border-gray-800">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-white">TECH</span>
                <span className="bg-[#53CBFF] text-black px-2 mx-1 text-xl font-bold">CAREER</span>
              </Link>
            </div>

            {/* Menu Container with sliding effect */}
            <div className="flex-1 overflow-hidden relative">
              {/* Main Menu */}
              <div
                className={`absolute inset-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out transform ${
                  mobileSubmenu ? "-translate-x-full" : "translate-x-0"
                } ${menuTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                <div className="flex-1 overflow-y-auto py-4">
                  <nav className="flex flex-col space-y-2 px-4">
                    <Link
                      to="/"
                      className="text-white hover:text-[#53CBFF] py-2 text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <button
                      className="flex items-center justify-between text-white hover:text-[#53CBFF] py-2 text-lg font-medium"
                      onClick={() => handleMobileMenuClick("services")}
                    >
                      <span>Our Services</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <button
                      className="flex items-center justify-between text-white hover:text-[#53CBFF] py-2 text-lg font-medium"
                      onClick={() => handleMobileMenuClick("products")}
                    >
                      <span>Our Products</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <button
                      className="flex items-center justify-between text-white hover:text-[#53CBFF] py-2 text-lg font-medium"
                      onClick={() => handleMobileMenuClick("company")}
                    >
                      <span>Company</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <button
                      className="flex items-center justify-between text-white hover:text-[#53CBFF] py-2 text-lg font-medium"
                      onClick={() => handleMobileMenuClick("software-solutions")}
                    >
                      <span>Software Solutions</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <Link
                      to="/help"
                      className="text-white hover:text-[#53CBFF] py-2 text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Help & Support
                    </Link>
                  </nav>
                </div>
              </div>

              {/* Services Submenu */}
              <div
                className={`absolute inset-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out transform ${
                  mobileSubmenu === "services" && !mobileSubcategory
                    ? "translate-x-0"
                    : mobileSubmenu === "services" && mobileSubcategory
                      ? "-translate-x-full"
                      : "translate-x-full"
                } ${menuTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                <div className="p-4 border-b border-gray-800 flex items-center">
                  <button className="flex items-center text-white hover:text-[#53CBFF]" onClick={goBackToMainMenu}>
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    <span>Back to Menu</span>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <h2 className="text-xl font-bold text-white mb-4">Our Services</h2>
                  <nav className="flex flex-col space-y-3">
                    {[
                      { key: "web-development", label: "Web Development" },
                      { key: "web-design", label: "Web Design (UI/UX)" },
                      { key: "app-development", label: "App Development" },
                      { key: "app-design", label: "App Design" },
                      { key: "seo-marketing", label: "SEO & Marketing" },
                    ].map(({ key, label }) => (
                      <button
                        key={key}
                        onClick={() => handleMobileSubcategoryClick(key)}
                        className="flex items-center justify-between text-white hover:text-[#53CBFF] py-2 border-b border-gray-800"
                      >
                        <span>{label}</span>
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Products Submenu */}
              <div
                className={`absolute inset-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out transform ${
                  mobileSubmenu === "products" ? "translate-x-0" : "translate-x-full"
                } ${menuTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                <div className="p-4 border-b border-gray-800 flex items-center">
                  <button className="flex items-center text-white hover:text-[#53CBFF]" onClick={goBackToMainMenu}>
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    <span>Back to Menu</span>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <h2 className="text-xl font-bold text-white mb-4">Our Products</h2>
                  <nav className="flex flex-col space-y-4">
                    {products.map((product) => (
                      <div key={product.key} className="border-b border-gray-800 pb-4">
                        <h3 className="font-semibold mb-2 text-white">{product.name}</h3>
                        <h4 className="text-sm font-medium mb-2 text-[#53CBFF]">{product.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{product.description}</p>
                        <a href="#" className="text-[#53CBFF] text-sm hover:underline">
                          Learn more about {product.name} →
                        </a>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Company Submenu */}
              <div
                className={`absolute inset-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out transform ${
                  mobileSubmenu === "company" ? "translate-x-0" : "translate-x-full"
                } ${menuTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                <div className="p-4 border-b border-gray-800 flex items-center">
                  <button className="flex items-center text-white hover:text-[#53CBFF]" onClick={goBackToMainMenu}>
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    <span>Back to Menu</span>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <h2 className="text-xl font-bold text-white mb-4">Company</h2>
                  <nav className="flex flex-col space-y-4">
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="font-semibold mb-2 text-white">Who We Are</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Innovating the future with cutting-edge IT solutions.
                      </p>
                      <a href="#" className="text-[#53CBFF] text-sm hover:underline">
                        Learn more →
                      </a>
                    </div>
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="font-semibold mb-2 text-white">Join Our Team</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Explore exciting career opportunities in the tech world.
                      </p>
                      <a href="#" className="text-[#53CBFF] text-sm hover:underline">
                        Learn more →
                      </a>
                    </div>
                    <div className="pb-4">
                      <h3 className="font-semibold mb-2 text-white">Tech Insights</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Stay updated with the latest trends and innovations in IT.
                      </p>
                      <a href="#" className="text-[#53CBFF] text-sm hover:underline">
                        Learn more →
                      </a>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <h3 className="font-semibold mb-3 text-white">Connect With Us</h3>
                      <div className="space-y-3">
                        <a
                          href="https://www.linkedin.com/in/yourprofile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white"
                        >
                          <FaLinkedin size={20} />
                          <span>techcareer</span>
                        </a>
                        <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-white">
                          <FaEnvelope size={20} />
                          <span>info@techcareer.com</span>
                        </a>
                        <a
                          href="https://wa.me/yourwhatsappnumber"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white"
                        >
                          <FaWhatsapp size={20} />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Software Solutions Submenu */}
              <div
                className={`absolute inset-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out transform ${
                  mobileSubmenu === "software-solutions" ? "translate-x-0" : "translate-x-full"
                } ${menuTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                <div className="p-4 border-b border-gray-800 flex items-center">
                  <button className="flex items-center text-white hover:text-[#53CBFF]" onClick={goBackToMainMenu}>
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    <span>Back to Menu</span>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <h2 className="text-xl font-bold text-white mb-4">Software Solutions</h2>
                  <nav className="flex flex-col space-y-4">
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="font-semibold mb-2 text-white">Cloud Solutions</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Scale your business with secure and efficient cloud computing services.
                      </p>
                      <a href="#" className="text-[#53CBFF] text-sm hover:underline">
                        Learn more →
                      </a>
                    </div>
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="font-semibold mb-2 text-white">Cybersecurity</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Protect your digital assets with our advanced security solutions.
                      </p>
                      <a href="#" className="text-[#53CBFF] text-sm hover:underline">
                        Learn more →
                      </a>
                    </div>
                    <div className="pb-4">
                      <h3 className="font-semibold mb-2 text-white">AI & Data Analytics</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Unlock insights and drive growth with powerful AI-driven analytics.
                      </p>
                      <a href="#" className="text-[#53CBFF] text-sm hover:underline">
                        Learn more →
                      </a>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Service Subcategories */}
              {["web-development", "web-design", "app-development", "app-design", "seo-marketing"].map(
                (subcategory) => (
                  <div
                    key={subcategory}
                    className={`absolute inset-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out transform ${
                      mobileSubmenu === "services" && mobileSubcategory === subcategory
                        ? "translate-x-0"
                        : "translate-x-full"
                    } ${menuTransitioning ? "opacity-0" : "opacity-100"}`}
                  >
                    <div className="p-4 border-b border-gray-800 flex items-center">
                      <button className="flex items-center text-white hover:text-[#53CBFF]" onClick={goBackToSubmenu}>
                        <ChevronLeft className="h-5 w-5 mr-2" />
                        <span>Back to Services</span>
                      </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                      {subcategory === "web-development" && (
                        <div>
                          <h2 className="text-xl font-bold text-white mb-4">Web Development</h2>
                          <div className="flex flex-col space-y-3">
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Frontend Development (React, Vue, Angular)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Backend Development (Node.js, Laravel)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Full-Stack Development
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              E-Commerce Development (Shopify)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Custom Web Applications
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Content Management Systems (WordPress)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              API Development & Integration
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Progressive Web Apps (PWAs)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              UI/UX & Responsive Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Website Maintenance & Optimization
                            </a>
                          </div>
                        </div>
                      )}
                      {subcategory === "web-design" && (
                        <div>
                          <h2 className="text-xl font-bold text-white mb-4">Web & UI/UX Design</h2>
                          <div className="flex flex-col space-y-3">
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              UI/UX Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Website Wireframing & Prototyping
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Landing Page Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Responsive Web Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Mobile App UI Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              E-Commerce Website Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Dark & Light Mode UI Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Branding & Visual Identity
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Web Animations & Micro-Interactions
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Dashboard & Admin Panel UI Design
                            </a>
                          </div>
                        </div>
                      )}
                      {subcategory === "app-development" && (
                        <div>
                          <h2 className="text-xl font-bold text-white mb-4">App Development</h2>
                          <div className="flex flex-col space-y-3">
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              iOS App Development
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Android App Development
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Cross-Platform Apps (React Native, Flutter)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Progressive Web Apps (PWAs)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Wearable & IoT App Development
                            </a>
                          </div>
                        </div>
                      )}
                      {subcategory === "app-design" && (
                        <div>
                          <h2 className="text-xl font-bold text-white mb-4">App Design</h2>
                          <div className="flex flex-col space-y-3">
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Mobile UI/UX Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Prototype & Wireframe Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Interactive Mockups
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Gesture-Based UI Design
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Dark & Light Mode UI
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Icon & Illustration Design
                            </a>
                          </div>
                        </div>
                      )}
                      {subcategory === "seo-marketing" && (
                        <div>
                          <h2 className="text-xl font-bold text-white mb-4">SEO & Digital Marketing</h2>
                          <div className="flex flex-col space-y-3">
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              SEO Optimization
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Content Marketing
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              PPC Advertising (Google Ads, Facebook Ads)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Social Media Marketing
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Email Marketing & Automation
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Local SEO & Google My Business
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Affiliate Marketing
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Conversion Rate Optimization (CRO)
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Influencer Marketing
                            </a>
                            <a href="#" className="text-white hover:text-[#53CBFF] py-2 border-b border-gray-800">
                              Reputation Management
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Contact Button for Mobile */}
            <div className="p-4 border-t border-gray-800">
              <Link
                to={"/contact"}
                className="w-full text-center font-medium px-4 py-3 bg-[#53CBFF] hover:bg-white text-gray-700 rounded-full flex items-center justify-center space-x-2 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <AiOutlinePhone className="text-lg rotate-90" />
                <span className="font-bold">Contact With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
