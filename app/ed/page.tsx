import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import ComparisonTable from '@/components/ComparisonTable'
import AffiliateCard from '@/components/AffiliateCard'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'
import { affiliatePrograms, getProgramsByIds } from '@/lib/affiliates'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'ED Treatment Online 2026: Compare Hims, Roman, Ro & Rex MD',
  description:
    'Compare the best online ED treatment platforms side by side. Pricing, medication options, and who each service is best for — all in one place.',
}

const edPrograms = affiliatePrograms.filter((p) => p.concerns.includes('ed'))
const topThree = getProgramsByIds(['roman', 'hims', 'ro'])

const faqs = [
  {
    question: 'How much does online ED medication cost?',
    answer:
      'Generic tadalafil or sildenafil from online platforms typically costs $19–$45/month depending on the provider and quantity. Rex MD starts lowest at around $19/month. Roman and Hims start around $22–$25/month. None of the major platforms accept insurance.',
  },
  {
    question: 'Do I need a video call to get ED medication online?',
    answer:
      'No. Roman, Hims, Ro, and Rex MD all use asynchronous consultations — you fill out a medical questionnaire and a licensed US physician reviews it. No scheduling, no video call required.',
  },
  {
    question: 'What is the difference between tadalafil and sildenafil?',
    answer:
      'Sildenafil (generic Viagra) works for 4–6 hours and is taken as needed. Tadalafil (generic Cialis) lasts up to 36 hours and can also be taken as a daily low dose. Both are equally effective for most men. All major platforms offer both.',
  },
  {
    question: 'Which platform is cheapest for ED medication?',
    answer:
      'Rex MD is the cheapest at around $19/month with no subscription required. Roman is close behind at $22/month and also has no subscription commitment. Hims requires a subscription for its lowest pricing.',
  },
  {
    question: 'Is it safe to get ED medication online?',
    answer:
      'Yes, through licensed US telehealth platforms. All platforms listed here employ board-certified US physicians who review your medical history before prescribing. Always disclose all medications and existing conditions in your consultation.',
  },
]

const faqSchemaData = faqSchema(faqs)

const comparisons = [
  { title: 'Hims vs Roman', href: '/ed/compare/hims-vs-roman', desc: 'Best for most men — price, flexibility, and clinical quality compared.' },
  { title: 'Hims vs Ro', href: '/ed/compare/hims-vs-ro', desc: 'Bundle-focused vs comprehensive health platform.' },
  { title: 'Roman vs Rex MD', href: '/ed/compare/roman-vs-rex-md', desc: 'Both are budget-friendly — which one comes out ahead?' },
  { title: 'Hims vs Roman vs Ro', href: '/ed/compare/hims-vs-roman-vs-ro', desc: 'Three-way comparison across the most popular platforms.' },
]

const guides = [
  { title: 'What Is Tadalafil?', href: '/ed/guide/what-is-tadalafil', desc: 'How generic Cialis works, dosing, and what to expect.' },
  { title: 'Tadalafil vs Sildenafil', href: '/ed/guide/tadalafil-vs-sildenafil', desc: 'Which ED medication is right for you?' },
  { title: 'How Does Cialis Work?', href: '/ed/guide/how-does-cialis-work', desc: 'Mechanism, onset, and duration explained.' },
  { title: 'Is Hims Worth It?', href: '/ed/guide/is-hims-worth-it', desc: 'Honest verdict for ED, hair loss, and weight loss.' },
  { title: 'Hims ED Pricing', href: '/ed/guide/hims-pricing', desc: 'Full breakdown of what Hims actually charges.' },
  { title: 'Ro ED Pricing', href: '/ed/guide/ro-ed-pricing', desc: 'What Ro charges for ED medication in 2026.' },
]

const bestPicks = [
  { title: 'Cheapest Tadalafil Online', href: '/ed/best/cheapest-tadalafil', desc: 'Lowest prices for generic Cialis across every major platform.' },
  { title: 'Fastest ED Medication Delivery', href: '/ed/best/fastest-delivery', desc: 'Which platforms ship same-day or next-day?' },
]

const reviews = [
  { title: 'Hims Review', href: '/ed/reviews/hims', desc: 'Pricing, experience, and who Hims is actually best for.' },
  { title: 'Roman Review', href: '/ed/reviews/roman', desc: 'Our top overall pick — full breakdown.' },
  { title: 'Ro Review', href: '/ed/reviews/ro', desc: 'ED and weight loss combined — is Ro worth it?' },
  { title: 'Rex MD Review', href: '/ed/reviews/rex-md', desc: 'Cheapest option tested — what are the tradeoffs?' },
]

export default function EDPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Disclosure */}
        <AffiliateDisclosure />

        {/* Hero */}
        <div className="mt-8 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-3">
            Updated April 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] leading-tight mb-4 text-balance">
            Online ED Treatment: Compare Every Major Platform
          </h1>
          <p className="text-lg text-[#4A4A4C] leading-relaxed mb-6 max-w-2xl">
            Generic tadalafil and sildenafil are available online without a video call from several licensed US platforms. Prices and flexibility vary. This page helps you find the right one.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ed/quiz" className="btn-primary">
              Find my best match →
            </Link>
            <Link href="#compare" className="btn-secondary">
              See comparison table
            </Link>
          </div>
        </div>

        {/* Top 3 affiliate cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {topThree.map((program, i) => (
            <Suspense key={program.id} fallback={null}>
              <AffiliateCard
                program={program}
                position={i === 0 ? 'primary' : 'secondary'}
                concern="ed"
                index={i}
              />
            </Suspense>
          ))}
        </div>

        {/* Methodology — short, near top */}
        <p className="text-xs text-[#8A8A8C] mb-12 leading-relaxed">
          Rankings are based on pricing, medication selection, consultation quality, and flexibility. No brand has paid to appear first or reviewed this page before publication.{' '}
          <Link href="/about" className="underline hover:text-[#5B7A5F] transition-colors">
            About our methodology
          </Link>
        </p>

        {/* Section 1: Comparison table */}
        <section id="compare" className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">All platforms compared</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">Prices are for generic tadalafil or sildenafil. No platform on this list accepts insurance.</p>
          <Suspense fallback={null}>
            <ComparisonTable programs={edPrograms} highlightId="roman" />
          </Suspense>
        </section>

        {/* Section 2: Versus page cards */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">Side-by-side comparisons</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">Already narrowed it down to two? These pages go deeper.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comparisons.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-4 bg-white border border-[#E8E7E3] rounded-[12px] hover:border-[#5B7A5F] hover:shadow-sm transition-all group"
              >
                <span className="font-semibold text-[#1C1C1E] block mb-1 group-hover:text-[#5B7A5F] transition-colors">
                  {item.title} →
                </span>
                <span className="text-sm text-[#8A8A8C]">{item.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: Review cards */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">Platform reviews</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">One platform in mind? Read the full review before you commit.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reviews.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-4 bg-white border border-[#E8E7E3] rounded-[12px] hover:border-[#5B7A5F] hover:shadow-sm transition-all group"
              >
                <span className="font-semibold text-[#1C1C1E] block mb-1 group-hover:text-[#5B7A5F] transition-colors">
                  {item.title} →
                </span>
                <span className="text-sm text-[#8A8A8C]">{item.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 4: Guides */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">ED guides</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">Learn about medications, pricing, and what to expect.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guides.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-4 bg-white border border-[#E8E7E3] rounded-[12px] hover:border-[#5B7A5F] hover:shadow-sm transition-all group"
              >
                <span className="font-semibold text-[#1C1C1E] block mb-1 group-hover:text-[#5B7A5F] transition-colors">
                  {item.title} →
                </span>
                <span className="text-sm text-[#8A8A8C]">{item.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 5: Best picks */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">Best picks</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">Shopping for a specific priority?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bestPicks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-4 bg-white border border-[#E8E7E3] rounded-[12px] hover:border-[#5B7A5F] hover:shadow-sm transition-all group"
              >
                <span className="font-semibold text-[#1C1C1E] block mb-1 group-hover:text-[#5B7A5F] transition-colors">
                  {item.title} →
                </span>
                <span className="text-sm text-[#8A8A8C]">{item.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-5">Common questions</h2>
          <Suspense fallback={null}>
            <FAQAccordion faqs={faqs} />
          </Suspense>
        </section>

        {/* Footer CTA — top 3 again */}
        <section className="border-t border-[#E8E7E3] pt-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-2">Ready to get started?</h2>
          <p className="text-sm text-[#8A8A8C] mb-6">
            Not sure which fits your situation?{' '}
            <Link href="/ed/quiz" className="text-[#5B7A5F] underline hover:text-[#4A6950] transition-colors">
              Take the 3-minute quiz
            </Link>{' '}
            for a personalised match.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topThree.map((program, i) => (
              <Suspense key={program.id} fallback={null}>
                <AffiliateCard
                  program={program}
                  position={i === 0 ? 'primary' : 'secondary'}
                  concern="ed"
                  index={i}
                />
              </Suspense>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  )
}
