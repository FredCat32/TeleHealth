import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import AffiliateCard from '@/components/AffiliateCard'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'
import { affiliatePrograms, getProgramsByIds } from '@/lib/affiliates'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'GLP-1 Weight Loss Programs 2026: Compare Semaglutide & Tirzepatide Online',
  description:
    'Compare the best online GLP-1 weight loss programs. Ro Body starts at $39/month + medication. Hers starts at $165/month all-in. Find the right semaglutide or tirzepatide program for your situation.',
}

const glp1Programs = affiliatePrograms.filter((p) => p.concerns.includes('weightloss'))
const topTwo = getProgramsByIds(['ro', 'hers'])

const faqs = [
  {
    question: 'What is a GLP-1 medication?',
    answer:
      'GLP-1 (glucagon-like peptide-1) receptor agonists are a class of medications originally developed for type 2 diabetes that were found to cause significant weight loss. Semaglutide (the active ingredient in Ozempic and Wegovy) and tirzepatide (Mounjaro and Zepbound) are the most widely used. They work by reducing appetite and slowing digestion. All require a prescription from a licensed provider.',
  },
  {
    question: 'How much does GLP-1 treatment cost online?',
    answer:
      'Compounded semaglutide through telehealth platforms typically costs $165–$450/month depending on the provider and your dose. Hers starts at $165/month (annual plan, all-in). Ro Body charges $149/month membership plus medication at ~$299/month for compounded semaglutide. Brand-name GLP-1s like Wegovy can cost $900–$1,700/month without insurance.',
  },
  {
    question: 'Is compounded semaglutide safe?',
    answer:
      'Compounded semaglutide is available through licensed US compounding pharmacies and is prescribed by licensed physicians. It contains the same active ingredient as brand-name Wegovy and Ozempic. The FDA has noted concerns about non-pharmacy compounded products — the platforms on this site use licensed compounding pharmacies, which is the standard for telehealth GLP-1 programs.',
  },
  {
    question: 'Do I need a video appointment to get GLP-1 medication online?',
    answer:
      'No. Both Ro Body and Hers use asynchronous consultations — you complete a health intake form that is reviewed by a licensed physician. No video call or scheduled appointment is required for most patients.',
  },
  {
    question: 'What is the difference between semaglutide and tirzepatide?',
    answer:
      'Semaglutide (Ozempic, Wegovy) targets one receptor (GLP-1). Tirzepatide (Mounjaro, Zepbound) targets two receptors (GLP-1 and GIP), which clinical trials suggest produces greater average weight loss. Tirzepatide is typically more expensive. Both are injectables. Your provider will recommend the right option based on your health history and goals.',
  },
]

const faqSchemaData = faqSchema(faqs)

const comparisons = [
  { title: 'Ro Body vs Hers', href: '/glp1/compare/ro-vs-hers', desc: 'Pricing, medication options, and clinical support compared.' },
]

const reviews = [
  { title: 'Ro Body Review', href: '/glp1/reviews/ro', desc: 'Structured GLP-1 program with coaching. Best for serious clinical support.' },
  { title: 'Hers Weight Loss Review', href: '/glp1/reviews/hers', desc: 'Best value for women. Includes oral GLP-1 options from $69/month.' },
]

const guides = [
  { title: 'Oral vs Injectable GLP-1', href: '/glp1/guide/oral-vs-injection', desc: 'Which format is right for you — pills or injections?' },
]

export default function GLP1Page() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        <AffiliateDisclosure />

        <div className="mt-8 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-3">
            Updated April 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] leading-tight mb-4 text-balance">
            GLP-1 Weight Loss Programs: Compare Online Providers
          </h1>
          <p className="text-lg text-[#4A4A4C] leading-relaxed mb-6 max-w-2xl">
            Semaglutide and tirzepatide are available online through licensed telehealth providers — no in-person visit required. Prices and program structure vary significantly. This page helps you find the right one.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/glp1/quiz" className="btn-primary">
              Find my best match →
            </Link>
            <Link href="#compare" className="btn-secondary">
              See comparison
            </Link>
          </div>
        </div>

        {/* Top provider cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {topTwo.map((program, i) => (
            <Suspense key={program.id} fallback={null}>
              <AffiliateCard
                program={program}
                position={i === 0 ? 'primary' : 'secondary'}
                concern="weightloss"
                index={i}
              />
            </Suspense>
          ))}
        </div>

        <p className="text-xs text-[#8A8A8C] mb-12 leading-relaxed">
          Rankings based on pricing, medication selection, clinical quality, and support. No brand has paid to appear first or reviewed this page before publication.{' '}
          <Link href="/about" className="underline hover:text-[#5B7A5F] transition-colors">
            About our methodology
          </Link>
        </p>

        {/* Quick price comparison */}
        <section id="compare" className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">At a glance</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">All-in monthly estimates at starter doses. Prices increase at higher doses.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Provider</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Starting price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Oral option</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Available to</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hers', 'From $165/month (annual)', 'Yes — from $69/month', 'Women only'],
                  ['Ro Body', 'From $448/month (membership + medication)', 'No', 'Men & women'],
                ].map(([provider, price, oral, gender], i) => (
                  <tr key={provider} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{provider}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{oral}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparisons */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">Side-by-side comparisons</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">Narrowed it down to two? These pages go deeper.</p>
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

        {/* Reviews */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">Provider reviews</h2>
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

        {/* Guides */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-1">GLP-1 guides</h2>
          <p className="text-sm text-[#8A8A8C] mb-5">Not sure which medication or format is right for you?</p>
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

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-5">Common questions</h2>
          <Suspense fallback={null}>
            <FAQAccordion faqs={faqs} />
          </Suspense>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-[#E8E7E3] pt-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-2">Ready to get started?</h2>
          <p className="text-sm text-[#8A8A8C] mb-6">
            Not sure which fits your situation?{' '}
            <Link href="/glp1/quiz" className="text-[#5B7A5F] underline hover:text-[#4A6950] transition-colors">
              Take the 3-minute quiz
            </Link>{' '}
            for a personalised match.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topTwo.map((program, i) => (
              <Suspense key={program.id} fallback={null}>
                <AffiliateCard
                  program={program}
                  position={i === 0 ? 'primary' : 'secondary'}
                  concern="weightloss"
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
