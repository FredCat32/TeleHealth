declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function canTrack(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function trackQuizStart(): void {
  if (!canTrack()) return
  window.gtag!('event', 'quiz_start', {
    event_category: 'quiz',
    event_label: 'general',
  })
}

export function trackQuizStep(step: number, concern?: string): void {
  if (!canTrack()) return
  window.gtag!('event', 'quiz_step', {
    event_category: 'quiz',
    step_number: step,
    ...(concern ? { concern } : {}),
  })
}

export function trackQuizComplete(
  concern: string,
  gender: string,
  topResult: string,
  priceImportance: string
): void {
  if (!canTrack()) return
  window.gtag!('event', 'quiz_complete', {
    event_category: 'quiz',
    concern,
    gender,
    top_result: topResult,
    price_importance: priceImportance,
  })
}

export function trackAffiliateClick(
  programId: string,
  sourcePage: string,
  position: string,
  concern?: string
): void {
  if (!canTrack()) return
  window.gtag!('event', 'affiliate_click', {
    event_category: 'affiliate',
    program_id: programId,
    source_page: sourcePage,
    position,
    ...(concern ? { concern } : {}),
  })
}

export function trackEmailCapture(
  source: string,
  concern?: string,
  topResult?: string
): void {
  if (!canTrack()) return
  window.gtag!('event', 'email_capture', {
    event_category: 'lead',
    source,
    ...(concern ? { concern } : {}),
    ...(topResult ? { top_result: topResult } : {}),
  })
}
