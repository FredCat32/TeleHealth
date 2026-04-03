import type { AffiliateProgram, QuizAnswers, Gender, HealthConcern } from '@/types/quiz'
import { affiliatePrograms } from '@/lib/affiliates'

export type ScoredProgram = {
  program: AffiliateProgram
  score: number
  matchReason: string
}

export function scoreProgram(program: AffiliateProgram, answers: Partial<QuizAnswers>): number {
  let score = 0

  // Gender match — hard filter
  if (answers.gender) {
    const genderMatch =
      program.genders.includes('all') ||
      program.genders.includes(answers.gender as Gender)
    if (!genderMatch) return -1
  }

  // Concern match — hard filter
  if (answers.concern) {
    const concernMatch = program.concerns.includes(answers.concern as HealthConcern)
    if (!concernMatch) return -1
    score += 30
  }

  // Price importance
  if (answers.priceImportance === 'high') {
    if (program.pricePoint === 'budget') score += 25
    if (program.pricePoint === 'mid') score += 10
    if (program.pricePoint === 'premium') score -= 10
  } else if (answers.priceImportance === 'medium') {
    if (program.pricePoint === 'mid') score += 20
    if (program.pricePoint === 'budget') score += 15
    if (program.pricePoint === 'premium') score += 5
  } else if (answers.priceImportance === 'low') {
    if (program.pricePoint === 'premium') score += 20
    if (program.pricePoint === 'mid') score += 15
    if (program.pricePoint === 'budget') score += 10
  }

  // Subscription preference
  if (answers.subscriptionPreference === 'monthly') {
    if (program.subscriptionOnly) score += 10
  } else if (answers.subscriptionPreference === 'asneeded') {
    if (!program.subscriptionOnly) score += 15
    if (program.subscriptionOnly) score -= 5
  }

  // Bundle interest
  if (answers.bundleInterest === true && program.offersBundle) {
    score += 15
  }

  // Insurance
  if (answers.insuranceRequired === true) {
    if (program.acceptsInsurance) score += 25
    if (!program.acceptsInsurance) score -= 20
  }

  // Async preference
  if (answers.asyncPreferred === true && program.asyncConsult) {
    score += 10
  }

  return score
}

export function rankPrograms(answers: Partial<QuizAnswers>): ScoredProgram[] {
  const scored = affiliatePrograms
    .map((program) => ({
      program,
      score: scoreProgram(program, answers),
      matchReason: generateMatchReason(program, answers),
    }))
    .filter((s) => s.score >= 0)
    .sort((a, b) => b.score - a.score)

  return scored
}

export function generateMatchReason(program: AffiliateProgram, answers: Partial<QuizAnswers>): string {
  const reasons: string[] = []

  if (answers.priceImportance === 'high' && program.pricePoint === 'budget') {
    reasons.push('one of the most affordable options available')
  } else if (answers.priceImportance === 'low' && program.pricePoint === 'premium') {
    reasons.push('a premium service with comprehensive care')
  }

  if (answers.insuranceRequired && program.acceptsInsurance) {
    reasons.push('accepts most insurance plans')
  }

  if (answers.asyncPreferred && program.asyncConsult) {
    reasons.push('no video call required')
  }

  if (answers.bundleInterest && program.offersBundle) {
    reasons.push('offers convenient health bundles')
  }

  if (answers.subscriptionPreference === 'asneeded' && !program.subscriptionOnly) {
    reasons.push('no subscription commitment needed')
  }

  if (answers.concern) {
    const concernLabels: Record<HealthConcern, string> = {
      ed: 'ED treatment',
      weightloss: 'weight loss',
      hairloss: 'hair loss',
      testosterone: 'testosterone therapy',
      mentalhealth: 'mental health',
      birthcontrol: 'birth control',
      menopause: 'menopause care',
      uti: 'UTI treatment',
      general: 'general health',
    }
    const concernLabel = concernLabels[answers.concern as HealthConcern]
    if (concernLabel) {
      reasons.push(`specializes in ${concernLabel}`)
    }
  }

  if (reasons.length === 0) {
    return `${program.name} is a strong match based on your preferences.`
  }

  if (reasons.length === 1) {
    return `${program.name} matches because it's ${reasons[0]}.`
  }

  const last = reasons.pop()
  return `${program.name} matches because it's ${reasons.join(', ')} and ${last}.`
}
