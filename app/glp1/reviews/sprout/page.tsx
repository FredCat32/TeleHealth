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
  alternates: { canonical: 'https://www.telehealthpick.com/glp1/reviews/sprout' },
  title: 'Sprout Health Review 2026: GLP-1 Pricing, Semaglutide & Is It Worth It?',
  description:
    'Sprout Health offers compounded semaglutide from $149/month — the lowest starting price among major GLP-1 telehealth platforms. Our full review covers pricing, how it works, and who it\'s best for.',
}

const programs = getProgramsByIds(['sprout'])

const faqs = [
  {
    question: 'How much does Sprout Health cost?',
    answer:
      'Sprout Health starts at $149/month for compounded semaglutide at starter doses. Tirzepatide starts at $199/month. Pricing increases as you titrate to higher doses — maintenance doses typically run $199–$249/month. Monthly provider check-ins are included in the price.',
  },
  {
    question: 'What medications does Sprout Health offer?',
    answer:
      'Sprout Health offers compounded semaglutide (weekly subcutaneous injection or dissolvable tablet) and compounded tirzepatide. Both contain the same active ingredients as branded alternatives like Wegovy/Ozempic (semaglutide) and Zepbound/Mounjaro (tirzepatide).',
  },
  {
    question: 'What does "patient-paced titration" mean?',
    answer:
      'Most GLP-1 platforms follow a standard titration schedule — increasing your dose on a fixed timeline. Sprout Health lets you progress at your own pace based on how well you\'re tolerating the current dose. If you\'re experiencing side effects at a given dose, you stay there longer before increasing. This approach tends to produce fewer dropouts due to side effects like nausea.',
  },
  {
    question: 'Does Sprout Health accept insurance?',
    answer:
      'Sprout Health operates on a cash-pay model and does not accept insurance. They do accept HSA/FSA cards. Compounded GLP-1 medications are generally not covered by insurance regardless of platform.',
  },
  {
    question: 'Is Sprout Health available in my state?',
    answer:
      'Sprout Health serves most US states, but availability varies by state regulations for telehealth and compounded medications. Check their website during sign-up to confirm availability in your state.',
  },
  {
    question: 'How does Sprout Health compare to Hers?',
    answer:
      'Sprout Health starts cheaper ($149/month vs Hers from $165/month annual) and is available to both men and women. Hers is women-only but includes oral GLP-1 options and is a more established platform. Sprout\'s patient-paced titration approach is a genuine differentiator for people who want a gentler dose escalation.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'medications', label: 'Medications' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'best-for', label: "Who it's best for" },
  { id: 'pros-cons', label: 'Pros & cons' },
  { id: 'alternatives', label: 'How Sprout compares' },
  { id: 'faq', label: 'FAQ' },
]

const subScores = [
  { label: 'Pricing', score: 4.7, note: 'Cheapest starting price in the category' },
  { label: 'Medication variety', score: 4.0, note: 'Semaglutide and tirzepatide' },
  { label: 'Consultation', score: 4.2, note: 'Monthly provider check-ins included' },
  { label: 'Ongoing support', score: 4.3, note: 'Patient-paced titration, nutritional guidance' },
  { label: 'Platform breadth', score: 3.5, note: 'Weight loss focused, not multi-condition' },
]

export default function SproutHealthReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Sprout Health Review 2026: GLP-1 Weight Loss Program"
        description="Our in-depth review of Sprout Health — covering compounded semaglutide and tirzepatide pricing, the patient-paced titration approach, and who this platform is best for."
        publishDate="2026-05-01"
        updatedDate="2026-05-06"
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
              <RatingStars rating={4.2} showNumber={true} />
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-[#E8E7E3]" />
            <p className="text-sm text-[#4A4A4C] leading-relaxed max-w-sm">
              Sprout Health is the most affordable GLP-1 telehealth platform we track, starting at $149/month. Its patient-paced titration approach is a genuine differentiator for people who want to start slowly and avoid the nausea common at higher doses.
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
                  <div className="h-full bg-[#5B7A5F] rounded-full" style={{ width: `${(item.score / 5) * 100}%` }} />
                </div>
                <span className="text-xs font-semibold text-[#1C1C1E] w-6 text-right">{item.score}</span>
              </div>
            ))}
          </div>
        </div>

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="weightloss" title="Get started with Sprout Health" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> People who want the lowest monthly price for compounded semaglutide, or who want a gentler patient-paced titration approach.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> You want oral medication options (injections only) or a broader platform covering other health conditions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> The best value GLP-1 option available. $149/month with monthly provider check-ins included is hard to beat.</span>
            </li>
          </ul>
        </section>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Sprout Health is a telehealth platform offering compounded semaglutide and tirzepatide for weight loss. Founded in 2023, it operates on a straightforward model: licensed providers review your health history, prescribe the appropriate GLP-1 medication, and support you through a patient-paced titration process designed for long-term sustainability.
          </p>
          <p className="leading-relaxed mb-4">
            The platform's standout feature is pricing. At $149/month for compounded semaglutide, Sprout Health is the most affordable major GLP-1 telehealth provider we track — roughly $20/month less than Hers and significantly less than Ro Body's combined membership and medication costs.
          </p>
          <p className="leading-relaxed">
            The other differentiator is its titration philosophy. Rather than following a fixed dosing schedule, Sprout works at the patient's pace — keeping you at a dose level until you're tolerating it well before increasing. This approach reduces side effects and dropout rates, particularly for people who are sensitive to the nausea common in the early weeks of GLP-1 treatment.
          </p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Option</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Starting price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Maintenance dose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Compounded semaglutide', 'From $149/month', '~$199–229/month'],
                  ['Compounded tirzepatide', 'From $199/month', '~$249/month'],
                  ['Provider check-ins', 'Included', 'Monthly'],
                  ['Shipping', 'Included', 'Standard delivery'],
                  ['HSA/FSA accepted', 'Yes', '—'],
                ].map(([option, starter, maintenance], i) => (
                  <tr key={option} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{option}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#5B7A5F]">{starter}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#EEF4EE] border border-[#D4E4D5] rounded-[10px] mb-4">
            <p className="text-sm text-[#1C1C1E]">
              <strong>How Sprout compares on price:</strong> Sprout starts at $149/month vs Hers ($165/month annual), ShedRx ($199/month), and Ro Body ($400–600/month combined). For the same core medication at the lowest dose, Sprout is the most affordable option.
            </p>
          </div>
        </section>

        <section id="medications">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Medications</h2>
          <p className="leading-relaxed mb-4">
            Sprout Health offers two GLP-1 medications: compounded semaglutide and compounded tirzepatide. Both are available as weekly subcutaneous injections. Semaglutide is also available in a dissolvable tablet format for patients who prefer an oral option.
          </p>
          <p className="leading-relaxed mb-4">
            Compounded versions contain the same active ingredients as brand-name Wegovy/Ozempic (semaglutide) and Zepbound/Mounjaro (tirzepatide) at significantly lower cost. They are produced by licensed US compounding pharmacies and prescribed by licensed providers.
          </p>
          <p className="leading-relaxed">
            Sprout emphasises nutritional integration alongside medication — specifically, guidance around protein intake and meal timing to support GLP-1 outcomes and prevent muscle loss during weight loss. This is a more complete approach than platforms that simply prescribe and ship.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Health intake', desc: 'Complete an online questionnaire covering your weight history, current health conditions, medications, and goals. A licensed provider reviews it — no video call required.' },
              { step: '2', title: 'Personalised prescription', desc: 'Your provider recommends the appropriate medication (semaglutide or tirzepatide) and starting dose. They\'ll factor in your health history and any sensitivities.' },
              { step: '3', title: 'Medication shipped to your door', desc: 'Your first shipment arrives in discreet packaging. Includes everything you need for self-injection or oral dosing.' },
              { step: '4', title: 'Patient-paced titration', desc: 'Unlike standard fixed schedules, Sprout keeps you at your current dose until you\'re tolerating it well. Monthly provider check-ins assess your progress and adjust your plan.' },
              { step: '5', title: 'Nutritional guidance', desc: 'Ongoing protein and meal strategy guidance to support weight loss outcomes and preserve muscle mass throughout treatment.' },
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
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Sprout Health if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the lowest monthly price for GLP-1 treatment</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want a gentler, patient-paced titration approach</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have had nausea or side effects with other GLP-1s</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want monthly provider check-ins included in the price</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want oral medication formats — consider <Link href="/glp1/reviews/shed" className="text-[#5B7A5F] underline">ShedRx</Link></li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Are a woman wanting a women-only platform — consider <Link href="/glp1/reviews/hers" className="text-[#5B7A5F] underline">Hers</Link></li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want the most comprehensive clinical program — consider <Link href="/glp1/reviews/ro" className="text-[#5B7A5F] underline">Ro Body</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pros-cons">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Pros and Cons</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-3">Pros</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Lowest starting price in the category ($149/month)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Monthly provider check-ins included — no extras</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Patient-paced titration reduces side effects</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Both semaglutide and tirzepatide available</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Nutritional guidance integrated into the program</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>HSA/FSA accepted</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Injections only (no lozenges or drops like ShedRx)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Newer platform — less brand recognition than Ro or Hers</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Weight loss focused only — no hair, ED, or other services</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>No money-back guarantee</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How Sprout Health Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">See how Sprout stacks up against the other GLP-1 platforms we track.</p>
          <div className="space-y-3">
            {[
              { condition: 'If you want oral medication options', text: 'ShedRx offers GLP-1 lozenges and drops in addition to injections — and adds a money-back guarantee. Starts at $199/month.', href: '/glp1/reviews/shed', label: 'ShedRx review →' },
              { condition: 'If you are a woman looking for a women-only platform', text: 'Hers is women-only, includes oral GLP-1 from $69/month, and is one of the more established platforms in the space.', href: '/glp1/reviews/hers', label: 'Hers review →' },
              { condition: 'If you want the most comprehensive program', text: 'Ro Body offers the best clinical support and coaching, but costs $400–600/month total when you add the membership fee.', href: '/glp1/reviews/ro', label: 'Ro Body review →' },
              { condition: 'Compare all GLP-1 platforms', text: 'See all four platforms side by side with pricing, medication options, and our picks.', href: '/glp1', label: 'GLP-1 comparison hub →' },
            ].map((item) => (
              <div key={item.href} className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-1">{item.condition}</p>
                  <p className="text-sm text-[#4A4A4C] leading-relaxed">{item.text}</p>
                </div>
                <Link href={item.href} className="btn-secondary text-sm whitespace-nowrap shrink-0">{item.label}</Link>
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
            <CTABlock programs={programs} concern="weightloss" title="Get started with Sprout Health" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
