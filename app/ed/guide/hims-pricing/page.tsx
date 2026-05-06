import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/ed/guide/hims-pricing' },
  title: 'Hims ED Pricing 2026: Sildenafil, Tadalafil & What You Actually Pay',
  description:
    'Hims ED medication starts at $25/month on subscription. Generic sildenafil from $2/dose, tadalafil from $4/dose. Full breakdown of Hims pricing tiers, subscription vs one-time costs, and how it compares to Roman.',
}

const programs = getProgramsByIds(['hims', 'roman'])

const faqs = [
  {
    question: 'How much does Hims ED medication cost per month?',
    answer:
      'On a subscription, generic sildenafil starts at around $25/month for 6 doses, or from $2/dose. Generic tadalafil starts at around $24/month for 6 doses. Without a subscription, one-time orders typically cost $50–70 for the same quantity. Chewable sildenafil costs more than standard pills. Bundle plans that include hair loss treatment typically run $40–55/month and can save money if you need both.',
  },
  {
    question: 'Does Hims require a subscription?',
    answer:
      'Hims strongly incentivises subscriptions by charging significantly more for one-time orders. You can order without a subscription, but you will pay roughly double per dose compared to a subscriber. Most price comparisons you see for Hims reflect the subscription rate. Roman and Rex MD, by contrast, charge the same per-dose price whether or not you subscribe.',
  },
  {
    question: 'Is Hims cheaper than Roman?',
    answer:
      "At the subscription rate, Hims and Roman are competitive on sildenafil — both around $2–4/dose. For tadalafil and for anyone ordering without a subscription, Roman is cheaper. Roman also includes free 2-day shipping on every order, which Hims charges extra for on expedited delivery. For standard ED medication without a bundle, Roman is the better value for most men.",
  },
  {
    question: 'Does Hims pricing include shipping?',
    answer:
      'Standard shipping is included with Hims subscription plans. Expedited shipping costs extra. Roman includes free 2-day shipping on all orders at no additional cost, which makes a practical difference if you need fast delivery.',
  },
  {
    question: 'Does Hims accept insurance for ED medication?',
    answer:
      'No. None of the major telehealth ED platforms accept insurance for generic ED medication. Hims, Roman, Ro, and Rex MD are all out-of-pocket. If you have insurance, compare what your plan covers at a local pharmacy using GoodRx as a reference point.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick summary' },
  { id: 'subscription-vs-one-time', label: 'Subscription vs one-time' },
  { id: 'sildenafil', label: 'Sildenafil pricing' },
  { id: 'tadalafil', label: 'Tadalafil pricing' },
  { id: 'chewable', label: 'Chewable options' },
  { id: 'bundles', label: 'Bundle pricing' },
  { id: 'vs-roman', label: 'Hims vs Roman on price' },
  { id: 'faq', label: 'FAQ' },
]

export default function HimsPricingPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Hims ED Pricing 2026: Sildenafil, Tadalafil & What You Actually Pay"
        description="Hims pricing is more complicated than it looks because the subscription and no-subscription rates are very different. Here is a full breakdown of what each medication costs and how it compares to Roman."
        publishDate="2026-02-01"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare Hims and Roman" />
        </Suspense>

        {/* Quick summary */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Key numbers</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Generic sildenafil:</strong> From $2/dose on subscription. Around $50–70 for 6 doses without a subscription.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Generic tadalafil (as-needed):</strong> From $4–8/dose on subscription. Higher without.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Daily tadalafil:</strong> From around $40/month.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>ED + hair loss bundle:</strong> Subscription only, typically $40–55/month depending on hair loss medication.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Insurance:</strong> Not accepted. All prices are out of pocket.</span>
            </li>
          </ul>
        </section>

        <section className="my-6 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">About these prices</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            Hims updates pricing regularly and runs first-order promotions. All figures here are estimates based on publicly listed rates. Verify current pricing on Hims before ordering. This page is independent — no brand has paid to appear first or reviewed this content before publication.
          </p>
        </section>

        {/* Subscription vs one-time */}
        <section id="subscription-vs-one-time">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Subscription vs One-Time Orders: A Big Difference</h2>
          <p className="leading-relaxed mb-4">
            The most important thing to understand about Hims pricing is the gap between subscription and one-time rates. Hims is built around subscriptions, and it prices one-time orders accordingly.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Order type</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Sildenafil (6 doses)</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Tadalafil (6 doses)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Subscription</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] font-medium">~$12–25/month</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] font-medium">~$24–48/month</td>
                </tr>
                <tr className="bg-[#F7F4EF]">
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">One-time order</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">~$50–70</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">~$55–80</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            This is a meaningful difference. At the subscription rate, Hims is competitive with other platforms. Without a subscription, it is significantly more expensive than Roman or Rex MD for the same medication.
          </p>
          <p className="leading-relaxed">
            Roman and Rex MD do not have this split. Both charge the same per-dose price whether or not you set up a recurring order. If you want flexibility without committing to a monthly plan, Roman or Rex MD are more practical starting points.
          </p>
        </section>

        {/* Sildenafil */}
        <section id="sildenafil">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Generic Sildenafil Pricing</h2>
          <p className="leading-relaxed mb-4">
            Generic sildenafil is the active ingredient in Viagra. Hims offers it in standard pill format and in chewable format. Standard generic sildenafil on a Hims subscription starts at around $2/dose for 6 doses per month.
          </p>
          <p className="leading-relaxed mb-4">
            At that rate, Hims is competitive with Roman (also around $4/dose) on sildenafil specifically. The difference at this tier comes down to shipping: Roman includes free 2-day delivery, while Hims's standard USPS takes 3–5 business days.
          </p>
          <p className="leading-relaxed">
            Sildenafil is typically taken 30–60 minutes before sex and lasts 4–6 hours. If you prefer not to plan that far in advance, tadalafil (which lasts up to 36 hours per dose) might be a better fit.
          </p>
        </section>

        {/* Tadalafil */}
        <section id="tadalafil">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Generic Tadalafil Pricing</h2>
          <p className="leading-relaxed mb-4">
            Generic tadalafil is the active ingredient in Cialis. It has a longer duration than sildenafil — up to 36 hours per dose — which most men find more convenient. Hims offers both as-needed tadalafil (10mg, 20mg) and daily low-dose tadalafil (2.5mg, 5mg).
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Tadalafil type</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Hims</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Roman</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['As-needed (per dose, subscription)', '~$4–8/dose', 'From $4/dose'],
                  ['Daily tadalafil (30 doses/month)', 'From ~$40/month', '~$39/month'],
                  ['Subscription required?', 'For best rates', 'No'],
                  ['Shipping', 'Standard USPS', 'Free 2-day'],
                ].map(([type, hims, roman], i) => (
                  <tr key={type} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{type}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]">{hims}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{roman}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            On tadalafil, Roman is more straightforwardly cheaper than Hims for most men — lower per-dose price, no subscription requirement, faster free shipping. Hims's tadalafil advantage comes only when bundled with hair loss treatment.
          </p>
        </section>

        {/* Chewable */}
        <section id="chewable">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Chewable Medication: A Hims Exclusive</h2>
          <p className="leading-relaxed mb-4">
            Hims is the only major ED telehealth platform that offers chewable sildenafil formats. Hard Mints and chewable tablets cost more than standard pills, but some men prefer them for convenience or because they work slightly faster when absorbed sublingually.
          </p>
          <p className="leading-relaxed mb-4">
            Chewable sildenafil on a Hims subscription typically runs $35–50/month depending on dose and quantity. This is higher than standard generic pills from any platform. If you want chewable formats specifically, Hims is the only telehealth option. If chewables are not a priority, you will pay less at Roman or Rex MD for standard pills.
          </p>
        </section>

        {/* Bundles */}
        <section id="bundles">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Bundle Pricing: ED Plus Hair Loss</h2>
          <p className="leading-relaxed mb-4">
            This is where Hims pricing becomes genuinely competitive. If you are treating both ED and hair loss, Hims's combined subscription plans typically offer meaningful savings compared to buying each separately.
          </p>
          <p className="leading-relaxed mb-4">
            A typical Hims bundle covering generic sildenafil or tadalafil plus finasteride or minoxidil runs around $40–55/month. Buying ED medication from Roman ($22/month) and hair loss medication from Keeps ($21/month) separately would run you $43/month minimum. The Hims bundle saves you some money while consolidating care into one platform.
          </p>
          <p className="leading-relaxed">
            If you are only treating ED, the bundle is not relevant and Hims's price advantage disappears. But for men dealing with both conditions, the bundle case for Hims is real.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#FAF8F5] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Not sure Hims is right for you?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 questions to get matched to the best ED platform for your budget — including whether Hims, Roman, or Rex MD makes the most financial sense for your situation.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

        {/* Hims vs Roman */}
        <section id="vs-roman">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Hims vs Roman on Price</h2>
          <p className="leading-relaxed mb-4">
            For standard generic ED medication without a bundle, Roman comes out ahead on price for most men. Here is the direct comparison:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Hims</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Roman</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sildenafil entry price', '~$25/month (subscription)', 'From $22/month'],
                  ['Tadalafil as-needed', 'From $4–8/dose (subscription)', 'From $4/dose (no subscription)'],
                  ['No-subscription price', 'Much higher', 'Same as subscription'],
                  ['Shipping', 'Standard USPS', 'Free 2-day, every order'],
                  ['Hair loss bundling', 'Yes', 'Limited'],
                  ['Chewable formats', 'Yes', 'No'],
                  ['Daily tadalafil', 'Yes', 'Yes, ~$39/month'],
                ].map(([factor, hims, roman], i) => (
                  <tr key={factor} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{factor}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{hims}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8] font-medium">{roman}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            Roman wins on price for standard generic ED medication. Hims wins on breadth — chewable formats, hair loss bundling, and a wider medication range. If either of those extras matters to you, Hims is worth the higher base price. If they do not, Roman is cheaper and ships faster.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/ed/compare/hims-vs-roman" className="btn-secondary">Full Hims vs Roman comparison →</Link>
            <Link href="/ed/reviews/hims" className="btn-secondary">Hims full review →</Link>
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
            <CTABlock programs={programs} concern="ed" title="Compare Hims and Roman" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
