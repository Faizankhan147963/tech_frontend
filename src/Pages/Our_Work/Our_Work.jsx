import React from 'react'
import { useState } from "react"

const Our_Work = () => {
  const [activeTab, setActiveTab] = useState("Popular")

  const tabs = ["Popular", "Web Development","Design",     "Ecommerce Development", "Marketing", "Digital Transformation"]

  const allServices = [
    {
      title: "E-commerce Web Development",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQF8GGlQaYG9Vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686137572046?e=2147483647&v=beta&t=UQPHh_ywy3TqW8jBb_S6S_b_Dxb7GswZf9VsUzWmNnw",
      tools: ["Adobe XD", "Figma", "Sketch", "Balsamiq", "Iore"],
      features: [
        "Online Store Development",
        "Auction & Bidding Platform",
        "Multi-Vendor Platform",
        "E-Commerce POS System",
        "Supply Chain Automation",
      ],
      buttonStyle: "dark",
      categories: ["Popular", "Ecommerce Development",],
    },
    {
      title: "Magento Web Development",
      image: "https://pharaohsoft.com/wp-content/uploads/2022/11/Magento-web-development-company-e1669027028167.jpeg",
      tools: ["After Effect", "Blender", "Premier", "Premiere Pro"],
      features: [
        "Extension Development",
        "Responsive Magento Theme",
        "Customization Services",
        "Module Development",
        "Payment And Shipping Integration",
      ],
      buttonStyle: "light",
      categories: ["Ecommerce Development", "Web Development"],
    },
    {
      title: "Shopify E-commerce Development",
      image: "https://envisionecommerce.com/wp-content/uploads/2022/09/shopify-for-ecommerce-store-development.jpg",
      tools: ["Slack", "WordPress", "Monday", "Analytics", "Analytics"],
      features: [
        "Shopify eCommerce & Custom Shopify",
        "Store Setup & Configuration",
        "Plug-In & Module Management",
        "Theme Design and Development",
        "Setup & Product Import",
      ],
      buttonStyle: "light",
      categories: ["Popular", "Ecommerce Development"],
    },
    {
      title: "WordPress Development",
      image:
        "https://gracethemes.com/wp-content/uploads/2022/08/feature-img.png",
      tools: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL"],
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "WordPress Optimization",
        "E-commerce Integration",
        "Maintenance & Support",
      ],
      buttonStyle: "dark",
      categories: [ "Web Development"],
    },
    {
      title: "Digital Marketing Strategy",
      image: "https://www.singlegrain.com/wp-content/uploads/2019/06/SG-5-Ways-SMB-Business-Owners-Can-Revamp-Their-Digital-Marketing-Strategy.jpg",
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot"],
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media Marketing",
        "Email Marketing Campaigns",
        "PPC Advertising",
      ],
      buttonStyle: "light",
      categories: ["Marketing", "Digital Transformation"],
    },
    {
      title: "UI/UX Design",
      image: "https://#53CBFFcollegeindia.com/blog/wp-content/uploads/2024/09/UI-UX-Designer-scaled.jpg",
      tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Responsive Design",
        "User Testing",
        "Design Systems",
      ],
      buttonStyle: "dark",
      categories: ["Popular", "Design"],
    },
    {
      title: "Branding & Identity Design",
      image: "https://designshack.net/wp-content/uploads/Green-Corporate-Brand-Identity-Templates.jpg",
      tools: ["Adobe Illustrator", "Photoshop", "InDesign", "Procreate", "Canva"],
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity Systems",
        "Packaging Design",
        "Marketing Collateral",
      ],
      buttonStyle: "light",
      categories: ["Design"],
    },
    {
      title: "Mobile App Development",
      image: "https://externlabs.com/blogs/wp-content/uploads/2022/04/b2.jpg",
      tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      features: [
        "Cross-Platform Development",
        "Native iOS & Android Apps",
        "App Store Optimization",
        "App Maintenance & Updates",
        "Integration with APIs",
      ],
      buttonStyle: "dark",
      categories: ["Web Development", "Digital Transformation"],
    },
    {
      title: "Social Media Management",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_PTXWcg62QMcTILyz25Yr3S6uYGDu7xmGQ&s",
      tools: ["Hootsuite", "Buffer", "Canva", "Later", "Sprout Social"],
      features: [
        "Content Creation & Curation",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Reporting",
        "Influencer Outreach",
      ],
      buttonStyle: "light",
      categories: ["Marketing"],
    },
    {
      title: "Cloud Migration Services",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvSLwcLHWWoaZszMCjNA-48g9Adal3VoXlA&s",
      tools: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      features: [
        "Cloud Strategy Development",
        "Infrastructure Migration",
        "Data Migration",
        "Cloud Optimization",
        "Ongoing Support & Maintenance",
      ],
      buttonStyle: "dark",
      categories: ["Digital Transformation"],
    },
    {
      title: "Motion Graphics & Animation",
      image: "https://animationexplainers.com/wp-content/uploads/2021/11/motion-graphics.jpg",
      tools: ["After Effects", "Cinema 4D", "Blender", "Premiere Pro", "Illustrator"],
      features: [
        "Explainer Videos",
        "Logo Animation",
        "UI Motion Design",
        "Character Animation",
        "Social Media Content",
      ],
      buttonStyle: "light",
      categories: ["Design"],
    },
    {
      title: "SEO Optimization",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEWXK51KMfIduBkM8AFQLlSY7SBptuJ2k-A&s",
      tools: ["SEMrush", "Ahrefs", "Google Search Console", "Moz", "Screaming Frog"],
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building",
        "Local SEO",
      ],
      buttonStyle: "dark",
      categories: ["Marketing", "Digital Transformation"],
    },
  ]

  // Filter services based on active tab
  const filteredServices = allServices.filter((service) => service.categories.includes(activeTab))

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen bg-gray-100 py-16 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">Good Work, Good People</h2>
          <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
            We Deliver In All
            <br />
            <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">Directions</span>
          </h1>
          <p className="mx-auto mb-8 max-w-6xl text-gray-600">
            We specialize in delivering top-notch digital solutions to help businesses grow and succeed.
          </p>
        </div>
        {/* Tabs Navigation */}
        <div className="text-center w-full">
          <div className="mb-8 overflow-x-auto flex justify-center">
            <div className="flex min-w-max gap-2 rounded-full bg-white p-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab ? "bg-[#53CBFF] text-black" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <div key={index} className="overflow-hidden rounded-3xl bg-white">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>

                {/* Tools */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.tools.map((tool, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="mb-3 font-semibold">We Provide</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-black">+</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team and CTA */}
                <div className="flex items-center justify-between">
                  <button
                    className={`flex items-center gap-2 rounded-full px-6 py-2 font-medium transition-transform ${
                      service.buttonStyle === "dark" ? "bg-black text-white" : "border-2 border-black"
                    }`}
                  >
                    Get Details
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Our_Work
