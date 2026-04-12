import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  title: 'Is Hims Worth It? Honest Answer for ED, Hair Loss & Weight Loss',
  description:
    'Is Hims worth it in 2026? For ED: yes if you want bundles or chewables, no if price is your priority. For hair loss: yes. For weight loss: mixed. Full breakdown by use case.',
}

const programs = getProgramsByIds(['hims', 'roman'])

const faqs = [
  {
    question: 'Is Hims worth it for ED treatment?',
    answer:
      'It depends on what you need. If you want standard generic tadalafil or sildenafil at the lowest price, Hims is not the best option — Roman and Rex MD are cheaper. If you want chewable formats, hair loss bundled with ED, or a polished subscription experience, Hims is worth the higher price. For most men who only need basic ED medication, Roman is better value.',
  },
  {
    question: 'Is Hims worth it for hair loss?',
    answer:
      'Yes, for most men. Hims offers finasteride and minoxidil at competitive prices through a straightforward async consultation. The real value is the bundle — if you also need ED treatment, combining both through Hims typically costs less than buying from two separate platforms. Keeps is the main alternative and is slightly cheaper for hair loss alone.',
  },
  {
    question: 'Is Hims worth it for weight loss?',
    answer:
      'Mixed. Hims offers GLP-1 weight loss treatment but it is not their core product. Ro has a more established and comprehensive weight loss program through Ro Body. If GLP-1 weight loss is your primary goal, Ro is the better platform. If you are already a Hims subscriber and want to add weight loss treatment without switching providers, it is a reasonable option.',
  },
  {
    question: 'Is Hims legitimate?',
    answer:
      'Yes. Hims is a publicly traded US telehealth company (NYSE: HIMS) founded in 2017. It employs licensed physicians across all 50 states and fulfils prescriptions through FDA-regulated pharmacies. It has served millions of patients and has one of the strongest track records of any men\'s telehealth platform.',
  },
  {
    question: 'What is the catch with Hims?',
    answer:
      'Two things. First, Hims requires a subscription for its best pricing — one-time orders cost significantly more per dose. Second, the base price for ED medication is higher than Roman or Rex MD for the same generic. If you just want cheap generic tadalafil or sildenafil without a subscription, there are better options. Hims earns its price when you use the bundle features.',
  },
  {
    question: 'Is Hims cheaper than going to a regular doctor?',
    answer:
      'Usually yes, significantly. A traditional doctor visit for ED can cost $150-300 without insurance, plus the prescription cost on top. Hims combines the consultation and prescription into one monthly cost starting around $25, with no insurance needed and no appointment to schedule.',
  },
]

const tocItems = [
  { id: 'verdict', label: 'Short answer' },
  { id: 'for-ed', label: 'Is Hims worth it for ED?' },
  { id: 'for-hair', label: 'Is Hims worth it for hair loss?' },
  { id: 'for-weight-loss', label: 'Is Hims worth it for weight loss?' },
  { id: 'who-should-skip', label: 'Who should skip Hims' },
  { id: 'vs-alternatives', label: 'Hims vs the alternatives' },
  { id: 'faq', label: 'FAQ' },
]

export default function IsHimsWorthItPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Is Hims Worth It? Honest Answer for ED, Hair Loss & Weight Loss"
        description="Hims is a legitimate platform with real strengths. Whether it is worth it depends entirely on what you need it for. Here is a straight answer broken down by use case."
        publishDate="2026-04-10"
        updatedDate="2026-04-10"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare Hims and Roman" />
        </Suspense>

        {/* Short answer */}
        <section id="verdict" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Short answer</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For ED only:</strong> Not the best value. Roman and Rex MD are cheaper for the same generic medication.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For ED + hair loss:</strong> Yes. The bundle pricing makes Hims genuinely competitive and more convenient than two separate platforms.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For hair loss alone:</strong> Yes. Solid option, though Keeps is slightly cheaper if ED is not a concern.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For weight loss:</strong> Decent but Ro is better for GLP-1 specifically.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>For chewable ED medication:</strong> Yes — Hims is the only major platform that offers chewable sildenafil.</span>
            </li>
          </ul>
        </section>

        <section className="my-6 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">How we evaluated this</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            This page is independent. Hims has not reviewed or influenced this content. We compared Hims against Roman, Rex MD, Ro, and Keeps on pricing, medication options, and overall value. Where Hims wins, we say so. Where it does not, we say that too.
          </p>
        </section>

        {/* For ED */}
        <section id="for-ed">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Is Hims Worth It for ED?</h2>
          <p className="leading-relaxed mb-4">
            For standard generic ED medication — tadalafil or sildenafil — Hims is not the cheapest option. Roman starts at $22/month with free 2-day shipping and no subscription required. Rex MD goes as low as $19/month. Hims requires a subscription to access its best per-dose rate, and one-time orders without a subscription cost significantly more.
          </p>
          <p className="leading-relaxed mb-4">
            That said, Hims has two genuine advantages for ED that the cheaper platforms do not offer:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">1.</span>
              <span><strong>Chewable formats.</strong> Hims Hard Mints are chewable sildenafil tablets — the only major telehealth platform offering this. Some men prefer chewables because they work faster and are easier to take discreetly. If chewables matter to you, Hims is your only mainstream option.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">2.</span>
              <span><strong>Bundle value.</strong> If you are already treating or considering treating hair loss, combining both through Hims typically costs less than paying for each separately.</span>
            </li>
          </ul>
          <p className="leading-relaxed">
            If neither of those applies to you and you just want generic tadalafil or sildenafil at the best price, Roman is the better call.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">ED price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Subscription needed?</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Chewables?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hims', 'From $25/month', 'Yes for best rates', 'Yes'],
                  ['Roman', 'From $22/month', 'No', 'No'],
                  ['Rex MD', 'From $19/month', 'No', 'No'],
                ].map(([platform, price, sub, chew], i) => (
                  <tr key={platform} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{platform}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{sub}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{chew}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* For hair loss */}
        <section id="for-hair">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Is Hims Worth It for Hair Loss?</h2>
          <p className="leading-relaxed mb-4">
            Yes, for most men. Hims offers finasteride (the most effective medication for male pattern hair loss) and minoxidil through an async online consultation. Pricing is competitive and the process is straightforward — no video call, prescription reviewed within hours, medication shipped to your door.
          </p>
          <p className="leading-relaxed mb-4">
            The main competitor is Keeps, which focuses exclusively on hair loss and is slightly cheaper for finasteride alone. If hair loss is your only concern, Keeps is worth comparing. But if you also want ED treatment, the Hims bundle typically undercuts buying from Hims and Keeps separately.
          </p>
          <p className="leading-relaxed">
            One thing worth knowing: finasteride takes 3 to 6 months to show results. Any platform you use for hair loss is a long-term commitment. Hims makes it easy to stay on track with automatic refills and async check-ins with your prescriber.
          </p>
        </section>

        {/* For weight loss */}
        <section id="for-weight-loss">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Is Hims Worth It for Weight Loss?</h2>
          <p className="leading-relaxed mb-4">
            Mixed verdict. Hims offers GLP-1 weight loss treatment but it is not where the platform has its deepest expertise. Ro's Body program — compounded semaglutide and tirzepatide with ongoing medical monitoring — is the more established weight loss offering in this space.
          </p>
          <p className="leading-relaxed mb-4">
            Where Hims makes sense for weight loss: if you are already a Hims subscriber for ED or hair loss and want to add GLP-1 treatment without managing a separate platform. The convenience of keeping everything in one place has real value.
          </p>
          <p className="leading-relaxed">
            If weight loss is your primary goal and you are starting fresh, compare Ro and the dedicated GLP-1 platforms before defaulting to Hims.
          </p>
        </section>

        {/* Who should skip */}
        <section id="who-should-skip">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Who Should Skip Hims</h2>
          <div className="p-5 rounded-[12px] bg-[#F7F4EF] border border-[#E8E7E3] mb-4">
            <ul className="text-sm text-[#4A4A4C] space-y-3">
              <li className="flex gap-3">
                <span className="text-[#8A8A8C] mt-0.5">✗</span>
                <span><strong>You only need ED medication and price is the priority.</strong> Roman at $22/month or Rex MD at $19/month are cheaper for the same generic tadalafil or sildenafil with no subscription required.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8A8A8C] mt-0.5">✗</span>
                <span><strong>You do not want a subscription.</strong> Hims one-time order pricing is significantly higher. Roman and Rex MD charge the same whether you subscribe or not.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8A8A8C] mt-0.5">✗</span>
                <span><strong>You want fast delivery.</strong> Hims ships standard USPS at 3-5 business days. Roman ships free 2-day on every order.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8A8A8C] mt-0.5">✗</span>
                <span><strong>You need testosterone treatment.</strong> Hims does not offer TRT. Roman and Ro both do.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8A8A8C] mt-0.5">✗</span>
                <span><strong>GLP-1 weight loss is your main goal.</strong> Ro Body is the stronger dedicated program.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Mid-article CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#FAF8F5] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Not sure Hims is the right fit?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 questions and get matched to the best platform for your specific situation — whether that ends up being Hims or something cheaper.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

        {/* Vs alternatives */}
        <section id="vs-alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Hims vs the Alternatives</h2>
          <div className="space-y-3">
            {[
              {
                condition: 'Hims vs Roman',
                text: 'Roman is cheaper for ED medication, ships faster, and has no subscription requirement. Hims wins on chewables and hair loss bundling. For most men who only need ED treatment, Roman is the better call.',
                href: '/ed/compare/hims-vs-roman',
                label: 'Full comparison →',
              },
              {
                condition: 'Hims vs Ro',
                text: 'Hims is better for ED + hair loss. Ro is better for ED + weight loss. Neither is the cheapest for ED alone.',
                href: '/ed/compare/hims-vs-ro',
                label: 'Full comparison →',
              },
              {
                condition: 'Hims vs Rex MD',
                text: 'Rex MD is the cheapest option at $19/month. No bundles, no chewables, no frills — just generic ED medication at the lowest price.',
                href: '/ed/compare/roman-vs-rex-md',
                label: 'See Roman vs Rex MD →',
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
