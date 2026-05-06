import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import AffiliateCard from '@/components/AffiliateCard'
import FAQAccordion from '@/components/FAQAccordion'
import PageWrapper from '@/components/PageWrapper'
import { affiliatePrograms } from '@/lib/affiliates'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/hormones' },
  title: 'Best Online HRT Programs 2026: Compare Hormone Replacement Therapy Providers',
  description:
    'Compare the best online hormone replacement therapy programs for menopause, perimenopause, and hormonal health. Get HRT prescribed online — no in-person visit required.',
}

const hormonePrograms = affiliatePrograms.filter((p) => p.concerns.includes('hormones'))

const faqs = [
  {
    question: 'What is hormone replacement therapy (HRT)?',
    answer:
      'HRT replaces hormones — primarily estrogen and progesterone in women, testosterone in men — that decline with age. For women, it is most commonly used to treat menopause and perimenopause symptoms including hot flashes, night sweats, sleep disruption, mood changes, and vaginal dryness. Telehealth platforms now allow you to get HRT prescribed online after an async medical consultation.',
  },
  {
    question: 'Can I get HRT online without an in-person appointment?',
    answer:
      'Yes. Telehealth platforms like Gala Health use asynchronous consultations — you complete a detailed health intake form that is reviewed by a licensed physician. In most cases no video call or in-person visit is required. A prescription is then sent to a compounding pharmacy and shipped directly to you.',
  },
  {
    question: 'How much does online HRT cost?',
    answer:
      'Online HRT programs typically cost $100–$250/month depending on the provider and medication type. Gala Health starts at $149/month including the medical consultation and prescription. Most programs do not accept insurance, but costs are significantly lower than traditional in-office hormone therapy.',
  },
  {
    question: 'What symptoms does HRT treat?',
    answer:
      'HRT is most effective for hot flashes and night sweats, sleep disruption, mood swings and anxiety, brain fog, vaginal dryness and painful intercourse, low libido, and recurrent UTIs. It also helps maintain bone density and reduce osteoporosis risk. Your provider will assess your full symptom picture before recommending a protocol.',
  },
  {
    question: 'Is bioidentical HRT the same as conventional HRT?',
    answer:
      'Bioidentical hormones have the same molecular structure as hormones produced by your body, whereas conventional HRT may use synthetic or animal-derived hormones. Many telehealth platforms use compounded bioidentical hormones. Both are effective — your provider will recommend the right type based on your health history and symptoms.',
  },
  {
    question: 'Can I take HRT and GLP-1 medication together?',
    answer:
      'Yes — in fact, combining HRT and GLP-1 therapy is increasingly common for women in perimenopause and menopause who also want to lose weight. Estrogen decline contributes to weight gain around the abdomen, and GLP-1 medications like tirzepatide can complement HRT for more effective weight management. Gala Health offers both in one program.',
  },
]

const faqSchemaData = faqSchema(faqs)

export default function HormonesPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        <AffiliateDisclosure />

        <div className="mt-8 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5B7A5F] mb-3">
            Updated May 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] leading-tight mb-4 text-balance">
            Online Hormone Replacement Therapy: Compare Providers
          </h1>
          <p className="text-lg text-[#4A4A4C] leading-relaxed mb-6 max-w-2xl">
            HRT for menopause, perimenopause, and hormonal health is now available online through licensed telehealth providers — no in-person visit required. This page helps you find the right program.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#providers" className="btn-primary">
              See providers →
            </Link>
            <Link href="#faqs" className="btn-secondary">
              Common questions
            </Link>
          </div>
        </div>

        {/* Provider cards */}
        <section id="providers" className="mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hormonePrograms.map((program, i) => (
              <Suspense key={program.id} fallback={null}>
                <AffiliateCard
                  program={program}
                  position={i === 0 ? 'primary' : 'secondary'}
                  concern="hormones"
                  index={i}
                />
              </Suspense>
            ))}
          </div>
        </section>

        <p className="text-xs text-[#8A8A8C] mb-12 leading-relaxed">
          Rankings based on pricing, medication selection, clinical quality, and support. No brand has paid to appear first or reviewed this page before publication.{' '}
          <Link href="/about" className="underline hover:text-[#5B7A5F] transition-colors">
            About our methodology
          </Link>
        </p>

        {/* What to expect */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-4">What online HRT programs cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Hot flashes & night sweats', desc: 'The most common menopause symptom — HRT is the most effective treatment available.' },
              { label: 'Sleep & mood', desc: 'Hormonal fluctuations disrupt sleep architecture and contribute to anxiety and mood swings.' },
              { label: 'Vaginal dryness & libido', desc: 'Local estrogen therapy addresses dryness, discomfort, and recurrent UTIs.' },
              { label: 'Brain fog & energy', desc: 'Estrogen plays a role in cognitive function — many women report significant improvement with HRT.' },
              { label: 'Bone density', desc: 'Estrogen loss accelerates bone loss. HRT reduces osteoporosis risk long-term.' },
              { label: 'Weight management', desc: 'Hormonal changes drive abdominal weight gain. HRT — especially combined with GLP-1 — can help.' },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-white border border-[#E8E7E3] rounded-[12px]">
                <p className="font-semibold text-[#1C1C1E] mb-1">{item.label}</p>
                <p className="text-sm text-[#4A4A4C]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HRT + GLP-1 callout */}
        <section className="mb-14 p-6 bg-[#F0EDE6] rounded-[16px] border border-[#E8E7E3]">
          <h2 className="text-lg font-bold text-[#1C1C1E] mb-2">HRT + GLP-1: a common combination</h2>
          <p className="text-sm text-[#4A4A4C] leading-relaxed mb-4">
            Estrogen decline during menopause contributes directly to weight gain, particularly around the abdomen. Many women find that HRT alone isn't enough for weight loss — and GLP-1 medications like tirzepatide work better when hormones are balanced. Gala Health offers both programs together, which simplifies management and cost.
          </p>
          <Link href="/glp1" className="text-sm text-[#5B7A5F] font-semibold underline hover:text-[#4A6950] transition-colors">
            Compare GLP-1 weight loss programs →
          </Link>
        </section>

        {/* FAQ */}
        <section id="faqs" className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-5">Common questions</h2>
          <Suspense fallback={null}>
            <FAQAccordion faqs={faqs} />
          </Suspense>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-[#E8E7E3] pt-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-2">Ready to get started?</h2>
          <p className="text-sm text-[#8A8A8C] mb-6">
            Get HRT prescribed online by a licensed provider — no in-person visit required.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hormonePrograms.map((program, i) => (
              <Suspense key={program.id} fallback={null}>
                <AffiliateCard
                  program={program}
                  position={i === 0 ? 'primary' : 'secondary'}
                  concern="hormones"
                  index={i}
                />
              </Suspense>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  )
}
