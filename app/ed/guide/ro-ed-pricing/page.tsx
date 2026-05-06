import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/ed/guide/ro-ed-pricing' },
  title: 'Ro ED Medication Cost 2026: What Does Ro Charge for Tadalafil and Sildenafil?',
  description:
    'Ro ED medication starts from $34/month. No subscription required. We break down Ro pricing for sildenafil and tadalafil, compare it to Roman, and explain when the higher price is actually worth it.',
}

const programs = getProgramsByIds(['ro', 'roman'])

const faqs = [
  {
    question: 'How much does Ro charge for ED medication?',
    answer:
      "Ro's generic sildenafil starts at around $4/dose with no subscription required. Generic tadalafil as-needed starts at around $8/dose, which is higher than Roman's $4/dose for the same medication. The entry point for a typical Ro ED order is around $34/month. Shipping is free. Ro does not accept insurance.",
  },
  {
    question: 'Is Ro more expensive than Roman for ED?',
    answer:
      'For tadalafil specifically, yes. Ro charges from $8/dose versus Roman at $4/dose. For sildenafil, the rates are more similar. Roman also includes free 2-day delivery, whereas Ro ships standard. If you only need ED medication, Roman is the better value. Ro makes sense when you also want the Ro Body weight loss program, which no other major ED platform offers.',
  },
  {
    question: 'Does Ro require a subscription for ED medication?',
    answer:
      'No. Like Roman and Rex MD, Ro lets you order ED medication without a subscription at the same price as a recurring order. This puts Ro ahead of Hims, which charges significantly more for one-time orders.',
  },
  {
    question: 'What is the Ro Body program and how much does it cost?',
    answer:
      "The Ro Body program is Ro's GLP-1 weight loss treatment offering. It includes prescription medication (semaglutide or tirzepatide), medical monitoring, and ongoing care. Pricing ranges from roughly $299/month for compounded semaglutide to $449/month for tirzepatide, though rates change frequently. This is separate from ED medication, which you can order independently.",
  },
  {
    question: 'Can I get both ED medication and weight loss treatment through Ro?',
    answer:
      "Yes, and this is Ro's main advantage. You manage both under one Ro account. ED medication and the Ro Body weight loss program are priced separately — you can start one and add the other later. No other major ED telehealth platform also offers a GLP-1 weight loss program.",
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick summary' },
  { id: 'ed-pricing', label: 'ED medication pricing' },
  { id: 'vs-roman', label: 'Ro vs Roman on cost' },
  { id: 'no-subscription', label: 'No subscription needed' },
  { id: 'body-program', label: 'Ro Body weight loss pricing' },
  { id: 'when-worth-it', label: 'When Ro is worth the cost' },
  { id: 'faq', label: 'FAQ' },
]

export default function RoEdPricingPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Ro ED Medication Cost 2026: What Does Ro Charge for Tadalafil and Sildenafil?"
        description="Ro charges more for ED medication than Roman or Rex MD. Whether that premium makes sense depends on what else you need. Here is a full Ro pricing breakdown and an honest take on when to use it."
        publishDate="2026-02-05"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare Ro and Roman" />
        </Suspense>

        {/* Quick summary */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Key numbers</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Generic sildenafil:</strong> From $4/dose. No subscription required.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Generic tadalafil (as-needed):</strong> From $8/dose. Higher than Roman's $4/dose.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Daily tadalafil (Rise Gummies):</strong> From $69/month.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Ro Body weight loss:</strong> $299–449/month depending on medication (separate from ED).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Shipping:</strong> Free standard. No insurance accepted.</span>
            </li>
          </ul>
        </section>

        <section className="my-6 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">About these prices</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            These figures are based on Ro's publicly listed pricing and are estimates. Ro updates pricing regularly, particularly for the Ro Body weight loss program. Verify current rates on Ro's website before ordering. This page is independent.
          </p>
        </section>

        {/* ED pricing */}
        <section id="ed-pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Ro ED Medication Pricing</h2>
          <p className="leading-relaxed mb-5">
            Ro prescribes generic tadalafil and sildenafil through an async consultation — no video call required. It also offers Rise Gummies, a chewable daily tadalafil format available on subscription.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Subscription?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generic sildenafil (as-needed)', 'From $4/dose', 'No'],
                  ['Generic tadalafil (as-needed)', 'From $8/dose', 'No'],
                  ['Daily tadalafil (Rise Gummies)', 'From $69/month', 'Yes'],
                  ['Shipping', 'Free standard', 'Included'],
                ].map(([med, price, sub], i) => (
                  <tr key={med} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{med}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{sub}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            The sildenafil rate is in line with Roman. The tadalafil rate is higher, at $8/dose versus Roman's $4/dose. Daily tadalafil via Rise Gummies costs more than Roman's daily tadalafil at $39/month. For tadalafil specifically, Roman is the cheaper option.
          </p>
        </section>

        {/* Ro vs Roman */}
        <section id="vs-roman">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Ro vs Roman on Cost</h2>
          <p className="leading-relaxed mb-5">
            For ED treatment alone, Roman is the better value. Here is how they compare directly:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Ro</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Roman</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sildenafil per dose', 'From $4/dose', 'From $4/dose'],
                  ['Tadalafil per dose', 'From $8/dose', 'From $4/dose'],
                  ['Daily tadalafil', '$69/month', '~$39/month'],
                  ['Subscription required?', 'No', 'No'],
                  ['Shipping', 'Free standard', 'Free 2-day'],
                  ['GLP-1 weight loss', 'Yes (Ro Body)', 'No'],
                  ['Hair loss treatment', 'No', 'Limited'],
                ].map(([factor, ro, roman], i) => (
                  <tr key={factor} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{factor}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{ro}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8] font-medium">{roman}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            On sildenafil, the two platforms are comparable. On tadalafil, Roman is significantly cheaper. Roman also ships 2-day for free, whereas Ro ships standard. The one area where Ro has a clear advantage is the Ro Body weight loss program, which Roman does not offer.
          </p>
          <p className="leading-relaxed">
            If ED medication is all you need, Roman is the right choice. If you are already using Ro for weight loss or want to address both conditions through one provider, Ro's ED pricing is a secondary consideration.
          </p>
        </section>

        {/* No subscription */}
        <section id="no-subscription">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">No Subscription Required</h2>
          <p className="leading-relaxed mb-4">
            Like Roman and Rex MD, Ro does not require a subscription for ED medication. You can order as-needed at the same per-dose price as a recurring plan. This is a meaningful advantage over Hims, which charges significantly more for one-time orders.
          </p>
          <p className="leading-relaxed">
            If you are starting treatment for the first time and want to try one order before committing to a monthly plan, Ro, Roman, and Rex MD all accommodate that without a pricing penalty.
          </p>
        </section>

        {/* Ro Body */}
        <section id="body-program">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Ro Body Weight Loss Pricing</h2>
          <p className="leading-relaxed mb-4">
            The Ro Body program is Ro's GLP-1 weight loss offering. It is a separate product from ED medication, but the two can be managed under one Ro account. This combination is Ro's main differentiator from every other ED telehealth platform.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Program</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Estimated monthly cost</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">What is included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Compounded semaglutide', '~$299/month*', 'Medication + monitoring'],
                  ['Tirzepatide', '~$449/month*', 'Medication + monitoring'],
                ].map(([program, cost, includes], i) => (
                  <tr key={program} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{program}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{cost}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-[#8A8A8C] mb-4">*Ro Body pricing changes frequently. Verify on Ro's website before enrolling.</p>
          <p className="leading-relaxed">
            The Ro Body pricing is competitive within the compounded GLP-1 market. Other telehealth platforms offering semaglutide range from $200–500/month, so Ro is mid-range. The included medical monitoring and ongoing care are part of what the price covers.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#FAF8F5] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Not sure Ro is right for you?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 questions to get matched to the best ED platform for your budget and situation.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

        {/* When worth it */}
        <section id="when-worth-it">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">When Ro Is Worth the Higher Cost</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <p className="text-sm font-semibold text-[#4A6950] mb-3">Choose Ro if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want ED and GLP-1 weight loss through one provider</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are already a Ro patient for another service</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want sildenafil specifically (Ro's rates match Roman)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Value a more comprehensive health platform</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Roman instead if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Only need tadalafil (Roman is $4/dose vs Ro's $8/dose)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want the fastest shipping (Roman's free 2-day)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Only need ED treatment with no other conditions to manage</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/go/ro"
                rel="nofollow sponsored" className="btn-primary">Get started with Ro</Link>
            <Link href="/ed/reviews/ro" className="btn-secondary">Full Ro review →</Link>
            <Link href="/ed/compare/hims-vs-ro" className="btn-secondary">Hims vs Ro →</Link>
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
            <CTABlock programs={programs} concern="ed" title="Compare Ro and Roman" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
