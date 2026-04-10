import type { Metadata } from 'next'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'About TelehealthPick',
  description:
    'TelehealthPick is an independent telehealth comparison platform. Learn about our editorial standards, how we review platforms, and our affiliate disclosure.',
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">About TelehealthPick</h1>
        <p className="text-lg text-gray-600 mb-10">
          Independent comparisons. No conflicts of interest. Just useful information.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Who runs this site</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TelehealthPick was built by Matthew Irving, based in Conshohocken, PA. Matthew works in pharmaceutical marketing and has spent years watching people struggle to navigate their medication options — not because the treatments don't exist, but because finding them is unnecessarily complicated. Telehealth platforms have made getting the right medication significantly easier for a lot of people, and this site exists to make choosing between them easier still.
          </p>
          <p className="text-gray-700 leading-relaxed">
            TelehealthPick is independent. It is not employed by, affiliated with, or owned by any telehealth company. Recommendations are based on independent research, public pricing data, and direct platform evaluation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">What is TelehealthPick?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TelehealthPick is an independent comparison platform for telehealth services. We cover
            erectile dysfunction treatment, GLP-1 weight loss programs, hair loss, women&apos;s health,
            and mental health — comparing the leading platforms on price, quality, and experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Our Editorial Standards</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every comparison and review on TelehealthPick is written by our editorial team using a
            consistent methodology:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>We research public pricing, terms of service, and platform policies directly from each provider</li>
            <li>We evaluate platforms on medication range, consultation process, shipping, customer service track record, and total cost including fees</li>
            <li>We consult clinical sources for medical accuracy and flag where information is general vs. personalised</li>
            <li>We update articles when pricing or platform policies change</li>
            <li>We clearly label opinion vs. fact, and disclose where affiliate relationships exist</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Affiliate relationships do not influence our editorial rankings. If a platform doesn&apos;t
            have an affiliate program, we still include it if it&apos;s worth recommending.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Affiliate Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TelehealthPick earns revenue through affiliate partnerships. When you click a link and
            make a purchase, we may receive a commission — at no extra cost to you. This is how
            we fund the site and keep our content free.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We disclose affiliate links at the top of every article where they appear. Our
            rankings and recommendations are never altered by commercial considerations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Medical Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            TelehealthPick does not provide medical advice. The information on this site is for
            informational and comparison purposes only. Always consult a licensed healthcare
            provider before starting any new medication or treatment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Have a question or correction? Reach us at{' '}
            <a href="mailto:hello@telehealthpick.com" className="text-[#5B7A5F] hover:underline">
              hello@telehealthpick.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Work With Us</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            TelehealthPick is building an audience of people actively researching telehealth options before making a purchase decision. If you represent a telehealth platform or health service, we are open to partnership conversations.
          </p>
          <div className="p-5 rounded-[12px] bg-[#F0EDE6] border border-[#E8E7E3]">
            <p className="text-sm font-semibold text-[#1C1C1E] mb-3">Partnership opportunities include:</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">→</span>Affiliate program partnerships</li>
              <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">→</span>Sponsored content and featured placements</li>
              <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">→</span>Exclusive offers for our readers</li>
              <li className="flex gap-2"><span className="text-[#5B7A5F] mt-0.5">→</span>Direct advertising arrangements</li>
            </ul>
            <p className="text-sm text-gray-600 mb-4">
              All partnerships are clearly disclosed to readers. Our editorial rankings remain independent regardless of commercial relationships.
            </p>
            <a
              href="mailto:partnerships@telehealthpick.com"
              className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
