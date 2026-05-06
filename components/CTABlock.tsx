'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { AffiliateProgram, HealthConcern } from '@/types/quiz'
import { trackAffiliateClick } from '@/lib/analytics'

type CTABlockProps = {
  programs: AffiliateProgram[]
  title?: string
  concern?: HealthConcern
}

export default function CTABlock({
  programs,
  title = 'Compare your options',
  concern,
}: CTABlockProps) {
  const displayPrograms = programs.slice(0, 3)

  function handleClick(program: AffiliateProgram, index: number) {
    trackAffiliateClick(
      program.id,
      typeof window !== 'undefined' ? window.location.pathname : '',
      `cta_block_${index}`,
      concern
    )
  }

  return (
    <div className="bg-[#F7F4EF] rounded-2xl p-6 sm:p-8 border border-gray-100">
      <h2 className="text-xl font-bold text-[#1C1C1E] mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayPrograms.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col"
          >
            <div className="flex-1">
              <h3 className="font-bold text-[#1C1C1E] text-lg mb-1">{program.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{program.monthlyPrice}</p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
              <Link
                href={program.affiliateUrl}
                onClick={() => handleClick(program, index)}
                rel="nofollow sponsored"
                className="block w-full text-center bg-[#2D5A35] hover:bg-[#234830] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
              >
                Get started
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
