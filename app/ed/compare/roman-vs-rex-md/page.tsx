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
  alternates: { canonical: 'https://www.telehealthpick.com/ed/compare/roman-vs-rex-md' },
  title: 'Roman vs Rex MD 2026: Which Cheap ED Platform Is Worth It?',
  description:
    'Roman vs Rex MD compared side by side on price, shipping, medication options, and customer service. Which budget ED telehealth platform is actually worth using?',
}

const programs = getProgramsByIds(['roman', 'rexmd'])

const faqs = [
  {
    question: 'Is Roman or Rex MD cheaper for ED medication?',
    answer:
      'Rex MD is cheaper per dose — from $2/dose for generic sildenafil versus Roman at from $4/dose. However, Roman includes free 2-day shipping on every order, which Rex MD does not. If you factor in expedited shipping costs from Rex MD, the price gap narrows significantly. For most men ordering 6 doses per month, Roman often works out to similar or lower total cost once shipping is included.',
  },
  {
    question: 'Is Rex MD as reliable as Roman?',
    answer:
      'Roman is the more reliable option based on independent customer feedback. Rex MD has recurring complaints around slow customer service response times and difficulties obtaining refunds. Roman has a cleaner customer service track record and a more polished overall experience. Both use licensed US physicians and FDA-approved medication — the clinical quality is equivalent. The difference is in the service layer.',
  },
  {
    question: 'Do Roman and Rex MD both offer tadalafil and sildenafil?',
    answer:
      'Yes. Both platforms prescribe generic tadalafil (generic Cialis) and generic sildenafil (generic Viagra). Roman also offers daily low-dose tadalafil. Neither platform offers chewable formats — for those, Hims is the better option.',
  },
  {
    question: 'Do Roman or Rex MD require a subscription?',
    answer:
      'Neither platform requires a subscription. Both allow you to order as needed at the same per-dose price as a recurring order. This is an advantage both share over Hims, which requires a subscription to access its lowest pricing.',
  },
  {
    question: 'Which is better for customer service — Roman or Rex MD?',
    answer:
      'Roman. Independent reviews consistently rate Roman higher on customer service responsiveness. Rex MD has a pattern of complaints around slow response times and refund difficulties across multiple review platforms. If having reliable support matters to you, Roman is the safer choice even at a slightly higher per-dose price.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'methodology', label: 'How we compare' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'medications', label: 'Medications' },
  { id: 'shipping', label: 'Shipping' },
  { id: 'customer-service', label: 'Customer service' },
  { id: 'who-should-choose', label: 'Who should choose each' },
  { id: 'verdict', label: 'Our verdict' },
  { id: 'faq', label: 'FAQ' },
]

export default function RomanVsRexMDPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Roman vs Rex MD 2026: Which Cheap ED Platform Is Worth It?"
        description="Both Roman and Rex MD pitch themselves as the affordable option for generic ED medication. We compare them directly on price, shipping, service, and where each one falls short."
        publishDate="2026-01-15"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare Roman and Rex MD" />
        </Suspense>

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For lowest per-dose price:</strong> Rex MD starts at $2/dose vs Roman's $4/dose — but Rex MD doesn't include fast shipping.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For overall value including shipping:</strong> Roman. Free 2-day on every order closes most of the price gap.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For customer service reliability:</strong> Roman, clearly. Rex MD has a pattern of complaints that Roman does not.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> Roman wins on total value. Rex MD is only the better call if per-dose price is the sole factor and you are not in a hurry.</span>
            </li>
          </ul>
        </section>

        {/* Methodology */}
        <section id="methodology" className="my-8 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">How we compare these platforms</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            This comparison is independent. No brand has paid to appear first, reviewed this article before publication, or influenced our scoring. We rank platforms on pricing, medication selection, shipping, and customer service track record. Roman ranks higher here because it scores better across those criteria — not because of commission rates.
          </p>
        </section>

        {/* Overview */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Roman and Rex MD occupy the same corner of the ED telehealth market — both position themselves as the affordable, no-frills alternative to Hims. Both are fully async, no subscription required, licensed US physicians, FDA-approved generic medication. On paper they are nearly identical.
          </p>
          <p className="leading-relaxed mb-4">
            The differences that matter are in the details. Rex MD has a lower headline per-dose price. Roman has free 2-day shipping and a meaningfully better customer service record. When you factor total cost including shipping, Roman's price advantage over Rex MD is smaller than it looks — and on every non-price dimension, Roman comes out ahead.
          </p>
          <p className="leading-relaxed">
            This comparison is most useful for men who have already decided they want a budget platform without the bundle features of Hims, and are choosing between these two specifically.
          </p>
        </section>

        {/* Comparison table */}
        <div className="my-8">
          <Suspense fallback={null}>
            <ComparisonTable programs={programs} highlightId="roman" />
          </Suspense>
        </div>

        {/* Pricing */}
        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Per-dose, Rex MD is cheaper. Total cost including shipping is more nuanced.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Roman</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Rex MD</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generic sildenafil (per dose)', 'From $4/dose', 'From $2/dose'],
                  ['Generic tadalafil (per dose, as-needed)', 'From $4/dose', 'From $2/dose'],
                  ['Daily tadalafil (monthly)', '~$39/month', 'Not offered'],
                  ['Entry plan', 'From $16/month', 'Varies'],
                  ['Subscription required?', 'No', 'No'],
                  ['Shipping', 'Free 2-day — always', 'Standard USPS, extra for expedited'],
                ].map(([item, roman, rex], i) => (
                  <tr key={item} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{item}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8] font-medium">{roman}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{rex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            Rex MD's per-dose advantage is real — $2 versus $4 for sildenafil. At 6 doses per month that is a $12 difference. But Roman's free 2-day shipping is included on every order. Rex MD's standard USPS shipping costs extra if you want speed. Factor in expedited delivery and the gap narrows considerably or disappears.
          </p>
          <p className="leading-relaxed">
            All prices are estimates — verify current pricing on each platform before ordering.
          </p>
        </section>

        {/* Medications */}
        <section id="medications">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Medications</h2>
          <p className="leading-relaxed mb-4">
            Both platforms prescribe generic sildenafil and generic tadalafil — the only two medications most men need. Roman also offers daily low-dose tadalafil, which some men prefer for a more spontaneous approach rather than on-demand dosing. Rex MD does not offer daily tadalafil.
          </p>
          <p className="leading-relaxed">
            Neither platform offers chewable formats or branded medication. For those, Hims is the better option. For standard generics, both Roman and Rex MD cover what most men need.
          </p>
        </section>

        {/* Shipping */}
        <section id="shipping">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Shipping</h2>
          <p className="leading-relaxed mb-4">
            This is where Roman has a clear, unambiguous advantage. Free 2-day shipping is included on every Roman order — no minimum, no subscription required. Your medication arrives in 2 business days from dispatch, in discreet unmarked packaging.
          </p>
          <p className="leading-relaxed">
            Rex MD ships via standard USPS which takes 3–5 business days. Expedited options are available at extra cost. If delivery speed matters — if you are starting a new prescription and want it quickly, or if you have run out — Roman is the better choice. If you plan ahead and standard delivery is fine, Rex MD's shipping is adequate.
          </p>
        </section>

        {/* Customer service */}
        <section id="customer-service">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Customer Service</h2>
          <p className="leading-relaxed mb-4">
            This is the most significant non-price difference between the two platforms. Roman has a generally positive customer service reputation — responsive messaging, straightforward refund and cancellation processes, and a clean app experience.
          </p>
          <p className="leading-relaxed mb-4">
            Rex MD has recurring complaints across independent review platforms around slow response times and difficulty obtaining refunds. This does not mean every customer has a bad experience — many do not — but the pattern is consistent enough that it is worth factoring in before ordering.
          </p>
          <p className="leading-relaxed">
            If you ever need to adjust your prescription, request a refund, or resolve a billing issue, Roman is the lower-risk option.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#FAF8F5] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Not sure Roman or Rex MD is right for you?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 quick questions and get a personalised match across all ED platforms — including options with bundle features Roman and Rex MD don't offer.
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
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-lg text-[#1C1C1E]">Roman</h3>
                <span className="text-xs font-semibold bg-[#5B7A5F] text-white px-2 py-0.5 rounded-[6px]">Our pick</span>
              </div>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want fast delivery included without extra cost</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want daily tadalafil as an option</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Reliable customer service matters to you</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You want a cleaner app and brand experience</li>
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-bold text-lg text-[#1C1C1E] mb-4">Rex MD</h3>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Per-dose price is the only deciding factor</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You plan ahead and standard 3–5 day shipping is fine</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>You are ordering sildenafil or tadalafil only — no daily dose needed</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">!</span>Check independent reviews before ordering — customer service track record is mixed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section id="verdict">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Our Verdict</h2>
          <p className="leading-relaxed mb-4">
            Roman is the better platform. The per-dose price difference is real but smaller than it looks once you account for shipping — and on every other dimension (shipping speed, customer service, medication range, app experience) Roman comes out ahead.
          </p>
          <p className="leading-relaxed mb-4">
            Rex MD makes sense only if you are buying in quantity, happy with standard delivery timescales, and have done your own research on the customer service situation. At that point you are trading service quality for a moderate per-dose saving.
          </p>
          <p className="leading-relaxed mb-6">
            For most men choosing between these two, Roman is the lower-risk, better-value option.
          </p>

          <div className="p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Want to see how both compare to Hims?</p>
            <p className="text-sm text-[#4A4A4C] mb-4">
              Hims costs more per dose but adds hair loss bundling, chewable formats, and a more polished experience. Worth knowing if either of those features matter to you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/go/roman"
                rel="nofollow sponsored" className="btn-primary">Get started with Roman</Link>
              <Link href="/ed/compare/hims-vs-roman" className="btn-secondary">Hims vs Roman →</Link>
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
            <CTABlock programs={programs} concern="ed" title="Ready to get started?" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
