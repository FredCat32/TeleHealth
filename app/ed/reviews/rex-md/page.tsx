import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import RatingStars from '@/components/RatingStars'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: 'Rex MD Review 2026: Cheapest ED Medication Online?',
  description:
    "In-depth Rex MD review covering exact pricing, medication options, how the consultation works, and whether the cheapest option is worth it in 2026.",
}

const programs = getProgramsByIds(['rexmd'])

const faqs = [
  {
    question: 'Is Rex MD a legitimate telehealth platform?',
    answer:
      'Yes. Rex MD is a US-based telehealth platform that has been operating since 2019. It employs licensed US physicians and dispenses FDA-approved medications through licensed US pharmacies. It is smaller and less well-known than Hims or Roman but operates under the same regulatory framework.',
  },
  {
    question: 'How much does Rex MD ED treatment cost?',
    answer:
      'Rex MD starts at around $19/month for generic sildenafil or tadalafil — the lowest price we have found among the major ED telehealth platforms. There is no subscription required. Individual orders are priced the same as recurring orders, so you can order once without paying a premium. Rex MD does not accept insurance.',
  },
  {
    question: 'Does Rex MD require a video call for ED treatment?',
    answer:
      'No. Rex MD uses an asynchronous consultation — you complete an online health questionnaire and a licensed physician reviews it. No video call or in-person appointment is required. The process is similar to Roman and Hims.',
  },
  {
    question: 'What is the catch with Rex MD being so cheap?',
    answer:
      'The main tradeoff is breadth. Rex MD focuses almost exclusively on ED — it does not offer hair loss bundling, chewable medication formats, weight loss programs, or the broader platform features of Hims or Roman. The app and brand experience are also more basic. If you want a no-frills service at the lowest possible price, that is exactly what Rex MD delivers. If you want more than that, look elsewhere.',
  },
  {
    question: 'How does Rex MD shipping compare to other platforms?',
    answer:
      'Rex MD ships via USPS in discreet, unmarked packaging. Standard delivery takes 3–5 business days. Unlike Roman, Rex MD does not offer free 2-day shipping as standard — expedited shipping is available at extra cost. For most men this is not a deciding factor, but if fast delivery matters, Roman has the edge.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'best-for', label: "Who it's best for" },
  { id: 'pros-cons', label: 'Pros & cons' },
  { id: 'alternatives', label: 'How Rex MD compares' },
  { id: 'faq', label: 'FAQ' },
]

const subScores = [
  { label: 'Pricing', score: 5.0, note: 'Lowest price of any major ED platform' },
  { label: 'Medication variety', score: 3.2, note: 'Core generics only, no chewables or bundles' },
  { label: 'Consultation', score: 4.2, note: 'Standard async process, straightforward' },
  { label: 'Customer experience', score: 3.6, note: 'Basic app, no 2-day shipping standard' },
  { label: 'Bundle value', score: 2.5, note: 'ED-only platform, no bundling available' },
]

export default function RexMDReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Rex MD Review 2026: Cheapest ED Medication Online?"
        description="Our in-depth review of Rex MD — the cheapest ED telehealth option we've tested. We cover exact pricing, what you give up, and who it's the right fit for."
        publishDate="2025-02-15"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >
        {/* Rating block */}
        <div className="mb-6 p-5 bg-[#F7F4EF] rounded-[12px] border border-[#E8E7E3]">
          <div className="flex flex-wrap items-start gap-6 mb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-1">
                TreatCompare Rating
              </p>
              <RatingStars rating={3.9} showNumber={true} />
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-[#E8E7E3]" />
            <p className="text-sm text-[#4A4A4C] leading-relaxed max-w-sm">
              Best-in-class on price — nothing else comes close at $19/month. Limited platform
              breadth keeps the overall rating lower, but if price is the only factor, Rex MD wins.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subScores.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-28 shrink-0">
                  <p className="text-xs font-semibold text-[#1C1C1E]">{item.label}</p>
                  <p className="text-xs text-[#8A8A8C]">{item.note}</p>
                </div>
                <div className="flex-1 h-1.5 bg-[#E8E7E3] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#5B7A5F] rounded-full"
                    style={{ width: `${(item.score / 5) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-[#1C1C1E] w-6 text-right">
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Get started with Rex MD" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> Men who want generic ED medication at the lowest possible price and don't need anything else from their telehealth platform.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> You want bundling, chewable formats, fast 2-day shipping, or a polished app experience.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> Does exactly one thing — cheap generic ED medication. If that's all you need, it's hard to argue with $19/month.</span>
            </li>
          </ul>
        </section>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Rex MD launched in 2019 with a single focus: make ED medication as cheap and accessible as possible. It does not try to be a comprehensive men's health platform. There is no hair loss bundling, no weight loss program, no chewable formats, no mental health offering. Just generic tadalafil and sildenafil at the lowest price in the market.
          </p>
          <p className="leading-relaxed mb-4">
            At from $2/dose for generic sildenafil, Rex MD is the lowest per-dose price we have found — cheaper than Roman (from $4/dose) and Hims on comparable generics. The gap per dose is real, though at typical usage quantities the monthly difference is moderate. What compounds the advantage is that no subscription is required, so you are not locked in to get that rate.
          </p>
          <p className="leading-relaxed">
            The honest tradeoff: Rex MD's app and overall experience are more basic than Roman or Hims. Shipping is standard USPS rather than the free 2-day delivery Roman offers. Customer service is the area where Rex MD draws the most criticism in independent reviews — recurring themes include slow response times and difficulty with refunds. We recommend checking recent reviews on independent platforms before ordering.
          </p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Rex MD's pricing is simple — no tiers, no subscription discounts, no promotional first-order pricing that expires after month one.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Rex MD</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Roman</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Hims</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generic sildenafil (per dose)', 'From $2/dose', 'From $4/dose', 'From $2/dose (sub)'],
                  ['Generic tadalafil (per dose)', 'From $2/dose', 'From $4/dose', '~$4–8/dose'],
                  ['Daily tadalafil', 'Not offered', '~$39/month', 'From ~$40/month'],
                  ['Subscription required?', 'No', 'No', 'Yes (for best rate)'],
                  ['Free fast shipping?', 'No', '2-day free', 'No'],
                ].map(([med, rex, roman, hims], i) => (
                  <tr key={med} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{med}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-semibold text-[#2D5A35]">{rex}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{roman}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{hims}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            Rex MD wins on per-dose price. At from $2/dose versus Roman's from $4/dose, the gap is meaningful at volume. Hims requires a subscription to access its lowest rate — Rex MD never does.
          </p>
          <p className="leading-relaxed">
            Where Rex MD loses on value: no free 2-day shipping. If you add expedited delivery costs, the per-dose price advantage over Roman narrows. All prices above are estimates and change regularly — verify current pricing on Rex MD's website before ordering.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Create an account', desc: 'Sign up on rexmd.com. Simple signup, takes about 2 minutes.' },
              { step: '2', title: 'Complete the health questionnaire', desc: 'Answer questions about your health history, medications, and symptoms. A licensed US physician reviews your responses — no video call required.' },
              { step: '3', title: 'Prescription approval', desc: 'Most prescriptions are reviewed within a few hours during business hours. Rex MD\'s approval process is similar to Roman and Hims.' },
              { step: '4', title: 'Medication ships via USPS', desc: 'Standard shipping takes 3–5 business days. Discreet, unmarked packaging. Expedited shipping available at extra cost.' },
              { step: '5', title: 'Reorder as needed', desc: 'No subscription required. Reorder through the app or website whenever you need a refill at the same price.' },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-[#EEF4EE] border border-[#D4E4D5] text-[#5B7A5F] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-[#1C1C1E]">{item.title}</p>
                  <p className="text-sm text-[#4A4A4C] leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="best-for">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Who It&apos;s Best For</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Rex MD if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the absolute lowest price for generic ED medication</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Don't need anything beyond the medication itself</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Don't want a subscription</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are not in a rush and standard 3–5 day shipping is fine</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want free fast shipping (Roman has 2-day free)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want hair loss bundling or chewable formats</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want a more polished app and brand experience</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Need responsive customer service</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pros-cons">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Pros and Cons</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-3">Pros</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Lowest per-dose price we've found — from $2/dose</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No subscription required</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No video call required</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Licensed US physicians, FDA-approved medication</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Discreet packaging</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>No free fast shipping (Roman has 2-day free)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>ED-only platform — no bundling or extra services</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Basic app and brand experience</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Customer service has mixed independent reviews — slow responses and refund difficulties cited</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Does not accept insurance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How Rex MD Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">
            Rex MD wins on price and nothing else. Here is when to look elsewhere.
          </p>
          <div className="space-y-3">
            {[
              {
                condition: 'If fast shipping matters to you',
                text: "Roman is only $3/month more and includes free 2-day shipping on every order. If you ever need expedited delivery, the price gap with Rex MD disappears quickly.",
                href: '/ed/compare/roman-vs-rex-md',
                label: 'Roman vs Rex MD →',
              },
              {
                condition: 'If you want to bundle with hair loss',
                text: "Hims offers ED + hair loss combined plans that can be cheaper than treating both separately. Worth the slightly higher ED price if hair loss is also a concern.",
                href: '/ed/compare/hims-vs-roman',
                label: 'Hims vs Roman →',
              },
              {
                condition: "If you want weight loss alongside ED",
                text: "Ro is the only major platform that covers both GLP-1 weight loss and ED treatment. Rex MD offers neither weight loss nor any bundling.",
                href: '/ed/compare/hims-vs-ro',
                label: 'Hims vs Ro →',
              },
            ].map((item) => (
              <div key={item.href} className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-1">{item.condition}</p>
                  <p className="text-sm text-[#4A4A4C] leading-relaxed">{item.text}</p>
                </div>
                <Link href={item.href} className="btn-secondary text-sm whitespace-nowrap shrink-0">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Frequently Asked Questions</h2>
          <Suspense fallback={null}>
            <FAQAccordion faqs={faqs} />
          </Suspense>
        </section>

        <div className="mt-10">
          <Suspense fallback={null}>
            <CTABlock programs={programs} concern="ed" title="Get started with Rex MD" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
