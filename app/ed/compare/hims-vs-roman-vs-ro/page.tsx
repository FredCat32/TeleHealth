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
  title: 'Hims vs Roman vs Ro 2026: Three-Way ED Comparison',
  description:
    'Independent three-way comparison of Hims, Roman, and Ro for online ED treatment. Pricing, medications, consultation process, and who each platform is actually best for.',
}

const programs = getProgramsByIds(['hims', 'roman', 'ro'])

const faqs = [
  {
    question: 'Which is cheapest — Hims, Roman, or Ro?',
    answer:
      'Roman is the cheapest for ED medication specifically, starting at ~$22/month for generic tadalafil with no subscription required. Hims starts at ~$25/month but requires a subscription for that rate. Ro starts at ~$34/month for ED. Rex MD ($19/month) is cheaper than all three but has a more limited platform.',
  },
  {
    question: 'Do Hims, Roman, and Ro require a video call?',
    answer:
      'None of them require a video call for ED treatment. All three use asynchronous text-based consultations — you fill out a medical questionnaire online, a licensed US physician reviews it, and issues a prescription if appropriate.',
  },
  {
    question: 'Which platform is best for men who want more than just ED treatment?',
    answer:
      'Ro is the most comprehensive platform, offering ED, weight loss (GLP-1), testosterone, hair loss, and general men\'s health. Hims is strong for bundling ED with hair loss and mental health. Roman covers ED, testosterone, and hair loss. If you want multiple conditions treated in one place, Ro or Hims are the better choices.',
  },
  {
    question: 'Is Ro worth the higher price compared to Roman?',
    answer:
      'For ED alone, no — Roman delivers the same clinical quality at a lower price. Ro\'s higher price is justified if you\'re also using their weight loss (Ro Body) or testosterone programs, where the integrated platform adds real value. For standalone ED treatment, Roman is the better value.',
  },
  {
    question: 'Which has the best medication selection?',
    answer:
      'Hims has the broadest ED medication range including chewable formats and branded options at higher prices. Roman keeps it simpler — generic tadalafil, sildenafil, and daily tadalafil. Ro covers the standard generics plus testosterone treatment for men whose ED has a hormonal component.',
  },
  {
    question: 'Can I switch platforms easily?',
    answer:
      'Yes. None of these platforms lock you in with a long-term medical commitment. You can stop your subscription (or ordering from platforms with no subscription) at any time. Your prescription typically cannot be transferred between platforms, but getting a new consultation elsewhere is straightforward.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'medications', label: 'Medications' },
  { id: 'platform-breadth', label: 'Platform breadth' },
  { id: 'consultation', label: 'Consultation process' },
  { id: 'who-each-suits', label: 'Who each suits' },
  { id: 'verdict', label: 'Verdict' },
  { id: 'faq', label: 'FAQ' },
]

export default function HimsVsRomanVsRoPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Hims vs Roman vs Ro 2026: Three-Way ED Comparison"
        description="An independent comparison of the three most popular online ED platforms. We break down pricing, medication options, consultation quality, and platform breadth so you can find the right fit."
        publishDate="2025-06-01"
        updatedDate="2026-04-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Compare Hims, Roman, and Ro" />
        </Suspense>

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for most men (ED only):</strong> Roman. Lowest price, no subscription required, free 2-day shipping.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for bundling ED with hair loss or mental health:</strong> Hims. Genuine bundle value, polished experience.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for comprehensive men's health (ED + weight loss or testosterone):</strong> Ro. Most complete platform.</span>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Overview</h2>
          <p className="leading-relaxed mb-4">
            Hims, Roman, and Ro are the three most recognisable names in online ED treatment in the US. All three launched around 2017–2018, all three are licensed US telehealth platforms, and all three prescribe generic tadalafil and sildenafil without requiring a video call. On the core clinical offering, they're more similar than they are different.
          </p>
          <p className="leading-relaxed mb-4">
            The meaningful differences are in pricing structure, platform breadth, and who each is optimised for. Roman has stayed most focused on men's health at the lowest price point. Hims has expanded heavily into a multi-condition men's wellness brand. Ro has built the most comprehensive platform, including women's health and weight loss.
          </p>
          <p className="leading-relaxed">
            If you're only treating ED and want the best value, this comparison usually ends at Roman. If you have other health goals in play, read on.
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
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Pricing Comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]"></th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Hims</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Roman</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Ro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generic tadalafil (monthly)', 'From $25/month', 'From $22/month', 'From $34/month'],
                  ['Generic sildenafil', 'From $2/dose (subscription)', 'From $4/dose', 'From $4/dose'],
                  ['Daily tadalafil', 'From ~$40/month', '~$39/month', 'From ~$45/month'],
                  ['Subscription required?', 'Yes for best rate', 'No', 'No'],
                  ['Shipping', 'Free standard', 'Free 2-day', 'Free standard'],
                  ['Consultation fee', 'Included', 'Included', 'Included'],
                ].map(([label, hims, roman, ro], i) => (
                  <tr key={label} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#1C1C1E]">{label}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{hims}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]"><strong>{roman}</strong></td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{ro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            Roman is the cheapest for most men. The one exception: Hims's sildenafil subscription pricing ($2/dose) is lower than Roman's $4/dose — but only if you commit to a subscription. Without a subscription, Hims costs significantly more per order.
          </p>
          <p className="leading-relaxed">
            Ro charges a premium over Roman for the same core medications. The premium is justified by platform breadth — if you're also using Ro Body (GLP-1 weight loss) or testosterone programs, the integrated platform has value. For standalone ED, you're paying more for services you don't use.
          </p>
        </section>

        {/* Medications */}
        <section id="medications">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Medication Options</h2>
          <p className="leading-relaxed mb-4">
            All three platforms prescribe generic tadalafil (as-needed and daily) and generic sildenafil. This covers the needs of most men with ED.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Hims</strong> has the broadest ED medication menu. In addition to standard generics, it offers chewable formats (faster absorption for some men) and branded medication at higher price points. Hims is the only platform of the three that offers meaningful alternatives to standard pills.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Roman</strong> offers standard generic tadalafil, sildenafil, daily low-dose tadalafil, and a testosterone + ED combination treatment — useful for men whose ED has a hormonal component. No chewable or branded options.
          </p>
          <p className="leading-relaxed">
            <strong>Ro</strong> covers the standard generics and testosterone therapy. Ro also addresses ED as part of its Ro Body program for men combining ED and weight loss treatment. No chewable formats.
          </p>
        </section>

        {/* Platform breadth */}
        <section id="platform-breadth">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Platform Breadth</h2>
          <p className="leading-relaxed mb-4">
            This is where the three platforms diverge most meaningfully — especially if you have more than one health goal.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 my-6">
            {[
              {
                name: 'Hims',
                services: ['ED treatment', 'Hair loss (finasteride, minoxidil)', 'Mental health / anxiety', 'Skincare', 'Primary care'],
                note: 'Best bundle: ED + hair loss',
              },
              {
                name: 'Roman',
                services: ['ED treatment', 'Testosterone therapy', 'Hair loss (finasteride)', 'STI testing'],
                note: 'Best for: ED + testosterone',
              },
              {
                name: 'Ro',
                services: ['ED treatment', 'GLP-1 weight loss (Ro Body)', 'Testosterone therapy', 'Hair loss', "Women's health (Rory)"],
                note: 'Best for: ED + weight loss',
              },
            ].map((p) => (
              <div key={p.name} className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
                <p className="font-bold text-[#1C1C1E] mb-3">{p.name}</p>
                <ul className="text-sm text-[#4A4A4C] space-y-1.5 mb-4">
                  {p.services.map((s) => (
                    <li key={s} className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>{s}</li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-[#5B7A5F]">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation */}
        <section id="consultation">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Consultation Process</h2>
          <p className="leading-relaxed mb-4">
            The consultation process is nearly identical across all three. You fill out a medical questionnaire covering health history, current medications, and symptoms. A licensed US physician reviews it asynchronously — no video call, no scheduled appointment.
          </p>
          <p className="leading-relaxed mb-4">
            Approval typically takes a few hours during business hours. Roman markets same-day treatment plans, which in practice means a fast response to the questionnaire. Hims and Ro have similar turnaround times. Once approved, medication ships directly to you in discreet, unmarked packaging.
          </p>
          <p className="leading-relaxed">
            All three offer ongoing messaging access to your care team for follow-up questions, dose adjustments, or medication switches. None offer 24/7 urgent care.
          </p>
        </section>

        {/* Mid-article quiz CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#F4F0E9] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Still deciding?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Answer 3 questions about your priorities and get a personalised recommendation — not just between these three, but across every platform we track.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

        {/* Who each suits */}
        <section id="who-each-suits">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-6">Who Each Platform Suits</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="card p-5">
              <p className="font-bold text-[#1C1C1E] mb-3">Choose Hims if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want to bundle ED with hair loss or mental health</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want chewable medication options</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Are OK with a subscription for lowest pricing</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Value a polished brand and app</li>
              </ul>
            </div>
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <div className="flex items-center gap-2 mb-3">
                <p className="font-bold text-[#1C1C1E]">Choose Roman if you:</p>
                <span className="text-xs font-semibold bg-[#5B7A5F] text-white px-2 py-0.5 rounded-[6px]">Best value</span>
              </div>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want the lowest price for ED medication</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Don't want a subscription commitment</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want fast, no-fuss access to generics</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Are considering testosterone treatment alongside ED</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="font-bold text-[#1C1C1E] mb-3">Choose Ro if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Also want weight loss treatment (GLP-1)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want the most comprehensive men's health platform</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Want a platform that also covers women's health (for a partner)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Don't mind paying slightly more for breadth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section id="verdict">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Our Verdict</h2>
          <p className="leading-relaxed mb-4">
            For men treating ED and only ED, <strong>Roman is the best choice.</strong> Lower price, no subscription, free 2-day shipping, and the same clinical quality as the others. There's no reason to pay more for features you won't use.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Choose Hims</strong> if you also want hair loss or mental health treatment — the bundle value is genuine and you'll spend less overall than treating each condition separately on different platforms.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Choose Ro</strong> if your goals extend to weight loss or you want the most comprehensive platform. Ro Body is one of the better GLP-1 programs available, and having ED and weight loss treatment under one roof makes sense for men working on both simultaneously.
          </p>
          <p className="leading-relaxed mb-6">
            All three are legitimate, licensed platforms with qualified US physicians. The clinical quality is equivalent. Your choice is really about pricing structure and how many health conditions you want to manage in one place.
          </p>

          <div className="p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Also worth comparing</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                { title: 'Hims vs Roman', href: '/ed/compare/hims-vs-roman', desc: 'Detailed two-way comparison.' },
                { title: 'Hims vs Ro', href: '/ed/compare/hims-vs-ro', desc: 'Bundle-focused vs comprehensive platform.' },
                { title: 'Roman vs Rex MD', href: '/ed/compare/roman-vs-rex-md', desc: 'Budget options head to head.' },
                { title: 'All ED platforms', href: '/ed', desc: 'Full comparison including Rex MD.' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-4 bg-white border border-[#E8E7E3] rounded-[12px] hover:border-[#5B7A5F] hover:shadow-sm transition-all group"
                >
                  <span className="font-semibold text-[#1C1C1E] block mb-0.5 group-hover:text-[#5B7A5F] transition-colors text-sm">
                    {item.title} →
                  </span>
                  <span className="text-xs text-[#8A8A8C]">{item.desc}</span>
                </Link>
              ))}
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
