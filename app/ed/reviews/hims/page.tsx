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
  title: 'Hims Review 2026: Is It Worth It? Pricing, Meds & Honest Take',
  description:
    'Hims ED treatment starts at $25/month (subscription) for generic sildenafil or tadalafil. No video call needed. We cover exact pricing, chewable options, bundle value, and who should skip it.',
}

const programs = getProgramsByIds(['hims'])

const faqs = [
  {
    question: 'Is Hims a legitimate telehealth platform?',
    answer:
      'Yes. Hims is a US-based telehealth company founded in 2017 and publicly traded on the NYSE (HIMS). It employs licensed physicians across all 50 states and dispenses FDA-approved medications through licensed US pharmacies. It is one of the largest and most established men\'s telehealth platforms in the country.',
  },
  {
    question: 'How much does Hims ED treatment cost?',
    answer:
      'Generic sildenafil or tadalafil starts at $25/month on a subscription (6 doses). Without a subscription, individual orders typically run $50–70 per shipment for the same quantity. Chewable sildenafil costs around $35–45/month on subscription. If you bundle ED with hair loss treatment, combined plans typically run $40–55/month — often cheaper than buying each separately. Hims does not accept insurance.',
  },
  {
    question: 'Does Hims require a video call for ED treatment?',
    answer:
      'No. Hims uses an asynchronous consultation — you complete a detailed medical questionnaire online, and a licensed physician reviews it, typically within a few hours. There is no scheduled video call or in-person appointment required. The entire process can be done from your phone.',
  },
  {
    question: 'How long does Hims take to deliver?',
    answer:
      'Standard delivery via USPS takes 3–5 business days after your prescription is approved. Hims does not offer guaranteed next-day delivery, though expedited shipping is available at additional cost. All orders arrive in discreet, unmarked packaging with no indication of the contents.',
  },
  {
    question: 'Can I cancel my Hims subscription easily?',
    answer:
      'Yes. You can cancel, pause, or modify your subscription at any time through the Hims app or website — no phone call required. There are no cancellation fees. Some users report needing to navigate a few confirmation screens before cancellation is finalised, which is worth knowing before you sign up.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'best-for', label: 'Who it\'s best for' },
  { id: 'pros-cons', label: 'Pros & cons' },
  { id: 'alternatives', label: 'How Hims compares' },
  { id: 'faq', label: 'FAQ' },
]

const subScores = [
  { label: 'Pricing', score: 4.0, note: 'Subscription required for best rates' },
  { label: 'Medication variety', score: 4.8, note: 'Best range — chewables, daily, branded' },
  { label: 'Consultation process', score: 4.5, note: 'Async, fast, well-designed' },
  { label: 'Customer experience', score: 4.3, note: 'Good app, some reported service delays' },
  { label: 'Bundle value', score: 4.8, note: 'Best in class for multi-condition treatment' },
]

export default function HimsReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Hims Review 2026: Pricing, ED Medication & Is It Worth It?"
        description="We reviewed Hims for ED treatment — covering exact pricing, medication options, the consultation process, and an honest take on who should (and shouldn't) use it."
        publishDate="2025-01-20"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        {/* Rating block with sub-scores */}
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
              Strong overall platform. Best-in-class medication variety and bundle value. Subscription
              required for best pricing puts it slightly behind Roman on cost.
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

        {/* CTA above fold */}
        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Get started with Hims" />
        </Suspense>

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> Men who want to treat ED and hair loss in one place, or who want the widest medication options including chewables.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> Price is your main concern — Roman and Rex MD both undercut Hims at baseline.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> Excellent platform. Costs slightly more than competitors but earns it with breadth and bundle value.</span>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Hims launched in 2017 and is now one of the most recognised names in US men's telehealth. It started as a hair loss and ED platform and has expanded to cover mental health, skincare, and primary care — making it one of the most comprehensive options if you want to manage multiple health concerns through one provider.
          </p>
          <p className="leading-relaxed mb-4">
            For ED specifically, Hims offers a wider medication range than most competitors — generic sildenafil, generic tadalafil (daily and as-needed), chewable formats, and branded options. The clinical process is fully online with no video call required.
          </p>
          <p className="leading-relaxed">
            The tradeoff is price. Hims costs slightly more than Roman or Rex MD for equivalent generic medication, and its best pricing requires a subscription commitment. If you only need ED treatment and price is the priority, there are cheaper options. If you want breadth or bundle value, Hims is difficult to beat.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Hims pricing has two tiers: subscription and one-time order. The difference is substantial.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Per dose</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Monthly est. (6 doses)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Generic sildenafil (subscription)</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] font-medium">From $2/dose</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">~$36/month</td>
                </tr>
                <tr className="bg-[#F7F4EF]">
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Generic tadalafil (as-needed)</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] font-medium">~$4–8/dose</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">~$24–48/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Daily tadalafil (30 doses)</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] font-medium">—</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">From ~$40/month</td>
                </tr>
                <tr className="bg-[#F7F4EF]">
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">Chewable sildenafil</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] font-medium">Higher than standard</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">Varies by plan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">ED + hair loss bundle</td>
                  <td className="px-4 py-3 border border-[#E8E7E3] font-medium">—</td>
                  <td className="px-4 py-3 border border-[#E8E7E3]">Subscription only — varies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            All prices are estimates and change regularly. Hims runs first-order promotions and adjusts subscription tiers. Verify current pricing on Hims before ordering — the figures above are a directional guide, not a guarantee.
          </p>
          <p className="leading-relaxed">
            The ED + hair loss bundle is where Hims offers genuine value. If you were going to treat both conditions separately, the bundle typically saves meaningfully compared to buying each individually. If you only need ED treatment, Roman (from $4/dose) or Rex MD (from $2/dose) are cheaper for the same generic medication.
          </p>
        </section>

        {/* How it works */}
        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Create an account', desc: 'Sign up on hims.com or the Hims app. Takes about 2 minutes.' },
              { step: '2', title: 'Complete the health questionnaire', desc: 'Answer questions about your health history, current medications, and symptoms. A licensed physician reviews your responses — no video call required.' },
              { step: '3', title: 'Prescription approval', desc: 'Most prescriptions are approved within a few hours during business hours. If your prescriber has questions they\'ll follow up via the app.' },
              { step: '4', title: 'Medication ships', desc: 'Once approved, your prescription is sent to a licensed pharmacy and ships within 1–2 business days. Standard USPS delivery takes 3–5 business days. All packaging is discreet and unmarked.' },
              { step: '5', title: 'Ongoing care', desc: 'Reach your care team via the app for dosage adjustments, medication changes, or general questions.' },
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

        {/* Who it's best for */}
        <section id="best-for">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Who It&apos;s Best For</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Hims if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want to treat ED and hair loss through one platform</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want chewable medication or non-standard formats</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Prefer a subscription with predictable monthly delivery</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Value a polished app and brand experience</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the option to add mental health or skincare later</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Only need ED medication and want the lowest price</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Don&apos;t want a subscription commitment</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Need insurance coverage (none of the major platforms accept it for ED)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want testosterone treatment alongside ED</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pros & cons */}
        <section id="pros-cons">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Pros and Cons</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-3">Pros</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Widest medication range — generics, chewables, branded</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Bundle ED + hair loss for genuine savings</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No video call required</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Ships all 50 states, discreet packaging</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Established platform with strong clinical track record</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Cancel or pause subscription anytime</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Subscription required for best pricing</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>One-time order prices are significantly higher</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Baseline cost is higher than Roman or Rex MD</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Does not accept insurance</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Some users report slow customer service response times</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How Hims Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">
            Hims is a strong platform but not the right fit for everyone. Here is where to look depending on what matters to you.
          </p>
          <div className="space-y-3">
            {[
              {
                condition: 'If price is your priority',
                text: 'Roman starts at $22/month with no subscription required — $3/month less than Hims for the same generic medication, and no commitment.',
                href: '/ed/compare/hims-vs-roman',
                label: 'Hims vs Roman →',
              },
              {
                condition: 'If you want comprehensive health coverage',
                text: 'Ro covers both men\'s and women\'s health including weight loss programs — worth considering if GLP-1 or a broader health platform is on your radar.',
                href: '/ed/compare/hims-vs-ro',
                label: 'Hims vs Ro →',
              },
              {
                condition: 'If you want the absolute cheapest option',
                text: 'Rex MD starts at $19/month — the lowest we\'ve found. No subscription, no frills, just generic ED medication at the lowest price.',
                href: '/ed/compare/roman-vs-rex-md',
                label: 'Roman vs Rex MD →',
              },
            ].map((item) => (
              <div key={item.href} className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-1">{item.condition}</p>
                  <p className="text-sm text-[#4A4A4C] leading-relaxed">{item.text}</p>
                </div>
                <Link
                  href={item.href}
                  className="btn-secondary text-sm whitespace-nowrap shrink-0"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Frequently Asked Questions</h2>
          <Suspense fallback={null}>
            <FAQAccordion faqs={faqs} />
          </Suspense>
        </section>

        {/* End CTA */}
        <div className="mt-10">
          <Suspense fallback={null}>
            <CTABlock programs={programs} concern="ed" title="Get started with Hims" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
