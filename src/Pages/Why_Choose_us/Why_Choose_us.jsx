import React from "react"
import { useState } from "react"

export default function Why_Choose_us() {
  const [activeSection, setActiveSection] = useState(null)

  const sections = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Create a secure, fast, and mesmerising web application that is tailored exclusively for your business needs.",
      color: "from-pink-600 to-purple-900",
      tags: [
        "Backend Development",
        "Frontend Development",
        "Full Stack Development",
        "Custom Web App Development",
        "Progressive Web App Development(PWA)",
      ],
    },
    {
      title: "MOBILE DEVELOPMENT",
      description:
        "Hand-crafted with a love for uniquely well-designed UX and optimised custom mobile applications for both iOS and Android.",
      color: "from-teal-400 to-emerald-900",
      tags: [
        "Android App Development",
        "Native App Development",
        "Enterprise Mobile Apps",
        "IOS App Development",
        "Cross-Platform App Development",
      ],
    },
    {
      title: "ECOMMERCES",
      description:
        "Imagination is yours. We are here to create that art with our knowledge and skills to bring out the uniqueness in your design.",
      color: "from-orange-400 to-red-900",
      tags: [
        "Magento Development",
        "Magento 2 Upgrade Services",
        "Magento Extension Development",
        "WordPress Development",
        "Shopify Development",
        "BigCommerce Development",
      ],
    },
    {
      title: "DEVOPS",
      description: "With DevOps, we are automating and standardising the whole process for infrastructure deployment.",
      color: "from-blue-500 to-indigo-900",
      tags: ["Azure", "AWS", "Google Cloud"],
    },
    {
      title: "DESIGN",
      description:
        "Website and Application Designs particularly curated to make your business compete in every industry.",
      color: "from-cyan-400 via-yellow-500 to-emerald-900",
      tags: ["Ecommerce Design", "UI/UX Design", "Wireframe & Prototyping"],
    },
    {
      title: "AI-ML DEVELOPMENT",
      description: "Bringing revolution by humanising the computers for a better and simple future.",
      color: "from-red-600 to-slate-900",
      tags: ["Machine Learning", "Natural Language Processing Python"],
    },
  ]

  return (
    <div className="min-h-screen  p-4  container mx-auto">
      <div className="text-center mb-12">
            <p className="text-sm tracking-widest mb-4">WHAT WE SERVE</p>
        <h1 className="text-4xl md:text-6xl font-bold  mb-2">OUR SOFTWARE</h1>
        <h1 className="text-4xl md:text-6xl font-bold ">DEVELOPMENT SERVICES</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-2 h-[600px] overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-xl
              transition-all duration-900 ease-in-out
              bg-gradient-to-b ${section.color}
              cursor-pointer
              ${activeSection === index ? "md:flex-[3] flex-[1]" : "flex-[0.5]"}
              flex flex-col justify-end
            `}
            onMouseEnter={() => setActiveSection(index)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div
              className={`
              p-6 transition-all duration-500
              ${activeSection === index ? "opacity-100" : "opacity-70"}
              ${activeSection === index ? "translate-y-0" : "translate-y-16"}
            `}
            >
              <h2
                className={`
                text-white font-bold mb-4 whitespace-nowrap
                ${activeSection === index ? "text-3xl" : "text-xl rotate-[-90deg] md:rotate-0"}
                transition-all duration-500
              `}
              >
                {section.title}
              </h2>

              {activeSection === index && (
                <div className="transition-all duration-500">
                  <p className="text-white/90 mb-6">{section.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/10 text-white px-3 py-1 rounded-full text-sm
                        hover:bg-white/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

