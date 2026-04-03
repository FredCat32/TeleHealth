'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ClipboardList, Star, ArrowRight } from 'lucide-react'

const clusters = [
  {
    title: 'ED Treatment',
    description: 'Compare Hims, Roman, Ro, Rex MD and more. Find the lowest price ED medication online.',
    href: '/ed',
    emoji: '💊',
    color: 'bg-blue-50',
  },
  {
    title: 'GLP-1 / Weight Loss',
    description: 'Semaglutide, tirzepatide, and structured weight loss programs compared.',
    href: '/glp1',
    emoji: '⚖️',
    color: 'bg-green-50',
  },
  {
    title: 'Hair Loss',
    description: 'Keeps, Hims, Roman — finasteride and minoxidil providers ranked.',
    href: '/hair',
    emoji: '💈',
    color: 'bg-purple-50',
  },
  {
    title: 'Mental Health',
    description: 'Online therapy and psychiatry platforms ranked for quality, cost and access.',
    href: '/mental',
    emoji: '🧠',
    color: 'bg-rose-50',
  },
]

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6 text-[#5B7A5F]" />,
    title: 'Answer a few questions',
    description: 'Our short quiz takes under 2 minutes and covers your health concern, budget, and preferences.',
  },
  {
    icon: <Star className="w-6 h-6 text-[#5B7A5F]" />,
    title: 'See your matches',
    description: "We rank platforms based on your answers — no paid placements, no hidden agenda.",
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-[#5B7A5F]" />,
    title: 'Click through to get started',
    description: "Go directly to the platform that fits you. Most have you set up in under 10 minutes.",
  },
]

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function HomeSections() {
  return (
    <>
      {/* Clusters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-3">
            Browse by health category
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Detailed comparisons, reviews, and guides for every major telehealth category.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clusters.map((cluster, index) => (
            <AnimatedSection key={cluster.href} delay={index * 0.08}>
              <Link
                href={cluster.href}
                className={`block rounded-2xl p-6 ${cluster.color} hover:shadow-md transition-shadow h-full`}
              >
                <span className="text-3xl mb-3 block">{cluster.emoji}</span>
                <h3 className="font-bold text-[#1C1C1E] text-lg mb-2">{cluster.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cluster.description}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-12">
              How it works
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#EEF4EE] flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-[#1C1C1E] text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/quiz"
                className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                Get my recommendations
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
