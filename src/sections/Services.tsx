'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GlobalHeading } from "../../components/GlobalHeading"

type Service = {
  id: number
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Mentorship',
    description: 'Creative & Alternative Careers.',
    image: '/services/service1.png',
  },
  {
    id: 2,
    title: 'Editorials',
    description: 'Blogging, Editorial Writer, Content Curator.',
    image: '/services/service2.png',
  },
  {
    id: 3,
    title: 'Emotional Help',
    description: 'Dark Psychology & Emotional/Trauma Healing Therapist.',
    image: '/services/service3.png',
  },
  {
    id: 4,
    title: 'Designing',
    description: 'Visual & Brand Identity Design Consultation.',
    image: '/services/service4.png',
  },
  {
    id: 5,
    title: 'Branding',
    description: 'Logo, Graphic and Website Design.',
    image: '/services/service5.png',
  },
  {
    id: 6,
    title: 'Podcasting',
    description: 'Delivering your unique story of success.',
    image: '/services/service6.png',
  },
  {
    id: 7,
    title: 'Model Grooming',
    description: 'Become the star and walk the way of fame.',
    image: '/services/service7.png',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<Service>(services[0])

  const renderCanvas = (service: Service, isMobile: boolean = false) => (
    <div
      className={`relative w-full border rounded-xl overflow-hidden mt-2 ${
        isMobile ? 'block lg:hidden h-[300px]' : 'hidden lg:block flex-1 h-[500px]'
      }`}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
        style={{ objectPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-yellow-500 text-center p-6 z-10">
        <h2 className="text-2xl lg:text-4xl font-bold mb-2">{service.title}</h2>
        <p className="text-base lg:text-lg max-w-xl">{service.description}</p>
      </div>
      {/* Bot image only visible on large screens */}
      <div className="absolute bottom-4 right-4 w-[200px] h-[200px] z-20 hidden lg:block">
        <Image
          src="/bot.png"
          alt="Bot"
          width={200}
          height={200}
          className="rounded shadow-lg"
        />
      </div>
    </div>
  )

  return (
    <section className="py-16">
      <div className="w-[90%] m-auto md:container">
        <GlobalHeading
          title="   Check Out My Services"
          subTitle=" Get a glimpse of my top 7 services and help me curate the best."
        />

        <div className="flex flex-col-reverse lg:flex-row mt-8 gap-6">
          {/* Button list (right panel on desktop) */}
          <div className="flex flex-col gap-4 w-full lg:max-w-[300px]">
            {services.map((service) => (
              <div key={service.id}>
                <button
                  onClick={() => setActiveService(service)}
                  className={`border p-4 rounded-lg text-left w-full transition hover:bg-yellow-400 hover:text-black ${
                    activeService.id === service.id ? 'bg-yellow-400 text-black' : ''
                  }`}
                >
                  {service.title}
                </button>
                {/* Mobile: Show canvas directly below selected button */}
                {activeService.id === service.id && renderCanvas(service, true)}
              </div>
            ))}
          </div>

          {/* Desktop: Show canvas area on left */}
          {renderCanvas(activeService)}
        </div>
      </div>
    </section>
  )
}
