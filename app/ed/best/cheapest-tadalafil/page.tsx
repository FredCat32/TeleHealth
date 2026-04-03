import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'Cheapest Tadalafil Online 2026: Price Comparison',
  description: 'Where to find the cheapest generic tadalafil online in 2026. We compared prices across all major telehealth platforms.',
}

export default function CheapestTadalafilPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-3">Coming Soon</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          Cheapest Tadalafil Online 2026
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Our full tadalafil price comparison is coming soon. In the meantime, take our quiz to find the best option for your budget.
        </p>
        <Link href="/ed/quiz" className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
          Find cheapest ED option
        </Link>
      </div>
    </PageWrapper>
  )
}
