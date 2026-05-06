import type { Metadata } from 'next'
import type { QuizAnswers } from '@/types/quiz'
import { rankPrograms } from '@/lib/quiz-scoring'
import PageWrapper from '@/components/PageWrapper'
import QuizResults from '@/components/QuizResults'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/quiz/results' },
  title: 'Your Telehealth Recommendations',
  description: 'Personalized telehealth platform recommendations based on your quiz answers.',
  robots: { index: false },
}

type SearchParams = {
  gender?: string
  concern?: string
  price?: string
  subscription?: string
  bundle?: string
  insurance?: string
  async?: string
  top?: string
}

export default function ResultsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const answers: Partial<QuizAnswers> = {
    ...(searchParams.gender ? { gender: searchParams.gender as QuizAnswers['gender'] } : {}),
    ...(searchParams.concern ? { concern: searchParams.concern as QuizAnswers['concern'] } : {}),
    ...(searchParams.price ? { priceImportance: searchParams.price as QuizAnswers['priceImportance'] } : {}),
    ...(searchParams.subscription
      ? { subscriptionPreference: searchParams.subscription as QuizAnswers['subscriptionPreference'] }
      : {}),
    ...(searchParams.bundle !== undefined ? { bundleInterest: searchParams.bundle === 'true' } : {}),
    ...(searchParams.insurance !== undefined
      ? { insuranceRequired: searchParams.insurance === 'true' }
      : {}),
    ...(searchParams.async !== undefined ? { asyncPreferred: searchParams.async === 'true' } : {}),
  }

  const ranked = rankPrograms(answers)

  return (
    <PageWrapper>
      <QuizResults answers={answers} ranked={ranked} />
    </PageWrapper>
  )
}
