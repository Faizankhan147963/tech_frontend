import React from "react"
import { Link } from "react-router-dom"

const Help = () => {
  const supportTopics = [
    {
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Account Support",
      description:
        "Assistance with account setup, password recovery, profile management, and subscription-related queries.",
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Technical Support",
      description:
        "Help with troubleshooting, app performance, connectivity issues, and resolving technical glitches.",
      bgColor: "bg-[#53CBFF]",
    },
    {
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "User Guides",
      description:
        "Access detailed guides, tutorials, and FAQs to help you navigate and use our platform effectively.",
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Contact Support",
      description:
        "Reach out to our support team via live chat, email, or phone for personalized assistance.",
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      ),
      title: "Billing Support",
      description:
        "Get help with payment issues, invoice queries, refund requests, and subscription plan changes.",
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
        </svg>
      ),
      title: "Feedback & Suggestions",
      description:
        "Share your feedback or suggest new features to help us improve your experience.",
      bgColor: "bg-white",
    },
  ]

  return (
    <div className="min-h-screen bg-white container mx-auto md:py-8 md:px-0 px-4">
      {/* Header Section */}
      <div className="mb-20 text-center">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">How we help</h2>
        <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
          We're here to provide the best
          <br />
          support for <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">your needs</span>
        </h1>
        <p className="mx-auto max-w-3xl text-gray-600">
          Our dedicated support team is committed to assisting you with any issues or questions. We strive to ensure your experience is seamless and satisfactory.
        </p>
      </div>

      {/* Support Topics Grid */}
      <div className="mx-auto container md:px-4 px-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportTopics.map((topic, index) => (
            <Link
              to={`/contact`}
              key={index}
              className={`group rounded-3xl ${topic.bgColor} p-8 transition-all border border-gray-500 ${
                topic.bgColor === "bg-[#53CBFF]" ? "text-black" : "text-gray-800"
              }`}
            >
              <div className="mb-6">{topic.icon}</div>
              <h3 className="mb-4 text-xl font-bold">{topic.title}</h3>
              <p className={topic.bgColor === "bg-[#53CBFF]" ? "text-gray-800" : "text-gray-600"}>
                {topic.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Help