'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { AffiliateProgram } from '@/types/quiz'
import { trackAffiliateClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'
import { Check, X } from 'lucide-react'

type ComparisonTableProps = {
  programs: AffiliateProgram[]
  highlightId?: string
}

export default function ComparisonTable({ programs, highlightId }: ComparisonTableProps) {
  function handleCTAClick(program: AffiliateProgram) {
    trackAffiliateClick(
      program.id,
      typeof window !== 'undefined' ? window.location.pathname : '',
      'comparison_table'
    )
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left font-semibold text-gray-700 px-5 py-4">Program</th>
              <th className="text-left font-semibold text-gray-700 px-5 py-4">Monthly Price</th>
              <th className="text-left font-semibold text-gray-700 px-5 py-4">No video call?</th>
              <th className="text-left font-semibold text-gray-700 px-5 py-4">Ships all states</th>
              <th className="text-left font-semibold text-gray-700 px-5 py-4">Best for</th>
              <th className="px-5 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => {
              const isHighlighted = program.id === highlightId
              return (
                <motion.tr
                  key={program.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.07 }}
                  className={cn(
                    'border-b border-gray-100 last:border-0 transition-colors',
                    isHighlighted ? 'bg-[#EEF4EE]' : 'bg-white hover:bg-gray-50'
                  )}
                >
                  <td className="px-5 py-4">
                    <span className="font-semibold text-[#1C1C1E]">{program.name}</span>
                    {isHighlighted && (
                      <span className="ml-2 text-xs bg-[#5B7A5F] text-white px-2 py-0.5 rounded-[6px]">
                        Top Pick
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-gray-700">{program.monthlyPrice}</td>
                  <td className="px-5 py-4">
                    {program.asyncConsult ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <Check className="w-5 h-5 text-green-500" />
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    {program.concerns.slice(0, 2).map((c) => {
                      const labels: Record<string, string> = {
                        ed: 'ED',
                        weightloss: 'Weight loss',
                        hairloss: 'Hair loss',
                        testosterone: 'Testosterone',
                        mentalhealth: 'Mental health',
                        birthcontrol: 'Birth control',
                        menopause: 'Menopause',
                        uti: 'UTI',
                        general: 'General health',
                      }
                      return labels[c] || c
                    }).join(', ')}
                  </td>
                  <td className="px-5 py-4">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
                      <Link
                        href={program.affiliateUrl}
                        onClick={() => handleCTAClick(program)}
                        className="inline-block bg-[#2D5A35] hover:bg-[#234830] text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors whitespace-nowrap"
                      >
                        Get started
                      </Link>
                    </motion.div>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {programs.map((program, index) => {
          const isHighlighted = program.id === highlightId
          return (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.07 }}
              className={cn(
                'rounded-xl border p-4',
                isHighlighted ? 'bg-[#EEF4EE] border-[#5B7A5F]' : 'bg-white border-gray-200'
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-semibold text-[#1C1C1E]">{program.name}</span>
                  {isHighlighted && (
                    <span className="ml-2 text-xs bg-[#5B7A5F] text-white px-2 py-0.5 rounded-[6px]">
                      Top Pick
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-600 font-medium">{program.monthlyPrice}</span>
              </div>
              <div className="flex gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  {program.asyncConsult ? (
                    <Check className="w-3 h-3 text-green-500" />
                  ) : (
                    <X className="w-3 h-3 text-gray-300" />
                  )}
                  No video call
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-500" />
                  Ships all states
                </span>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
                <Link
                  href={program.affiliateUrl}
                  onClick={() => handleCTAClick(program)}
                  className="block w-full text-center bg-[#2D5A35] hover:bg-[#234830] text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
                >
                  Get started with {program.name}
                </Link>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
