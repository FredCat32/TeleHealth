import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import ComparisonTable from '@/components/ComparisonTable'
import CTABlock from '@/components/CTABlock'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: 'Hims vs Ro 2026: ED Treatment Cost, Meds & Which Is Worth It',
  description:
    'Hims vs Ro compared on ED treatment pricing, medication options, and who each is actually best for. Hims starts at $25/month (subscription). Ro starts at $34/month, no subscription required.',
}

const programs = getProgramsByIds(['hims', 'ro'])

const faqs = [
  {
    question: 'Is Hims or Ro cheaper for ED treatment?',
    answer:
      'It depends on whether you want a subscription. On a subscription, Hims can be cheaper per dose — generic sildenafil from $2/dose versus Ro at $4/dose, tadalafil from $4/dose versus Ro at $8/dose. But Hims charges significantly more for one-time orders without a subscription. Ro charges the same per-dose price whether you subscribe or not. For men who do not want a subscription commitment, Ro is the fairer comparison — and Roman or Rex MD are cheaper than both.',
  },
  {
    question: 'Does Hims or Ro have better medication options for ED?',
    answer:
      'Hims has more formats. It offers generic sildenafil and tadalafil in standard pills plus chewable formats, and daily low-dose tadalafil. Ro offers standard generic sildenafil and tadalafil, plus its Rise Gummies (chewable daily tadalafil). Neither platform offers branded medication like Cialis or Viagra at standard prices. If chewables specifically matter, Hims has more options. If you want daily tadalafil in a gummy format, Ro offers that.',
  },
  {
    question: 'Can I use Hims or Ro for weight loss as well as ED?',
    answer:
      'Ro is the better choice if you want both. The Ro Body program offers compounded semaglutide and tirzepatide for weight loss alongside ED treatment, all managed through one account. Hims does offer a weight loss program but it is less established than the Ro Body program. If GLP-1 weight loss treatment is relevant to you, Ro is the stronger platform for combining it with ED care.',
  },
  {
    question: 'Do Hims and Ro require a subscription for ED medication?',
    answer:
      'Hims requires a subscription to access its lowest per-dose pricing. One-time orders on Hims cost significantly more per dose. Ro does not require a subscription — you pay the same per-dose price on a one-time order as on a recurring plan. If you want flexibility without a monthly commitment, Ro is the better starting point.',
  },
  {
    question: 'Which platform is better for bundling ED with hair loss?',
    answer:
      'Hims. It offers combined ED and hair loss subscription plans that work out cheaper than buying each separately. Ro does not offer hair loss treatment. If you want to treat ED and hair loss through one platform, Hims is the clear choice. If you want ED and weight loss combined, Ro is the better option.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'methodology', label: 'How we compare' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'medications', label: 'Medications' },
  { id: 'subscription', label: 'Subscription model' },
  { id: 'beyond-ed', label: 'Beyond ED treatment' },
  { id: 'who-should-choose', label: 'Who should choose each' },
  { id: 'verdict', label: 'Our verdict' },
  { id: 'faq', label: 'FAQ' },
]

export default function HimsVsRoPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Hims vs Ro 2026: ED Treatment Cost, Meds & Which Is Worth It"
        description="Hims and Ro target different types of patients. Hims is built for men who want ED plus hair loss bundling or chewable formats. Ro is built for men who want ED alongside a GLP-1 weight loss program. Here is how they compare directly."
        publishDate="2026-04-09"
        updatedDate="2026-04-09"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare Hims and Ro" />
        </Suspense>

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For ED plus hair loss:</strong> Hims. Bundles both conditions at a combined price that undercuts buying separately.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For ED plus weight loss:</strong> Ro. The only major platform that combines ED treatment with a GLP-1 program.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For lowest price without a subscription:</strong> Neither — Roman or Rex MD are cheaper for standard generics.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For chewable formats:</strong> Hims. Ro does not offer as wide a range of chewable options.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> The right choice depends entirely on what you need beyond basic ED medication. Neither is the cheapest option for generic pills alone.</span>
            </li>
          </ul>
        </section>

        {/* Methodology */}
        <section id="methodology" className="my-8 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">How we compare these platforms</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            This comparison is independent. No brand has paid to appear first, reviewed this content before publication, or influenced our rankings. We compare on pricing, medication range, subscription model, and what each platform offers beyond basic ED treatment.
          </p>
        </section>

        {/* Overview */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Hims and Ro are both well-established telehealth platforms with strong reputations — but they are built for different patients. Hims is focused on men's health and has built its value proposition around bundling: ED plus hair loss in one plan, chewable medication formats, and a polished subscription experience. Ro operates under a broader health umbrella covering men's and women's health, and its main differentiator is the Ro Body weight loss program — compounded GLP-1 medication alongside ED treatment through one provider.
          </p>
          <p className="leading-relaxed mb-4">
            For straight generic ED medication with no bundling, neither platform is the cheapest option. Roman and Rex MD both undercut Hims and Ro on per-dose price. The case for choosing Hims or Ro over those platforms comes down entirely to whether you need more than just ED medication.
          </p>
          <p className="leading-relaxed">
            This comparison is most useful for men who are deciding between Hims and Ro specifically — either because they want bundling options or because they are already considering both platforms for separate health needs.
          </p>
        </section>

        {/* Comparison table */}
        <div className="my-8">
          <Suspense fallback={null}>
            <ComparisonTable programs={programs} highlightId="hims" />
          </Suspense>
        </div>

        {/* Pricing */}
        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Hims and Ro are priced similarly for basic ED medication, but the structure is different. Hims uses a subscription model with significantly higher one-time order pricing. Ro charges the same rate whether you subscribe or not.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Hims</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Ro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generic sildenafil (per dose)', 'From $2/dose (subscription)', 'From $4/dose (no subscription)'],
                  ['Generic tadalafil as-needed (per dose)', 'From $4/dose (subscription)', 'From $8/dose'],
                  ['Daily tadalafil', 'From ~$40/month', 'From $69/month (Rise Gummies)'],
                  ['ED + hair loss bundle', 'From ~$40/month', 'Not available'],
                  ['Subscription required?', 'Yes for best rates', 'No'],
                  ['Shipping', 'Standard USPS', 'Free standard'],
                ].map(([item, hims, ro], i) => (
                  <tr key={item} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{item}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8] font-medium">{hims}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{ro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            On a subscription, Hims is cheaper per dose for both sildenafil and tadalafil. The catch is that without a subscription, Hims one-time orders cost significantly more — roughly double the per-dose rate. Ro charges the same whether you set up a recurring plan or order once.
          </p>
          <p className="leading-relaxed">
            If you are certain you want a monthly subscription, Hims edges out Ro on per-dose price. If you want flexibility or are ordering for the first time, Ro's consistent pricing is more transparent. All prices are estimates — verify on each platform before ordering.
          </p>
        </section>

        {/* Medications */}
        <section id="medications">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Medications</h2>
          <p className="leading-relaxed mb-4">
            Both platforms prescribe generic sildenafil and generic tadalafil through async consultations with no video call required. The differences are in format and daily dosing options.
          </p>
          <p className="leading-relaxed mb-4">
            Hims offers chewable sildenafil (Hard Mints) in addition to standard pills — the only major platform with a wider chewable range. Chewables cost more per dose but some men prefer them for convenience or faster absorption. Hims also offers daily low-dose tadalafil at around $40/month.
          </p>
          <p className="leading-relaxed">
            Ro offers standard generic sildenafil and tadalafil pills, plus Rise Gummies — a chewable daily tadalafil format at $69/month. If you specifically want daily tadalafil as a chewable, both platforms offer a version of it, but Hims is cheaper for that use case.
          </p>
        </section>

        {/* Subscription */}
        <section id="subscription">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Subscription Model</h2>
          <p className="leading-relaxed mb-4">
            This is the most practically important difference for most men. Hims is designed around subscriptions. Its best pricing is subscription-only, and one-time orders cost nearly double per dose. You can cancel any time, but the pricing incentive to stay subscribed is strong.
          </p>
          <p className="leading-relaxed mb-4">
            Ro does not penalise you for ordering without a subscription. The per-dose price is the same either way. This makes Ro a better starting point if you want to try the medication once before committing, or if your usage is irregular enough that a monthly plan does not make sense.
          </p>
          <p className="leading-relaxed">
            Roman and Rex MD both operate the same no-subscription model as Ro, and at lower per-dose prices. If avoiding a subscription is your main priority and you only need standard ED generics, those platforms are worth checking before committing to either Hims or Ro.
          </p>
        </section>

        {/* Beyond ED */}
        <section id="beyond-ed">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Beyond ED: Where Each Platform Adds Value</h2>
          <p className="leading-relaxed mb-4">
            This is where Hims and Ro genuinely differentiate from each other and from cheaper alternatives.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
              <p className="text-sm font-semibold text-[#4A6950] mb-3">Hims adds value if you also need:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Hair loss treatment (finasteride, minoxidil) bundled with ED</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Chewable medication formats</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Mental health or skincare through the same platform</li>
              </ul>
            </div>
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-[#F7F4EF]">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Ro adds value if you also need:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>GLP-1 weight loss treatment (semaglutide, tirzepatide)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Coverage for both men and women under one account</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>A platform with structured ongoing medical monitoring</li>
              </ul>
            </div>
          </div>

          <p className="leading-relaxed">
            Research increasingly links obesity and metabolic health to ED. For men dealing with both conditions, Ro's ability to treat them under one provider is clinically meaningful, not just convenient.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#FAF8F5] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Not sure Hims or Ro is right for you?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 questions and get matched across all ED platforms — including options that may be cheaper than both Hims and Ro for your situation.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

        {/* Who should choose each */}
        <section id="who-should-choose">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Who Should Choose Each</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <h3 className="font-bold text-lg text-[#1C1C1E] mb-4">Hims</h3>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want to bundle ED and hair loss treatment</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want chewable medication formats</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You are happy with a subscription and want lower per-dose pricing</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want a polished app and brand experience</li>
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-bold text-lg text-[#1C1C1E] mb-4">Ro</h3>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want ED treatment alongside a GLP-1 weight loss program</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You do not want a subscription commitment</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You or your partner want women's health coverage under one account</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want structured ongoing medical monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section id="verdict">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Our Verdict</h2>
          <p className="leading-relaxed mb-4">
            There is no universal winner here — it comes down to what you need beyond basic ED medication. If you are treating hair loss as well, Hims's bundled plans are hard to beat. If weight management is also a priority, Ro is the only platform that handles both properly.
          </p>
          <p className="leading-relaxed mb-4">
            If you only need standard generic ED medication and price is the deciding factor, neither Hims nor Ro is the best choice. Roman offers free 2-day shipping at $4/dose with no subscription, and Rex MD goes as low as $2/dose. Both are cheaper for straightforward generic treatment.
          </p>
          <p className="leading-relaxed mb-6">
            Pick Hims for bundling and format variety. Pick Ro for weight loss alongside ED. Pick Roman or Rex MD if you just want the medication at the best price.
          </p>

          <div className="p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Want to see how both compare to Roman?</p>
            <p className="text-sm text-[#4A4A4C] mb-4">
              Roman undercuts both Hims and Ro on price for standard generics, with free 2-day shipping and no subscription required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ed/compare/hims-vs-roman" className="btn-secondary">Hims vs Roman →</Link>
              <Link href="/ed/compare/hims-vs-roman-vs-ro" className="btn-secondary">Hims vs Roman vs Ro →</Link>
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
            <CTABlock programs={programs} concern="ed" title="Compare Hims and Ro" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
