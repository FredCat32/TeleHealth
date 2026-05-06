import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/glp1/compare/ro-vs-hers' },
  title: 'Ro Body vs Hers Weight Loss 2026: GLP-1 Pricing & Which to Choose',
  description:
    'Ro Body charges $149/month membership + medication. Hers starts at $165/month all-in. We compare pricing, medication options, clinical support, and who each platform is best for.',
}

const programs = getProgramsByIds(['ro', 'hers'])

const faqs = [
  {
    question: 'Is Ro Body or Hers cheaper for GLP-1 treatment?',
    answer:
      'Hers is typically cheaper all-in. Ro Body charges a $149/month membership on top of medication costs — compounded semaglutide adds ~$299/month, totalling $448/month minimum. Hers bundles medication and consultations from $165/month on an annual plan with no separate membership fee.',
  },
  {
    question: 'Which platform has more medication options?',
    answer:
      'Hers has broader medication flexibility. It offers both injectable and oral GLP-1 medications, plus multiple brand-name options (Wegovy, Ozempic, Zepbound, Mounjaro). Ro Body offers injectable options only — compounded semaglutide, tirzepatide, and brand-name GLP-1s — but no oral format.',
  },
  {
    question: 'Can men use either platform?',
    answer:
      'Ro Body is available to both men and women. Hers is women-only. Men looking for GLP-1 weight loss treatment should use Ro Body.',
  },
  {
    question: 'Which has better ongoing medical support?',
    answer:
      'Ro Body has more structured ongoing support — its program is built around coaching, titration monitoring, and regular check-ins. Hers provides good messaging-based support but is less structured in its ongoing clinical oversight.',
  },
  {
    question: 'Does either platform accept insurance?',
    answer:
      'Ro Body can help navigate insurance coverage for brand-name GLP-1 medications like Wegovy and Zepbound for qualifying patients. Hers does not bill insurance directly. Neither platform covers the consultation or membership fees through insurance.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'comparison', label: 'Side-by-side' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'medication', label: 'Medications' },
  { id: 'support', label: 'Clinical support' },
  { id: 'best-for', label: 'Who each is best for' },
  { id: 'faq', label: 'FAQ' },
]

export default function RoVsHersPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Ro Body vs Hers Weight Loss 2026: Which GLP-1 Program Is Right for You?"
        description="A direct comparison of Ro Body and Hers for GLP-1 weight loss treatment — covering pricing, medications, clinical support, and which platform is best for different situations."
        publishDate="2026-04-01"
        updatedDate="2026-04-25"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >
        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="weightloss" title="Compare Ro Body and Hers" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Choose Hers if:</strong> You&apos;re a woman who wants the lowest all-in cost, oral medication options, or a women-focused platform that also covers birth control and mental health.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Choose Ro Body if:</strong> You want the most structured clinical program, you&apos;re a man, or you also want to treat ED through the same provider.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> Hers wins on price and flexibility. Ro Body wins on structure and breadth.</span>
            </li>
          </ul>
        </section>

        <section id="comparison">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Ro Body</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Hers</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Starting price (all-in)', '$448/month*', '$165/month (annual plan)'],
                  ['Membership fee', '$149/month (or $74/month annual)', 'None'],
                  ['Injectable GLP-1s', 'Yes — semaglutide, tirzepatide', 'Yes — semaglutide, tirzepatide'],
                  ['Oral GLP-1s', 'No', 'Yes — from $69/month'],
                  ['Brand-name options', 'Wegovy, Zepbound, Ozempic', 'Wegovy, Ozempic, Zepbound, Mounjaro'],
                  ['Insurance navigation', 'Yes (brand-name only)', 'No'],
                  ['Available to men', 'Yes', 'No'],
                  ['Ongoing coaching', 'Structured program', 'Messaging support'],
                  ['Consultation type', 'Async', 'Async'],
                  ['Also covers', 'ED, women\'s health', 'Birth control, mental health, menopause, UTI'],
                ].map(([feature, ro, hers], i) => (
                  <tr key={feature} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#1C1C1E]">{feature}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{ro}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{hers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8A8A8C]">* Ro Body: $149 membership + $299 compounded semaglutide at starter dose. Prices are estimates — verify on each provider&apos;s website.</p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing Deep Dive</h2>
          <p className="leading-relaxed mb-5">
            This is where Hers has a clear structural advantage. Ro Body separates its membership fee from medication cost — both are billed monthly, and both are significant.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-1">Ro Body — monthly cost</p>
              <p className="text-xs text-[#8A8A8C] mb-4">Membership + medication, billed separately</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex justify-between"><span>Membership (month 1)</span><span className="font-semibold">$39</span></li>
                <li className="flex justify-between"><span>Membership (ongoing)</span><span className="font-semibold">$149/month</span></li>
                <li className="flex justify-between"><span>Compounded semaglutide</span><span className="font-semibold">~$299/month</span></li>
                <li className="flex justify-between"><span>Tirzepatide</span><span className="font-semibold">~$449/month</span></li>
                <li className="flex justify-between border-t border-[#E8E7E3] pt-2 mt-2"><span className="font-semibold">Minimum all-in</span><span className="font-semibold text-[#5B7A5F]">~$448/month</span></li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-1">Hers — monthly cost</p>
              <p className="text-xs text-[#8A8A8C] mb-4">All-inclusive, no membership fee</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex justify-between"><span>Oral GLP-1 (annual plan)</span><span className="font-semibold">From $69/month</span></li>
                <li className="flex justify-between"><span>Injectable GLP-1 (annual plan)</span><span className="font-semibold">From $165/month</span></li>
                <li className="flex justify-between"><span>Zepbound (starter dose)</span><span className="font-semibold">From $349/month</span></li>
                <li className="flex justify-between"><span>Membership fee</span><span className="font-semibold">$0</span></li>
                <li className="flex justify-between border-t border-[#E8E7E3] pt-2 mt-2"><span className="font-semibold">Minimum all-in</span><span className="font-semibold text-[#5B7A5F]">From $69/month</span></li>
              </ul>
            </div>
          </div>

          <p className="leading-relaxed text-sm text-[#4A4A4C]">
            On comparable injectable semaglutide, Hers ($165/month annual) vs Ro Body ($448/month) is a significant difference. Ro Body&apos;s membership price comes down to $74/month on an annual commitment, making the gap slightly smaller — but Hers still wins on total cost at equivalent medication doses.
          </p>
        </section>

        <section id="medication">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Medication Options</h2>
          <p className="leading-relaxed mb-5">
            Both platforms offer compounded and brand-name semaglutide and tirzepatide. The key difference is oral vs injectable.
          </p>

          <div className="p-5 bg-[#EEF4EE] border border-[#D4E4D5] rounded-[12px] mb-5">
            <p className="text-sm font-semibold text-[#1C1C1E] mb-2">Hers exclusive: oral GLP-1 medications</p>
            <p className="text-sm text-[#4A4A4C] leading-relaxed">
              Hers offers oral weight loss medication kits from $69/month — a meaningful option for people with injection anxiety or who are just starting GLP-1 treatment. Oral GLP-1s are generally less potent than injectables but are a legitimate starting point. Ro Body does not offer oral options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Ro Body medications</p>
              <ul className="text-sm text-[#4A4A4C] space-y-1">
                <li>✓ Compounded semaglutide (injectable)</li>
                <li>✓ Compounded tirzepatide (injectable)</li>
                <li>✓ Zepbound KwikPen ($449/month)</li>
                <li>✓ Brand-name Wegovy, Ozempic</li>
                <li className="text-[#8A8A8C]">✗ No oral GLP-1 options</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Hers medications</p>
              <ul className="text-sm text-[#4A4A4C] space-y-1">
                <li>✓ Compounded semaglutide (injectable)</li>
                <li>✓ Oral weight loss medication kits</li>
                <li>✓ Zepbound, Mounjaro (tirzepatide)</li>
                <li>✓ Brand-name Wegovy, Ozempic, Mounjaro</li>
                <li>✓ Generic liraglutide</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="support">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Clinical Support</h2>
          <p className="leading-relaxed mb-5">
            This is where Ro Body justifies its higher price for some patients.
          </p>
          <div className="space-y-4">
            <div className="card p-5">
              <p className="font-semibold text-[#1C1C1E] mb-2">Ro Body — structured program</p>
              <p className="text-sm text-[#4A4A4C] leading-relaxed">
                Ro Body is built around a structured clinical program with scheduled titration, proactive monitoring, and lifestyle coaching. Your care team checks in as your dose increases. This is closer to working with a weight loss specialist than a prescription service — better for people who want accountability and guidance throughout treatment.
              </p>
            </div>
            <div className="card p-5">
              <p className="font-semibold text-[#1C1C1E] mb-2">Hers — messaging support</p>
              <p className="text-sm text-[#4A4A4C] leading-relaxed">
                Hers provides messaging-based clinical support — you can contact your care team with questions and get responses, but the structure is more reactive than proactive. Good for self-directed patients who are comfortable managing their own titration schedule with occasional provider check-ins.
              </p>
            </div>
          </div>
        </section>

        <section id="best-for">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Who Each Platform Is Best For</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Ro Body if:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You&apos;re a man</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want a structured, coached program</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You also want ED treatment through the same provider</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want help navigating insurance for brand-name GLP-1s</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Budget is less of a concern than clinical quality</li>
              </ul>
              <Link href="/glp1/reviews/ro" className="btn-primary text-sm mt-5 inline-block">
                Ro Body review →
              </Link>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Hers if:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You&apos;re a woman</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want the lowest all-in monthly cost</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You prefer oral medication over injections</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You also need birth control, mental health, or menopause care</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You&apos;re comfortable managing your own titration</li>
              </ul>
              <Link href="/glp1/reviews/hers" className="btn-primary text-sm mt-5 inline-block">
                Hers review →
              </Link>
            </div>
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
            <CTABlock programs={programs} concern="weightloss" title="Compare Ro Body and Hers" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
