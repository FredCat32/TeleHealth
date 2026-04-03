import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'How Does Cialis Work? A Plain-English Guide',
  description: 'How Cialis (tadalafil) works to treat ED, how long it takes to kick in, how long it lasts, and what affects it.',
}

export default function HowDoesCialisWorkPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-3">Coming Soon</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          How Does Cialis Work?
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Our plain-English guide to Cialis (tadalafil) is coming soon.
        </p>
        <Link href="/ed/guide/what-is-tadalafil" className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
          What is tadalafil?
        </Link>
      </div>
    </PageWrapper>
  )
}
