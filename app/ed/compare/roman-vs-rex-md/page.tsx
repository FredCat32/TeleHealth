import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'Roman vs Rex MD 2026: Cheapest ED Treatment?',
  description: 'Roman vs Rex MD compared side by side for price, experience, and medication options. Which budget ED platform wins?',
}

export default function RomanVsRexMDPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-3">Coming Soon</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          Roman vs Rex MD 2026: Cheapest ED Treatment?
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Our budget ED showdown is coming soon. In the meantime, see how they each compare to Hims.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ed/compare/hims-vs-roman"
            className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            See Hims vs Roman
          </Link>
          <Link
            href="/ed"
            className="inline-block border border-gray-300 text-[#1C1C1E] font-semibold px-6 py-3 rounded-xl hover:border-gray-400 transition-colors"
          >
            View all ED comparisons
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
