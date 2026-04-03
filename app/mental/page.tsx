import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { affiliatePrograms } from '@/lib/affiliates'
import CTABlock from '@/components/CTABlock'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Online Therapy & Mental Health Telehealth 2026: Compare Platforms',
  description:
    'Compare the best online therapy and mental health telehealth platforms. Find affordable therapy, psychiatry, and medication management.',
}

const mentalPrograms = affiliatePrograms.filter((p) => p.concerns.includes('mentalhealth'))

export default function MentalPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          Online Mental Health Telehealth 2026
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Compare BetterHelp, Hims, Hers, and more for online therapy, psychiatry, and mental
          health medication management.
        </p>

        <Suspense fallback={null}>
          <CTABlock programs={mentalPrograms} concern="mentalhealth" title="Mental health platforms" />
        </Suspense>

        <div className="mt-10 p-6 bg-[#F7F4EF] rounded-xl border border-gray-200 text-center">
          <p className="text-gray-500 mb-4">
            Detailed mental health comparisons and reviews are coming soon.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Find the right platform for you
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
