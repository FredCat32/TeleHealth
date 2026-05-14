import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/glp1/guide/tirzepatide-vs-semaglutide' },
  title: 'Tirzepatide vs Semaglutide 2026: Which GLP-1 Is Right for You?',
  description:
    'Tirzepatide and semaglutide are the two leading GLP-1 medications for weight loss. We compare clinical results, side effects, cost, and which one suits your situation.',
}

const faqs = [
  {
    question: 'Is tirzepatide stronger than semaglutide?',
    answer:
      'Yes, based on clinical trial data. Tirzepatide (Zepbound/Mounjaro) produced average weight loss of 20–22% of body weight in the SURMOUNT-1 trial, compared to around 15% for semaglutide (Wegovy) in the STEP-1 trial. Tirzepatide works on two hormone receptors (GLP-1 and GIP), while semaglutide targets only GLP-1, which likely explains the stronger effect. However, both are significantly more effective than older weight loss medications.',
  },
  {
    question: 'What is the difference between tirzepatide and semaglutide?',
    answer:
      'Semaglutide is a GLP-1 receptor agonist — it mimics the GLP-1 hormone to reduce appetite and slow digestion. Tirzepatide is a dual GLP-1/GIP receptor agonist — it targets both GLP-1 and GIP (glucose-dependent insulinotropic polypeptide) receptors simultaneously. The dual action of tirzepatide produces stronger appetite suppression and, on average, greater weight loss. Both are available as weekly injections through telehealth.',
  },
  {
    question: 'Which has worse side effects — tirzepatide or semaglutide?',
    answer:
      'The side effect profile is similar for both. The most common effects are nausea, vomiting, diarrhea, constipation, and fatigue — especially during dose escalation. Most side effects are mild and improve as your body adjusts. Some studies suggest tirzepatide may produce slightly more nausea early on due to its stronger effect, but this varies significantly by individual. Starting at a low dose and titrating slowly helps minimise side effects for both medications.',
  },
  {
    question: 'Can I get tirzepatide online through telehealth?',
    answer:
      'Yes. Compounded tirzepatide is available through telehealth platforms including ShedRx and Sprout Health. You complete an online health intake form reviewed by a licensed provider — no in-person visit required. If approved, a compounded tirzepatide prescription is sent directly to a pharmacy and shipped to you. Note that compounded medications are not FDA-approved as finished drug products, though the active ingredient is the same as in branded Zepbound/Mounjaro.',
  },
  {
    question: 'How much do tirzepatide and semaglutide cost through telehealth?',
    answer:
      'Compounded semaglutide through telehealth typically runs $150–$300/month depending on the platform and dose. Compounded tirzepatide tends to cost more — around $199–$400/month. Branded versions (Wegovy and Zepbound) cost over $1,000/month without insurance. Telehealth platforms with compounded options offer the most affordable access. Prices change frequently, so check directly with the platform before enrolling.',
  },
  {
    question: 'Should I start with semaglutide or tirzepatide?',
    answer:
      'There is no universal answer — it depends on your health history, budget, and goals. Many providers start patients on semaglutide because it has a longer track record and slightly more predictable side effect profile. Some will prescribe tirzepatide from the start if the stronger weight loss outcomes are the priority. Your telehealth provider will review your intake form and recommend the medication best suited to your situation.',
  },
  {
    question: 'What are the branded names for tirzepatide and semaglutide?',
    answer:
      'Semaglutide is sold as Ozempic (for type 2 diabetes) and Wegovy (for weight management), both made by Novo Nordisk. Tirzepatide is sold as Mounjaro (for type 2 diabetes) and Zepbound (for weight management), both made by Eli Lilly. Compounded versions use the same active ingredients but are not manufactured by those companies and are not FDA-approved finished drug products.',
  },
]

const tocItems = [
  { id: 'tldr', label: 'Quick verdict' },
  { id: 'what-is-each', label: 'How each drug works' },
  { id: 'results', label: 'Clinical results compared' },
  { id: 'side-effects', label: 'Side effects' },
  { id: 'comparison', label: 'Side-by-side comparison' },
  { id: 'who-each-suits', label: 'Who each suits' },
  { id: 'cost', label: 'Cost & availability' },
  { id: 'telehealth', label: 'Getting either online' },
  { id: 'faq', label: 'FAQ' },
]

export default function TirzepatideVsSemaglutidePage() {
  return (
    <PageWrapper>
      <ArticleLayout
        title="Tirzepatide vs Semaglutide 2026: Which GLP-1 Is Right for You?"
        description="Both are GLP-1 medications and both produce significant weight loss. But they are not the same drug. Here is an honest comparison of tirzepatide and semaglutide — what the clinical data shows, what the side effects are, and which one is better suited to your situation."
        publishDate="2026-05-14"
        updatedDate="2026-05-14"
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
              <span><strong>Stronger results:</strong> Tirzepatide. Clinical trials show 20–22% average body weight loss vs ~15% for semaglutide.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Longer track record:</strong> Semaglutide. More years of real-world data and a well-understood side effect profile.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>More affordable:</strong> Semaglutide. Compounded semaglutide is typically $50–100/month cheaper than tirzepatide.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#5B7A5F] font-bold mt-0.5">→</span>
              <span><strong>Bottom line:</strong> If you want maximum weight loss and cost is not the deciding factor, tirzepatide has the edge. If you prefer a proven medication at a lower price, semaglutide is excellent.</span>
            </li>
          </ul>
        </section>

        <section className="my-6 p-5 rounded-[12px] border border-[#D4E4D5] bg-[#EEF4EE]">
          <p className="text-sm font-semibold text-[#4A6950] mb-1">Medical disclaimer</p>
          <p className="text-sm text-[#4A4A4C] leading-relaxed">
            This article is for informational purposes only. Both tirzepatide and semaglutide are prescription medications. Always consult a licensed healthcare provider before starting any weight loss medication. TelehealthPick does not provide medical advice.
          </p>
        </section>

        {/* How each works */}
        <section id="what-is-each">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">How Each Drug Works</h2>
          <p className="leading-relaxed mb-4">
            Both medications are injectable once-weekly drugs that reduce appetite and slow digestion — but they achieve this through different mechanisms.
          </p>

          <h3 className="text-lg font-semibold text-[#1C1C1E] mb-2">Semaglutide (Ozempic / Wegovy)</h3>
          <p className="leading-relaxed mb-5">
            Semaglutide is a GLP-1 receptor agonist. GLP-1 (glucagon-like peptide-1) is a hormone your gut naturally releases after eating — it signals fullness to the brain, slows gastric emptying, and helps regulate blood sugar. Semaglutide mimics this hormone in a more potent and sustained way than your body produces on its own, dramatically reducing appetite and caloric intake over time.
          </p>

          <h3 className="text-lg font-semibold text-[#1C1C1E] mb-2">Tirzepatide (Mounjaro / Zepbound)</h3>
          <p className="leading-relaxed mb-5">
            Tirzepatide is a dual GLP-1/GIP receptor agonist. In addition to GLP-1, it also activates GIP (glucose-dependent insulinotropic polypeptide) receptors. GIP is another gut hormone involved in fat storage, insulin regulation, and energy metabolism. Targeting both pathways simultaneously produces a stronger appetite-suppressing effect than GLP-1 alone — which is reflected in the larger average weight loss seen in tirzepatide trials.
          </p>

          <div className="p-5 rounded-[12px] bg-[#F7F4EF] border border-[#E8E7E3]">
            <p className="text-sm font-semibold text-[#1C1C1E] mb-2">In plain terms</p>
            <p className="text-sm text-[#4A4A4C] leading-relaxed">
              Semaglutide turns down one appetite dial. Tirzepatide turns down two. Both significantly reduce hunger — tirzepatide just has a slightly bigger effect for most people.
            </p>
          </div>
        </section>

        {/* Clinical results */}
        <section id="results">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Clinical Results Compared</h2>
          <p className="leading-relaxed mb-4">
            The best head-to-head data comes from two large randomised controlled trials — STEP-1 (semaglutide) and SURMOUNT-1 (tirzepatide) — both run over 68–72 weeks in adults with obesity.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="p-5 rounded-[12px] bg-[#F7F4EF] border border-[#E8E7E3]">
              <p className="text-sm font-semibold text-[#5B7A5F] mb-1">Semaglutide — STEP-1 trial</p>
              <ul className="text-sm text-[#4A4A4C] space-y-1.5 mt-3">
                <li><strong>Average weight loss:</strong> ~15% of body weight</li>
                <li><strong>5% loss achieved:</strong> 86% of participants</li>
                <li><strong>15% loss achieved:</strong> 32% of participants</li>
                <li><strong>Dose:</strong> 2.4mg weekly</li>
              </ul>
            </div>
            <div className="p-5 rounded-[12px] bg-[#EEF4EE] border border-[#5B7A5F]">
              <p className="text-sm font-semibold text-[#5B7A5F] mb-1">Tirzepatide — SURMOUNT-1 trial</p>
              <ul className="text-sm text-[#4A4A4C] space-y-1.5 mt-3">
                <li><strong>Average weight loss:</strong> 20–22% of body weight</li>
                <li><strong>5% loss achieved:</strong> 91% of participants</li>
                <li><strong>20% loss achieved:</strong> 57% of participants</li>
                <li><strong>Dose:</strong> 10–15mg weekly</li>
              </ul>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            The difference is meaningful but not dramatic in practical terms. Someone weighing 220 lbs on semaglutide might lose around 33 lbs on average; the same person on tirzepatide might lose 44–48 lbs. Both are significant — tirzepatide just tends to produce more.
          </p>
          <p className="leading-relaxed">
            It is worth noting that these are averages from clinical trials. Individual results vary significantly based on starting weight, diet, activity level, and how well you tolerate dose escalation. Some people achieve far above-average results on semaglutide; some do not respond as strongly to tirzepatide as the trials suggest.
          </p>
        </section>

        {/* Side effects */}
        <section id="side-effects">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Side Effects</h2>
          <p className="leading-relaxed mb-4">
            Both medications share a very similar side effect profile. The most common effects relate to the GI tract and typically peak during dose escalation before improving as your body adjusts.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE6] text-[#1C1C1E]">
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Side effect</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Semaglutide</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Tirzepatide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nausea', 'Very common, especially early', 'Very common, especially early'],
                  ['Vomiting', 'Common during escalation', 'Common during escalation'],
                  ['Diarrhea', 'Common', 'Common'],
                  ['Constipation', 'Common', 'Common'],
                  ['Fatigue', 'Moderate', 'Moderate'],
                  ['Injection site reaction', 'Mild, occasional', 'Mild, occasional'],
                  ['Reduced appetite', 'Significant', 'Significant — often stronger'],
                  ['Muscle loss', 'Some (manageable with protein)', 'Some (manageable with protein)'],
                ].map(([effect, sema, tirz], i) => (
                  <tr key={effect} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] font-medium text-[#4A4A4C]">{effect}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{sema}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{tirz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            The most effective way to manage side effects is to start at the lowest dose and increase slowly. Most telehealth platforms use a titration schedule — typically 4 weeks at each dose level — that gives your body time to adjust before escalating. Do not rush titration in pursuit of faster results.
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
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3]">Semaglutide</th>
                  <th className="text-left px-4 py-3 font-semibold border border-[#E8E7E3] bg-[#EEF4EE]">Tirzepatide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mechanism', 'GLP-1 receptor agonist', 'GLP-1 + GIP dual agonist'],
                  ['Branded name (weight loss)', 'Wegovy', 'Zepbound'],
                  ['Average weight loss (trials)', '~15% body weight', '20–22% body weight'],
                  ['Years of data', '5+ years', '3+ years'],
                  ['Dosing', 'Once weekly injection', 'Once weekly injection'],
                  ['Compounded cost (telehealth)', 'From ~$150/month', 'From ~$199/month'],
                  ['Side effects', 'Nausea, GI symptoms', 'Nausea, GI symptoms (similar)'],
                  ['Availability via telehealth', 'Widely available', 'Widely available'],
                  ['Insurance coverage', 'Limited', 'Limited'],
                ].map(([factor, sema, tirz], i) => (
                  <tr key={factor} className={i % 2 !== 0 ? 'bg-[#F7F4EF]' : ''}>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C] font-medium">{factor}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] text-[#4A4A4C]">{sema}</td>
                    <td className="px-4 py-3 border border-[#E8E7E3] bg-[#F8FAF8] text-[#4A4A4C]">{tirz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who each suits */}
        <section id="who-each-suits">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-5">Who Each Medication Suits</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="p-5 rounded-[12px] border border-[#E8E7E3] bg-[#F7F4EF]">
              <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Choose semaglutide if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the most established medication with the most data</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are cost-conscious and want the most affordable compounded option</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have a moderate amount of weight to lose (under 50 lbs)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have been sensitive to new medications in the past</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want to start with a lower-intensity option</li>
              </ul>
            </div>
            <div className="p-5 rounded-[12px] border-2 border-[#5B7A5F] bg-[#EEF4EE]">
              <p className="text-sm font-semibold text-[#4A6950] mb-3">Choose tirzepatide if you:</p>
              <ul className="text-sm text-[#4A4A4C] space-y-2">
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Want the strongest available results</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have significant weight to lose (50+ lbs)</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have tried semaglutide without enough response</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Have type 2 diabetes or insulin resistance alongside obesity</li>
                <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">✓</span>Are in perimenopause/menopause and dealing with hormonal weight gain</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section id="cost">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Cost and Availability</h2>
          <p className="leading-relaxed mb-4">
            Branded semaglutide (Wegovy) and tirzepatide (Zepbound) both list at over $1,000/month without insurance. Insurance coverage for weight loss medications remains patchy — many plans do not cover them at all.
          </p>
          <p className="leading-relaxed mb-4">
            Compounded versions through telehealth are dramatically cheaper. Compounded semaglutide typically starts at $150–250/month; compounded tirzepatide at $199–350/month. Prices vary by platform, dose, and whether you are on a monthly or quarterly plan. Quarterly plans are usually cheaper per month.
          </p>
          <p className="leading-relaxed">
            None of the major telehealth platforms accept insurance for compounded GLP-1 medications. Some accept FSA/HSA payments — ShedRx explicitly accepts FSA/HSA, which can reduce your effective out-of-pocket cost significantly if you have one.
          </p>
        </section>

        {/* Getting online */}
        <section id="telehealth">
          <h2 className="text-2xl font-bold text-[#1C1C1E] mt-10 mb-4">Getting Either Medication Online</h2>
          <p className="leading-relaxed mb-4">
            Both semaglutide and tirzepatide are available through telehealth as compounded medications. The process is the same regardless of which you choose: complete an online health intake form, a licensed provider reviews it and issues a prescription if appropriate, and the medication is shipped directly to you. No in-person appointment or video call is required on most platforms.
          </p>
          <p className="leading-relaxed mb-5">
            The telehealth platforms on this site that offer both options include ShedRx (which also accepts FSA/HSA) and Sprout Health (one of the most affordable options for semaglutide starting at $149/month).
          </p>

          <div className="mt-6 p-6 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="font-semibold text-[#1C1C1E] mb-1">Compare GLP-1 platforms side by side</p>
            <p className="text-sm text-[#4A4A4C] mb-4">
              See all available providers, pricing, and which offers tirzepatide vs semaglutide on our GLP-1 hub.
            </p>
            <Link href="/glp1" className="btn-primary inline-flex">
              Compare GLP-1 providers →
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
