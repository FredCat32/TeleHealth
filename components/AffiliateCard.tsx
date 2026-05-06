'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import type { AffiliateProgram, HealthConcern } from '@/types/quiz'
import { trackAffiliateClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'

type AffiliateCardProps = {
  program: AffiliateProgram
  position?: 'primary' | 'secondary'
  concern?: HealthConcern
  index?: number
}

export default function AffiliateCard({
  program,
  position = 'secondary',
  concern,
  index = 0,
}: AffiliateCardProps) {
  const isPrimary = position === 'primary'

  function handleCTAClick() {
    trackAffiliateClick(
      program.id,
      typeof window !== 'undefined' ? window.location.pathname : '',
      position,
      concern
    )
  }

  const features = program.keyFeatures.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
      className={cn(
        'rounded-[12px] bg-white border transition-shadow',
        isPrimary
          ? 'border-[#5B7A5F] shadow-md p-6 sm:p-8'
          : 'border-gray-200 shadow-sm p-5 sm:p-6 hover:shadow-md'
      )}
    >
      {isPrimary && (
        <div className="mb-4">
          <span className="inline-block bg-[#5B7A5F] text-white text-xs font-semibold px-3 py-1 rounded-[6px] uppercase tracking-wide">
            Best Match
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className={cn('font-bold text-[#1C1C1E]', isPrimary ? 'text-2xl' : 'text-lg')}>
            {program.name}
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">{program.monthlyPrice}</p>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-[#5B7A5F] shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
          <Link
            href={program.affiliateUrl}
            onClick={handleCTAClick}
            rel="nofollow sponsored"
            className="block w-full text-center bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get started with {program.name}
          </Link>
        </motion.div>
        <Link
          href={program.reviewUrl}
          className="block w-full text-center text-sm text-gray-500 hover:text-[#5B7A5F] py-1 transition-colors"
        >
          Read our {program.name} review <ExternalLink className="inline w-3 h-3 ml-0.5" />
        </Link>
      </div>
    </motion.div>
  )
}
