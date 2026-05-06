import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import ComparisonTable from '@/components/ComparisonTable'
import CTABlock from '@/components/CTABlock'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/ed/compare/hims-vs-roman' },
  title: 'Hims vs Roman 2026: Which ED Telehealth Service Is Better?',
  description:
    'Independent side-by-side comparison of Hims and Roman for ED treatment. We cover pricing, medication options, how the consultation works, and which is better for your situation.',
}

const programs = getProgramsByIds(['hims', 'roman'])

const faqs = [
  {
    question: 'Is Hims or Roman cheaper for ED medication?',
    answer:
      'Roman is generally cheaper at baseline. Roman starts at around $22/month for generic tadalafil vs Hims at $25/month. However, Hims subscription pricing can close that gap if you commit to a longer plan. If you want flexibility with no subscription commitment, Roman wins on price.',
  },
  {
    question: 'Do Hims and Roman require a video call?',
    answer:
      'Neither platform requires a video call for ED treatment. Both use asynchronous consultations — you fill out a detailed medical questionnaire, a licensed US physician reviews it, and issues a prescription if appropriate. The whole process is handled online without scheduling a live appointment.',
  },
  {
    question: 'Which ships faster — Hims or Roman?',
    answer:
      'Both ship within 3–5 business days via USPS. Roman advertises same-day treatment plans, meaning the prescription decision is fast — but actual delivery timelines are similar. Neither offers guaranteed next-day delivery.',
  },
  {
    question: 'Can I get tadalafil and sildenafil from both Hims and Roman?',
    answer:
      'Yes. Both platforms offer generic tadalafil (generic Cialis) and generic sildenafil (generic Viagra). Roman also offers daily low-dose tadalafil, which some men prefer over on-demand dosing. Hims additionally offers branded formats and chewable versions.',
  },
  {
    question: 'What happens if the medication does not work for me?',
    answer:
      'Both platforms offer follow-up messaging with your prescribing doctor to adjust dosage or switch medications. Roman has a stated satisfaction policy. Hims offers ongoing care team access. Neither has a formal money-back guarantee for the medication itself, but both will work with you to find an alternative.',
  },
  {
    question: 'Does Hims or Roman accept insurance?',
    answer:
      'Neither Hims nor Roman accepts insurance for ED medication. Both operate on a cash-pay model. The prices shown are what you pay out of pocket.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'methodology', label: 'How we compare' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'medications', label: 'Medications' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'pros-cons', label: 'Pros & cons' },
  { id: 'who-should-choose', label: 'Who should choose each' },
  { id: 'verdict', label: 'Our verdict' },
  { id: 'faq', label: 'FAQ' },
]

export default function HimsVsRomanPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Hims vs Roman 2026: Which ED Telehealth Service Is Better?"
        description="An independent side-by-side comparison of Hims and Roman. We cover pricing, medication options, consultation experience, and which platform is the better fit depending on what you need."
        publishDate="2025-02-01"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        {/* CTA above fold */}
        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare Hims and Roman" />
        </Suspense>

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For lowest price with no commitment:</strong> Roman. Cheaper baseline, no subscription required.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For bundling with hair loss or mental health:</strong> Hims. The bundle value is genuine and the brand experience is more polished.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For most men choosing between the two:</strong> Roman. Slightly better value, equally good clinical process.</span>
            </li>
          </ul>
        </section>

        {/* Methodology statement */}
        <section id="methodology" className="my-8 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">How we compare these platforms</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            This comparison is independent. No brand has paid to appear first, reviewed this article before publication, or influenced our scoring. We rank platforms on a set of weighted criteria: medication pricing, subscription flexibility, medication selection, consultation process, and user experience. Where we earn a commission is through affiliate links — disclosed at the top of this page — but commission rates do not affect rankings. Roman ranks higher here because it scores higher on our criteria, not because it pays more.
          </p>
        </section>

        {/* Overview */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Hims and Roman are two of the most searched names in online ED treatment, and for good reason — both have been operating since 2017, both are US-based telehealth platforms with licensed physicians, and both will deliver generic tadalafil or sildenafil to your door without a video call.
          </p>
          <p className="leading-relaxed mb-4">
            The differences between them are real but not dramatic. This comparison is most useful if you have already decided you want one of these two platforms and need help choosing. If you are still deciding between online ED treatment and a traditional doctor, the question is different.
          </p>
          <p className="leading-relaxed mb-4">
            The short version: Roman is the better choice for most men on price and flexibility grounds. Hims is worth paying slightly more for if you want to bundle ED treatment with hair loss or mental health services, or if you care about the brand experience.
          </p>
        </section>

        {/* Comparison table */}
        <div className="my-8">
          <Suspense fallback={null}>
            <ComparisonTable programs={programs} highlightId="roman" />
          </Suspense>
        </div>

        {/* Pricing */}
        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing Comparison</h2>
          <p className="leading-relaxed mb-6">
            Pricing in online ED telehealth is messier than the headline numbers suggest. Both platforms use subscription tiers, promotional first-order pricing, and per-pill pricing that varies by quantity. Here is a cleaner breakdown.
          </p>

          {/* Inline pricing table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] rounded-tl-[8px]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Hims</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Roman</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Generic sildenafil (per dose)</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">From $2/dose (subscription); ~$36/mo for 6</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]"><strong>From $4/dose, no sub required</strong></td>
                </tr>
                <tr className="bg-[#F7F4EF]">
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Generic tadalafil (per dose, as-needed)</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">~$4–8/dose</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]"><strong>From $4/dose</strong></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Daily tadalafil (monthly)</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">From ~$40/month</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]">~$39/month</td>
                </tr>
                <tr className="bg-[#F7F4EF]">
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Subscription required?</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">Yes for lowest rate</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]"><strong>No — same price either way</strong></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Shipping</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">Free standard</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]">Free 2-day</td>
                </tr>
                <tr className="bg-[#F7F4EF]">
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Consultation fee</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">Included</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]">Included</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            The per-dose picture is nuanced. Hims sildenafil starts at $2/dose on subscription — cheaper per dose than Roman's $4/dose — but requires a subscription commitment to access that rate. Without a subscription, Hims costs significantly more per order. Roman charges the same $4/dose whether you subscribe or order once. For tadalafil, Roman's from $4/dose is competitive with or cheaper than Hims's $4–8/dose range. All prices are estimates — verify before ordering.
          </p>
          <p className="leading-relaxed">
            <strong>Pricing winner: depends on usage.</strong> High-volume subscription users may find Hims sildenafil cheaper per dose. For flexibility, tadalafil, or occasional ordering, Roman wins. Roman also includes free 2-day shipping on every order.
          </p>
        </section>

        {/* Medications */}
        <section id="medications">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Medication Options</h2>
          <p className="leading-relaxed mb-4">
            Both platforms prescribe the same core medications — generic tadalafil and generic sildenafil, which are the generics of Cialis and Viagra respectively. These are FDA-approved, identical in active ingredient to the branded versions, and significantly cheaper.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Hims</strong> has expanded its ED medication range to include chewable formats and branded medication options for men who want them, at higher price points. The chewable formats are popular because they can work slightly faster than standard pills.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Roman</strong> keeps its medication list simpler — generic tadalafil, generic sildenafil, daily low-dose tadalafil. No frills, just the core medications at the best price. Roman also offers combination ED + testosterone products for men whose ED has a hormonal component.
          </p>
          <p className="leading-relaxed">
            <strong>Medications winner: Hims</strong> on variety (especially for men who want alternatives to standard pills). <strong>Roman</strong> if you just want generic medication at the lowest price.
          </p>
        </section>

        {/* How it works */}
        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How the Consultation Works</h2>
          <p className="leading-relaxed mb-4">
            The clinical process is nearly identical between the two platforms. Both use asynchronous consultations — there is no live video call or scheduled appointment. You complete a detailed medical questionnaire covering your health history, current medications, and symptoms. A licensed US physician reviews it and either issues a prescription or follows up with questions.
          </p>
          <p className="leading-relaxed mb-4">
            Approval typically takes a few hours during business hours. Once approved, the prescription goes to a compounding or partner pharmacy and ships directly to you in unmarked packaging.
          </p>
          <p className="leading-relaxed mb-4">
            Both platforms give you access to your care team via messaging for follow-up questions, dosage adjustments, or medication switches. Neither offers 24/7 urgent care.
          </p>
          <p className="leading-relaxed">
            <strong>Consultation process: essentially equal.</strong> Roman claims faster treatment plan turnaround (same day vs a few hours for Hims), but in practice both are fast.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#F4F0E9] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Still deciding?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Not sure if Hims or Roman is the right fit — or whether there&apos;s a better option for your specific situation? Answer 3 quick questions and get a personalised match.
          </p>
          <Link
            href="/ed/quiz"
            className="btn-primary inline-flex"
          >
            Find my best match →
          </Link>
        </div>

        {/* Pros & Cons */}
        <section id="pros-cons">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-6">Pros and Cons</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">

            {/* Hims */}
            <div className="card p-5">
              <h3 className="font-bold text-lg mb-4 text-[#1C1C1E]">Hims</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-2">Pros</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2 mb-4">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Bundle ED with hair loss, skin, or mental health</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Chewable and branded medication options</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Polished brand experience and app</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Broad product range beyond ED</li>
              </ul>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-2">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Subscription required for best pricing</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Slightly higher baseline cost</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Product range can feel overwhelming</li>
              </ul>
            </div>

            {/* Roman — winner */}
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-lg text-[#1C1C1E]">Roman</h3>
                <span className="text-xs font-semibold bg-[#5B7A5F] text-white px-2 py-0.5 rounded-[6px]">Our pick</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-2">Pros</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2 mb-4">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Lower starting price</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No subscription required — pay as needed</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Free 2-day shipping</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Same-day treatment plans</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Testosterone + ED combination options</li>
              </ul>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-2">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Less bundle variety than Hims</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Brand experience less polished</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Who should choose each */}
        <section id="who-should-choose">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-6">Who Should Choose Each</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Hims if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Also want hair loss or mental health treatment in one place</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want chewable or branded medication options</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Prefer a subscription model with predictable delivery</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Value a polished brand and app experience</li>
              </ul>
            </div>
            <div className="card p-5 border-[#D4E4D5]">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Roman if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want the lowest price for generic ED medication</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Don&apos;t want to commit to a subscription</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want fast, no-fuss access to standard generics</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Are considering testosterone treatment alongside ED</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section id="verdict">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Our Verdict</h2>
          <p className="leading-relaxed mb-4">
            For most men choosing between Hims and Roman, <strong>Roman is the better choice.</strong> The lower starting price, no-subscription flexibility, and free 2-day shipping add up to a meaningfully better value proposition for the same core clinical service.
          </p>
          <p className="leading-relaxed mb-4">
            The clinical quality is equivalent — both use licensed US physicians, both ship FDA-approved generic medication, both offer async consultations with follow-up access. You are not giving up anything medically by choosing the cheaper option.
          </p>
          <p className="leading-relaxed mb-6">
            <strong>Choose Hims instead</strong> if you want to bundle ED treatment with hair loss or another condition, or if you specifically want chewable medication formats. The bundle value is genuine and if you were going to pay for hair loss treatment separately anyway, Hims can come out cheaper overall.
          </p>

          {/* Verdict CTA */}
          <div className="p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Not sure Roman is the right fit for your situation?</p>
            <p className="text-sm text-[#4A4A4C] mb-4">
              Answer 3 questions about your priorities — price, flexibility, bundling — and get a personalised recommendation across all ED platforms we track, not just these two.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ed/quiz" className="btn-primary">
                Get my personalised match
              </Link>
              <Link href="/go/roman"
                rel="nofollow sponsored" className="btn-secondary">
                Get started with Roman
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">
            Frequently Asked Questions
          </h2>
          <Suspense fallback={null}>
            <FAQAccordion faqs={faqs} />
          </Suspense>
        </section>

        {/* End CTA */}
        <div className="mt-10">
          <Suspense fallback={null}>
            <CTABlock programs={programs} concern="ed" title="Ready to get started?" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
