import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12" style={{ userSelect: "none" }}>
      <div className="mx-auto container py-16">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="mb-2 text-sm font-medium text-gray-600" style={{ userSelect: "none" }}>
            Tech Career Solutions
          </h2>
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Cutting-Edge, Scalable,
              <br />
              and <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">Innovative</span>
              <br />
              IT Solutions
            </h1>
          </div>
          <p className="mb-8 max-w-2xl text-gray-600">
            {
              "We deliver top-notch software solutions, web development, and enterprise-grade IT services. Whether it's custom applications, cloud computing, or cybersecurity, we've got you covered."
            }
          </p>
          <Link to={"/service"}>
            <button className="rounded-full bg-[#53CBFF] px-8 py-3 font-semibold text-black transition-transform cursor-pointer hover:bg-black hover:text-[#53CBFF]">
              Explore Our Services
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Web & App Development */}
          <Link className="rounded-3xl bg-[#53CBFF] p-6" to={'/service/Web & App Development'}>
            <div className="mb-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Web & App Development</h3>
            <p className="text-sm">Custom websites and mobile apps tailored to your needs.</p>
          </Link>

          {/* Full-Stack Software Solutions */}
          <Link className="rounded-3xl bg-black p-6 text-white" to={'/service/Software Development'}>
            <div className="mb-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M8 2v4" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Software Development</h3>
            <p className="text-sm text-gray-400">Robust, scalable, and enterprise-grade software solutions.</p>
          </Link>

          {/* UI/UX Design */}
          <Link className="rounded-3xl bg-black p-6 text-white" to={'/service/UI-UX Design'}>
            <div className="mb-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9h.01" />
                <path d="M9 15h.01" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">UI/UX Design</h3>
            <p className="text-sm text-gray-400">Stunning, user-friendly designs that enhance engagement.</p>
          </Link>

          {/* Cloud & Cybersecurity */}
          <Link className="rounded-3xl bg-[#53CBFF] p-6" to={'/service/Cloud & Security'}>
            <div className="mb-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 10l7-7 7 7" />
                <path d="M4 12h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Cloud & Security</h3>
            <p className="text-sm">Secure cloud solutions to keep your data protected.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
