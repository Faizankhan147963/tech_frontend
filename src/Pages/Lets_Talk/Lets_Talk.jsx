import React, { useState } from "react";
import axios from "axios";

const Lets_Talk = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        "https://contact-us-form-backend.onrender.com/api/send-email",
        formData
      );

      if (response.data.success) {
        setResponseMessage("Message sent successfully! ✅");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. ❌");
      }
    } catch (error) {
      setResponseMessage("Error sending message. Please try again later.");
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white container mx-auto md:px-0 px-4 py-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm tracking-wider mb-4 text-gray-600">LET'S TALK</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Send Us Your{" "}
          <span className="inline-block rounded-full bg-[#53CBFF] px-6 py-2">
            Feedback
          </span>
        </h1>
        <p className="text-gray-600">
          Nullam condimentum leo id elit sagittis auctor. Curabitur elementum
          nunc a leo imperdiet elementum diam. Etiam elementum euismod commodo.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 mb-20">
        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <img
            src="https://img.freepik.com/premium-vector/design-background-professional-business-illustrationles1sortwitherrorsfirstampqueryjapanese_1013341-284088.jpg"
            alt="Thumbs up feedback"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700">First & Last Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#53CBFF] focus:ring-2 focus:ring-[#53CBFF] focus:ring-opacity-75"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#53CBFF] focus:ring-2 focus:ring-[#53CBFF] focus:ring-opacity-75"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Subject</span>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#53CBFF] focus:ring-2 focus:ring-[#53CBFF] focus:ring-opacity-75"
              >
                <option value="" disabled>
                  -- Select IT Service --
                </option>
                <option value="web-development">Web Development</option>
                <option value="app-development">App Development</option>
                <option value="seo-services">SEO Services</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="cyber-security">Cyber Security</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="custom-software">Custom or Other</option>
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700">Comment or Message *</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Enter your comment"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#53CBFF] focus:ring-2 focus:ring-[#53CBFF] focus:ring-opacity-75"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-[#53CBFF] rounded-full font-bold hover:bg-[#00cbe6] transition-colors cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#53CBFF] focus:ring-opacity-75"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success/Error Message */}
          {responseMessage && (
            <p
              className={`mt-4 font-semibold ${
                responseMessage.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Lets_Talk;
