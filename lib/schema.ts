type ArticleSchemaOptions = {
  title: string
  publishDate: string
  updatedDate: string
  authorName: string
  url?: string
  description?: string
}

type FAQItem = {
  question: string
  answer: string
}

export function articleSchema({
  title,
  publishDate,
  updatedDate,
  authorName,
  url,
  description,
}: ArticleSchemaOptions): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description || '',
    datePublished: publishDate,
    dateModified: updatedDate,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TreatCompare',
      url: 'https://telehealthpick.com',
    },
    ...(url ? { url } : {}),
  }
}

export function faqSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
