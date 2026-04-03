import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import HomeSections from '@/components/HomeSections'

export const metadata: Metadata = {
  title: 'TreatCompare — Compare Telehealth Platforms',
  description:
    'Compare ED, GLP-1 weight loss, hair loss, and mental health telehealth services side by side. Take our quiz to find your best match.',
}

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-4">
            Independent telehealth comparisons
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1E] leading-tight mb-6 text-balance">
            Find the right telehealth platform for you
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Compare ED, weight loss, hair loss, and mental health services side by side — no
            fluff, just honest information to help you decide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quiz"
              className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base shadow-sm hover:shadow-md"
            >
              Take the quiz
            </Link>
            <Link
              href="/compare"
              className="inline-block text-[#1C1C1E] border border-gray-300 hover:border-gray-400 font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
            >
              Browse comparisons
            </Link>
          </div>
        </div>
      </section>

      {/* Animated sections (client component) */}
      <HomeSections />
    </PageWrapper>
  )
}
