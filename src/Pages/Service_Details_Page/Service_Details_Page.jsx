import React from "react";
import { Link, useParams } from "react-router-dom";

const serviceData = {
  "Web & App Development": {
    overview: "We provide cutting-edge web and mobile development services, ensuring scalable, responsive, and secure digital experiences for businesses of all sizes. Our expert team leverages the latest technologies to build powerful applications that drive business growth. From front-end to back-end, we ensure seamless integration, excellent user experience, and ongoing support to help you stay ahead in the competitive digital landscape.",
    benefits: [
      { title: "Responsive Design", description: "We build applications that work seamlessly across all devices, providing a great user experience." },
      { title: "Performance Optimization", description: "Our solutions are optimized for speed, reliability, and efficiency, ensuring superior performance." },
      { title: "Secure Development", description: "We implement the latest security protocols to safeguard your web and mobile platforms from threats." },
      { title: "SEO & Marketing", description: "Optimized for search engines to improve visibility, drive traffic, and enhance digital presence." }
    ]
  },
  "Software Development": {
    overview: "Our custom software development solutions are designed to streamline operations, enhance productivity, and meet unique business requirements efficiently. We create tailored applications that cater to your specific needs, ensuring smooth integration with existing systems. Whether it's enterprise software, automation tools, or cloud-based solutions, our team ensures robust security, scalability, and seamless user experience for long-term success.",
    benefits: [
      { title: "Custom Software", description: "We develop tailored software applications to meet specific business needs and industry demands." },
      { title: "Agile Development", description: "Our iterative development approach ensures flexibility, efficiency, and rapid deployment of solutions." },
      { title: "Cloud Integration", description: "We seamlessly integrate cloud solutions to provide scalable, secure, and accessible business applications." },
      { title: "Security Assurance", description: "Robust security measures and compliance protocols are implemented to protect your data and systems." }
    ]
  },
  "UI-UX Design": {
    overview: "We specialize in creating intuitive, engaging, and visually stunning UI-UX designs that enhance user experience and maximize digital engagement. Our approach is user-centric, ensuring that every design element aligns with usability and accessibility principles. We focus on delivering creative, functional, and aesthetically pleasing interfaces that drive customer satisfaction and business success.",
    benefits: [
      { title: "User-Centered Design", description: "Our approach prioritizes user needs to create seamless and engaging digital experiences." },
      { title: "Interactive Prototypes", description: "We develop interactive wireframes to visualize and test designs before full implementation." },
      { title: "Brand Identity", description: "We ensure brand consistency by crafting visually compelling design elements that resonate with audiences." },
      { title: "Accessibility Focus", description: "Our designs are inclusive, ensuring a seamless experience for all users, including those with disabilities." }
    ]
  },
  "Cloud & Security": {
    overview: "We offer robust cloud computing and security solutions, ensuring businesses stay secure, scalable, and competitive in the digital landscape. Our experts implement cutting-edge security measures to safeguard your data from cyber threats. Whether you need cloud migration, data encryption, or compliance assurance, we provide end-to-end solutions that help businesses thrive in an increasingly digital world.",
    benefits: [
      { title: "Cloud Migration", description: "Our team facilitates a smooth transition to cloud-based infrastructure with minimal downtime." },
      { title: "Data Security", description: "We implement advanced security measures to protect sensitive business data and prevent cyber threats." },
      { title: "Network Protection", description: "Our solutions ensure robust network security, minimizing vulnerabilities and potential attacks." },
      { title: "Compliance & Audits", description: "We help businesses adhere to industry security standards, regulations, and compliance requirements." }
    ]
  },
  "Web - CMS - Shopify Development": {
    overview: "We specialize in building dynamic, scalable, and secure websites and eCommerce platforms using CMS solutions like WordPress, Shopify, and custom web development frameworks. Our team ensures high-performance, SEO-friendly, and user-friendly digital experiences tailored to business needs.",
    benefits: [
      { title: "Custom Development", description: "Tailored web and eCommerce solutions to match unique business requirements." },
      { title: "SEO & Performance", description: "Optimized for search engines and fast loading times to enhance user engagement." },
      { title: "Secure Transactions", description: "Robust security measures to protect customer data and online payments." },
      { title: "Scalability & Support", description: "Seamless scalability and continuous support for platform growth." }
    ]
  },
  "Mobile App Development": {
    overview: "Our expert team develops high-performance mobile applications for iOS and Android, ensuring seamless user experiences and top-notch functionality. We specialize in native and cross-platform development, integrating the latest technologies to drive user engagement and business growth.",
    benefits: [
      { title: "Cross-Platform Compatibility", description: "We build apps for both iOS and Android, ensuring a wider reach and consistent experience." },
      { title: "User-Centric Design", description: "Engaging and intuitive UI/UX to enhance customer satisfaction and usability." },
      { title: "Secure & Scalable", description: "Built with the latest security protocols and designed to grow with your business needs." },
      { title: "Performance Optimization", description: "Ensuring smooth performance, fast loading times, and minimal resource consumption." }
    ]
  },
  "AI & Machine Learning": {
    overview: "We leverage Artificial Intelligence and Machine Learning to build intelligent applications that automate processes, enhance decision-making, and improve efficiency. Our AI-driven solutions include predictive analytics, chatbots, recommendation engines, and advanced data processing systems.",
    benefits: [
      { title: "Predictive Analytics", description: "AI-powered insights to drive data-driven business strategies and growth." },
      { title: "Automation & Efficiency", description: "Reduce manual workload with intelligent automation and AI-driven processes." },
      { title: "Personalization", description: "Enhance customer engagement with tailored recommendations and user experiences." },
      { title: "Data Security & Compliance", description: "Implement AI-based security solutions to protect sensitive information." }
    ]
  },
  "SEO & Social Media": {
    overview: "Our digital marketing experts provide comprehensive SEO and social media strategies to boost online visibility, drive organic traffic, and increase brand engagement. From keyword optimization to targeted ad campaigns, we help businesses maximize their digital presence.",
    benefits: [
      { title: "SEO Optimization", description: "Improve search rankings and drive organic traffic through effective SEO strategies." },
      { title: "Social Media Growth", description: "Engage and grow your audience with powerful social media marketing campaigns." },
      { title: "Content Marketing", description: "Create high-quality content to attract and retain customers." },
      { title: "Analytics & Reporting", description: "Monitor performance and optimize campaigns using data-driven insights." }
    ]
  },
  "AR - VR Development": {
    overview: "We develop immersive Augmented Reality (AR) and Virtual Reality (VR) applications that enhance user engagement across industries such as gaming, retail, education, and real estate. Our team integrates cutting-edge technologies to create interactive and visually stunning experiences.",
    benefits: [
      { title: "Immersive Experiences", description: "Enhance user engagement with interactive and realistic AR/VR applications." },
      { title: "Cross-Industry Solutions", description: "Applications tailored for gaming, education, retail, real estate, and more." },
      { title: "High-Quality Graphics", description: "Seamless and visually stunning graphics for realistic user interactions." },
      { title: "Hardware Compatibility", description: "Optimized for VR headsets, AR devices, and mobile platforms." }
    ]
  },
   "Website Design & Development": {
    overview: "We design and develop visually stunning, high-performance websites that are tailored to meet your business objectives. Our expert team specializes in creating responsive, user-friendly, and SEO-optimized websites that drive traffic and enhance user engagement. Whether you need a corporate website, an e-commerce platform, or a personal blog, we provide scalable and secure solutions to establish a strong online presence. With a focus on intuitive navigation, fast loading speeds, and mobile compatibility, we ensure an optimal user experience.",
    benefits: [
      { title: "Responsive & Adaptive", description: "Websites that work seamlessly on all devices and screen sizes." },
      { title: "SEO Optimized", description: "Built with search engine-friendly structures to enhance visibility and rankings." },
      { title: "Custom & Scalable", description: "Tailored solutions with scalability to support business growth." },
      { title: "Secure & Fast", description: "Optimized for speed and security to provide a smooth user experience." }
    ]
  },
  "Software Development": {
    overview: "Our software development services cater to businesses of all sizes, providing customized, scalable, and secure solutions tailored to meet specific industry needs. Whether you require enterprise software, automation tools, or cloud-based applications, we use the latest technologies to build high-performance software that enhances business efficiency. Our agile development approach ensures flexibility, quick adaptability, and seamless integration with existing systems. With a focus on security, usability, and long-term scalability, we help businesses stay ahead in the digital landscape.",
    benefits: [
      { title: "Custom Solutions", description: "Tailor-made software to meet specific business requirements." },
      { title: "Agile Development", description: "Flexible and iterative development approach for quick adaptability." },
      { title: "Scalability & Performance", description: "Solutions designed to grow with your business needs." },
      { title: "Security & Compliance", description: "Implementing the latest security protocols for data protection." }
    ]
  },
  "Cloud Computing": {
    overview: "We offer cutting-edge cloud computing solutions that help businesses enhance scalability, security, and operational efficiency. Our services include cloud migration, storage, computing, and security solutions tailored to meet your specific business needs. Whether you’re looking to reduce IT costs, improve accessibility, or enhance data protection, our cloud services provide flexible and cost-effective solutions. With expertise in leading cloud platforms, we ensure smooth deployment, seamless integration, and round-the-clock support for a hassle-free cloud experience.",
    benefits: [
      { title: "Cloud Migration", description: "Seamlessly move applications and data to cloud platforms." },
      { title: "Data Security", description: "Advanced security measures to protect cloud-based assets." },
      { title: "Scalability", description: "Effortlessly scale resources as your business grows." },
      { title: "Cost Efficiency", description: "Reduce infrastructure costs with optimized cloud solutions." }
    ]
  },
  "Mobile App Development": {
    overview: "We develop innovative and high-performance mobile applications for iOS and Android platforms, helping businesses engage with their customers seamlessly. Our team specializes in building user-friendly, feature-rich, and scalable mobile apps tailored to industry-specific needs. From concept to deployment, we ensure smooth functionality, robust security, and an intuitive user experience. Whether you need a native, hybrid, or cross-platform app, we leverage the latest technologies to deliver a seamless, engaging, and highly responsive mobile experience.",
    benefits: [
      { title: "Cross-Platform Compatibility", description: "Seamless apps for both Android and iOS users." },
      { title: "User-Centric Design", description: "Intuitive UI/UX ensuring great user experiences." },
      { title: "Security & Performance", description: "Robust security and optimized performance for smooth operations." },
      { title: "Scalability & Support", description: "Future-ready solutions with continuous support and upgrades." }
    ]
  },
  "UI-UX Design": {
    overview: "Our UI/UX design services focus on creating visually appealing, intuitive, and user-friendly digital experiences. We combine creativity with usability principles to design interfaces that enhance customer engagement and satisfaction. Our team follows a user-centric approach, ensuring that every element of design is optimized for accessibility and seamless interaction. From wireframing and prototyping to interactive design and brand identity, we craft digital experiences that resonate with users, making products more functional, engaging, and aesthetically pleasing.",
    benefits: [
      { title: "User-Focused Design", description: "Optimized interfaces for smooth navigation and usability." },
      { title: "Brand Identity", description: "Visually compelling designs that align with your brand image." },
      { title: "Interactive Prototypes", description: "Wireframes and prototypes for effective design validation." },
      { title: "Accessibility & Inclusivity", description: "Designs that ensure a seamless experience for all users." }
    ]
  },
  "Web Application Development": {
    overview: "We build powerful, scalable, and secure web applications tailored to meet specific business needs. Our expertise lies in creating dynamic, high-performance applications that ensure seamless functionality and an enhanced user experience. Whether you need a custom web portal, SaaS platform, or business automation tool, we use cutting-edge technologies to develop robust solutions. Our web applications are designed for scalability, performance, and security, ensuring that your business stays ahead in the competitive digital landscape.",
    benefits: [
      { title: "Custom Development", description: "Bespoke web applications to match business goals." },
      { title: "Scalability & Performance", description: "Built for efficiency and growth as user demand increases." },
      { title: "Secure Architecture", description: "Advanced security measures for data and application protection." },
      { title: "Integration Ready", description: "Seamless integration with third-party tools and APIs." }
    ]
  },
  "Digital Marketing": {
    overview: "Our digital marketing services help businesses enhance their online presence, drive traffic, and increase conversions. We provide data-driven strategies that encompass SEO, PPC advertising, social media marketing, content marketing, and more. Our team focuses on optimizing brand visibility, improving engagement, and generating leads through targeted campaigns. With a deep understanding of analytics, market trends, and audience behavior, we create customized marketing plans that deliver measurable results and ensure long-term digital success.",
    benefits: [
      { title: "SEO Optimization", description: "Improving search rankings for better visibility and organic traffic." },
      { title: "Social Media Marketing", description: "Strategic campaigns to engage and grow your audience." },
      { title: "Content Marketing", description: "High-quality content creation for brand authority and engagement." },
      { title: "Data-Driven Strategy", description: "Performance analytics for continuous optimization and improvement." }
    ]
  },
  "E-Commerce Solutions": {
    overview: "We provide end-to-end e-commerce solutions to help businesses establish, manage, and scale their online stores. From Shopify and WooCommerce to fully custom-built e-commerce platforms, we develop seamless, secure, and high-performance online shopping experiences. Our solutions include secure payment gateways, inventory management, order processing, and SEO optimization to drive sales. With a focus on user experience, performance, and business growth, we ensure that your e-commerce platform delivers an efficient and engaging shopping experience.",
    benefits: [
      { title: "Custom Online Stores", description: "Tailored e-commerce platforms with advanced features." },
      { title: "Secure Payment Gateways", description: "Reliable and secure transaction processing solutions." },
      { title: "SEO & Performance", description: "Optimized for visibility and fast loading speeds." },
      { title: "Inventory & Order Management", description: "Seamless management of products, orders, and shipping." }
    ]
  },
  "Game Development": {
    overview: "Our game development services cover the entire process from concept and design to development and deployment, creating immersive and engaging gaming experiences. We develop games for mobile, web, and console platforms, incorporating advanced graphics, interactive gameplay, and AI-driven features. Our team specializes in creating high-performance, visually stunning, and innovative games tailored to diverse audiences. With expertise in multiple game engines and cross-platform development, we ensure optimized performance, seamless controls, and engaging player interactions.",
    benefits: [
      { title: "Cross-Platform Development", description: "Games for mobile, PC, and console platforms." },
      { title: "High-Quality Graphics", description: "Visually stunning graphics for an engaging experience." },
      { title: "Optimized Performance", description: "Smooth gameplay with high responsiveness." },
      { title: "Multiplayer & AI Integration", description: "Advanced multiplayer and AI-driven gaming experiences." }
    ]
  }
};

const Service_Details_Page = () => {
  const { name } = useParams();
  const service = serviceData[name] || {};

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#53CBFF] md:py-16 py-6">
      <div className="container mx-auto py-12 lg:py-8 md:px-0 px-4">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div>
            <h1 className="text-2xl lg:text-6xl font-bold text-black md:mb-8 mb-0">{name}</h1>
          </div>
        </div>
      </div>

      <section className="container mx-auto md:px-0 px-4 pb-10">
        <h2 className="md:text-3xl text-2xl font-bold mb-6 text-black">Overview</h2>
        <div className="max-w-6xl text-left space-y-6 text-gray-900">
          <p>{service.overview || "Service details will be updated soon with relevant information and insights."}</p>
        </div>
      </section>

      <section className="container mx-auto md:px-0 px-4 mb-10">
        <h2 className="font-bold md:mb-12 mb-6 text-black md:text-3xl text-2xl " >Key Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.benefits ? service.benefits.map((benefit, index) => (
            <div key={index} className="border bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          )) : <p className="text-gray-600">Details coming soon with more insights.</p>}
        </div>
        <button className="mt-10 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center group">
          <Link to={'/contact'}> Start a project</Link>
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Service_Details_Page;
