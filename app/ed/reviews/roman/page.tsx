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
  title: 'Roman Review 2026: Pricing, ED Medication & Is It Worth It?',
  description:
    "In-depth Roman review covering exact pricing, medication options, how the consultation works, and who Roman is (and isn't) best for in 2026.",
}

const programs = getProgramsByIds(['roman'])

const faqs = [
  {
    question: 'Is Roman a legitimate telehealth platform?',
    answer:
      "Yes. Roman (operated by Ro) is a US-based telehealth company founded in 2017. It employs licensed physicians across all 50 states and fulfils prescriptions through licensed US pharmacies. It is one of the most established men's telehealth platforms in the country and has served millions of patients.",
  },
  {
    question: 'How much does Roman ED treatment cost?',
    answer:
      'Generic sildenafil or tadalafil starts at around $22/month for a 6-dose supply. Roman does not require a subscription — you can order as needed at the same price. This makes it more flexible and cheaper over time than Hims, which requires a subscription for equivalent pricing. Roman does not accept insurance.',
  },
  {
    question: 'Does Roman require a video call for ED treatment?',
    answer:
      'No. Roman uses an asynchronous consultation — you complete an online medical questionnaire and a licensed US physician reviews it, typically within a few hours. There is no scheduled video call or in-person appointment required.',
  },
  {
    question: 'How long does Roman take to deliver?',
    answer:
      'Roman offers free 2-day shipping on ED medication orders. Once your prescription is approved your order typically ships within one business day. All packaging is discreet and unmarked with no indication of the contents.',
  },
  {
    question: 'Can I order from Roman without a subscription?',
    answer:
      "Yes — this is one of Roman's key advantages over Hims. You can place a one-time order at the same per-unit price as a recurring subscription. If you want automatic monthly refills you can set that up, but it is never required to access Roman's standard pricing.",
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'best-for', label: "Who it's best for" },
  { id: 'pros-cons', label: 'Pros & cons' },
  { id: 'alternatives', label: 'How Roman compares' },
  { id: 'faq', label: 'FAQ' },
]

const subScores = [
  { label: 'Pricing', score: 4.8, note: 'Lowest price, no subscription required' },
  { label: 'Medication variety', score: 4.0, note: 'Core generics covered, fewer formats than Hims' },
  { label: 'Consultation', score: 4.6, note: 'Fast async, same-day treatment plans' },
  { label: 'Customer experience', score: 4.2, note: 'Clean app, free 2-day shipping' },
  { label: 'Bundle value', score: 3.5, note: 'Limited bundling vs Hims' },
]

export default function RomanReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Roman Review 2026: Pricing, ED Medication & Is It Worth It?"
        description="Our in-depth review of Roman for ED treatment — exact pricing, medication options, the consultation process, and an honest take on who should and shouldn't use it."
        publishDate="2025-01-20"
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
              <RatingStars rating={4.4} showNumber={true} />
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-[#E8E7E3]" />
            <p className="text-sm text-[#4A4A4C] leading-relaxed max-w-sm">
              Our top overall pick for ED treatment. Best pricing, no subscription required,
              free 2-day shipping. Narrower medication range than Hims but better value for most men.
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
          <CTABlock programs={programs} concern="ed" title="Get started with Roman" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> Men who want the lowest price for generic ED medication with no subscription commitment.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> You want to bundle ED with hair loss or need chewable formats — Hims is better for that.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> Best overall value for most men. Cheaper than Hims, faster shipping, no subscription lock-in.</span>
            </li>
          </ul>
        </section>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Roman launched in 2017 as a men's health telehealth platform focused on ED, hair loss, and testosterone. It operates under the Ro umbrella — the same company behind Rory (women's health) and the Ro Body weight loss program — but the Roman brand remains dedicated to men's health.
          </p>
          <p className="leading-relaxed mb-4">
            Roman's core pitch is straightforward: lowest price for generic tadalafil and sildenafil, no subscription required, free 2-day delivery on every order. The clinical process is fully asynchronous — no video call, no in-person appointment.
          </p>
          <p className="leading-relaxed">
            Where Roman falls short is range. It does not offer chewable formats or the breadth of bundle options that Hims does. If you want standard generic medication at the best price with the fastest delivery, Roman is the right call. If medication format variety or multi-condition bundling matters, Hims has the edge.
          </p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Roman is the most transparent on pricing of the major platforms. No subscription tiers, no promotional first-order discounts that expire. The price you see is what you pay every time.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Subscription?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generic sildenafil (25mg, as-needed)', 'From $4/dose', 'No'],
                  ['Generic tadalafil (as-needed)', 'From $4/dose', 'No'],
                  ['Daily tadalafil (30 doses)', '~$39/month', 'No'],
                  ['Entry plan', 'From $16/month', 'No — starter quantity'],
                  ['Shipping', 'Free 2-day', 'Every order'],
                ].map(([med, price, sub], i) => (
                  <tr key={med} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{med}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#5B7A5F] font-medium">{sub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            The no-subscription model is the real differentiator. Hims requires a subscription to access its lowest per-dose rate — without one, individual Hims orders cost significantly more. Roman charges the same per-dose price whether you order once or set up a monthly refill.
          </p>
          <p className="leading-relaxed">
            Roman also includes free 2-day shipping on every order. All prices above are estimates — pricing changes regularly, so verify on Roman's site before ordering.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Create an account', desc: 'Sign up on getroman.com. Takes about 2 minutes.' },
              { step: '2', title: 'Complete the health questionnaire', desc: 'Answer questions about your health history, current medications, and symptoms. A licensed US physician reviews your responses — no video call required.' },
              { step: '3', title: 'Same-day treatment plan', desc: 'Roman advertises same-day treatment plans. Most prescriptions are reviewed and approved within a few hours during business hours.' },
              { step: '4', title: 'Free 2-day shipping', desc: 'Your prescription ships from a licensed pharmacy within one business day. Free 2-day delivery on every order. Packaging is discreet and unmarked.' },
              { step: '5', title: 'Ongoing care', desc: 'Message your care team via the Roman app for dosage changes, medication switches, or follow-up questions.' },
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
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Roman if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the lowest price for generic ED medication</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Don't want a subscription commitment</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want free fast shipping on every order</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are considering testosterone treatment alongside ED</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Prefer a simple, straightforward experience</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want to bundle ED with hair loss treatment</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want chewable or non-standard medication formats</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want the absolute lowest price (Rex MD starts at $19)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Need insurance coverage</li>
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
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Lowest price for standard generic ED medication</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No subscription required</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Free 2-day shipping on every order</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Same-day treatment plans</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No video call required</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Testosterone treatment available alongside ED</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>No chewable or branded medication formats</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Limited bundle options compared to Hims</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Brand experience less polished than Hims</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Does not accept insurance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How Roman Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">
            Roman is our top overall pick but not the right fit for everyone.
          </p>
          <div className="space-y-3">
            {[
              {
                condition: 'If you want bundle options or chewables',
                text: "Hims offers ED + hair loss bundles and chewable medication formats. If you're treating multiple conditions, Hims can work out cheaper overall.",
                href: '/ed/compare/hims-vs-roman',
                label: 'Hims vs Roman →',
              },
              {
                condition: 'If you want the absolute lowest price',
                text: "Rex MD starts at $19/month — $3 less than Roman. No subscription, just generic ED medication at the lowest price we've found.",
                href: '/ed/compare/roman-vs-rex-md',
                label: 'Roman vs Rex MD →',
              },
              {
                condition: "If you want comprehensive men's and women's health",
                text: "Ro (Roman's parent platform) covers weight loss, women's health, and more. Worth considering if your needs extend beyond ED.",
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
            <CTABlock programs={programs} concern="ed" title="Get started with Roman" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
