import type { Metadata } from 'next'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'Privacy Policy — TreatCompare',
  description:
    'TreatCompare privacy policy covering data collection, Google Analytics, email subscriptions, cookies, and your rights.',
}

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TreatCompare collects information in the following ways:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Email addresses</strong> — when you voluntarily subscribe to our email list
              for price alerts and updates.
            </li>
            <li>
              <strong>Analytics data</strong> — via Google Analytics 4 (GA4), including pages
              visited, time on site, and anonymized usage data.
            </li>
            <li>
              <strong>Click data</strong> — when you click affiliate links, we log the
              program and referral source for internal analytics.
            </li>
            <li>
              <strong>Quiz responses</strong> — quiz answers are stored only in your browser
              session and URL parameters. We do not store quiz responses on our servers.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">2. Google Analytics (GA4)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use Google Analytics 4 to understand how visitors use our site. GA4 collects
            anonymized data including page views, session duration, device type, and general
            geographic location (country/region level). IP addresses are anonymized by default.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can opt out of Google Analytics tracking by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5B7A5F] hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more information on how Google uses this data, see{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5B7A5F] hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">3. Email Collection</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you subscribe to our email list, we collect your email address to send you price
            alerts and updates about telehealth platforms. We use a third-party email service
            provider (Resend) to manage subscriptions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We will never sell your email address. You can unsubscribe at any time by clicking
            the unsubscribe link in any email we send.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">4. Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TreatCompare uses the following types of cookies:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Analytics cookies</strong> — set by Google Analytics to track site usage
            </li>
            <li>
              <strong>Functional cookies</strong> — used to remember preferences (e.g., if you&apos;ve
              dismissed a notification)
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            You can manage or delete cookies through your browser settings. Disabling cookies may
            affect some site functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">5. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our site contains links to third-party platforms. When you click these links, you are
            subject to the privacy policies of those platforms. TreatCompare is not responsible for
            the data practices of third-party sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">6. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of analytics tracking</li>
            <li>Unsubscribe from email communications</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:privacy@telehealthpick.com" className="text-[#5B7A5F] hover:underline">
              privacy@telehealthpick.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1C1C1E] mb-3">7. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. We will post the updated date
            at the top of this page. Continued use of this site after changes constitutes your
            acceptance of the updated policy.
          </p>
        </section>
      </div>
    </PageWrapper>
  )
}
