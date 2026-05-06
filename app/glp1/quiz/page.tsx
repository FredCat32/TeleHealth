import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuizWidget from '@/components/QuizWidget'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/glp1/quiz' },
  title: 'Weight Loss Quiz — Find the Best GLP-1 Program',
  description:
    'Answer a few questions to find the best GLP-1 weight loss program for your needs and budget.',
}

export default function GLP1QuizPage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-64px)] bg-[#F7F4EF] flex flex-col justify-center">
        <div className="text-center pt-10 px-4">
          <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-2">
            Weight Loss Quiz
          </p>
          <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">
            Find the right weight loss program
          </h1>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Answer a few quick questions to see personalized GLP-1 program recommendations.
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading quiz...</div>}>
          <QuizWidget startingConcern="weightloss" />
        </Suspense>
      </div>
    </PageWrapper>
  )
}
