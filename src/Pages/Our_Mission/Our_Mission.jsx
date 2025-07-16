import React from "react"
const Our_Mission = () => {
  return (
    <div className="min-h-screen bg-white container mx-auto py-8 md:px-0 px-4">
      {/* Back Button */}


      {/* Join Team Banner */}
      <div className="mb-20 rounded-3xl bg-[#7FFF00] p-8 md:p-12">
        <div className="relative">
          {/* Team Icon */}
          <div className="absolute right-0 top-0">
            <svg className="h-12 w-12 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c0-.99 3.9-2 6-2s6 1.01 6 2h-12z" />
            </svg>
          </div>

          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join our Awesome Team</h2>
            <p className="mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
            <button className="rounded-full border-2 border-black bg-transparent px-6 py-3 font-semibold transition-colors hover:bg-black hover:text-white">
              Send us your CV
            </button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Video Section */}
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-gray-900">
            <img
              src="https://iamosahan.com/pillarix/demo/bank/img/our-mission.jpg"
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
            {/* Play Button Overlay */}
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="flex h-16 w-16 min-w-12 min-h-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-md transition-transform hover:scale-110 hover:shadow-xl">
                <svg className="h-8 w-8 text-gray-800 transition-colors hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>


          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Our Mission</h3>
            <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">Turn Ideas into Reality</h2>
            <p className="mb-8 text-gray-600">
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo
              imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut
              efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi.
            </p>
            <button className="w-fit rounded-full border-2 border-black bg-transparent px-6 py-3 font-semibold transition-colors hover:bg-black hover:text-white">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Our_Mission

