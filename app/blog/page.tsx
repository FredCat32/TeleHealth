import type { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/blog' },
  title: 'Blog — TelehealthPick',
  description: 'Expert guides and news on telehealth, ED treatment, weight loss, hair loss, and mental health.',
}

const posts = [
  {
    slug: 'cheapest-ed-medication-online',
    title: 'The Cheapest ED Medication Online in 2026',
    excerpt: 'We compared prices across every major telehealth platform to find the absolute lowest price for tadalafil and sildenafil.',
    date: '2026-03-15',
    category: 'ED',
  },
  {
    slug: 'glp1-weight-loss-guide',
    title: 'GLP-1 Medications for Weight Loss: A Complete Guide',
    excerpt: 'Everything you need to know about semaglutide and tirzepatide for weight loss, including where to get them online.',
    date: '2026-02-20',
    category: 'Weight Loss',
  },
  {
    slug: 'online-therapy-vs-in-person',
    title: 'Online Therapy vs In-Person: Which Is Right for You?',
    excerpt: 'A balanced look at the pros and cons of telehealth therapy compared to traditional in-person sessions.',
    date: '2026-01-30',
    category: 'Mental Health',
  },
]

export default function BlogPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-3">Blog</h1>
          <p className="text-lg text-gray-600">
            Guides, news, and research on telehealth and online healthcare.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-[#5B7A5F] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#5B7A5F] bg-[#EEF4EE] px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <h2 className="font-bold text-[#1C1C1E] text-xl mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
