import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'Fastest ED Medication Delivery 2026: Which Platform Ships Quickest?',
  description: 'We tested delivery times across Hims, Roman, Ro, and Rex MD to find which ships ED medication fastest.',
}

export default function FastestDeliveryPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-3">Coming Soon</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          Fastest ED Medication Delivery 2026
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Our delivery speed comparison is coming soon. Compare platforms while you wait.
        </p>
        <Link href="/ed" className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
          Compare ED platforms
        </Link>
      </div>
    </PageWrapper>
  )
}
