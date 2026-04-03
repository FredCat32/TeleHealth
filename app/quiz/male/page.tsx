import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuizWidget from '@/components/QuizWidget'
import PageWrapper from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: "Men's Health Quiz — Find the Right Telehealth Platform",
  description:
    "Personalized telehealth recommendations for men. Compare ED, hair loss, testosterone, and weight loss platforms in under 2 minutes.",
}

export default function QuizMalePage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-64px)] bg-[#F7F4EF] flex flex-col justify-center">
        <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading quiz...</div>}>
          <QuizWidget startingGender="male" />
        </Suspense>
      </div>
    </PageWrapper>
  )
}
