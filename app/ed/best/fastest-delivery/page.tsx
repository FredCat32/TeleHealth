import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: 'Fastest ED Medication Delivery 2026: Which Platform Ships Quickest?',
  description:
    'Roman ships ED medication free in 2 business days on every order. We compared delivery times across Hims, Roman, Ro, and Rex MD so you know exactly what to expect.',
}

const programs = getProgramsByIds(['roman', 'hims', 'ro', 'rexmd'])

const faqs = [
  {
    question: 'Which ED platform delivers the fastest?',
    answer:
      'Roman. It offers free 2-day delivery on every order with no minimum purchase. Your prescription typically ships within one business day of approval, so most men receive their medication within 2 to 3 business days of completing the consultation. No other major ED platform consistently matches this on standard orders.',
  },
  {
    question: 'Does Hims offer express shipping for ED medication?',
    answer:
      'Hims offers standard shipping as part of its subscription. Expedited shipping is available for an additional fee. Unlike Roman, fast shipping is not included on every order by default. If delivery speed is a consistent priority, Roman is the better fit.',
  },
  {
    question: 'How long does Rex MD take to deliver?',
    answer:
      'Rex MD ships via standard USPS, which takes 3 to 5 business days. Expedited delivery options are available at extra cost. This is slower than Roman and costs more once you factor in the upgrade fee.',
  },
  {
    question: 'How long does the ED consultation take before my order ships?',
    answer:
      'Most platforms process consultations the same day during business hours. Roman advertises same-day treatment plans. Hims is similar. Rex MD typically processes within 24 hours. Once approved, your prescription goes to a licensed pharmacy and ships within one business day.',
  },
  {
    question: 'Is ED medication packaging discreet?',
    answer:
      'Yes, across all major platforms. Roman, Hims, Ro, and Rex MD all ship in plain, unmarked boxes with no indication of the contents. The sender name on the label does not reference the medication or the health category.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'comparison', label: 'Delivery speed comparison' },
  { id: 'roman', label: 'Roman' },
  { id: 'hims', label: 'Hims' },
  { id: 'ro', label: 'Ro' },
  { id: 'rex-md', label: 'Rex MD' },
  { id: 'when-speed-matters', label: 'When speed matters' },
  { id: 'verdict', label: 'Bottom line' },
  { id: 'faq', label: 'FAQ' },
]

export default function FastestDeliveryPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Fastest ED Medication Delivery 2026: Which Platform Ships Quickest?"
        description="If you need ED medication fast, the platform you order from matters more than you might think. Roman ships free in 2 business days. Here is how the rest compare."
        publishDate="2026-01-12"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare ED platforms" />
        </Suspense>

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Fastest delivery:</strong> Roman. Free 2-day shipping included on every order, no minimum.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Runner up:</strong> Ro. Free standard shipping, typically 2–3 business days.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Slowest standard delivery:</strong> Rex MD. Standard USPS at 3–5 business days, expedited available at extra cost.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Hims:</strong> Standard shipping included with subscription. Expedited available for a fee.</span>
            </li>
          </ul>
        </section>

        {/* Comparison table */}
        <section id="comparison">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Delivery Speed Comparison</h2>
          <p className="leading-relaxed mb-5">
            Delivery times are measured from prescription approval to delivery. The consultation itself adds up to 24 hours on most platforms during business hours.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Standard shipping</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Cost</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Expedited available?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Roman', '2 business days', 'Free, every order', 'Not needed'],
                  ['Ro', '2–3 business days', 'Free', 'Limited'],
                  ['Hims', '4–6 business days', 'Free with subscription', 'Yes, extra cost'],
                  ['Rex MD', '3–5 business days (USPS)', 'Paid', 'Yes, extra cost'],
                ].map(([platform, speed, cost, expedited], i) => (
                  <tr key={platform} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#1C1C1E]">{platform}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{speed}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{cost}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{expedited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#8A8A8C]">Delivery times are estimates. Actual times vary by location and carrier.</p>
        </section>

        {/* Roman */}
        <section id="roman">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Roman: Free 2-Day on Every Order</h2>
          <p className="leading-relaxed mb-4">
            Roman is the clear winner on delivery speed. Free 2-day shipping is included on every order, no minimum spend, no subscription required. Once your prescription is approved, it ships from a licensed pharmacy within one business day.
          </p>
          <p className="leading-relaxed mb-4">
            In practice, this means most men in the contiguous US receive their medication within 2 to 3 business days of submitting their consultation. The packaging is plain and unmarked.
          </p>
          <p className="leading-relaxed">
            Roman also offers daily tadalafil, which ships on the same timeline. If you are starting a new prescription or have run out and need a refill quickly, Roman is the platform to use.
          </p>
        </section>

        {/* Hims */}
        <section id="hims">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Hims: Standard Shipping With Subscription</h2>
          <p className="leading-relaxed mb-4">
            Hims includes standard shipping as part of its subscription plans. Typical delivery takes 4 to 6 business days. Expedited shipping is available if you need it sooner, but it costs extra.
          </p>
          <p className="leading-relaxed mb-4">
            The slower standard shipping is partly a tradeoff for Hims's other strengths: chewable medication formats, ED plus hair loss bundling, and a more polished overall experience. If delivery speed is your main concern, Roman is the better fit. If you want chewable tadalafil or to bundle ED with hair loss treatment, Hims is worth the longer wait.
          </p>
        </section>

        {/* Ro */}
        <section id="ro">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Ro: Free Standard Shipping in 2–3 Days</h2>
          <p className="leading-relaxed mb-4">
            Ro (Roman's parent platform) offers free standard shipping that typically arrives in 2 to 3 business days. This is close to Roman on speed, though not quite as consistent. Ro is better suited to men who want to manage multiple health conditions in one place, such as ED alongside weight loss or testosterone, rather than ED alone.
          </p>
          <p className="leading-relaxed">
            If you are only treating ED, Roman is a cleaner choice with more predictable 2-day delivery. If you are already a Ro customer for another service, the delivery speed is fast enough that there is no need to switch.
          </p>
        </section>

        {/* Rex MD */}
        <section id="rex-md">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Rex MD: Cheapest Per Dose, Slowest Default Delivery</h2>
          <p className="leading-relaxed mb-4">
            Rex MD has the lowest per-dose price for generic tadalafil, but it ships standard USPS, which takes 3 to 5 business days. If you need faster delivery, expedited shipping is available at extra cost, which eats into Rex MD's price advantage.
          </p>
          <p className="leading-relaxed">
            Rex MD is a reasonable option if you order in advance, do not need daily tadalafil, and standard delivery timelines work for you. If delivery speed is a priority, Roman is cheaper once shipping is included.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#FAF8F5] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Not sure which platform fits your needs?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 questions and get matched to the best ED platform for your budget, delivery preferences, and medication needs.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

        {/* When speed matters */}
        <section id="when-speed-matters">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">When Delivery Speed Actually Matters</h2>
          <p className="leading-relaxed mb-4">
            For men on a regular monthly refill, a 2-day versus 5-day difference in shipping rarely matters. You order before you run out and the timing works itself out.
          </p>
          <p className="leading-relaxed mb-4">
            Speed becomes important in a few specific situations: starting a new prescription for the first time, running out unexpectedly before your refill arrives, or ordering before a planned trip. In any of these cases, Roman's consistent free 2-day delivery is a genuine practical advantage over slower platforms.
          </p>
          <p className="leading-relaxed">
            It is also worth noting that the consultation itself takes time. Most platforms process within a few hours during business hours, but factor in a half-day to full day for the medical review before your order ships. Same-day delivery is not available on any telehealth ED platform.
          </p>
        </section>

        {/* Verdict */}
        <section id="verdict">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Bottom Line</h2>
          <p className="leading-relaxed mb-4">
            Roman is the fastest option by a clear margin. Free 2-day delivery on every order, no subscription required, no minimum spend. If you need ED medication quickly or just want the most reliable delivery timeline, Roman is the platform to use.
          </p>
          <p className="leading-relaxed mb-6">
            If price is more important than speed and you plan ahead, Rex MD's lower per-dose price makes sense with standard shipping. For men who want bundles or chewable formats and can wait a week, Hims is worth considering despite the slower default delivery.
          </p>

          <div className="p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Compare Roman vs Rex MD in full</p>
            <p className="text-sm text-[#4A4A4C] mb-4">
              Delivery speed is one factor. See how they compare on pricing, medication range, and customer service.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/go/roman" className="btn-primary">Get started with Roman</Link>
              <Link href="/ed/compare/roman-vs-rex-md" className="btn-secondary">Roman vs Rex MD →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Frequently Asked Questions</h2>
          <Suspense fallback={null}>
            <FAQAccordion faqs={faqs} />
          </Suspense>
        </section>

        <div className="mt-10">
          <Suspense fallback={null}>
            <CTABlock programs={programs} concern="ed" title="Compare ED platforms" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
