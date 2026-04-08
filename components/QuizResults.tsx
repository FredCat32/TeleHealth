'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Share2, Copy, ChevronDown } from 'lucide-react'
import type { QuizAnswers } from '@/types/quiz'
import type { ScoredProgram } from '@/lib/quiz-scoring'
import AffiliateCard from '@/components/AffiliateCard'
import ComparisonTable from '@/components/ComparisonTable'
import { trackEmailCapture } from '@/lib/analytics'

type QuizResultsProps = {
  answers: Partial<QuizAnswers>
  ranked: ScoredProgram[]
}

export default function QuizResults({ answers, ranked }: QuizResultsProps) {
  const [showAll, setShowAll] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const top = ranked[0]
  const second = ranked[1]
  const third = ranked[2]

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    trackEmailCapture('quiz_results', answers.concern, top?.program.id)
    setSubmitted(true)
  }

  async function handleCopyLink() {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const concernLabel = answers.concern
    ? {
        ed: 'ED treatment',
        weightloss: 'weight loss',
        hairloss: 'hair loss',
        testosterone: 'testosterone therapy',
        mentalhealth: 'mental health',
        birthcontrol: 'birth control',
        menopause: 'menopause care',
        uti: 'UTI treatment',
        general: 'general health',
      }[answers.concern] ?? answers.concern
    : 'your health concern'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <p className="text-sm font-semibold text-[#5B7A5F] uppercase tracking-wider mb-2">
          Your results
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1C1E] mb-3 text-balance">
          Based on your answers, here&apos;s your best match for {concernLabel}
        </h1>
        {top && (
          <p className="text-gray-500 text-base max-w-xl mx-auto">{top.matchReason}</p>
        )}
      </motion.div>

      {/* Primary card */}
      {top && (
        <div className="mb-6">
          <AffiliateCard
            program={top.program}
            position="primary"
            concern={answers.concern}
            index={0}
          />
        </div>
      )}

      {/* Secondary cards */}
      {(second || third) && (
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {second && (
            <AffiliateCard
              program={second.program}
              position="secondary"
              concern={answers.concern}
              index={1}
            />
          )}
          {third && (
            <AffiliateCard
              program={third.program}
              position="secondary"
              concern={answers.concern}
              index={2}
            />
          )}
        </div>
      )}

      {/* Expandable: see all options */}
      {ranked.length > 3 && (
        <div className="mb-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sm font-medium text-[#5B7A5F] hover:text-[#4A6950] mx-auto transition-colors"
          >
            {showAll ? 'Hide options' : `See all ${ranked.length} options`}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-6"
              >
                <ComparisonTable
                  programs={ranked.map((r) => r.program)}
                  highlightId={top?.program.id}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Email capture */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8"
      >
        {submitted ? (
          <div className="text-center py-4">
            <p className="font-semibold text-[#1C1C1E] text-lg mb-1">You&apos;re on the list!</p>
            <p className="text-sm text-gray-500">
              We&apos;ll send you updates on prices and new platform reviews.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-bold text-[#1C1C1E] text-xl mb-1">
              Get price drop alerts &amp; updates
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              We&apos;ll notify you when prices change or better options become available. No spam.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B7A5F] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </>
        )}
      </motion.div>

      {/* Share buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-10"
      >
        <span className="text-sm text-gray-400 flex items-center gap-1.5">
          <Share2 className="w-4 h-4" /> Share your results:
        </span>
        <button
          onClick={handleCopyLink}
          className="text-sm text-gray-600 hover:text-[#5B7A5F] border border-gray-200 hover:border-[#5B7A5F] px-3 py-1.5 rounded-lg transition-colors"
        >
          {copied ? 'Copied!' : <><Copy className="inline w-3.5 h-3.5 mr-1" />Copy link</>}
        </button>
        <a
          href={`https://reddit.com/submit?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(`My telehealth quiz results for ${concernLabel}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-[#FF4500] border border-gray-200 hover:border-[#FF4500] px-3 py-1.5 rounded-lg transition-colors"
        >
          Share on Reddit
        </a>
        <a
          href={`https://x.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(`I used @TelehealthPick to find the best ${concernLabel} telehealth platform`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-black border border-gray-200 hover:border-black px-3 py-1.5 rounded-lg transition-colors"
        >
          Share on X
        </a>
      </motion.div>

      {/* Start over */}
      <div className="text-center">
        <Link href="/quiz" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          Not what you were looking for? Start over
        </Link>
      </div>
    </div>
  )
}
