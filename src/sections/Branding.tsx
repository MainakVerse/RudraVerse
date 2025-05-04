'use client'
import React, { useState } from "react";

const services = [
  {
    title: "Creative Exchange Platform",
    text: "Our Creative Exchange Platform provides a dynamic space for artists, designers, and creators to collaborate, share ideas, and inspire each other. This platform fosters innovation by connecting talented individuals, enabling them to work on projects that push creative boundaries. Whether you're a seasoned professional or an emerging talent, our platform helps you expand your network, showcase your work, and unlock new opportunities in the creative industry."
  },
  {
    title: "NFT & Artwork Exhibition Curator",
    text: "As an NFT & Artwork Exhibition Curator, I guide you through the exciting world of digital art exhibitions, where traditional art meets blockchain technology. From curating collections that resonate with contemporary audiences to understanding the nuances of NFT marketplaces, I'll help you navigate the evolving landscape of digital artwork. Together, we'll curate exhibitions that captivate and engage art lovers while embracing the future of art ownership."
  },
  {
    title: "Designer Haute-Couture Fashion House",
    text: "Running a Designer Haute-Couture Fashion House is an art form that blends exceptional craftsmanship with bold, innovative design. I’ll mentor you in creating bespoke collections that push the boundaries of fashion, from concept to couture. You’ll learn how to build a brand that exudes exclusivity, cultivate relationships with high-end clientele, and master the intricacies of the luxury fashion world. Your designs will speak volumes, making a statement on the global stage."
  },
  {
    title: "Luxury Fashion & Lifestyle Magazine",
    text: "Our Luxury Fashion & Lifestyle Magazine celebrates the finest in fashion, design, and lifestyle. As part of our team, you'll learn how to craft compelling editorial content, showcase exclusive collections, and highlight the luxury lifestyle. From writing about the latest trends to curating stunning visual features, you'll become an authority in the world of high fashion, offering readers an inside look at the best life has to offer."
  },
  {
    title: "Advertorial",
    text: "An Advertorial is a powerful tool for blending advertising with editorial content. I’ll guide you in creating captivating advertorials that not only promote products but also tell a compelling story. By learning to write with both persuasion and authenticity, you’ll connect with your audience while maintaining the integrity of your editorial voice. This is the perfect strategy for brands looking to make a lasting impression through seamless, impactful storytelling."
  },
  {
    title: "Commercial Videos",
    text: "Commercial Videos are more than just ads—they are an opportunity to tell your brand's story in a compelling and visually dynamic way. I’ll mentor you in creating videos that engage viewers, from scriptwriting and storyboarding to the final editing touches. Whether it's a TV spot, online ad, or social media campaign, you'll learn how to produce high-quality, attention-grabbing content that resonates with your audience and drives results."
  },
  {
    title: "Action Videos",
    text: "Action Videos are all about adrenaline-pumping visuals that capture fast-paced, high-energy moments. Whether it's extreme sports, adventure, or dynamic brand activations, I’ll help you craft videos that pack a punch. From camera techniques to editing for maximum impact, you’ll learn how to create content that keeps viewers on the edge of their seats, making your brand unforgettable."
  },
  {
    title: "Podcasting Platform",
    text: "Podcasting has become a vital medium for reaching and engaging audiences in a personal, intimate way. I’ll help you launch and grow your own podcasting platform, covering everything from content creation and editing to promoting your episodes. Whether you’re looking to build a community, share stories, or educate listeners, you’ll gain the skills to produce high-quality audio content that resonates with your target audience."
  },
  {
    title: "TEDx Organizer",
    text: "As a TEDx Organizer, you’ll be at the forefront of curating inspiring, thought-provoking events that spotlight incredible speakers and ideas. From managing event logistics to coaching speakers and promoting the event, I’ll guide you through every step of organizing a TEDx event. This mentorship will empower you to create meaningful experiences that spark conversations and inspire action in your community."
  },
  {
    title: "Fashion Runways & Concerts",
    text: "Fashion Runways & Concerts combine the energy of live performance with the elegance of couture. I’ll teach you how to conceptualize and execute high-profile events that merge music and fashion, from creating an immersive experience to managing logistics. Whether it's a runway show or a concert event, you’ll learn how to produce extraordinary performances that leave audiences in awe."
  },
  {
    title: "Creators Summit (NECIM / ODYSSEY)",
    text: "The Creators Summit (NECIM / ODYSSEY) is where innovators, creators, and thought leaders converge to share ideas, collaborate, and inspire the next generation. As an organizer, I’ll help you bring together a diverse range of creators from various industries to exchange knowledge and build lasting connections. You’ll learn how to curate meaningful sessions, workshops, and networking opportunities that empower creators to elevate their craft."
  },
  {
    title: "Model Training & Grooming Academy",
    text: "A Model Training & Grooming Academy is dedicated to honing the skills of aspiring models. Through tailored mentorship, I’ll guide you through every aspect of the modeling industry, from runway walking to personal branding. You’ll also learn vital grooming techniques and how to build a professional portfolio. With the right training, you’ll be equipped to step confidently into the world of fashion and modeling, ready to take on the industry's challenges."
  }
];

const Brand = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-[90%] m-auto mt-16 py-10">
      <div className="flex flex-col items-center gap-6">
        {/* For mobile, use accordion, for desktop use grid */}
        <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] lg:w-[340px] border rounded-lg shadow p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-neon-green hover:ring-4 hover:ring-neon-green"
            >
              {/* Accordion for mobile */}
              <div
                onClick={() => toggleAccordion(index)}
                className="font-semibold border-b pb-2 mb-2 text-center cursor-pointer md:hidden"
              >
                {service.title}
              </div>
              {activeIndex === index && (
                <p className="text-center text-yellow-600 md:hidden">{service.text}</p>
              )}

              {/* Default display for desktop */}
              <div className="hidden md:block text-center">
                <div className="font-semibold border-b pb-2 mb-2">{service.title}</div>
                <p className="text-yellow-600">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
