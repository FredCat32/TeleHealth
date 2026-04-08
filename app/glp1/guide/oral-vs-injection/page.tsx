import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'GLP-1 Pills vs Injections 2026: Which Is Right for You?',
  description:
    'Oral GLP-1 medications are now available through telehealth. We compare semaglutide and tirzepatide pills vs injections on effectiveness, convenience, cost, and who each format is actually best for.',
}

const faqs = [
  {
    question: 'Are oral GLP-1 medications as effective as injections?',
    answer:
      'Injections are generally more effective based on current clinical data. Injectable semaglutide (Wegovy) has shown average weight loss of 15% of body weight in trials. Oral semaglutide has lower bioavailability — meaning less of the drug reaches your bloodstream — which typically results in a smaller effect at equivalent doses. Compounded oral GLP-1 options are newer and have less independent clinical data behind them specifically, though the active ingredients are the same. If maximum weight loss is the goal, injections have the stronger track record.',
  },
  {
    question: 'Who should consider oral GLP-1 medication?',
    answer:
      'Oral GLP-1 is worth considering if you have a strong aversion to needles, cannot manage weekly injections reliably due to travel or routine, are earlier in your weight loss journey and want to start with a lower-commitment format, or have tried injections and found the side effect profile too intense. Some people also find daily oral medication easier to remember than a weekly injection.',
  },
  {
    question: 'Is compounded oral semaglutide FDA approved?',
    answer:
      'No. Compounded medications — whether oral or injectable — are not FDA approved as finished drug products. They are prepared by licensed compounding pharmacies under state board oversight and FDA guidelines for compounders. The active ingredient (semaglutide or tirzepatide) is the same as in branded versions, but the compounded product itself has not gone through the FDA drug approval process. This applies to both oral and injectable compounded GLP-1 medications.',
  },
  {
    question: 'How do I take injectable GLP-1 medication?',
    answer:
      'Most injectable GLP-1 medications are self-administered as a subcutaneous injection — meaning just under the skin, typically in the stomach, thigh, or upper arm — once per week. The needles used are very small (similar to an insulin pen) and most people find the injection process much less daunting than expected. Telehealth providers send detailed instructions and support with your first order.',
  },
  {
    question: 'Can I switch from injections to oral GLP-1 or vice versa?',
    answer:
      'Yes, though you should do this with your prescribing provider rather than on your own. Switching formats typically involves a dosing adjustment and a transition period. If you start on oral medication and want to switch to injections for better results, or start on injections and want to switch to oral for convenience, discuss it with your telehealth provider through their messaging system.',
  },
  {
    question: 'Which telehealth platforms offer oral GLP-1 medication?',
    answer:
      'Oral GLP-1 options (compounded semaglutide or tirzepatide in pill form) are offered by a smaller number of platforms compared to injectables. SkinnyRx specifically markets oral GLP-1 formats. Most major platforms including Ro, bmiMD, and TrimRx focus primarily on injectable options. Check each platform directly as offerings change frequently.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'what-is-glp1', label: 'How GLP-1 medications work' },
  { id: 'injections', label: 'Injectable GLP-1' },
  { id: 'oral', label: 'Oral GLP-1' },
  { id: 'comparison', label: 'Side-by-side comparison' },
  { id: 'who-each-suits', label: 'Who each format suits' },
  { id: 'cost', label: 'Cost differences' },
  { id: 'telehealth', label: 'Which platforms offer each' },
  { id: 'faq', label: 'FAQ' },
]

export default function OralVsInjectionPage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="GLP-1 Pills vs Injections 2026: Which Is Right for You?"
        description="Oral GLP-1 medications have become a real option through telehealth, but they are not the same as injections. Here is an honest comparison of both formats — effectiveness, convenience, cost, and which one makes sense for your situation."
        publishDate="2026-04-08"
        updatedDate="2026-04-08"
        showDisclosure={false}
        faqs={faqs}
        tocItems={tocItems}
      >

        {/* Quick verdict */}
        <section id="tldr" className="my-8 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8C] mb-3">Quick verdict</p>
          <ul className="space-y-2 text-[#1C1C1E]">
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best results:</strong> Injections. More clinical data, higher bioavailability, stronger average weight loss outcomes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Best for needle-averse:</strong> Oral. A daily pill with no injections required.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Most widely available:</strong> Injections. More telehealth platforms carry injectable options.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> If you can manage injections, they are the stronger clinical choice. If needles are a genuine barrier, oral GLP-1 is a real and reasonable alternative.</span>
            </li>
          </ul>
        </section>

        <section className="my-6 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Medical disclaimer</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            This article is for informational purposes only. GLP-1 medications are prescription drugs. Always consult a licensed healthcare provider before starting any weight loss medication. TelehealthPick does not provide medical advice.
          </p>
        </section>

        {/* How GLP-1 works */}
        <section id="what-is-glp1">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How GLP-1 Medications Work</h2>
          <p className="leading-relaxed mb-4">
            GLP-1 (glucagon-like peptide-1) is a hormone your body naturally produces in response to food. It signals to your brain that you are full, slows digestion, and regulates blood sugar. GLP-1 medications mimic this hormone, but in a more sustained and potent way than your body produces on its own.
          </p>
          <p className="leading-relaxed mb-4">
            The result for most people is a significant reduction in appetite and food intake, which leads to weight loss over time. The two most widely prescribed GLP-1 medications for weight loss right now are semaglutide (the active ingredient in Ozempic and Wegovy) and tirzepatide (the active ingredient in Mounjaro and Zepbound).
          </p>
          <p className="leading-relaxed">
            Both are available through telehealth as compounded medications at a fraction of the branded price. The key question this guide addresses is whether you get that medication as a weekly injection or a daily pill — and what the real difference is between the two.
          </p>
        </section>

        {/* Injections */}
        <section id="injections">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Injectable GLP-1: The Established Option</h2>
          <p className="leading-relaxed mb-4">
            Injectable semaglutide and tirzepatide are administered once a week as a subcutaneous injection — under the skin, not into a muscle. The needles are small, similar to what people with diabetes use for insulin. Most people who are nervous about self-injection find it more manageable than expected after the first dose.
          </p>
          <p className="leading-relaxed mb-4">
            Injections deliver the medication directly into your bloodstream with high bioavailability — meaning close to 100% of the dose is absorbed and available for your body to use. This is why injections tend to produce stronger results than oral versions of the same medication.
          </p>

          <div className="p-5 rounded-[12px] bg-[#F7F4EF] border border-[#E8E7E3] mb-6">
            <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Injectable GLP-1 at a glance</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-[#5B7A5F] mb-2">Advantages</p>
                <ul className="text-[#4A4A4C] space-y-1">
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>Strongest clinical evidence for weight loss</li>
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>High bioavailability — full dose absorbed</li>
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>Weekly dosing — only once per week</li>
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>Most widely available through telehealth</li>
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>More platform options and pricing competition</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#8A8A8C] mb-2">Drawbacks</p>
                <ul className="text-[#4A4A4C] space-y-1">
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Requires self-injection</li>
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Needs refrigeration in most cases</li>
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Travel with needles requires planning</li>
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Injection site reactions possible</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="leading-relaxed">
            Clinical trials for injectable semaglutide (Wegovy) showed average weight loss of around 15% of body weight over 68 weeks. Tirzepatide trials showed even stronger results — up to 20% in some studies. These are the benchmarks that oral versions are measured against.
          </p>
        </section>

        {/* Oral */}
        <section id="oral">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Oral GLP-1: The Newer Alternative</h2>
          <p className="leading-relaxed mb-4">
            Oral GLP-1 medications — semaglutide or tirzepatide in pill form — are a more recent development. A branded oral semaglutide called Rybelsus has existed for a few years but was approved for type 2 diabetes, not specifically for weight loss. More recently, compounding pharmacies have begun producing oral versions of both semaglutide and tirzepatide that telehealth platforms are prescribing for weight management.
          </p>
          <p className="leading-relaxed mb-4">
            The main challenge with oral GLP-1 is bioavailability. The digestive system breaks down peptide-based medications before they can be absorbed, which means a much smaller percentage of the dose actually reaches the bloodstream compared to an injection. To compensate, oral doses are typically much higher than injectable doses — but even then, results tend to be more modest.
          </p>

          <div className="p-5 rounded-[12px] bg-[#F7F4EF] border border-[#E8E7E3] mb-6">
            <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Oral GLP-1 at a glance</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-[#5B7A5F] mb-2">Advantages</p>
                <ul className="text-[#4A4A4C] space-y-1">
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>No needles or injections</li>
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>No refrigeration needed</li>
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>Easier to travel with</li>
                  <li className="flex gap-2"><span className="text-[#5B7A5F]">✓</span>Lower barrier to starting treatment</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#8A8A8C] mb-2">Drawbacks</p>
                <ul className="text-[#4A4A4C] space-y-1">
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Lower bioavailability than injections</li>
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Less clinical data on long-term outcomes</li>
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Daily dosing required (vs. weekly injection)</li>
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Fewer telehealth platforms carry it</li>
                  <li className="flex gap-2"><span className="text-[#8A8A8C]">✗</span>Must be taken on an empty stomach with limited water</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="leading-relaxed">
            Oral GLP-1 is not a lesser treatment — for people who genuinely cannot or will not self-inject, it is a meaningful option that can still produce real weight loss results. The honest framing is that it trades some effectiveness for a significant gain in convenience and accessibility.
          </p>
        </section>

        {/* Comparison table */}
        <section id="comparison">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Side-by-Side Comparison</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Injection</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Oral pill</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Clinical evidence', 'Extensive — 5+ years of trial data', 'Growing — compounded oral is newer'],
                  ['Average weight loss', 'Up to 15–20% body weight', 'Typically lower, varies by dose'],
                  ['Bioavailability', 'High — near 100%', 'Low — small fraction absorbed'],
                  ['Dosing frequency', 'Once per week', 'Once per day'],
                  ['Needles required', 'Yes', 'No'],
                  ['Refrigeration', 'Usually yes', 'No'],
                  ['Travel convenience', 'Requires planning', 'Simple'],
                  ['Availability via telehealth', 'Widely available', 'Fewer platforms'],
                  ['Side effects', 'Nausea, GI, injection site', 'Nausea, GI — similar profile'],
                ].map(([factor, injection, oral], i) => (
                  <tr key={factor} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C] font-medium">{factor}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8]">{injection}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3]">{oral}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who each suits */}
        <section id="who-each-suits">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Who Each Format Is Best For</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <p className="text-sm font-semibold text-[#4A6950] mb-3">Choose injections if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the strongest possible results</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have significant weight to lose</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Prefer once-weekly dosing over daily pills</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are comfortable managing a simple self-injection</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have a routine that makes weekly medication manageable</li>
              </ul>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose oral if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have a genuine needle phobia</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Travel frequently and want a simpler routine</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want to start treatment with a lower-commitment format</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have tried injections and found them unmanageable</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are earlier in your weight loss journey with less to lose</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section id="cost">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Cost Differences</h2>
          <p className="leading-relaxed mb-4">
            Compounded injectable semaglutide through telehealth typically runs $200–400 per month depending on the platform and dose. Tirzepatide tends to cost more, often $300–500 per month. These are substantially cheaper than branded versions (Wegovy is over $1,000/month without insurance).
          </p>
          <p className="leading-relaxed mb-4">
            Oral compounded GLP-1 pricing varies widely. Some platforms price oral options similarly to injectables; others charge less. The lower bioavailability of oral medication means you may need a higher dose to achieve similar results, which can push the cost back up.
          </p>
          <p className="leading-relaxed">
            Pricing in this space changes frequently. Always verify current costs directly with the platform before enrolling. None of the major telehealth platforms accept insurance for compounded GLP-1 medications.
          </p>
        </section>

        {/* Telehealth platforms */}
        <section id="telehealth">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Which Telehealth Platforms Offer Each</h2>
          <p className="leading-relaxed mb-4">
            Injectable GLP-1 options are available through most major telehealth weight loss platforms — Ro, bmiMD, TrimRx, ShedRx, MEDVi, and others all offer compounded semaglutide or tirzepatide injections.
          </p>
          <p className="leading-relaxed mb-4">
            Oral GLP-1 options are available through fewer platforms. SkinnyRx has specifically built its offering around oral semaglutide and tirzepatide pills rather than injections, making it the clearest option if you want to avoid needles entirely.
          </p>
          <p className="leading-relaxed">
            The oral GLP-1 market is growing quickly. More platforms are likely to add oral options over the next 12–18 months as demand increases and compounding pharmacy supply scales up.
          </p>

          <div className="mt-6 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Not sure which platform or format is right for you?</p>
            <p className="text-sm text-[#4A4A4C] mb-4">
              Answer a few questions and get matched to the best GLP-1 program for your situation — including whether injections or oral medication is the better fit.
            </p>
            <Link href="/glp1/quiz" className="btn-primary inline-flex">
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

      </ArticleLayout>
    </PageWrapper>
  )
}
