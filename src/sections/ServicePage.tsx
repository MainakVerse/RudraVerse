// components/ServicePage.tsx

import React from "react";

const services = [
  {
    title: "Mentorship",
    text: "We provide mentorship tailored for creative and alternative careers, helping you break free from traditional paths. With personalized guidance, we empower you to pursue your passion confidently, offering real-world insights, industry connections, and practical strategies to thrive in unconventional fields. Your unique journey deserves expert support—start with us today.",
  },
  {
    title: "Content Curation",
    text: "As a Content Curator, I’ll mentor you to master blogging and elevate your voice as an editorial writer. From selecting impactful topics to crafting compelling narratives, you’ll learn the art of storytelling that engages and informs. Let’s refine your content strategy and build your authority as a trusted digital voice.",
  },
  {
    title: "Mental Support",
    text: "As a Dark Psychology and Emotional/Trauma Healing Therapist, I guide you through the shadows of your mind, helping you understand manipulative patterns and heal deep emotional wounds. This mentorship offers clarity, strength, and emotional resilience—empowering you to reclaim control, rebuild self-worth, and embrace life with renewed purpose and confidence.",
  },
  {
    title: "Brand Elevation",
    text: "Brand Elevation begins with strong visual and brand identity. Through focused consultation, I’ll guide you in crafting a distinct brand persona that resonates with your audience. From refining your logo to aligning your visuals with your mission, I’ll mentor you through each step to ensure lasting, professional brand impact.",
  },
  {
    title: "Designing",
    text: "Designing is more than aesthetics—it's about communicating your brand’s purpose. Through mentorship, we guide you in mastering logo creation, impactful graphic design, and intuitive website layouts. You'll learn how to blend creativity with strategy, ensuring your designs not only look great but also drive engagement and leave a lasting impression.",
  },
];

const ServicePage = () => {
  return (
    <section className="w-[90%] m-auto mt-16 py-10 font-playfair">
      <div className="flex flex-col items-center gap-6">
        {/* Top 3 boxes */}
        <div className="flex flex-wrap justify-center md:justify-around gap-6 w-full">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] lg:w-[340px] border rounded-lg shadow p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-neon-green hover:ring-4 hover:ring-neon-green"
            >
              <div className="font-semibold border-b pb-2 mb-2 text-center">
                {service.title}
              </div>
              <p className="text-center text-yellow-600">{service.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom 2 boxes */}
        <div className="flex flex-wrap justify-center gap-28 w-full mt-2">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] lg:w-[340px] border rounded-lg shadow p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-neon-green hover:ring-4 hover:ring-neon-green"
            >
              <div className="font-semibold border-b pb-2 mb-2 text-center">
                {service.title}
              </div>
              <p className="text-center text-yellow-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
