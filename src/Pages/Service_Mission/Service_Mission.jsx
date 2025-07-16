"use client"

import React from 'react'
import { ChevronDown } from "lucide-react"

const Service_Mission = () => {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Mission Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://iamosahan.com/pillarix/demo/bank/img/our-mission.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-sm font-semibold tracking-wider text-gray-500">OUR MISSION</h2>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">Turn Ideas into Reality</h3>
                <p className="text-gray-600">
                  Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a
                  leo imperdiet, nec elementum diam elementum.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">SEO</span>
                    <span className="text-[#7BFF00] font-bold">80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[#7BFF00] rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Design</span>
                    <span className="text-[#7BFF00] font-bold">90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[#7BFF00] rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Development</span>
                    <span className="text-[#7BFF00] font-bold">87%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[#7BFF00] rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-sm font-semibold tracking-wider text-gray-500">FAQ</h2>
                <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
                <p className="text-gray-600">
                  Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a
                  leo imperdiet, nec elementum diam elementum.
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium">Pellentesque tincidunt tristique neque?</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-medium">Suspendisse sed ultricies nisl, pharetra rutrum mauris?</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://iamosahan.com/pillarix/demo/bank/img/faq.jpg"
                alt="Team presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service_Mission

