import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import CTABlock from '@/components/CTABlock'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/ed/guide/what-is-tadalafil' },
  title: 'What Is Tadalafil? Uses, Dosage, and Side Effects (2026)',
  description:
    'Tadalafil is the generic version of Cialis — an ED medication that lasts up to 36 hours. This guide covers how it works, doses, side effects, and how to get it online.',
}

const programs = getProgramsByIds(['roman', 'hims', 'rexmd'])

const faqs = [
  {
    question: 'What is tadalafil used for?',
    answer:
      'Tadalafil is primarily prescribed for erectile dysfunction (ED). It is also FDA-approved for benign prostatic hyperplasia (BPH — enlarged prostate) and pulmonary arterial hypertension. For ED, it is taken either as needed (10–20mg) or as a daily low dose (2.5–5mg).',
  },
  {
    question: 'Is tadalafil the same as Cialis?',
    answer:
      'Yes. Tadalafil is the generic name for the active ingredient in Cialis. Since Cialis\'s US patent expired in 2018, generic tadalafil has been widely available at a fraction of the branded price — typically $2–5 per dose vs $50–70 for branded Cialis.',
  },
  {
    question: 'How long does tadalafil stay in your system?',
    answer:
      'Tadalafil has a half-life of approximately 17.5 hours, meaning it stays active in your system for up to 36 hours after a single dose. This is significantly longer than sildenafil (Viagra), which lasts 4–6 hours.',
  },
  {
    question: 'Can I take tadalafil every day?',
    answer:
      'Yes. A daily low-dose formulation (2.5mg or 5mg) is FDA-approved for men who want to maintain readiness without planning around a pill. Many men prefer this over on-demand dosing because there\'s no timing pressure.',
  },
  {
    question: 'What are the most common side effects of tadalafil?',
    answer:
      'Headache, flushing, nasal congestion, and indigestion are most common. Back pain and muscle aches affect roughly 5–10% of users and are more specific to tadalafil vs sildenafil — these typically appear 12–24 hours after dosing and resolve within 48 hours.',
  },
  {
    question: 'Can I drink alcohol while taking tadalafil?',
    answer:
      'Moderate alcohol (1–2 drinks) is generally fine with tadalafil. Heavy drinking can reduce effectiveness and may increase the risk of side effects like dizziness. Unlike sildenafil, tadalafil\'s absorption is not affected by food.',
  },
  {
    question: 'Do I need a prescription for tadalafil?',
    answer:
      'Yes. Tadalafil requires a prescription in the US. However, you can get one without a video call or in-person visit through licensed telehealth platforms like Roman, Hims, and Rex MD. The online consultation typically takes a few hours.',
  },
]

const tocItems = [
  { id: 'what-is-it', label: 'What is tadalafil?' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'dosage', label: 'Dosage guide' },
  { id: 'side-effects', label: 'Side effects' },
  { id: 'vs-cialis', label: 'Generic vs Cialis' },
  { id: 'getting-it', label: 'How to get it online' },
  { id: 'faq', label: 'FAQ' },
]

export default function WhatIsTadalafilPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="What Is Tadalafil? A Complete Guide"
        description="Tadalafil is the generic version of Cialis — an ED medication that lasts up to 36 hours. This guide covers everything you need to know: how it works, dosing options, side effects, and how to get it online without a video call."
        publishDate="2026-01-01"
        updatedDate="2026-05-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Get tadalafil online" />
        </Suspense>

        {/* What is it */}
        <section id="what-is-it">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">What Is Tadalafil?</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil is a prescription medication used to treat erectile dysfunction (ED). It belongs to a class of drugs called PDE5 inhibitors, which work by increasing blood flow to the penis during sexual arousal. It is the generic version of Cialis, one of the most prescribed ED medications in the US.
          </p>
          <p className="leading-relaxed mb-4">
            Tadalafil is sometimes called "the weekend pill" because a single dose remains effective for up to 36 hours — far longer than sildenafil (Viagra's generic), which lasts 4–6 hours. This extended window means you can take it the night before or in the morning without needing to time sex to a specific hour.
          </p>
          <p className="leading-relaxed mb-4">
            Beyond ED, tadalafil is also FDA-approved for benign prostatic hyperplasia (BPH, or enlarged prostate) and pulmonary arterial hypertension. For ED, it's available in two formats: as-needed doses (10mg or 20mg) or a daily low dose (2.5mg or 5mg).
          </p>
          <p className="leading-relaxed">
            Since Eli Lilly's US patent on Cialis expired in 2018, generic tadalafil has been available from multiple manufacturers. Generic prices are typically $2–5 per dose, compared to $50–70 for branded Cialis at retail.
          </p>
        </section>

        {/* How it works */}
        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How Tadalafil Works</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil works by inhibiting an enzyme called phosphodiesterase type 5 (PDE5). Here's the simplified version of what that means:
          </p>
          <p className="leading-relaxed mb-4">
            When you're sexually aroused, your nervous system releases nitric oxide in the blood vessels of the penis. Nitric oxide triggers the production of a molecule called cGMP, which relaxes smooth muscle and allows blood to flow in, causing an erection. PDE5 is the enzyme that breaks down cGMP — so by inhibiting PDE5, tadalafil allows cGMP to accumulate and blood flow to increase.
          </p>
          <p className="leading-relaxed mb-4">
            The key point: <strong>tadalafil does not cause an erection on its own.</strong> It requires sexual stimulation to work. Without arousal, there's no nitric oxide release and the drug has no effect. This is true of all PDE5 inhibitors, including sildenafil.
          </p>
          <p className="leading-relaxed">
            Tadalafil takes 1–2 hours to reach full effect after dosing. Its longer duration compared to sildenafil is due to its longer half-life — approximately 17.5 hours, meaning it stays in your system long after the initial dose. For a more detailed look at the mechanism, see our{' '}
            <Link href="/ed/guide/how-does-cialis-work" className="text-[#5B7A5F] underline hover:text-[#4A6950]">
              how does Cialis work guide
            </Link>.
          </p>
        </section>

        {/* Dosage */}
        <section id="dosage">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Tadalafil Dosage Guide</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil comes in four doses: 2.5mg, 5mg, 10mg, and 20mg. Which dose you use depends on whether you're taking it on demand or daily.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Format</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Dose</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">When to take</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['As-needed (standard)', '10mg', '1–2 hours before sex', 'Up to 36 hours'],
                  ['As-needed (higher dose)', '20mg', '1–2 hours before sex', 'Up to 36 hours'],
                  ['Daily (low dose)', '2.5mg or 5mg', 'Same time each day', 'Continuous'],
                ].map(([format, dose, timing, duration], i) => (
                  <tr key={format} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#1C1C1E]">{format}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{dose}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{timing}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mb-4">
            Most men starting tadalafil are prescribed 10mg as-needed. If 10mg doesn't work well, the dose can be increased to 20mg. If side effects are an issue, it can be reduced to 5mg. Your prescribing physician will recommend the right starting dose based on your health history.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Daily dosing (2.5–5mg)</strong> maintains a steady level of tadalafil in your system. You take one pill at the same time each day, regardless of sexual activity. This eliminates any planning — you're always ready. Some men also find that daily low-dose use produces milder side effects than higher as-needed doses, because the drug level stays lower and more constant.
          </p>
          <p className="leading-relaxed">
            You should not take more than one dose within 24 hours, and no more than 20mg in any 24-hour period. Tadalafil is not affected by food — you can take it with or without a meal.
          </p>
        </section>

        {/* Side effects */}
        <section id="side-effects">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Side Effects</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil is well-tolerated by most men. Side effects are typically mild and temporary, peaking as the drug reaches maximum concentration and fading as it clears your system.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 my-6">
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
              <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-3">Common (affects 5–15%)</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Headache</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Facial flushing</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Nasal congestion or runny nose</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Indigestion or upset stomach</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F]">→</span>Back pain and muscle aches</li>
              </ul>
            </div>
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
              <p className="text-sm font-semibold text-[#8A8A8C] uppercase tracking-wider mb-3">Rare but important</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#8A8A8C]">→</span>Sudden vision or hearing loss (seek care immediately)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C]">→</span>Priapism — erection lasting more than 4 hours (seek care immediately)</li>
                <li className="flex gap-2"><span className="text-[#8A8A8C]">→</span>Severe drop in blood pressure (especially with nitrates)</li>
              </ul>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            The back pain and muscle aches are more characteristic of tadalafil than sildenafil, and are related to tadalafil's longer half-life. They typically appear 12–24 hours after dosing and resolve within 48 hours. At lower doses (5mg daily), this side effect is less common.
          </p>
          <p className="leading-relaxed font-medium">
            Do not take tadalafil if you use nitrates (nitroglycerin, isosorbide) for heart conditions. The combination can cause a dangerous, potentially fatal drop in blood pressure. Always disclose all medications during your consultation.
          </p>
        </section>

        {/* Generic vs Cialis */}
        <section id="vs-cialis">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Generic Tadalafil vs Branded Cialis</h2>
          <p className="leading-relaxed mb-4">
            Generic tadalafil contains the exact same active ingredient at the same dose as branded Cialis. The FDA requires generics to be bioequivalent — meaning the drug is absorbed and acts in the same way. There is no meaningful clinical difference between generic tadalafil and Cialis.
          </p>
          <p className="leading-relaxed mb-4">
            The difference is cost. Branded Cialis retails for $50–70 per pill without insurance. Generic tadalafil from online telehealth platforms costs $2–5 per dose — or ~$39–45/month for daily dosing. The savings are significant with no trade-off in effectiveness.
          </p>
          <p className="leading-relaxed">
            All major telehealth platforms — Roman, Hims, Ro, and Rex MD — prescribe generic tadalafil, not branded Cialis. If a platform is advertising "Cialis," verify whether they mean the brand or the generic.
          </p>
        </section>

        {/* Getting it online */}
        <section id="getting-it">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How to Get Tadalafil Online</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil requires a prescription, but you don't need to visit a doctor's office or schedule a video call. Licensed US telehealth platforms let you complete an online medical questionnaire — covering your health history, current medications, and symptoms — which a licensed physician reviews and either approves or follows up on. The whole process typically takes a few hours.
          </p>
          <p className="leading-relaxed mb-4">
            Once prescribed, your medication ships directly to you in discreet packaging. Platforms like Roman offer free 2-day shipping. Rex MD is the cheapest option for generic tadalafil.
          </p>
          <p className="leading-relaxed mb-6">
            See our full platform comparisons:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { title: 'Roman Review', href: '/ed/reviews/roman', desc: 'Best overall — lowest price, no subscription.' },
              { title: 'Rex MD Review', href: '/ed/reviews/rex-md', desc: 'Cheapest tadalafil available.' },
              { title: 'Hims Review', href: '/ed/reviews/hims', desc: 'Best for bundles with hair loss.' },
              { title: 'Compare all platforms', href: '/ed', desc: 'Side-by-side pricing and features.' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-4 bg-white border border-[#E8E7E3] rounded-[12px] hover:border-[#5B7A5F] hover:shadow-sm transition-all group"
              >
                <span className="font-semibold text-[#1C1C1E] block mb-1 group-hover:text-[#5B7A5F] transition-colors">
                  {item.title} →
                </span>
                <span className="text-sm text-[#8A8A8C]">{item.desc}</span>
              </Link>
            ))}
          </div>

          <div className="p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Not sure which platform or dose is right for you?</p>
            <p className="text-sm text-[#4A4A4C] mb-4">Answer 3 quick questions and get a personalised recommendation.</p>
            <Link href="/ed/quiz" className="btn-primary">
              Find my best match →
            </Link>
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
            <CTABlock programs={programs} concern="ed" title="Get tadalafil online — no video call required" />
          </Suspense>
        </div>

      </ArticleLayout>
    </PageWrapper>
  )
}
