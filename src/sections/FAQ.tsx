'use client'

import { useState } from 'react'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'I offer mentorship, design consultation, branding, podcasting, and more.',
  },
  {
    id: 2,
    question: 'How can I book a service?',
    answer: 'You can reach out via the contact form or book directly from the service page.',
  },
  {
    id: 3,
    question: 'What is your experience?',
    answer: 'I have over 5 years of experience in creative fields including branding and emotional healing.',
  },
  {
    id: 4,
    question: 'Do you work internationally?',
    answer: 'Yes, all my services are available globally through virtual consultations.',
  },
  {
    id: 5,
    question: 'Are your consultations paid?',
    answer: 'Some initial consultations are free; service charges are detailed per offering.',
  },
  {
    id: 6,
    question: 'Do you offer group sessions?',
    answer: 'Yes, I host webinars and group mentorship sessions monthly.',
  },
  {
    id: 7,
    question: 'Can I collaborate with you?',
    answer: 'Absolutely! I’m open to creative collaborations. Reach out via email or social media.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(1) // First item open by default

  const toggleAccordion = (id: number) => {
    setOpenIndex(prev => (prev === id ? -1 : id))
  }

  return (
    <section className="py-16 ">
      <div className="w-[90%] m-auto md:container">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg  shadow">
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left px-6 py-4 font-medium text-lg focus:outline-none flex justify-between items-center"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === faq.id ? '−' : '+'}
                </span>
              </button>
              {openIndex === faq.id && (
                <div className="px-6 pb-4 text-yellow-300 transition">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
