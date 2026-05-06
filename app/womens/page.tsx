import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { affiliatePrograms } from '@/lib/affiliates'
import CTABlock from '@/components/CTABlock'
import { Suspense } from 'react'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.telehealthpick.com/womens' },
  title: "Women's Health Telehealth 2026: Compare Hers, Nurx & More",
  description:
    "Compare the best online women's health platforms for birth control, weight loss, menopause, UTI treatment, and mental health.",
}

const womensPrograms = affiliatePrograms.filter((p) =>
  p.genders.includes('female') || p.genders.includes('all')
)

export default function WomensPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          {"Women's Health Telehealth 2026"}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Compare Hers, Nurx, Ro, and more for birth control, weight loss, menopause care, UTI
          treatment, and mental health support.
        </p>

        <Suspense fallback={null}>
          <CTABlock programs={womensPrograms} title="Women's health platforms" />
        </Suspense>

        <div className="mt-10 p-6 bg-[#F7F4EF] rounded-xl border border-gray-200 text-center">
          <p className="text-gray-500 mb-4">
            Detailed comparisons and reviews are coming soon.
          </p>
          <Link
            href="/quiz/female"
            className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Find the right platform for you
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
