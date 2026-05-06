import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/reviews' },
  title: 'Telehealth Reviews — TelehealthPick',
  description:
    'In-depth reviews of every major telehealth platform. Honest, independent, regularly updated.',
}

const reviews = [
  {
    category: 'ED Treatment',
    items: [
      { name: 'Hims', href: '/ed/reviews/hims', rating: '4.4/5', desc: 'Best for bundles' },
      { name: 'Roman', href: '/ed/reviews/roman', rating: '4.4/5', desc: 'Best overall value' },
      { name: 'Ro', href: '/ed/reviews/ro', rating: '4.3/5', desc: 'Best for comprehensive care' },
      { name: 'Rex MD', href: '/ed/reviews/rex-md', rating: '3.9/5', desc: 'Cheapest option — from $2/dose' },
    ],
  },
]

export default function ReviewsPage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-3">
            Telehealth Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            All reviews are written by our editorial team. We test platforms, analyze pricing, and
            interview real users. Ratings are updated when platforms make significant changes.
          </p>
        </div>

        {reviews.map((group) => (
          <section key={group.category} className="mb-12">
            <h2 className="text-xl font-bold text-[#1C1C1E] mb-5">{group.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-[#5B7A5F] hover:shadow-sm transition-all"
                >
                  <span className="font-bold text-[#1C1C1E] text-lg block mb-1">{item.name}</span>
                  <span className="text-sm font-semibold text-amber-500 block mb-1">{item.rating}</span>
                  <span className="text-sm text-gray-500">{item.desc}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <p className="text-sm text-gray-400 mt-4">
          More reviews for GLP-1, hair loss, mental health, and women&apos;s health coming soon.
        </p>
      </div>
    </PageWrapper>
  )
}
