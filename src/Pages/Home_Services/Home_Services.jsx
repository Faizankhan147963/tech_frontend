  import React from "react"
  import { Link } from "react-router-dom"
  const Home_Services = () => {
    const services = [
      {
        icon: (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        ),
        title: "UI-UX Design",
        description:
          "Branding, responsive site design, mobile app design, user experience consultancy, and promotional designs.",
        bgColor: "bg-white",
      },
      {
        icon: (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
        title: "Web - CMS - Shopify Development",
        description:
          "Web design, Shopify & CMS development, CRM and tailor made web app developments using React, Angular & Vue",
        bgColor: "bg-[#53CBFF]",
      },
      {
        icon: (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
          </svg>
        ),
        title: "Mobile App Development",
        description:
          "iOS and Android app development, Cross Platform application development using flutter and react native.",
        bgColor: "bg-white",
      },
      {
        icon: (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
        ),
        title: "SEO & Social Media",
        description:
          "SEO, SMO,PPC and Digital Marketing using Facebook, Google and Instagram platform. Paid marketing & smart campaigns.",
        bgColor: "bg-white",
      },
      {
        icon: (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ),
        title: "AR - VR Development",
        description:
          "Augmented & Virtual Reality based gamification of educational and entertainment content and game development",
        bgColor: "bg-white",
      },
      {
        icon: (
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
          </svg>
        ),
        title: "AI & Machine Learning",
        description: "Design logical flow using NLP for chatbots and other web applications using AI and ML.",
        bgColor: "bg-white",
      },
    ]

    return (
      <div className="min-h-screen bg-white container mx-auto md:py-8 md:px-0 px-4">

        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">What we do</h2>
          <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            We strongly believe in delivering the best
            <br />
            services to <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">the clients till their</span> satisfaction
          </h1>
          <p className="mx-auto max-w-3xl text-gray-600">
            We are a professional and highly dedicated group of skilled experts. To provide quality to our clients, we
            work in an active environment and follow best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto container md:px-4 px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
              to={`/service/${service.title}`}
                key={index}
                className={`group rounded-3xl ${service.bgColor} p-8 transition-all border border-gray-500${
                  service.bgColor === "bg-[#53CBFF]" ? "text-black" : "text-gray-800"
                }`}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
                <p className={service.bgColor === "bg-[#53CBFF]" ? "text-gray-800" : "text-gray-600"}>
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

        
        </div>
      </div>
    )
  }

  export default Home_Services

