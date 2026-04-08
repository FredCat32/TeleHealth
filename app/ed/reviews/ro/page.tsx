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
  title: 'Ro Review 2026: ED Pricing, Weight Loss & Is It Worth It?',
  description:
    'Ro ED treatment starts from $34/month. No subscription, no video call. Also covers GLP-1 weight loss. We compare Ro to Roman and break down when the higher price is actually worth it.',
}

const programs = getProgramsByIds(['ro'])

const faqs = [
  {
    question: 'Is Ro a legitimate telehealth platform?',
    answer:
      'Yes. Ro is a US-based telehealth company founded in 2017. It operates multiple health brands under one umbrella — Roman for men\'s health, Rory for women\'s health, and the Ro Body weight loss program. It employs licensed physicians across all 50 states and fulfils prescriptions through licensed US pharmacies.',
  },
  {
    question: 'How much does Ro ED treatment cost?',
    answer:
      'Generic tadalafil or sildenafil through Ro starts at around $34/month — slightly more than Roman ($22) or Rex MD ($19). Ro does not require a subscription for standard ED medication orders. The higher price point reflects Ro\'s broader clinical scope and the Ro Body program infrastructure. Ro does not accept insurance for ED.',
  },
  {
    question: 'Does Ro offer weight loss treatment alongside ED?',
    answer:
      'Yes — this is Ro\'s main differentiator. The Ro Body program offers GLP-1 medications including semaglutide and tirzepatide alongside ongoing coaching and monitoring. If you want to address ED and weight loss through one provider, Ro is the only major platform that covers both comprehensively. Weight loss program pricing is separate from ED medication and typically runs $150–500/month depending on the medication.',
  },
  {
    question: 'Does Ro require a video call for ED treatment?',
    answer:
      'No. Ro uses an asynchronous consultation for ED — you complete an online medical questionnaire and a licensed physician reviews it. No video call or scheduled appointment is required. The Ro Body weight loss program may involve more structured check-ins depending on the medication prescribed.',
  },
  {
    question: 'How does Ro compare to Roman for ED specifically?',
    answer:
      'For ED treatment in isolation, Roman is the better value — lower price, same clinical quality, free 2-day shipping. Ro makes sense over Roman specifically if you also want weight loss treatment or want a single provider for multiple health concerns. If ED is your only concern, Roman or Rex MD are cheaper options for the same medication.',
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
  { label: 'Pricing', score: 3.8, note: 'Slightly higher than Roman for ED alone' },
  { label: 'Medication variety', score: 4.2, note: 'ED generics + GLP-1 weight loss' },
  { label: 'Consultation', score: 4.4, note: 'Async ED, structured weight loss check-ins' },
  { label: 'Customer experience', score: 4.3, note: 'Covers men and women, broad platform' },
  { label: 'Bundle value', score: 4.7, note: 'Best for ED + weight loss combined' },
]

export default function RoReviewPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Ro Review 2026: ED Treatment, Weight Loss & Is It Worth It?"
        description="Our in-depth review of Ro — covering ED treatment pricing, the Ro Body weight loss program, the consultation process, and who Ro is actually best for."
        publishDate="2025-02-01"
        updatedDate="2026-04-01"
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
              Strong choice if you want ED and weight loss through one provider. Slightly pricier
              than Roman for ED alone, but unmatched if the Ro Body GLP-1 program is relevant to you.
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
          <CTABlock programs={programs} concern="ed" title="Get started with Ro" />
        </Suspense>

        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for:</strong> Men who want to treat ED and weight loss through one provider, or who are exploring GLP-1 medication.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Skip if:</strong> ED is your only concern — Roman costs $12/month less for the same generic medication.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> The best platform for combined ED and weight loss. Overkill if you only need ED treatment.</span>
            </li>
          </ul>
        </section>

        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Ro is a healthcare technology company that operates several telehealth brands: Roman (men's health), Rory (women's health), and the Ro Body program (weight loss). Founded in 2017 and headquartered in New York, Ro has positioned itself as a more comprehensive alternative to single-condition platforms like Rex MD.
          </p>
          <p className="leading-relaxed mb-4">
            For ED, Ro prescribes the same core generics as its competitors — tadalafil and sildenafil — through a fully async consultation. The differentiator is the Ro Body program: structured GLP-1 weight loss treatment (semaglutide, tirzepatide) with ongoing medical monitoring. Research increasingly links obesity and metabolic health to ED, making this combination clinically meaningful for some men, not just convenient.
          </p>
          <p className="leading-relaxed">
            The tradeoff is price. Ro's ED medication costs around $34/month compared to $22 at Roman for the same generic. If you only need ED treatment, you are paying a premium for platform breadth you may not use. If weight loss treatment is also on your radar, Ro becomes the most cost-efficient single provider.
          </p>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing</h2>
          <p className="leading-relaxed mb-5">
            Ro's pricing spans two distinct products — ED medication and the Ro Body weight loss program — with very different price points.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Product</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Price</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generic sildenafil (as-needed)', 'From $4/dose', 'No subscription required'],
                  ['Generic tadalafil (as-needed)', 'From $8/dose', 'No subscription required'],
                  ['Daily tadalafil — Rise Gummies', 'From $69/month', 'Ongoing prescription'],
                  ['Ro Body — semaglutide', '~$299/month*', 'Includes medication + monitoring'],
                  ['Ro Body — tirzepatide', '~$449/month*', 'Includes medication + monitoring'],
                  ['Shipping', 'Free standard', 'Discreet packaging'],
                ].map(([product, price, note], i) => (
                  <tr key={product} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{product}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium">{price}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            For ED medication alone, Ro's sildenafil starts at $4/dose versus Roman's $4/dose — roughly comparable at baseline. Tadalafil is where Ro costs more, at from $8/dose versus Roman's $4/dose. Unless you are using the Ro Body program, Roman delivers equivalent ED treatment at lower cost for tadalafil specifically.
          </p>
          <p className="leading-relaxed">
            The Ro Body weight loss pricing is competitive within the GLP-1 telehealth market. Compounded semaglutide programs at other providers range from $200–400/month, so Ro's pricing is mid-range. All prices above are estimates — Ro Body pricing in particular changes frequently. Verify current pricing on Ro's website before making a decision. * Ro Body prices reflect estimated 2026 rates.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How It Works</h2>
          <ol className="space-y-4 mb-4">
            {[
              { step: '1', title: 'Create a Ro account', desc: 'Sign up at ro.co. You can access Roman (ED), Rory (women\'s health), and Ro Body (weight loss) from one account.' },
              { step: '2', title: 'Complete the health questionnaire', desc: 'For ED: async questionnaire reviewed by a licensed physician, no video call required. For Ro Body: more detailed intake covering weight history, medications, and health goals.' },
              { step: '3', title: 'Prescription and treatment plan', desc: 'ED prescriptions are typically approved within a few hours. Ro Body participants receive a structured treatment plan with dosing schedule and check-in schedule.' },
              { step: '4', title: 'Medication delivered', desc: 'Ships from a licensed pharmacy in discreet packaging. Standard USPS shipping, 3–5 business days.' },
              { step: '5', title: 'Ongoing care', desc: 'Message your care team for adjustments. Ro Body includes ongoing monitoring and dosage titration as part of the program.' },
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
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose Ro if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want ED and GLP-1 weight loss through one provider</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are exploring semaglutide or tirzepatide for weight loss</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want a platform that covers both men's and women's health</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Value structured ongoing care and monitoring</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Consider alternatives if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Only need ED medication — Roman is $12/month cheaper</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want to bundle ED with hair loss — Hims is better for that</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Want the absolute lowest price — Rex MD starts at $19</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">→</span>Need insurance coverage</li>
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
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Only major platform covering ED and GLP-1 weight loss</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Covers men's and women's health under one account</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No subscription required for ED medication</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>No video call required for ED</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Structured weight loss program with ongoing medical monitoring</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Cons</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>More expensive than Roman or Rex MD for ED alone</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>No hair loss bundling (use Hims for that)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Weight loss program is a significant monthly cost</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C] mt-0.5">✗</span>Does not accept insurance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="alternatives">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-2">How Ro Compares</h2>
          <p className="text-[#4A4A4C] mb-5 leading-relaxed">
            Ro's value proposition depends entirely on whether you need more than just ED treatment.
          </p>
          <div className="space-y-3">
            {[
              {
                condition: 'If you only need ED medication',
                text: "Roman offers the same generic tadalafil or sildenafil for $22/month with free 2-day shipping — $12/month less than Ro. No reason to pay more for platform breadth you won't use.",
                href: '/ed/compare/hims-vs-ro',
                label: 'Hims vs Ro →',
              },
              {
                condition: 'If you want ED + hair loss bundled',
                text: "Hims is the better choice for multi-condition treatment combining ED and hair loss. Ro doesn't offer hair loss treatment.",
                href: '/ed/compare/hims-vs-roman',
                label: 'Hims vs Roman →',
              },
              {
                condition: 'If price is the only factor',
                text: "Rex MD starts at $19/month — the lowest we've found for generic ED medication. No frills, just the medication at the cheapest price.",
                href: '/ed/compare/roman-vs-rex-md',
                label: 'Roman vs Rex MD →',
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
            <CTABlock programs={programs} concern="ed" title="Get started with Ro" />
          </Suspense>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
