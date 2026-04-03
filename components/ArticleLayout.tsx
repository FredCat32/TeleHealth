import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { articleSchema, faqSchema } from '@/lib/schema'

type FAQItem = {
  question: string
  answer: string
}

type ArticleLayoutProps = {
  children: React.ReactNode
  title: string
  description: string
  publishDate: string
  updatedDate: string
  author?: string
  showDisclosure?: boolean
  faqs?: FAQItem[]
  tocItems?: { id: string; label: string }[]
}

export default function ArticleLayout({
  children,
  title,
  description,
  publishDate,
  updatedDate,
  author = 'TreatCompare Editorial Team',
  showDisclosure = true,
  faqs,
  tocItems,
}: ArticleLayoutProps) {
  const articleSchemaData = articleSchema({
    title,
    publishDate,
    updatedDate,
    authorName: author,
    description,
  })

  const faqSchemaData = faqs ? faqSchema(faqs) : null

  const formattedPublish = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const formattedUpdated = new Date(updatedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />
      {faqSchemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[240px_1fr]">
          {/* Sticky TOC sidebar — desktop only */}
          {tocItems && tocItems.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  On this page
                </p>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-[#8A8A8C] hover:text-[#5B7A5F] py-1 transition-colors border-l-2 border-transparent hover:border-[#5B7A5F] pl-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main content */}
          <main className={tocItems && tocItems.length > 0 ? '' : 'max-w-3xl mx-auto w-full'}>
            {showDisclosure && <AffiliateDisclosure />}

            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] leading-tight mb-3">
                {title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span>By {author}</span>
                <span>Published {formattedPublish}</span>
                <span>Updated {formattedUpdated}</span>
              </div>
            </header>

            <div className="prose prose-gray max-w-none prose-headings:text-[#1C1C1E] prose-a:text-[#4A6950] prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
