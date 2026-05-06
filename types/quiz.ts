export type Gender = 'male' | 'female' | 'other'

export type HealthConcern =
  | 'ed'
  | 'weightloss'
  | 'hairloss'
  | 'testosterone'
  | 'mentalhealth'
  | 'birthcontrol'
  | 'menopause'
  | 'uti'
  | 'hormones'
  | 'general'

export type QuizAnswers = {
  gender: Gender
  concern: HealthConcern
  priceImportance: 'high' | 'medium' | 'low'
  subscriptionPreference: 'monthly' | 'asneeded' | 'unsure'
  bundleInterest: boolean
  insuranceRequired: boolean
  asyncPreferred: boolean
}

export type PricePoint = 'budget' | 'mid' | 'premium'

export type AffiliateProgram = {
  id: string
  name: string
  concerns: HealthConcern[]
  genders: (Gender | 'all')[]
  pricePoint: PricePoint
  subscriptionOnly: boolean
  offersBundle: boolean
  acceptsInsurance: boolean
  asyncConsult: boolean
  monthlyPrice: string
  affiliateUrl: string
  keyFeatures: string[]
  reviewUrl: string
}

export type QuizProps = {
  startingGender?: Gender
  startingConcern?: HealthConcern
}
