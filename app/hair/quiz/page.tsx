import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuizWidget from '@/components/QuizWidget'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/hair/quiz' },
  title: 'Hair Loss Quiz — Find the Best Treatment Platform',
  description:
    'Answer a few quick questions to find the best online hair loss treatment for your needs and budget.',
}

export default function HairQuizPage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-64px)] bg-[#F7F4EF] flex flex-col justify-center">
        <div className="text-center pt-10 px-4">
          <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-2">
            Hair Loss Quiz
          </p>
          <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">
            Find the right hair loss treatment
          </h1>
        </div>
        <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading quiz...</div>}>
          <QuizWidget startingConcern="hairloss" />
        </Suspense>
      </div>
    </PageWrapper>
  )
}
