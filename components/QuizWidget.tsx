'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import type { Gender, HealthConcern, QuizAnswers, QuizProps } from '@/types/quiz'
import { rankPrograms } from '@/lib/quiz-scoring'
import { trackQuizStart, trackQuizStep, trackQuizComplete } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const stepVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
}

type OptionCardProps = {
  label: string
  description?: string
  selected?: boolean
  onClick: () => void
}

function OptionCard({ label, description, selected, onClick }: OptionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.12 }}
      onClick={onClick}
      className={cn(
        'w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 bg-white',
        selected
          ? 'border-[#5B7A5F] bg-[#EEF4EE]'
          : 'border-gray-200 hover:border-[#93C5FD] hover:bg-blue-50/30'
      )}
    >
      <span className="font-medium text-[#1C1C1E] text-base block">{label}</span>
      {description && (
        <span className="text-sm text-gray-500 mt-0.5 block">{description}</span>
      )}
    </motion.button>
  )
}

function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 justify-center mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'rounded-full transition-all duration-200',
            i < current ? 'w-2 h-2 bg-[#2D5A35]' : i === current ? 'w-3 h-3 bg-[#2D5A35]' : 'w-2 h-2 bg-gray-200'
          )}
        />
      ))}
      <span className="ml-2 text-sm text-gray-400">
        Question {current + 1} of {total}
      </span>
    </div>
  )
}

export default function QuizWidget({ startingGender, startingConcern }: QuizProps) {
  const router = useRouter()

  const getInitialStep = () => {
    if (startingConcern) return 3
    if (startingGender) return 2
    return 1
  }

  const [step, setStep] = useState(getInitialStep())
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({
    ...(startingGender ? { gender: startingGender } : {}),
    ...(startingConcern ? { concern: startingConcern, gender: startingGender ?? 'other' } : {}),
  })

  const totalSteps = 5

  function advance(newAnswers: Partial<QuizAnswers>) {
    const updated = { ...answers, ...newAnswers }
    setAnswers(updated)
    setDirection(1)

    if (step === 1) {
      trackQuizStep(1, undefined)
      trackQuizStart()
      setStep(2)
    } else if (step === 2) {
      trackQuizStep(2, newAnswers.concern)
      setStep(3)
    } else if (step === 3) {
      trackQuizStep(3, updated.concern)
      setStep(4)
    } else if (step === 4) {
      trackQuizStep(4, updated.concern)
      setStep(5)
    } else if (step === 5) {
      trackQuizStep(5, updated.concern)
      completeQuiz(updated as QuizAnswers)
    }
  }

  function goBack() {
    setDirection(-1)
    setStep((s) => Math.max(1, s - 1))
  }

  function completeQuiz(finalAnswers: QuizAnswers) {
    const ranked = rankPrograms(finalAnswers)
    const topResult = ranked[0]?.program.id ?? ''

    trackQuizComplete(
      finalAnswers.concern,
      finalAnswers.gender,
      topResult,
      finalAnswers.priceImportance
    )

    const params = new URLSearchParams({
      gender: finalAnswers.gender,
      concern: finalAnswers.concern,
      price: finalAnswers.priceImportance,
      subscription: finalAnswers.subscriptionPreference,
      bundle: String(finalAnswers.bundleInterest),
      insurance: String(finalAnswers.insuranceRequired),
      async: String(finalAnswers.asyncPreferred),
      top: topResult,
    })

    router.push(`/quiz/results?${params.toString()}`)
  }

  const getConcernOptions = (gender?: Gender) => {
    const all = [
      { value: 'ed', label: 'Erectile Dysfunction', description: 'ED medication and treatment' },
      { value: 'weightloss', label: 'Weight Loss', description: 'GLP-1 and structured programs' },
      { value: 'hairloss', label: 'Hair Loss', description: 'Finasteride, minoxidil and more' },
      { value: 'testosterone', label: 'Testosterone', description: 'TRT and hormone therapy' },
      { value: 'mentalhealth', label: 'Mental Health', description: 'Therapy and psychiatry' },
      { value: 'birthcontrol', label: 'Birth Control', description: 'Pill, patch, ring and more' },
      { value: 'menopause', label: 'Menopause', description: 'HRT and symptom management' },
      { value: 'uti', label: 'UTI Treatment', description: 'Fast antibiotic prescriptions' },
      { value: 'general', label: 'General Health', description: 'Primary care and wellness' },
    ]

    if (gender === 'male') {
      return all.filter((o) => !['birthcontrol', 'menopause', 'uti'].includes(o.value))
    }
    if (gender === 'female') {
      return all.filter((o) => !['ed', 'testosterone'].includes(o.value))
    }
    return all
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div key="step-1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-2">
              How do you identify?
            </h2>
            <p className="text-gray-500 text-center mb-8 text-base">
              This helps us show you the most relevant options.
            </p>
            <div className="space-y-3 max-w-sm mx-auto">
              <OptionCard
                label="Male"
                onClick={() => advance({ gender: 'male' })}
                selected={answers.gender === 'male'}
              />
              <OptionCard
                label="Female"
                onClick={() => advance({ gender: 'female' })}
                selected={answers.gender === 'female'}
              />
              <OptionCard
                label="Non-binary / prefer not to say"
                onClick={() => advance({ gender: 'other' })}
                selected={answers.gender === 'other'}
              />
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div key="step-2" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-2">
              What brings you here today?
            </h2>
            <p className="text-gray-500 text-center mb-8 text-base">
              Select the area you want help with.
            </p>
            <div className="space-y-3 max-w-sm mx-auto">
              {getConcernOptions(answers.gender).map((opt) => (
                <OptionCard
                  key={opt.value}
                  label={opt.label}
                  description={opt.description}
                  onClick={() => advance({ concern: opt.value as HealthConcern })}
                  selected={answers.concern === opt.value}
                />
              ))}
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div key="step-3" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-2">
              How important is price to you?
            </h2>
            <p className="text-gray-500 text-center mb-8 text-base">
              We&apos;ll match you with options that fit your budget.
            </p>
            <div className="space-y-3 max-w-sm mx-auto">
              <OptionCard
                label="Very important"
                description="I want the lowest possible cost"
                onClick={() => advance({ priceImportance: 'high' })}
                selected={answers.priceImportance === 'high'}
              />
              <OptionCard
                label="Somewhat important"
                description="I want value, but I'll pay more for quality"
                onClick={() => advance({ priceImportance: 'medium' })}
                selected={answers.priceImportance === 'medium'}
              />
              <OptionCard
                label="Not a major factor"
                description="I prioritize quality and features"
                onClick={() => advance({ priceImportance: 'low' })}
                selected={answers.priceImportance === 'low'}
              />
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div key="step-4" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-2">
              Do you prefer ongoing treatment or as-needed?
            </h2>
            <p className="text-gray-500 text-center mb-8 text-base">
              Some platforms require subscriptions; others let you order as needed.
            </p>
            <div className="space-y-3 max-w-sm mx-auto">
              <OptionCard
                label="Monthly subscription"
                description="I want regular deliveries and support"
                onClick={() => advance({ subscriptionPreference: 'monthly' })}
                selected={answers.subscriptionPreference === 'monthly'}
              />
              <OptionCard
                label="As needed"
                description="I only want to order when I need to"
                onClick={() => advance({ subscriptionPreference: 'asneeded' })}
                selected={answers.subscriptionPreference === 'asneeded'}
              />
              <OptionCard
                label="Not sure yet"
                onClick={() => advance({ subscriptionPreference: 'unsure' })}
                selected={answers.subscriptionPreference === 'unsure'}
              />
            </div>
          </motion.div>
        )

      case 5:
        return (
          <motion.div key="step-5" variants={stepVariants} initial="initial" animate="animate" exit="exit">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-2">
              A few last questions
            </h2>
            <p className="text-gray-500 text-center mb-8 text-base">
              These help us narrow down the best match.
            </p>
            <div className="space-y-3 max-w-sm mx-auto">
              <OptionCard
                label="I prefer no video call required"
                description="Async consult only — no scheduling needed"
                onClick={() =>
                  advance({
                    asyncPreferred: true,
                    bundleInterest: false,
                    insuranceRequired: false,
                  })
                }
                selected={answers.asyncPreferred === true}
              />
              <OptionCard
                label="I have insurance and want to use it"
                description="I need a provider that accepts my plan"
                onClick={() =>
                  advance({
                    insuranceRequired: true,
                    asyncPreferred: false,
                    bundleInterest: false,
                  })
                }
                selected={answers.insuranceRequired === true}
              />
              <OptionCard
                label="I&apos;m interested in bundled services"
                description="e.g., ED + hair loss, or birth control + mental health"
                onClick={() =>
                  advance({
                    bundleInterest: true,
                    insuranceRequired: false,
                    asyncPreferred: false,
                  })
                }
                selected={answers.bundleInterest === true}
              />
              <OptionCard
                label="None of the above"
                onClick={() =>
                  advance({
                    asyncPreferred: false,
                    bundleInterest: false,
                    insuranceRequired: false,
                  })
                }
                selected={
                  answers.asyncPreferred === false &&
                  answers.bundleInterest === false &&
                  answers.insuranceRequired === false
                }
              />
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <ProgressDots current={step - 1} total={totalSteps} />

      {step > 1 && (
        <button
          onClick={goBack}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6 mx-auto"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      )}

      <AnimatePresence mode="wait" custom={direction}>
        {renderStep()}
      </AnimatePresence>
    </div>
  )
}
