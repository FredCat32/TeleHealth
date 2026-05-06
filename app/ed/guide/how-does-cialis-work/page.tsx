import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import CTABlock from '@/components/CTABlock'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'
import { getProgramsByIds } from '@/lib/affiliates'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/ed/guide/how-does-cialis-work' },
  title: 'How Does Cialis Work? Mechanism, Timing, and What Affects It',
  description:
    'A plain-English explanation of how Cialis (tadalafil) works to treat ED — the mechanism, how long it takes, how long it lasts, and what can reduce its effectiveness.',
}

const programs = getProgramsByIds(['roman', 'hims', 'ro'])

const faqs = [
  {
    question: 'Does Cialis work immediately?',
    answer:
      'No. Tadalafil (Cialis) takes 1–2 hours to reach peak concentration in your bloodstream. Most men take it 1–2 hours before planned sexual activity. The drug then remains active for up to 36 hours.',
  },
  {
    question: 'Why didn\'t Cialis work for me?',
    answer:
      'There are several reasons Cialis may not work: insufficient arousal (the drug requires sexual stimulation), taking it too soon before sex, eating a very heavy meal beforehand, or the dose being too low. Some men need to try it 4–6 times at the right dose and timing before seeing full results. If it consistently doesn\'t work, speak to your prescribing physician about adjusting the dose or trying sildenafil.',
  },
  {
    question: 'Can I take Cialis with alcohol?',
    answer:
      'Moderate alcohol (1–2 drinks) is generally safe with tadalafil. Heavy drinking reduces the quality of erections independently of medication and can increase side effects like dizziness and flushing. Unlike sildenafil, tadalafil is not affected by food intake.',
  },
  {
    question: 'Does Cialis cause erections without arousal?',
    answer:
      'No. Tadalafil and all PDE5 inhibitors require sexual stimulation to work. They enhance the natural process of arousal — they don\'t trigger it. Without mental and physical arousal, the drug has no effect on erections.',
  },
  {
    question: 'How does daily Cialis work differently from on-demand Cialis?',
    answer:
      'Daily low-dose tadalafil (2.5–5mg) maintains a constant, low level of the drug in your system rather than the sharp peak-and-decline of on-demand dosing. This means you\'re always at baseline readiness without any planning. The mechanism is the same — PDE5 inhibition — but the pharmacokinetics are different.',
  },
  {
    question: 'What makes Cialis last 36 hours when Viagra only lasts 4–6?',
    answer:
      'The difference is half-life. Tadalafil has a half-life of about 17.5 hours — meaning half the drug is still in your system 17.5 hours after dosing. Sildenafil has a half-life of 3–5 hours. Both work through the same mechanism, but tadalafil clears your body much more slowly.',
  },
]

const tocItems = [
  { id: 'mechanism', label: 'The mechanism' },
  { id: 'timeline', label: 'Onset and duration' },
  { id: 'what-affects-it', label: 'What affects it' },
  { id: 'daily-vs-ondemand', label: 'Daily vs on-demand' },
  { id: 'when-it-doesnt-work', label: 'When it doesn\'t work' },
  { id: 'faq', label: 'FAQ' },
]

export default function HowDoesCialisWorkPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="How Does Cialis Work? A Plain-English Guide"
        description="Tadalafil (Cialis) works by blocking the enzyme that limits blood flow to the penis during arousal. This guide explains the mechanism simply, covers the timing and duration, and explains what can reduce its effectiveness."
        publishDate="2026-01-01"
        updatedDate="2026-05-01"
        showDisclosure={true}
        faqs={faqs}
        tocItems={tocItems}
      >

        <Suspense fallback={null}>
          <CTABlock programs={programs} concern="ed" title="Get tadalafil online" />
        </Suspense>

        {/* Mechanism */}
        <section id="mechanism">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">The Mechanism: How Tadalafil Treats ED</h2>
          <p className="leading-relaxed mb-4">
            Erectile dysfunction occurs when blood flow to the penis is insufficient to achieve or maintain an erection. This can happen because the blood vessels don't relax enough to allow adequate inflow — which is where tadalafil comes in.
          </p>
          <p className="leading-relaxed mb-4">
            Here's the process in plain terms:
          </p>

          <div className="my-6 space-y-4">
            {[
              { step: '1', title: 'Sexual arousal triggers nitric oxide release', body: 'When you become sexually aroused, nerve signals cause the release of nitric oxide (NO) in the blood vessels of the penis.' },
              { step: '2', title: 'Nitric oxide produces cGMP', body: 'Nitric oxide activates an enzyme that produces cyclic guanosine monophosphate (cGMP). cGMP relaxes the smooth muscle in penile blood vessels, allowing them to dilate and blood to flow in.' },
              { step: '3', title: 'PDE5 breaks down cGMP', body: 'An enzyme called phosphodiesterase type 5 (PDE5) naturally degrades cGMP. In men with ED, PDE5 is too active — it breaks down cGMP faster than it can build up, preventing sufficient blood flow.' },
              { step: '4', title: 'Tadalafil blocks PDE5', body: 'Tadalafil inhibits PDE5, slowing the breakdown of cGMP. This allows cGMP to accumulate, blood flow to increase, and an erection to occur and be maintained.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 bg-white border border-[#E8E7E3] rounded-[12px]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5B7A5F] text-white flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1E] mb-1">{item.title}</p>
                  <p className="text-sm text-[#4A4A4C] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="leading-relaxed mb-4">
            The critical point: <strong>tadalafil only works in the presence of sexual stimulation.</strong> Without arousal, there's no nitric oxide release, no cGMP production, and nothing for tadalafil to act on. It does not cause erections on its own — it makes erections easier to achieve and maintain when you're already aroused.
          </p>
          <p className="leading-relaxed">
            Tadalafil belongs to a class of drugs called PDE5 inhibitors. Sildenafil (Viagra) and vardenafil (Levitra) work through the same mechanism — the differences are in timing, duration, and side effect profile. See our{' '}
            <Link href="/ed/guide/tadalafil-vs-sildenafil" className="text-[#5B7A5F] underline hover:text-[#4A6950]">
              tadalafil vs sildenafil comparison
            </Link>{' '}
            for a detailed breakdown.
          </p>
        </section>

        {/* Timeline */}
        <section id="timeline">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Onset and Duration</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil reaches peak concentration in the bloodstream around 2 hours after dosing, though some men notice effects as early as 30–60 minutes. Most physicians recommend taking it 1–2 hours before sexual activity for the most reliable result.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Phase</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Tadalafil</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Sildenafil (for comparison)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Onset', '30–60 min (some effect); 1–2 hours (full effect)', '30–60 minutes'],
                  ['Peak concentration', '~2 hours', '~1 hour'],
                  ['Half-life', '~17.5 hours', '~3–5 hours'],
                  ['Duration of action', 'Up to 36 hours', '4–6 hours'],
                ].map(([phase, tadalafil, sildenafil], i) => (
                  <tr key={phase} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#1C1C1E]">{phase}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{tadalafil}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{sildenafil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            The 36-hour window doesn't mean a 36-hour erection — it means the drug is still active and will facilitate erections if you're aroused during that window. Normal flaccid periods happen throughout. The extended duration is purely about availability, not continuous effect.
          </p>
        </section>

        {/* What affects it */}
        <section id="what-affects-it">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">What Affects How Well It Works</h2>

          <div className="space-y-5 my-6">
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
              <p className="font-semibold text-[#1C1C1E] mb-2">Arousal level</p>
              <p className="text-sm text-[#4A4A4C] leading-relaxed">The most commonly overlooked factor. Tadalafil amplifies the erection process — it doesn't create it. Insufficient arousal is the most frequent reason the drug appears not to work, especially in new users who expect a purely physiological effect.</p>
            </div>
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
              <p className="font-semibold text-[#1C1C1E] mb-2">Timing</p>
              <p className="text-sm text-[#4A4A4C] leading-relaxed">Taking tadalafil too close to when you want it to work reduces effectiveness. Give it at least 1 hour, ideally 2. Because it lasts 36 hours, there's flexibility on the back end — you can take it the night before with no issue.</p>
            </div>
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
              <p className="font-semibold text-[#1C1C1E] mb-2">Alcohol</p>
              <p className="text-sm text-[#4A4A4C] leading-relaxed">Unlike sildenafil, tadalafil's absorption is not significantly affected by food or moderate alcohol. However, heavy drinking (more than 3–4 drinks) can independently impair erections and increase side effects like dizziness.</p>
            </div>
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
              <p className="font-semibold text-[#1C1C1E] mb-2">Drug interactions</p>
              <p className="text-sm text-[#4A4A4C] leading-relaxed">Nitrates (used for chest pain) are a hard contraindication — combining them with tadalafil can cause a dangerous drop in blood pressure. Some blood pressure medications, antifungals, and HIV drugs can also interact. Always disclose all medications during your consultation.</p>
            </div>
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-white">
              <p className="font-semibold text-[#1C1C1E] mb-2">Dose</p>
              <p className="text-sm text-[#4A4A4C] leading-relaxed">Standard starting dose is 10mg. If this doesn't produce adequate results after several attempts at correct timing, your physician may increase to 20mg. Many men need a dose adjustment to find what works for them.</p>
            </div>
          </div>
        </section>

        {/* Daily vs on-demand */}
        <section id="daily-vs-ondemand">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Daily vs On-Demand: How Each Format Works</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil is unique among ED medications in having an approved daily-use formulation. Understanding why requires a quick look at the pharmacokinetics.
          </p>
          <p className="leading-relaxed mb-4">
            When you take 10mg or 20mg on demand, the drug rises to a peak in your bloodstream over 2 hours, remains elevated for several hours, then slowly declines over the following 24–36 hours. You get a significant spike and then a long tail.
          </p>
          <p className="leading-relaxed mb-4">
            When you take 2.5mg or 5mg daily, you never get the large spike — instead the drug accumulates to a steady-state concentration over several days and then stays there as long as you keep taking it. The PDE5 inhibition is continuous but at a lower intensity. This is sufficient for most men to achieve erections with arousal at any time.
          </p>
          <p className="leading-relaxed">
            Daily dosing tends to produce milder side effects (less headache, less flushing) because the peak drug level is lower. Some research also suggests that daily tadalafil may improve baseline erectile function over time by promoting endothelial health in penile blood vessels, though this is not the primary mechanism.
          </p>
        </section>

        {/* When it doesn't work */}
        <section id="when-it-doesnt-work">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">When Tadalafil Doesn't Work</h2>
          <p className="leading-relaxed mb-4">
            Tadalafil is effective for roughly 70–80% of men with ED. For the 20–30% where it doesn't work well, the reasons typically fall into a few categories:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Not enough arousal.</strong> The most common issue. The drug can only amplify what's already happening physiologically.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Wrong timing.</strong> Taking it too close to sexual activity, before it reaches full concentration.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Too low a dose.</strong> 10mg doesn't work for everyone. A physician can increase to 20mg.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Severe vascular ED.</strong> In cases where ED is caused by significant arterial disease, PDE5 inhibitors may have limited effect. A urologist can assess this.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Not the right drug for this person.</strong> Some men respond better to sildenafil — it's worth trying the alternative if tadalafil isn't working.</span>
            </li>
          </ul>
          <p className="leading-relaxed">
            Clinical guidelines suggest trying a PDE5 inhibitor at the correct dose and timing on at least 4–6 separate occasions before concluding it doesn't work. Many men give up too early or don't use the medication correctly on the first few attempts.
          </p>
        </section>

        {/* Mid-article CTA */}
        <div className="my-10 p-6 rounded-[16px] bg-[#F4F0E9] border border-[#D4E4D5]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Ready to try tadalafil?</p>
          <p className="text-[#1C1C1E] mb-4 leading-relaxed">
            Get a prescription online without a video call. Answer 3 questions to find the right platform for your situation.
          </p>
          <Link href="/ed/quiz" className="btn-primary inline-flex">
            Find my best match →
          </Link>
        </div>

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
