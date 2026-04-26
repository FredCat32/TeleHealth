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
  title: 'Ro Body Review 2026: GLP-1 Weight Loss Pricing & Is It Worth It?',
  description:
    'Ro Body offers semaglutide and tirzepatide through a structured weight loss program. Membership starts at $39/month — medication costs extra. We break down pricing, who it\'s for, and how it compares to Hers.',
}

const programs = getProgramsByIds(['ro'])

const faqs = [
  {
    question: 'How much does the Ro Body program cost?',
    answer:
      'Ro Body has a membership fee of $39 for the first month and $149/month ongoing. Medication is priced separately — compounded semaglutide runs around $299/month and tirzepatide around $449/month. Total monthly cost is typically $400–$600+ depending on your medication and dosage.',
  },
  {
    question: 'What GLP-1 medications does Ro offer?',
    answer:
      'Ro offers compounded semaglutide, brand-name Wegovy, brand-name Ozempic, Zepbound (tirzepatide KwikPen at a discounted $449/month), and Mounjaro. Injectable options only — Ro does not currently offer oral GLP-1 medications.',
  },
  {
    question: 'Does Ro Body accept insurance for weight loss?',
    answer:
      'Ro can help navigate insurance coverage for brand-name GLP-1 medications like Wegovy and Zepbound for patients who qualify. Most insurance plans do not cover weight loss medications, but Ro will check your eligibility during intake. The membership fee itself is not covered by insurance.',
  },
  {
    question: 'Is Ro Body available to women?',
    answer:
      'Yes. Unlike Roman (men only), Ro operates across both men\'s and women\'s health. Ro Body is available to all eligible adults regardless of gender. Women specifically looking for a women\'s-focused GLP-1 program may also want to compare Hers, which is women-only and includes oral medication options.',
  },
  {
    question: 'How does Ro Body compare to Hers for weight loss?',
    answer:
      'Ro Body has a separate membership fee ($149/month) on top of medication costs, while Hers bundles everything into one monthly price starting from $165/month. Hers also offers oral GLP-1 medications — an advantage for people who prefer to avoid injections. Ro\'s advantage is its broader platform (also covering men) and structured coaching program.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'best-for', label: "Who it's best for" },
  { id: 'pros-cons', label: 'Pros & cons' },
  { id: 'alternatives', label: 'How Ro compares' },
  { id: 'faq', label: 'FAQ' },
]

const subScores = [
  { label: 'Pricing', score: 3.7, note: 'Membership + medication adds up' },
  { label: 'Medication variety', score: 4.3, note: 'Semaglutide, tirzepatide, brand-name options' },
  { label: 'Consultation', score: 4.4, note: 'Structured intake, ongoing monitoring' },
  { label: 'Ongoing support', score: 4.8, note: 'Best-in-class coaching and titration' },
  { label: 'Platform breadth', score: 4.7, note: 'Also covers ED, women\'s health' },
]

export default function RoGLP1ReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Ro Body Review 2026: GLP-1 Weight Loss Program"
        description="Our in-depth review of Ro Body — covering semaglutide and tirzepatide pricing, the membership structure, ongoing coaching, and who the Ro Body program is actually best for."
        publishDate="2026-04-01"
        updatedDate="2026-04-25"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >
        {/* Rating block */}
        <div className="mb-6 p-5 bg-[#F7F4EF] rounded-[12px] border border-[#E8E7E3]">
          <div className="flex flex-wrap items-start gap-6 mb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-1">
                TelehealthPick Rating
              </p>
              <RatingStars rating={4.4} showNumber={true} />
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-[#E8E7E3]" />
            <p className="text-sm text-[#4A4A4C] leading-relaxed max-w-sm">
              Ro Body is the most comprehensive GLP-1 telehealth program available — but the membership fee on top of medication costs makes it one of the pricier options. Best for people who want structured medical oversight, not just a prescription.
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
          <CTABlock programs={programs} concern="weightloss" title="Get started with Ro Body" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> People who want a fully structured GLP-1 program with ongoing clinical support — not just a prescription and a shipment.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> You want the lowest total monthly cost — Hers starts cheaper with no separate membership fee.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> The best GLP-1 telehealth experience available, but you pay for it. Total cost of $400–$600/month is real.</span>
            </li>
          </ul>
        </section>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Ro Body is the weight loss division of Ro, one of the largest telehealth platforms in the US. Where most GLP-1 telehealth services send you a prescription and call it done, Ro Body is built around a structured program: personalized dosing schedules, regular check-ins with your care team, and ongoing monitoring throughout your treatment.
          </p>
          <p className="leading-relaxed mb-4">
            The program supports both semaglutide (the active ingredient in Ozempic and Wegovy) and tirzepatide (the active ingredient in Mounjaro and Zepbound). Ro offers both compounded versions — significantly cheaper than brand-name — and brand-name medications for patients who qualify or want insurance coverage.
          </p>
          <p className="leading-relaxed">
            The tradeoff is cost structure. Ro Body charges a membership fee on top of medication costs, unlike Hers or other platforms that bundle everything into one monthly price. For people who will use the coaching and clinical support, that's fair value. For people who just want the medication, it adds unnecessary cost.
          </p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Ro Body's pricing has two components: the membership fee and the medication. Both are billed separately.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Item</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ro Body membership — month 1', '$39', 'Discounted intro month'],
                  ['Ro Body membership — ongoing', '$149/month', 'Or $74/month on annual plan'],
                  ['Compounded semaglutide', '~$299/month', 'Starter dose; increases at higher doses'],
                  ['Compounded tirzepatide', '~$449/month', 'Estimated; verify on Ro\'s site'],
                  ['Zepbound KwikPen (brand)', '$449/month', 'Discounted rate through Ro'],
                  ['Wegovy / Ozempic (brand)', 'Varies', 'Insurance may apply'],
                  ['Shipping', 'Free', 'Discreet packaging'],
                ].map(([item, price, note], i) => (
                  <tr key={item} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{item}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#EEF4EE] border border-[#D4E4D5] rounded-[10px] mb-4">
            <p className="text-sm text-[#1C1C1E]">
              <strong>Real monthly cost example:</strong> Membership ($149) + compounded semaglutide ($299) = <strong>$448/month</strong> at a mid-range dose. Prices increase as you titrate up. All prices are estimates — verify current rates on Ro&apos;s website before starting.
            </p>
          </div>

          <p className="leading-relaxed text-sm text-[#4A4A4C]">
            For comparison, Hers bundles medication and consultation into one price starting from $165/month on an annual plan. If budget is the primary concern, Hers is the more affordable option.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Complete health intake', desc: 'Answer questions about your weight history, current medications, health conditions, and goals. More thorough than a typical async form — designed to inform your treatment plan.' },
              { step: '2', title: 'Clinician review and prescription', desc: 'A licensed Ro physician reviews your intake and determines which medication and starting dose is appropriate. Brand-name medications may require insurance pre-authorization.' },
              { step: '3', title: 'Receive your first shipment', desc: 'Medication is shipped from a licensed US compounding pharmacy in discreet packaging. Standard delivery 3–5 business days.' },
              { step: '4', title: 'Titration and check-ins', desc: 'Your care team monitors your progress and adjusts your dose on schedule. GLP-1 medications typically require 4–6 months of dose titration to reach the full therapeutic dose.' },
              { step: '5', title: 'Ongoing program support', desc: 'Message your care team at any time. Ro Body includes lifestyle coaching and ongoing monitoring — not just prescription refills.' },
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
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Ro Body if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want a fully structured program, not just a prescription</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want tirzepatide alongside semaglutide options</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Also want to treat ED or other conditions through one provider</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want to explore insurance coverage for brand-name GLP-1s</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want the lowest total monthly cost — consider Hers</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Prefer oral GLP-1 medications over injections</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Are a woman looking for a women-only focused platform</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Don't want to pay a separate membership fee</li>
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
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Best ongoing clinical support and coaching in the category</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Offers both semaglutide and tirzepatide</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Can help navigate insurance for brand-name medications</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Available to men and women</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Also covers ED and women&apos;s health under one account</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Membership fee ($149/month) is on top of medication cost</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>No oral GLP-1 options</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Total monthly cost can exceed $600 at higher doses</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Annual plan required to get the lower $74/month membership rate</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How Ro Body Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">
            Ro Body is the most full-featured GLP-1 program available, but it&apos;s not always the right fit.
          </p>
          <div className="space-y-3">
            {[
              {
                condition: 'If you want a lower all-in monthly price',
                text: 'Hers bundles medication and consultations starting from $165/month on an annual plan — no separate membership fee. Also includes oral GLP-1 options.',
                href: '/glp1/compare/ro-vs-hers',
                label: 'Ro vs Hers →',
              },
              {
                condition: 'If you want oral weight loss medication',
                text: 'Hers offers oral GLP-1 medications starting from $69/month — a major advantage for people who prefer to avoid injections.',
                href: '/glp1/reviews/hers',
                label: 'Hers review →',
              },
              {
                condition: 'If you also need ED treatment',
                text: 'Ro covers both ED and weight loss under one account — the only major platform that does both comprehensively.',
                href: '/ed/reviews/ro',
                label: 'Ro ED review →',
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
            <CTABlock programs={programs} concern="weightloss" title="Get started with Ro Body" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
