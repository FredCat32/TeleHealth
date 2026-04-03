import type { Metadata } from 'next'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'About TreatCompare',
  description:
    'TreatCompare is an independent telehealth comparison platform. Learn about our editorial standards, how we review platforms, and our affiliate disclosure.',
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">About TreatCompare</h1>
        <p className="text-lg text-gray-600 mb-10">
          Independent comparisons. No conflicts of interest. Just useful information.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">What is TreatCompare?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TreatCompare is an independent comparison platform for telehealth services. We cover
            erectile dysfunction treatment, GLP-1 weight loss programs, hair loss, women&apos;s health,
            and mental health — comparing the leading platforms on price, quality, and experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are not employed by, affiliated with, or owned by any telehealth company. Our
            recommendations are based on independent research, public pricing data, and user
            experience testing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Our Editorial Standards</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every comparison and review on TreatCompare is written by our editorial team using a
            consistent methodology:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>We research public pricing, terms of service, and platform policies</li>
            <li>We consult clinical sources for medical accuracy</li>
            <li>We update articles when pricing or platform policies change</li>
            <li>We clearly label any sections that are opinion vs. fact</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Affiliate relationships do not influence our editorial rankings. If a platform doesn&apos;t
            have an affiliate program, we still include it if it&apos;s worth recommending.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Affiliate Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TreatCompare earns revenue through affiliate partnerships. When you click a link and
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
            TreatCompare does not provide medical advice. The information on this site is for
            informational and comparison purposes only. Always consult a licensed healthcare
            provider before starting any new medication or treatment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Have a question, correction, or partnership inquiry? Reach us at{' '}
            <a href="mailto:hello@treatcompare.com" className="text-[#5B7A5F] hover:underline">
              hello@treatcompare.com
            </a>
          </p>
        </section>
      </div>
    </PageWrapper>
  )
}
