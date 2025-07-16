import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "CTO, TechNova Solutions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s",
      text: "Tech Career provided us with top-notch IT solutions. Their professionalism and efficiency are unmatched.",
    },
  
    {
      name: "James Anderson",
      role: "CEO, CloudSphere Inc.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s",
      text: "Tech Career transformed our cloud infrastructure, enhancing security and scalability beyond our expectations.",
    },
  ];

  return (
    <div className="bg-gray-50 px-4 py-16 md:px-8 lg:px-12">
      {/* Header Section */}
      <div className="mx-auto container text-center">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">
          Client Testimonials
        </h2>
        <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl">
          What Our <br />
          <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">
            Clients
          </span>{" "}
          Say
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-gray-600">
          At Tech Career, we take pride in delivering innovative and reliable IT
          solutions to businesses worldwide, ensuring their success in the
          digital landscape.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
            
              className="rounded-3xl bg-white p-8 shadow-md border border-gray-600 transition-transform transform "
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto mb-6 h-20 w-20 rounded-full object-cover "
              />
              <h3 className="mb-2 text-xl font-bold">{testimonial.name}</h3>
              <p className="mb-4 text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
