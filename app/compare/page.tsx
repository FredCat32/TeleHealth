import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/compare' },
  title: 'Telehealth Comparisons — TelehealthPick',
  description:
    'Side-by-side comparisons of every major telehealth platform. ED, weight loss, hair loss, mental health, and more.',
}

const comparisons = [
  {
    category: 'ED Treatment',
    items: [
      { title: 'Hims vs Roman', href: '/ed/compare/hims-vs-roman', desc: 'Head-to-head on price, experience & options' },
      { title: 'Hims vs Ro', href: '/ed/compare/hims-vs-ro', desc: 'Bundles vs comprehensive care' },
      { title: 'Roman vs Rex MD', href: '/ed/compare/roman-vs-rex-md', desc: 'Budget competition' },
      { title: 'Hims vs Roman vs Ro', href: '/ed/compare/hims-vs-roman-vs-ro', desc: 'Three-way comparison' },
    ],
  },
]

export default function ComparePage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-3">
            Telehealth Comparisons
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Our comparison methodology: we evaluate platforms on pricing transparency, medication
            options, consultation process, shipping speed, and customer experience. We do not accept
            payment for rankings.
          </p>
        </div>

        {comparisons.map((group) => (
          <section key={group.category} className="mb-12">
            <h2 className="text-xl font-bold text-[#1C1C1E] mb-5">{group.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-[#5B7A5F] hover:shadow-sm transition-all"
                >
                  <span className="font-semibold text-[#1C1C1E] block mb-1">{item.title}</span>
                  <span className="text-sm text-gray-500">{item.desc}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <p className="text-sm text-gray-400 mt-4">
          More comparisons for GLP-1, hair loss, mental health, and women&apos;s health coming soon.
        </p>
      </div>
    </PageWrapper>
  )
}
