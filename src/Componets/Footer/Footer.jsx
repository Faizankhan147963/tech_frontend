import React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
  }

  const socialIcons = {
    facebook: <FaFacebookF className="w-5 h-5 text-blue-600" />,
    instagram: <FaInstagram className="w-5 h-5 text-pink-500" />,
    linkedin: <FaLinkedinIn className="w-5 h-5 text-blue-700" />,
    twitter: <FaTwitter className="w-5 h-5 text-blue-400" />,
  };

  return (
    <footer className="bg-gradient-to-b from-black to-[#001a0f] text-white px-4 py-16 md:px-6">
      {/* Main Heading */}
      <div className="container mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider">LET&apos;S BRING YOUR IDEAS TO LIFE!</h2>
          <button className="bg-[#53CBFF]  text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            BRING IT ON!
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* UAE Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">HEADQUARTERS - UAE</h3>
          <div className="space-y-4">
            {/* <div>
              <p className="text-gray-400 mb-2">Location:</p>
              <p className="leading-relaxed">
                Burjuman Business Tower, 9th Floor - Office No 900, Sheikh Khalifa Bin Zayed, St - Al Mankhool - Dubai,
                UAE.
              </p>
            </div> */}
            <div>
              <p className="text-gray-400 mb-2">Email:</p>
              <a href="mailto:info@techcareer.in" className="hover:text-[#53CBFF] transition-colors">
                info@techcareer.in
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Phone:</p>
              <a href="tel:+97152946777" className="hover:text-[#53CBFF] transition-colors">
                +91 80000 52438
              </a>
            </div>
          </div>
        </div>

        {/* India Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">DEVELOPMENT CENTRE - INDIA</h3>
          <div className="space-y-4">
            {/* <div>
              <p className="text-gray-400 mb-2">Location</p>
              <p className="leading-relaxed">
                A-315, 3rd Floor, Sakar-7 Nehru Bridge, Corner, Ashram Rd, Ahmedabad, Gujarat 380009
              </p>
            </div> */}
            <div>
              <p className="text-gray-400 mb-2">Phone:</p>
              <div className="space-y-1">
                <a href="tel:+919819915555" className="block hover:text-[#53CBFF] transition-colors">
                  +91 98199 15555
                </a>
                <a href="tel:+919772544444" className="block hover:text-[#53CBFF] transition-colors">
                  +91 97725 44444
                </a>
              </div>
            </div>
           <Link to={'/contact'}>
           <button className="bg-[#53CBFF]  text-black  px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              EXPLORE CAREER OPPORTUNITIES!
            </button></Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">STAY IN THE LOOP!</h3>
          <p className="mb-6">Sign up for our newsletter for updates and offers.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-black/30 border border-gray-700 rounded-full px-4 py-3 focus:outline-none focus:border-emerald-400"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-2 bg-[#53CBFF] p-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1.5" required />
              <label htmlFor="terms" className="text-sm">
                I Agree With The{" "}
                <Link href="#" className="text-blue-400 hover:underline">
                  Terms And Conditions
                </Link>
              </label>
            </div>
          </form>

          <div className="mt-8">
            <h4 className="text-xl font-bold mb-4">NEED ASSISTANCE?</h4>
            <p className="mb-2">For Support, Reach Out To Us At</p>
            <a href="mailto:support@techcareer.in" className="text-[#53CBFF] hover:underline">
              support@techcareer.in
            </a>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="container mx-auto mb-8">
      <h4 className="text-xl mb-4">Follow Us On</h4>
      <div className="flex gap-4">
        {Object.entries(socialIcons).map(([name, icon]) => (
          <Link
            key={name}
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-md"
          >
            <span className="sr-only">{name}</span>
            {icon}
          </Link>
        ))}
      </div>
    </div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025, All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">
            Terms and Conditions
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

