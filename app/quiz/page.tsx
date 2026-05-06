import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuizWidget from '@/components/QuizWidget'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.telehealthpick.com/quiz' },
  title: 'Find Your Telehealth Match — Free Quiz',
  description:
    'Answer 5 quick questions to find the best telehealth platform for your health concern, budget, and preferences.',
  robots: { index: false },
}

export default function QuizPage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-64px)] bg-[#F7F4EF] flex flex-col justify-center">
        <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading quiz...</div>}>
          <QuizWidget />
        </Suspense>
      </div>
    </PageWrapper>
  )
}
