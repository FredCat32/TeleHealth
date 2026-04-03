import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'Tadalafil vs Sildenafil: Which Is Better for ED?',
  description: 'Tadalafil (generic Cialis) vs sildenafil (generic Viagra) compared. Which lasts longer, works faster, and costs less?',
}

export default function TadalafilVsSildenafilPage() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-3">Coming Soon</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-4">
          Tadalafil vs Sildenafil
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Our full comparison of these two ED medications is coming soon.
        </p>
        <Link href="/ed/quiz" className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
          Take the ED quiz
        </Link>
      </div>
    </PageWrapper>
  )
}
