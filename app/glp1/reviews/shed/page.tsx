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
  alternates: { canonical: 'https://www.telehealthpick.com/glp1/reviews/shed' },
  title: 'ShedRx Review 2026: GLP-1 Weight Loss, Pricing & Is It Worth It?',
  description:
    'ShedRx offers compounded semaglutide and tirzepatide starting at $199/month — with oral options, a money-back guarantee, and FSA eligibility. Our full review covers pricing, how it works, and who it\'s best for.',
}

const programs = getProgramsByIds(['shed'])

const faqs = [
  {
    question: 'How much does ShedRx cost per month?',
    answer:
      'ShedRx GLP-1 programs start at $199/month. Pricing varies depending on the medication (semaglutide vs tirzepatide), format (injection vs oral), and dose. The all-in monthly price typically includes medication, supplies, and care team access — unlike platforms that charge a separate membership fee on top of medication.',
  },
  {
    question: 'Does ShedRx offer oral GLP-1 medications?',
    answer:
      'Yes — ShedRx is one of the few platforms that offers GLP-1 medications in oral formats including lozenges and sublingual drops, in addition to standard injectable options. Oral formats are appealing for people who want to avoid needles entirely.',
  },
  {
    question: 'What is ShedRx\'s money-back guarantee?',
    answer:
      'ShedRx offers a 10% body weight money-back guarantee — if you don\'t lose at least 10% of your starting body weight while following the program, you can get a refund. Specific terms and conditions apply; verify the current policy on their website before starting.',
  },
  {
    question: 'Is ShedRx FSA or HSA eligible?',
    answer:
      'Yes. ShedRx accepts FSA and HSA cards for payment. This can meaningfully reduce the effective out-of-pocket cost for people who have flexible spending accounts, since FSA/HSA funds use pre-tax dollars.',
  },
  {
    question: 'Does ShedRx offer anything besides weight loss?',
    answer:
      'Yes. ShedRx also offers hair loss treatments (gender-specific serums and tablets) and longevity treatments including NAD+, sermorelin, and other compounds. It\'s one of the broader telehealth platforms in this space, not just a GLP-1 provider.',
  },
  {
    question: 'How does ShedRx compare to Hers and Ro Body?',
    answer:
      'ShedRx starts at $199/month all-in, which is higher than Hers ($165/month annual) but lower than Ro Body\'s combined membership + medication cost ($400–600/month). ShedRx\'s key advantages are the oral medication options, money-back guarantee, and FSA eligibility. Hers is women-only; ShedRx serves both men and women.',
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
  { id: 'alternatives', label: 'How ShedRx compares' },
  { id: 'faq', label: 'FAQ' },
]

const subScores = [
  { label: 'Pricing', score: 4.0, note: 'All-in from $199/month, FSA eligible' },
  { label: 'Medication variety', score: 4.6, note: 'Injections, lozenges, and oral drops' },
  { label: 'Consultation', score: 4.2, note: 'Async intake, licensed providers' },
  { label: 'Ongoing support', score: 4.3, note: 'Care team access + coaching' },
  { label: 'Platform breadth', score: 4.5, note: 'Weight loss + hair + longevity' },
]

export default function ShedRxReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="ShedRx Review 2026: GLP-1 Weight Loss Program"
        description="Our in-depth review of ShedRx — covering compounded semaglutide and tirzepatide pricing, oral medication options, the money-back guarantee, and who this platform is actually best for."
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
              <RatingStars rating={4.3} showNumber={true} />
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-[#E8E7E3]" />
            <p className="text-sm text-[#4A4A4C] leading-relaxed max-w-sm">
              ShedRx stands out for its oral GLP-1 options, money-back guarantee, and FSA eligibility — features most competitors don't offer. Best for people who want flexibility in how they take their medication and want the added confidence of a results guarantee.
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
          <CTABlock programs={programs} concern="weightloss" title="Get started with ShedRx" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> People who want oral GLP-1 options (no needles), FSA/HSA eligibility, or the added confidence of a money-back guarantee.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> You want the absolute lowest monthly price — Sprout Health starts at $149/month.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> One of the most flexible GLP-1 platforms available. The oral options and money-back guarantee are genuinely differentiating.</span>
            </li>
          </ul>
        </section>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            ShedRx (tryshed.com) is a telehealth platform focused on GLP-1 weight loss, with an unusually broad range of medication formats and a wider product catalogue than most competitors. Where most GLP-1 telehealth platforms offer injectable semaglutide and call it done, ShedRx adds oral lozenges and sublingual drops — a significant advantage for people who are uncomfortable with self-injecting.
          </p>
          <p className="leading-relaxed mb-4">
            Beyond GLP-1 medications, ShedRx also offers hair loss treatments and longevity therapies including NAD+ and sermorelin — making it one of the more comprehensive telehealth platforms in the men's and women's wellness space.
          </p>
          <p className="leading-relaxed">
            The platform accepts FSA and HSA payment, which is uncommon in this space and can reduce the effective cost meaningfully. It also backs its program with a 10% body weight money-back guarantee — which signals genuine confidence in results.
          </p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            ShedRx programs start at $199/month. Unlike Ro Body, there is no separate membership fee — the price covers medication, supplies, and care team access. Pricing varies by medication type and format.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Option</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Starting price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Compounded semaglutide (injection)', 'From $199/month', 'Most common starting option'],
                  ['Compounded semaglutide (oral lozenge/drops)', 'From $199/month', 'Same active ingredient, no needles'],
                  ['Compounded tirzepatide', 'From $299/month', 'Higher efficacy, higher price'],
                  ['Brand-name (Wegovy, Zepbound)', 'Varies', 'Available where eligible'],
                  ['Shipping', 'Free', 'Fast shipping, discreet packaging'],
                  ['FSA/HSA accepted', 'Yes', 'Pre-tax dollars reduce effective cost'],
                ].map(([option, price, note], i) => (
                  <tr key={option} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{option}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-[#EEF4EE] border border-[#D4E4D5] rounded-[10px]">
            <p className="text-sm text-[#1C1C1E]">
              <strong>FSA/HSA tip:</strong> If you have a flexible spending or health savings account, ShedRx accepts these cards directly. At $199/month, using pre-tax FSA dollars can effectively reduce the cost by 20–30% depending on your tax bracket.
            </p>
          </div>
        </section>

        <section id="medications">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Medication Options</h2>
          <p className="leading-relaxed mb-4">
            ShedRx's biggest differentiator is medication format variety. Most GLP-1 platforms only offer weekly subcutaneous injections. ShedRx adds:
          </p>
          <div className="space-y-4 mb-6">
            {[
              { name: 'Injectable semaglutide', desc: 'Standard weekly subcutaneous injection. Most widely studied format, same as Ozempic/Wegovy. Best efficacy data.' },
              { name: 'Oral lozenges', desc: 'Dissolves under the tongue or against the cheek. No needles, no refrigeration concerns. Convenient for travel.' },
              { name: 'Sublingual drops', desc: 'Liquid format administered under the tongue. Alternative for people who prefer not to use lozenges or injections.' },
              { name: 'Compounded tirzepatide', desc: 'Targets two receptors (GLP-1 and GIP) vs semaglutide\'s one. Clinical trials show greater average weight loss. Higher price point.' },
              { name: 'Combination therapies', desc: 'Metformin + naltrexone combinations and other adjunct medications for metabolic support.' },
            ].map((item) => (
              <div key={item.name} className="flex gap-4 p-4 bg-white border border-[#E8E7E3] rounded-[10px]">
                <span className="text-[#5B7A5F] font-bold mt-0.5 shrink-0">→</span>
                <div>
                  <p className="font-semibold text-[#1C1C1E] text-sm">{item.name}</p>
                  <p className="text-sm text-[#4A4A4C] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="leading-relaxed text-sm text-[#4A4A4C]">
            Your prescribing clinician will recommend the appropriate medication and format based on your health history and preferences. Not all formats may be available in all states.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Complete online health assessment', desc: 'Answer questions covering your weight history, health conditions, current medications, and goals. No video call required.' },
              { step: '2', title: 'Licensed provider review', desc: 'A licensed US clinician reviews your intake and determines eligibility. They\'ll recommend a medication and starting dose based on your profile.' },
              { step: '3', title: 'Receive your medication', desc: 'Medication ships fast in discreet packaging directly to your door. ShedRx emphasizes quick turnaround — typically within a week of approval.' },
              { step: '4', title: 'Follow your treatment plan', desc: 'Start at your prescribed dose. GLP-1 medications are titrated up gradually over weeks to months to minimise side effects and reach the therapeutic dose.' },
              { step: '5', title: 'Ongoing care team access', desc: 'Message your care team with questions, report side effects, or request dose adjustments. Unlimited follow-ups are included.' },
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
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose ShedRx if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want oral GLP-1 options (no injections)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want to use FSA or HSA funds</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want a results-backed money-back guarantee</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Also want to address hair loss under one platform</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want tirzepatide as an option alongside semaglutide</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want the lowest starting price — <Link href="/glp1/reviews/sprout" className="text-[#5B7A5F] underline">Sprout starts at $149/month</Link></li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Are a woman looking for a women-only platform — consider <Link href="/glp1/reviews/hers" className="text-[#5B7A5F] underline">Hers</Link></li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want insurance navigation for brand-name GLP-1s — consider <Link href="/glp1/reviews/ro" className="text-[#5B7A5F] underline">Ro Body</Link></li>
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
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Oral GLP-1 options (lozenges and drops) — rare in this space</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>10% body weight money-back guarantee</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>FSA/HSA accepted</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No separate membership fee — all-in pricing</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Also covers hair loss and longevity</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Available to men and women</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Not the cheapest option — Sprout Health starts $50/month lower</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Money-back guarantee has conditions — read the terms carefully</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Oral GLP-1 formats have less clinical trial data than injections</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Not available in all US states</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How ShedRx Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">See how ShedRx stacks up against the other GLP-1 platforms we track.</p>
          <div className="space-y-3">
            {[
              { condition: 'If you want the lowest starting price', text: 'Sprout Health starts at $149/month for compounded semaglutide — $50/month cheaper than ShedRx at baseline. Good option if budget is the primary concern.', href: '/glp1/reviews/sprout', label: 'Sprout Health review →' },
              { condition: 'If you are a woman and want a women-only platform', text: 'Hers is women-only and includes oral GLP-1 options starting from $69/month, plus other women\'s health services.', href: '/glp1/reviews/hers', label: 'Hers review →' },
              { condition: 'If you want the most structured clinical program', text: 'Ro Body offers the most comprehensive ongoing support — but costs significantly more when you add the membership fee to medication.', href: '/glp1/reviews/ro', label: 'Ro Body review →' },
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
            <CTABlock programs={programs} concern="weightloss" title="Get started with ShedRx" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
