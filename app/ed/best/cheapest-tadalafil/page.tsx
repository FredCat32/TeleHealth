import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/ed/best/cheapest-tadalafil' },
  title: 'Cheapest Tadalafil Online 2026: Platform-by-Platform Price Breakdown',
  description:
    'Where to find the cheapest generic tadalafil in 2026. We compared Rex MD, Roman, Hims, and Ro on per-dose price, daily tadalafil cost, and total cost with shipping.',
}

const programs = getProgramsByIds(['rexmd', 'roman', 'hims', 'ro'])

const faqs = [
  {
    question: 'Which telehealth platform has the cheapest tadalafil?',
    answer:
      'Rex MD has the lowest per-dose price for generic tadalafil as-needed, starting around $2/dose. Roman starts at around $4/dose but includes free 2-day shipping. When you factor in shipping costs, the gap between Rex MD and Roman is smaller than it looks. For daily tadalafil, Roman is the better deal at around $39/month.',
  },
  {
    question: 'What is generic tadalafil and is it the same as Cialis?',
    answer:
      'Generic tadalafil is the active ingredient in Cialis. It is the exact same molecule, manufactured to the same FDA standards, just without the brand name. Telehealth platforms prescribe generic tadalafil because it costs a fraction of branded Cialis. There is no clinical difference in how it works.',
  },
  {
    question: 'Should I get tadalafil as-needed or daily?',
    answer:
      'As-needed tadalafil (typically 10mg or 20mg) is taken 30 minutes before sex and lasts up to 36 hours. Daily tadalafil (2.5mg or 5mg) is taken every day and maintains a constant level in your system so timing is not a factor. Daily dosing tends to cost more per month overall but removes the planning aspect. Most men start with as-needed and switch to daily if timing becomes an issue.',
  },
  {
    question: 'Do I need a subscription to get cheap tadalafil?',
    answer:
      'No. Both Rex MD and Roman let you order without a subscription at the same per-dose price as a recurring order. Hims requires a subscription to access its lower pricing. If you want flexibility without a monthly commitment, Rex MD or Roman are the better options.',
  },
  {
    question: 'Does insurance cover generic tadalafil from telehealth platforms?',
    answer:
      'None of the major ED telehealth platforms accept insurance. However, generic tadalafil is cheap enough that paying out of pocket is often less hassle than going through insurance. If cost is a significant concern, check GoodRx prices at local pharmacies as a comparison point.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'price-table', label: 'Price comparison' },
  { id: 'per-dose', label: 'As-needed pricing' },
  { id: 'daily', label: 'Daily tadalafil pricing' },
  { id: 'shipping', label: 'True cost with shipping' },
  { id: 'no-subscription', label: 'Subscription requirements' },
  { id: 'verdict', label: 'Bottom line' },
  { id: 'faq', label: 'FAQ' },
]

export default function CheapestTadalafilPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Cheapest Tadalafil Online 2026: Platform-by-Platform Price Breakdown"
        description="Generic tadalafil prices vary more than you would expect across telehealth platforms. We broke down per-dose costs, daily tadalafil pricing, and total cost including shipping so you can find the actual cheapest option."
        publishDate="2026-01-10"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare tadalafil prices" />
        </Suspense>

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Cheapest per dose:</strong> Rex MD at around $2/dose for as-needed tadalafil.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best total value (with shipping):</strong> Roman at $4/dose with free 2-day on every order. The gap with Rex MD shrinks once shipping is counted.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Cheapest daily tadalafil:</strong> Roman at around $39/month. Rex MD does not offer daily tadalafil.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>No subscription required:</strong> Both Rex MD and Roman. Hims requires a subscription for its best rates.</span>
            </li>
          </ul>
        </section>

        {/* Methodology */}
        <section className="my-8 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">How we compare prices</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            Prices are taken from each platform's publicly listed pricing pages. Telehealth prices change regularly, so treat these as directional comparisons rather than exact quotes. We always list total cost including shipping where relevant because that is what you actually pay. Verify current pricing on each platform before ordering.
          </p>
        </section>

        {/* Price table */}
        <section id="price-table">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Price Comparison: All Major Platforms</h2>
          <p className="leading-relaxed mb-5">
            Here is how the four main platforms compare on tadalafil pricing. Rex MD wins on per-dose price. Roman wins on total cost when you include shipping.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">As-needed per dose</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Daily tadalafil</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Subscription needed?</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Shipping</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rex MD', 'From $2/dose', 'Not available', 'No', 'Standard USPS, paid expedited'],
                  ['Roman', 'From $4/dose', '~$39/month', 'No', 'Free 2-day, every order'],
                  ['Hims', 'From $5/dose (subscription)', 'Available', 'Yes for best rates', 'Standard included'],
                  ['Ro', 'From $4/dose', 'Available', 'No', 'Free standard shipping'],
                ].map(([platform, dose, daily, sub, ship], i) => (
                  <tr key={platform} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#1C1C1E]">{platform}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{dose}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{daily}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{sub}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{ship}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#8A8A8C]">All prices are estimates. Verify on each platform before ordering.</p>
        </section>

        {/* As-needed */}
        <section id="per-dose">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">As-Needed Tadalafil: Per-Dose Pricing</h2>
          <p className="leading-relaxed mb-4">
            As-needed tadalafil (10mg or 20mg) is what most men start with. You take it before sex and it stays active for up to 36 hours. This is where Rex MD has its biggest price advantage.
          </p>
          <p className="leading-relaxed mb-4">
            Rex MD currently lists generic tadalafil from around $2/dose. Roman starts at around $4/dose. Both let you order without a subscription. At 4 doses per month, that is an $8 difference. At 8 doses per month, it is $16.
          </p>
          <p className="leading-relaxed mb-4">
            Hims requires a subscription for its lowest per-dose rate. Without a subscription, individual Hims orders cost more per dose than both Rex MD and Roman. If you are buying as-needed medication without committing to a monthly plan, Hims is not the cheapest option.
          </p>
          <p className="leading-relaxed">
            Ro sits in similar pricing territory to Roman, with free standard shipping included. Not as fast as Roman's 2-day but an option worth checking if Roman is out of stock or if you are already using Ro for another condition.
          </p>
        </section>

        {/* Daily tadalafil */}
        <section id="daily">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Daily Tadalafil Pricing</h2>
          <p className="leading-relaxed mb-4">
            Daily tadalafil (2.5mg or 5mg) is taken every day rather than before sex. Because the dose is lower, a 30-day supply costs more than a handful of higher-dose as-needed doses, but the experience is different enough that many men prefer it.
          </p>
          <p className="leading-relaxed mb-4">
            Roman is the only budget platform that offers daily tadalafil, at around $39/month. Rex MD does not offer daily tadalafil. If you want daily dosing from a low-cost platform, Roman is the straightforward choice.
          </p>
          <p className="leading-relaxed">
            Hims and Ro both offer daily tadalafil. Hims bundles it into subscription plans that include other services. If daily tadalafil is all you need, Roman at ~$39/month is the cleaner, cheaper option.
          </p>
        </section>

        {/* Shipping */}
        <section id="shipping">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">True Cost: Why Shipping Changes the Numbers</h2>
          <p className="leading-relaxed mb-4">
            This is the part most tadalafil price comparisons miss. Rex MD has the lowest per-dose price, but standard USPS shipping is not free, and it takes 3 to 5 business days. If you want faster delivery, expedited shipping costs extra.
          </p>
          <p className="leading-relaxed mb-4">
            Roman charges more per dose ($4 versus $2) but ships every order free in 2 business days. For a man ordering 6 doses per month:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">6 doses (medication)</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Shipping</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rex MD (standard)', '~$12', 'Paid (varies)', 'Depends on shipping choice'],
                  ['Rex MD (expedited)', '~$12', '~$10–15 extra', '~$22–27 total'],
                  ['Roman', '~$24', 'Free 2-day', '~$24 total'],
                ].map(([platform, meds, ship, total], i) => (
                  <tr key={platform} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{platform}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{meds}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{ship}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium bg-[#F8FAF8]">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed">
            Rex MD with standard USPS shipping is genuinely cheaper if you plan ahead and do not mind a 3–5 day wait. Rex MD with expedited shipping costs about the same as Roman or more. For most men who order monthly and want fast delivery, Roman works out to comparable or better value.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#FAF8F5] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Want a personalised recommendation?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 questions and get matched to the best ED platform for your budget and preferences.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

        {/* Subscription */}
        <section id="no-subscription">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Do You Need a Subscription?</h2>
          <p className="leading-relaxed mb-4">
            Rex MD and Roman both let you order tadalafil without a subscription at the same price you would pay on a recurring plan. This is worth calling out because Hims uses a different model: its lowest per-dose pricing is subscription-only. Without a subscription, a single Hims order costs more per dose than either Rex MD or Roman.
          </p>
          <p className="leading-relaxed">
            If you want to order once, see how tadalafil works for you, and then decide whether to set up a recurring order, Rex MD and Roman are the better starting points. You are not locked in to anything.
          </p>
        </section>

        {/* Verdict */}
        <section id="verdict">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Bottom Line</h2>
          <p className="leading-relaxed mb-4">
            For the lowest possible per-dose price on as-needed tadalafil, Rex MD wins at around $2/dose. If you are fine with standard USPS delivery and are ordering in advance, that is a real saving.
          </p>
          <p className="leading-relaxed mb-4">
            For total cost including fast shipping, Roman is the better deal for most people. $4/dose with free 2-day delivery on every order beats paying $2/dose plus $10–15 for expedited shipping.
          </p>
          <p className="leading-relaxed mb-6">
            For daily tadalafil specifically, Roman is the only low-cost option at around $39/month. Rex MD does not offer it.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-2">Best per-dose price</p>
              <p className="font-bold text-lg text-[#1C1C1E] mb-2">Rex MD</p>
              <p className="text-sm text-[#4A4A4C] mb-4">From $2/dose. No subscription. Standard USPS shipping or paid expedited.</p>
              <Link href="/go/rexmd"
                rel="nofollow sponsored" className="btn-secondary text-sm">Get started with Rex MD</Link>
            </div>
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-[#F7F4EF]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-2">Best total value</p>
              <p className="font-bold text-lg text-[#1C1C1E] mb-2">Roman</p>
              <p className="text-sm text-[#4A4A4C] mb-4">From $4/dose. No subscription. Free 2-day shipping on every order. Daily tadalafil available.</p>
              <Link href="/go/roman"
                rel="nofollow sponsored" className="btn-primary text-sm">Get started with Roman</Link>
            </div>
          </div>

          <div className="p-5 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="text-sm font-semibold text-[#1C1C1E] mb-1">Not sure which is right for you?</p>
            <p className="text-sm text-[#4A4A4C] mb-3">See the full side-by-side comparison of how Roman and Rex MD stack up across pricing, shipping, and service.</p>
            <Link href="/ed/compare/roman-vs-rex-md" className="btn-secondary text-sm">Roman vs Rex MD full comparison →</Link>
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
            <CTABlock programs={programs} concern="ed" title="Compare tadalafil prices" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
