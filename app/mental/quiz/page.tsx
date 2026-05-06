import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuizWidget from '@/components/QuizWidget'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/mental/quiz' },
  title: 'Mental Health Quiz — Find the Right Therapy Platform',
  description:
    'Answer a few quick questions to find the best online therapy or mental health telehealth platform for your needs and budget.',
}

export default function MentalQuizPage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-64px)] bg-[#F7F4EF] flex flex-col justify-center">
        <div className="text-center pt-10 px-4">
          <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-2">
            Mental Health Quiz
          </p>
          <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">
            Find the right mental health platform
          </h1>
        </div>
        <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading quiz...</div>}>
          <QuizWidget startingConcern="mentalhealth" />
        </Suspense>
      </div>
    </PageWrapper>
  )
}
