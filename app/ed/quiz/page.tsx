import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuizWidget from '@/components/QuizWidget'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/ed/quiz' },
  title: 'ED Treatment Quiz — Find Your Best Match',
  description:
    'Answer 3 quick questions to find the best online ED treatment platform for your budget and preferences.',
}

export default function EDQuizPage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-64px)] bg-[#F7F4EF] flex flex-col justify-center">
        <div className="text-center pt-10 px-4">
          <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-2">
            ED Treatment Quiz
          </p>
          <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">
            Find the right ED platform for you
          </h1>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Answer a few quick questions to see personalized recommendations.
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading quiz...</div>}>
          <QuizWidget startingGender="male" startingConcern="ed" />
        </Suspense>
      </div>
    </PageWrapper>
  )
}
