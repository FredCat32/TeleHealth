'use client'

type RatingStarsProps = {
  rating: number
  showNumber?: boolean
}

export default function RatingStars({ rating, showNumber = false }: RatingStarsProps) {
  const clampedRating = Math.max(0, Math.min(5, rating))
  const fullStars = Math.floor(clampedRating)
  const hasHalf = clampedRating % 1 >= 0.25 && clampedRating % 1 < 0.75
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <StarIcon key={`full-${i}`} type="full" />
        ))}
        {hasHalf && <StarIcon type="half" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <StarIcon key={`empty-${i}`} type="empty" />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-600 font-medium">
          {clampedRating.toFixed(1)} / 5
        </span>
      )}
    </div>
  )
}

function StarIcon({ type }: { type: 'full' | 'half' | 'empty' }) {
  if (type === 'full') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 1.5L11.09 6.26L16.27 6.99L12.64 10.53L13.54 15.69L9 13.15L4.46 15.69L5.36 10.53L1.73 6.99L6.91 6.26L9 1.5Z"
          fill="#F59E0B"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'half') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="half-grad">
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#E5E7EB" />
          </linearGradient>
        </defs>
        <path
          d="M9 1.5L11.09 6.26L16.27 6.99L12.64 10.53L13.54 15.69L9 13.15L4.46 15.69L5.36 10.53L1.73 6.99L6.91 6.26L9 1.5Z"
          fill="url(#half-grad)"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 1.5L11.09 6.26L16.27 6.99L12.64 10.53L13.54 15.69L9 13.15L4.46 15.69L5.36 10.53L1.73 6.99L6.91 6.26L9 1.5Z"
        fill="#E5E7EB"
        stroke="#D1D5DB"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
