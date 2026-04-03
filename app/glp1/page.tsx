import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { affiliatePrograms } from '@/lib/affiliates'
import CTABlock from '@/components/CTABlock'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'GLP-1 Weight Loss Programs 2026: Compare Semaglutide & Tirzepatide',
  description:
    'Compare the best online GLP-1 weight loss programs. Find the most affordable semaglutide and tirzepatide prescriptions from telehealth providers.',
}

const weightLossPrograms = affiliatePrograms.filter((p) => p.concerns.includes('weightloss'))

export default function GLP1Page() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          GLP-1 Weight Loss Programs 2026
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Compare online providers for semaglutide (Ozempic/Wegovy) and tirzepatide (Mounjaro/Zepbound).
          Full comparisons, reviews, and pricing guides coming soon.
        </p>

        <Suspense fallback={null}>
          <CTABlock programs={weightLossPrograms} concern="weightloss" title="GLP-1 providers" />
        </Suspense>

        <div className="mt-10 p-6 bg-[#F7F4EF] rounded-xl border border-gray-200 text-center">
          <p className="text-gray-500 mb-4">
            Detailed GLP-1 comparisons, reviews, and guides are coming soon.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Take the quiz for personalized recommendations
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
