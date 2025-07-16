import React from "react"
import Our_Mission from "../Our_Mission/Our_Mission"
import { MdChevronRight } from "react-icons/md"
import { Link } from "react-router-dom"
const About = () => {
  const team = [
    {
      name: "Terry Green",
      role: "Chief Executive",
      image: "https://iamosahan.com/pillarix/demo/bank/img/profile/1.jpeg",
    },
    {
      name: "Brandon Hudson",
      role: "Developer",
      image: "https://iamosahan.com/pillarix/demo/bank/img/profile/2.jpeg",
    },
    {
      name: "Sara Fox",
      role: "Web Designer",
      image: "https://iamosahan.com/pillarix/demo/bank/img/profile/3.jpeg",
    },
  ]

  const features = [
    {
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur.",
    },
    {
      title: "Skills",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur.",
    },
    {
      title: "Passion",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur.",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white container mx-auto py-16 md:px-0 px-4">
        {/* Dark Section */}
          <div className="rounded-4xl bg-black px-6 py-12 md:px-12 md:py-16">

          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link to={'/'}> <span className="text-[#53CBFF]">HOME</span></Link>
            <MdChevronRight className="text-white/40" size={22} />
            <span className="text-white/70">ABOUT</span>
          </div>

          {/* Header */}
          <div className="mb-12 flex items-start justify-between">
            <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
              Meet Our
              <br />
              Professional Team
            </h1>
            <button className="rounded-full bg-[#53CBFF] px-6 py-3 font-semibold md:block hidden">👋 We are hiring</button>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-3xl bg-[#E5C7A5]">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                <p className="mb-4 text-[#53CBFF]">{member.role}</p>
                <div className="flex justify-center gap-4">
                  {["facebook", "twitter", "instagram"].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#53CBFF]"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        {social === "facebook" && (
                          <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1.1-1.3H18V0h-3.8C10.6 0 9 1.6 9 4.6V8z" />
                        )}
                        {social === "twitter" && (
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        )}
                        {social === "instagram" && (
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto container py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Our_Mission />
    </>
  )
}

export default About

