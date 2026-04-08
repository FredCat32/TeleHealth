import type { Metadata } from 'next'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'Disclaimer — TelehealthPick',
  description:
    'Important disclaimers for TelehealthPick.com covering medical advice, affiliate relationships, pricing accuracy, and terms of use.',
}

export default function DisclaimerPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Disclaimer</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">1. Not Medical Advice</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The content published on TelehealthPick.com is for informational and educational purposes
            only. It does not constitute medical advice, diagnosis, or treatment. Always seek the
            advice of a qualified healthcare provider before starting, stopping, or changing any
            medication or health program.
          </p>
          <p className="text-gray-700 leading-relaxed">
            TelehealthPick is not a medical provider. We do not prescribe medications, provide
            diagnoses, or give individualized health advice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">2. Affiliate Relationships</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TelehealthPick participates in affiliate marketing programs. We may earn a commission
            when visitors click links to partner platforms and make a purchase. This commission
            is paid by the merchant and does not add any cost to you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Affiliate relationships do not influence our editorial content, rankings, or
            recommendations. We strive to provide accurate, unbiased comparisons regardless of
            whether a platform has an affiliate program with us.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Affiliate links are disclosed at the top of each article in which they appear.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">3. Pricing Accuracy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pricing information on TelehealthPick is based on publicly available data and is updated
            regularly. However, telehealth platform pricing can change at any time without notice.
            Always verify current pricing directly with the provider before making a purchase
            decision.
          </p>
          <p className="text-gray-700 leading-relaxed">
            TelehealthPick is not responsible for any discrepancies between prices listed on this site
            and prices charged by third-party platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">4. Independence</h2>
          <p className="text-gray-700 leading-relaxed">
            TelehealthPick is an independent comparison platform. We are not owned by, employed by,
            or financially invested in any telehealth company reviewed on this site. Our editorial
            team makes ranking decisions independently, without direction from commercial partners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">5. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            This website contains links to third-party websites. TelehealthPick is not responsible
            for the content, privacy practices, or accuracy of information on external sites. We
            encourage you to review the terms of service and privacy policies of any platform
            before making a purchase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">6. No Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            TelehealthPick provides this website on an &quot;as is&quot; and &quot;as available&quot; basis without
            warranties of any kind, either express or implied. We do not warrant that the
            information on this site is complete, accurate, or up to date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">7. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Questions about this disclaimer can be directed to{' '}
            <a href="mailto:legal@telehealthpick.com" className="text-[#5B7A5F] hover:underline">
              legal@telehealthpick.com
            </a>
          </p>
        </section>
      </div>
    </PageWrapper>
  )
}
