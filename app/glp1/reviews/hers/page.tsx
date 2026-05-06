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
  alternates: { canonical: 'https://www.telehealthpick.com/glp1/reviews/hers' },
  title: 'Hers Weight Loss Review 2026: GLP-1 Pricing, Oral Options & Is It Worth It?',
  description:
    'Hers offers GLP-1 injections from $165/month and oral weight loss medication from $69/month — no separate membership fee. We review pricing, medication options, and who Hers weight loss is best for.',
}

const programs = getProgramsByIds(['hers'])

const faqs = [
  {
    question: 'How much does Hers weight loss cost?',
    answer:
      'Hers GLP-1 injections start at $165/month on a 12-month plan paid upfront. Oral weight loss medication kits start at $69/month on a 10-month plan. Monthly plans are available at higher rates. Unlike Ro Body, Hers does not charge a separate membership fee — the price includes medication and clinical consultations.',
  },
  {
    question: 'What weight loss medications does Hers offer?',
    answer:
      'Hers offers a broad range: compounded semaglutide, brand-name Wegovy, Ozempic, Zepbound, Mounjaro, and generic liraglutide. Uniquely, Hers also offers oral weight loss medications — an advantage for people who prefer to avoid injections. Brand-name availability depends on insurance and eligibility.',
  },
  {
    question: 'Is Hers weight loss available to men?',
    answer:
      'No. Hers is a women-only telehealth platform. Men looking for GLP-1 weight loss treatment should consider Ro Body, which covers both men and women.',
  },
  {
    question: 'Does Hers accept insurance for weight loss medication?',
    answer:
      'Hers does not currently accept insurance for its bundled weight loss plans. Brand-name medications like Wegovy may be eligible for insurance coverage depending on your plan, but Hers does not bill insurance directly. FSA and HSA cards are typically accepted.',
  },
  {
    question: 'How does Hers compare to Ro Body for GLP-1 treatment?',
    answer:
      'Hers is generally more affordable — no separate membership fee and lower all-in monthly costs. Hers also offers oral GLP-1 medications, which Ro does not. Ro Body has an edge in ongoing clinical support and coaching, and covers men as well. For women focused primarily on cost or who prefer oral medication, Hers is typically the better choice.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'best-for', label: "Who it's best for" },
  { id: 'pros-cons', label: 'Pros & cons' },
  { id: 'alternatives', label: 'How Hers compares' },
  { id: 'faq', label: 'FAQ' },
]

const subScores = [
  { label: 'Pricing', score: 4.4, note: 'No membership fee, competitive all-in cost' },
  { label: 'Medication variety', score: 4.6, note: 'Injections + oral options, multiple brands' },
  { label: 'Consultation', score: 4.1, note: 'Async, fast approval' },
  { label: 'Ongoing support', score: 3.9, note: 'Good but less structured than Ro Body' },
  { label: 'Women-focused care', score: 4.7, note: 'Purpose-built for women\'s health' },
]

export default function HersGLP1ReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Hers Weight Loss Review 2026: GLP-1 Pricing, Oral Options & Who It's For"
        description="Our in-depth review of Hers weight loss — covering semaglutide and tirzepatide pricing, oral medication options, the consultation process, and how Hers compares to Ro Body."
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
              <RatingStars rating={4.3} showNumber={true} />
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-[#E8E7E3]" />
            <p className="text-sm text-[#4A4A4C] leading-relaxed max-w-sm">
              The best GLP-1 option for women who want flexibility — oral or injectable medications, competitive pricing with no separate membership fee, and a platform built specifically for women&apos;s health.
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
          <CTABlock programs={programs} concern="weightloss" title="Get started with Hers" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> Women who want affordable GLP-1 treatment — especially those who prefer oral medication over injections.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> You&apos;re a man (Hers is women-only), or you want the most intensive clinical support program.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> Best value GLP-1 option for women. More medication flexibility than Ro Body at a lower all-in price.</span>
            </li>
          </ul>
        </section>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Hers is the women&apos;s health division of Hims &amp; Hers, one of the largest telehealth platforms in the US. Its weight loss program covers the full range of GLP-1 medications — semaglutide and tirzepatide, both injectable and oral formats — through an async consultation process.
          </p>
          <p className="leading-relaxed mb-4">
            The standout feature is medication flexibility. While most GLP-1 telehealth platforms are injection-only, Hers offers oral weight loss medications for patients who prefer to avoid needles. Oral GLP-1s are newer and generally less potent than injectables, but they&apos;re a meaningful option for patients just starting treatment or with injection anxiety.
          </p>
          <p className="leading-relaxed">
            Pricing is straightforward compared to Ro Body. Hers bundles medication and clinical oversight into one monthly price — no separate membership fee. At $165/month for injectable GLP-1s on an annual plan, it&apos;s one of the more competitive prices in the market. Monthly plans are available but cost more per month.
          </p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Hers prices vary by medication type and commitment. Annual plans offer significantly lower monthly rates than month-to-month.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Annual Plan</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['GLP-1 injection (compounded semaglutide)', 'From $165/month', '12-month plan; includes medication + consultation'],
                  ['Oral weight loss medication kit', 'From $69/month', '10-month plan; oral GLP-1 format'],
                  ['Zepbound (tirzepatide)', 'From $349/month (starter)', 'Increases at maintenance dose (~$499/month)'],
                  ['Wegovy / Ozempic (brand)', 'Varies', 'Up to ~$1,700/month without insurance'],
                  ['Membership fee', 'None', 'All-inclusive pricing, no separate fee'],
                  ['Shipping', 'Free', 'Discreet packaging'],
                ].map(([med, price, note], i) => (
                  <tr key={med} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{med}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#EEF4EE] border border-[#D4E4D5] rounded-[10px] mb-4">
            <p className="text-sm text-[#1C1C1E]">
              <strong>Compared to Ro Body:</strong> Hers&apos;s $165/month all-in (annual plan) is meaningfully cheaper than Ro Body&apos;s $299 medication + $149 membership = $448/month minimum. All prices are estimates — verify current rates on Hers&apos;s website.
            </p>
          </div>
        </section>

        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Complete online intake', desc: 'Fill out Hers\'s weight loss intake form covering your health history, current medications, weight goals, and medication preferences (oral vs injectable).' },
              { step: '2', title: 'Clinician review', desc: 'A licensed Hers provider reviews your intake asynchronously — no video call required. Approval is typically within 24–48 hours.' },
              { step: '3', title: 'Treatment plan and prescription', desc: 'Your provider recommends a starting medication and dose. You can discuss preferences for oral vs injectable GLP-1 during this stage.' },
              { step: '4', title: 'Medication delivered', desc: 'Shipped from a licensed pharmacy in discreet packaging. Compounded medications ship from US-based compounding pharmacies.' },
              { step: '5', title: 'Ongoing care and titration', desc: 'Check in with your care team as your dose titrates up. Hers provides messaging support for questions and side effect management.' },
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
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Hers if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are a woman looking for GLP-1 treatment</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want oral weight loss medication over injections</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the lowest all-in monthly cost</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Also want birth control, mental health, or other women&apos;s health through one provider</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Are a man — Hers is women-only</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want the most structured clinical support program</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want to treat ED and weight loss together — consider Ro</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Need insurance billing for medication</li>
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
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Oral GLP-1 options — unique among major platforms</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No separate membership fee</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Broad medication selection including multiple brand-name options</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Also covers birth control, mental health, menopause</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Lower all-in cost than Ro Body on comparable medications</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Women only — not available to men</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Less structured clinical coaching than Ro Body</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Annual plan required for lowest pricing</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Does not accept insurance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How Hers Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">
            Hers is the strongest option for women prioritising cost and medication flexibility.
          </p>
          <div className="space-y-3">
            {[
              {
                condition: 'If you want more structured clinical support',
                text: 'Ro Body includes more intensive coaching and monitoring — better for people who want a full program, not just a prescription. Costs more all-in.',
                href: '/glp1/compare/ro-vs-hers',
                label: 'Ro vs Hers →',
              },
              {
                condition: 'If you are a man seeking GLP-1 treatment',
                text: 'Hers is women-only. Ro Body covers both men and women and is the closest equivalent for men.',
                href: '/glp1/reviews/ro',
                label: 'Ro Body review →',
              },
              {
                condition: 'If you also need birth control or mental health care',
                text: 'Hers covers birth control, UTI treatment, menopause, and mental health — making it a strong all-in-one women\'s health option beyond just weight loss.',
                href: '/womens/reviews/hers',
                label: 'Hers full review →',
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
            <CTABlock programs={programs} concern="weightloss" title="Get started with Hers" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
