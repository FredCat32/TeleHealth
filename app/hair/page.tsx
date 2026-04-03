import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { affiliatePrograms } from '@/lib/affiliates'
import CTABlock from '@/components/CTABlock'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Hair Loss Treatment Online 2026: Compare Keeps, Hims & More',
  description:
    'Compare the best online hair loss treatment platforms. Find the most affordable finasteride and minoxidil from US telehealth providers.',
}

const hairPrograms = affiliatePrograms.filter((p) => p.concerns.includes('hairloss'))

export default function HairPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          Hair Loss Treatment Online 2026
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Compare Keeps, Hims, Roman, and more for finasteride and minoxidil. Detailed
          comparisons and reviews coming soon.
        </p>

        <Suspense fallback={null}>
          <CTABlock programs={hairPrograms} concern="hairloss" title="Hair loss treatment providers" />
        </Suspense>

        <div className="mt-10 p-6 bg-[#F7F4EF] rounded-xl border border-gray-200 text-center">
          <p className="text-gray-500 mb-4">
            Detailed hair loss comparisons and reviews are coming soon.
          </p>
          <Link
            href="/quiz/male"
            className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Find the right platform for you
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
