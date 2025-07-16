import React from "react"
const Pricing_Section = () => {
  return (
    <div className="min-h-screen   container mx-auto ">
      {/* Back Button */}
      

      {/* Pricing Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-semibold tracking-wider mb-4">PRICING PLANS</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Best Solutions
          <br />
          <span className="relative">
            <span className="relative z-10 inline-block rounded-full bg-[#7FFF00] px-6 py-2">for Our Clients</span>
            {/* <span className="absolute inset-0 bg-[#7BFF00] -skew-y-2 transform translate-y-2"></span> */}
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est
          pulvinar non. Praesent tristique enim lorem.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="md:px-0 px-4">
      <div className="container mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        {/* Basic Plan */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border">
          <h3 className="text-xl font-semibold mb-6">Basic Plan</h3>
          <div className="text-6xl font-bold mb-8">$29</div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Audits</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Management</span>
            </li>
            <li className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>SEO Copywriting</span>
            </li>
            <li className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Link Building</span>
            </li>
            <li className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Site Migration</span>
            </li>
          </ul>
          <button className="w-full py-4 bg-[#7BFF00] rounded-full font-bold hover:bg-[#6CE600] transition-colors">
            GET STARTED
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border">
          <h3 className="text-xl font-semibold mb-6">Standard Plan</h3>
          <div className="text-6xl font-bold mb-8">$59</div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Audits</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Management</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Copywriting</span>
            </li>
            <li className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Link Building</span>
            </li>
            <li className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Site Migration</span>
            </li>
          </ul>
          <button className="w-full py-4 bg-[#7BFF00] rounded-full font-bold hover:bg-[#6CE600] transition-colors">
            GET STARTED
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border">
          <h3 className="text-xl font-semibold mb-6">Premium Plan</h3>
          <div className="text-6xl font-bold mb-8">$89</div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Audits</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Management</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>SEO Copywriting</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>Link Building</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#7BFF00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>Site Migration</span>
            </li>
          </ul>
          <button className="w-full py-4 bg-[#7BFF00] rounded-full font-bold hover:bg-[#6CE600] transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Pricing_Section

