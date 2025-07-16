import React from "react"
export default function Our_Process() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://technology-bharatiyabhasha.aicte-india.org/images/bannerNew1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Main Heading */}
        <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          We Build Solutions That Go Beyond Expectations!
        </h1>

        {/* Subheading */}
        <p className="mb-8 max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl">
          With innovative strategies and a commitment to your success, we're here to elevate your digital presence.
          Partner with us today and unlock your business's full potential in the digital world.
        </p>

        {/* CTA Button */}
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-green-500 px-8 py-3 text-sm font-medium text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black">
          <span className="relative flex items-center gap-2">
            {"LET'S GET STARTED"}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    </div>
  )
}

