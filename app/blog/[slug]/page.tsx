import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import PageWrapper from '@/components/PageWrapper'

type Props = {
  params: { slug: string }
}

// In production, this would fetch from a CMS or MDX file system
const posts: Record<string, {
  title: string
  description: string
  publishDate: string
  updatedDate: string
  content: string
}> = {
  'cheapest-ed-medication-online': {
    title: 'The Cheapest ED Medication Online in 2026',
    description: 'We compared prices across every major telehealth platform to find the absolute lowest price for tadalafil and sildenafil.',
    publishDate: '2026-03-15',
    updatedDate: '2026-04-01',
    content: `
      Generic ED medications have become remarkably affordable online. Here's what we found
      when we compared prices across the major telehealth platforms in 2026.

      Rex MD offers the lowest baseline price for generic sildenafil at around $19/month.
      Roman follows close behind at $22/month with the option to order without a subscription.
      Hims starts at $25/month but requires a subscription for this pricing.

      For generic tadalafil (the longer-lasting option), prices are slightly higher across
      the board, with Rex MD again leading at around $25/month.
    `,
  },
  'glp1-weight-loss-guide': {
    title: 'GLP-1 Medications for Weight Loss: A Complete Guide',
    description: 'Everything you need to know about semaglutide and tirzepatide for weight loss, including where to get them online.',
    publishDate: '2026-02-20',
    updatedDate: '2026-04-01',
    content: `
      GLP-1 receptor agonists like semaglutide (Ozempic/Wegovy) and tirzepatide (Mounjaro/Zepbound)
      have transformed the weight loss landscape. Here's everything you need to know.

      These medications work by mimicking naturally occurring hormones that regulate appetite
      and blood sugar. They've been shown in clinical trials to produce 15-20% body weight
      reduction in many patients.

      Several telehealth platforms now offer GLP-1 programs, including Ro, Hers, and others.
      Prices typically range from $200-500/month depending on the medication and dosage.
    `,
  },
  'online-therapy-vs-in-person': {
    title: 'Online Therapy vs In-Person: Which Is Right for You?',
    description: 'A balanced look at the pros and cons of telehealth therapy compared to traditional in-person sessions.',
    publishDate: '2026-01-30',
    updatedDate: '2026-04-01',
    content: `
      Online therapy platforms like BetterHelp have made mental health care more accessible
      than ever. But is online therapy as effective as seeing a therapist in person?

      Research suggests that for many conditions — including anxiety, depression, and stress —
      online cognitive behavioral therapy (CBT) can be just as effective as in-person therapy.

      The main advantages of online therapy are convenience, lower cost, and reduced barriers
      to getting started. The main disadvantages are the lack of physical presence and
      potential technical issues.
    `,
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) {
    return { title: 'Post Not Found — TelehealthPick' }
  }
  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <PageWrapper>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1C1C1E] mb-4">Post not found</h1>
          <p className="text-gray-500">This article may have moved or been removed.</p>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <ArticleLayout
        title={post.title}
        description={post.description}
        publishDate={post.publishDate}
        updatedDate={post.updatedDate}
        showDisclosure={true}
      >
        {post.content.split('\n').filter(Boolean).map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed mb-4">
            {para.trim()}
          </p>
        ))}
        <div className="mt-8 p-5 bg-[#F7F4EF] rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500">
            This is a placeholder article. In production, blog content would be loaded from
            MDX files or a CMS. The ArticleLayout component, JSON-LD schema injection, and
            affiliate disclosure are all fully functional.
          </p>
        </div>
      </ArticleLayout>
    </PageWrapper>
  )
}
