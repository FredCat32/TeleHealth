# Health Affiliate Site — Full Project Brief

## Project Overview

Build a telehealth comparison platform covering all demographics — men's health, women's health, and shared concerns — monetized via affiliate programs. The site is the software and marketing layer only — no prescriptions, no medical advice, no patient data. Revenue comes entirely from affiliate commissions when users click through and sign up with partner platforms.

**Launch niche:** ED / Men's health (lowest regulatory risk, proven affiliate programs)  
**Expansion path:** GLP-1 → Hair loss → Women's health → Mental health → Primary care  
**Target revenue:** $1,000–$3,000/month within 6 months  
**Primary traffic strategy:** SEO (long-tail buyer intent) + Reddit + TikTok  
**Monetization:** Affiliate links (CPA model, $30–$150 per converted customer)  
**Compliance posture:** FDA-approved medications only, no medical claims, standard affiliate disclaimers

### Domain naming — pick gender neutral from day one

Even though the site launches with male-focused content, the domain name must be gender neutral to accommodate women's health clusters added in months 4–9. Do not pick a domain with "men", "male", or similar in the name.

Good directions: TeleHealthCompare, TreatmentCompare, HealthPlanGuide, OnlineCarePlans, CareCompare

---

## Niche Selection

Pick ONE of the following for launch. Do not split focus.

### Option A — ED / Men's Health
- Primary keyword cluster: tadalafil, cialis, generic cialis, online ED prescription
- Affiliate programs: Hims, Roman, Rex MD, Keeps (hair loss upsell)
- Market maturity: established, competitive but proven
- Regulatory risk: low — generic drugs, no shortage drama

### Option B — GLP-1 / Weight Loss
- Primary keyword cluster: semaglutide, wegovy, ozempic, GLP-1 telehealth, tirzepatide
- Affiliate programs: Ro, Noom, WeightWatchers + GLP-1, smaller telehealth companies
- Market maturity: high growth, more volatile (FDA compounding rules changing)
- Regulatory risk: medium — landscape is shifting, stick to FDA-approved brand-name programs only

**Recommendation for first build:** Option A (ED). Lower volatility, simpler clinical picture, proven affiliate programs, easier content to write consistently.

---

## Tech Stack

### Framework
- **Next.js 14** (App Router) — SSG/ISR for SEO performance
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** for components

### Hosting
- **Vercel** — free tier is fine to start

### CMS (Content)
- **Contentlayer + MDX** for blog/article content (file-based, no database needed early on)
- Migrate to a headless CMS (Sanity or Payload) when content volume justifies it

### Analytics
- **Google Analytics 4** — from day one
- **Google Search Console** — from day one, critical for SEO feedback loop
- **Plausible** (optional, privacy-friendly alternative to GA4)

### Affiliate Link Management
- **Pretty Links** style redirects via Next.js rewrites — e.g. `/go/hims` redirects to your Hims affiliate URL
- Track clicks via GA4 events on every outbound affiliate click
- Store affiliate URLs in a single config file so they're easy to update

### Quiz / Interactive Tool
- Built as a Next.js page with React state — no external tool needed
- Results page always ends with affiliate CTAs ranked by fit score

### Email List
- **Resend** (email API) + **ConvertKit** or **Beehiiv** for list management
- Capture email via exit intent or end of quiz
- Simple lead magnet: "Free 2026 GLP-1 Cost Comparison PDF" or "ED Medication Price Guide"

### SEO
- **next-sitemap** for automatic sitemap generation
- **next-seo** for meta tags and Open Graph
- Schema markup (FAQ schema, Article schema) on every page

---

## Site Architecture

Built as topical clusters. Each cluster has its own pillar page, comparison pages, review pages, quiz, and educational articles. Every article links up to its cluster pillar. Every pillar links down to money pages. Money pages have affiliate CTAs.

Launch one cluster at a time. Do not add a new cluster until the previous one has at least 15 published articles and is showing impressions in Google Search Console.

```
/                             → Homepage (master quiz CTA + featured clusters)
/quiz                         → Master quiz (gender → concern → sub-flow → results)
/quiz/results                 → Results page (personalised, shareable URL)

--- ED CLUSTER (launch first) ---
/ed/                          → ED hub / pillar page
/ed/quiz                      → ED cluster quiz (3 questions, skips Q1+Q2)
/ed/compare/                  → Comparison hub
/ed/compare/hims-vs-roman     → Money page
/ed/compare/hims-vs-ro        → Money page
/ed/compare/roman-vs-rex-md   → Money page
/ed/compare/hims-vs-roman-vs-ro → Three-way comparison
/ed/reviews/                  → Review hub
/ed/reviews/hims              → Money page
/ed/reviews/roman             → Money page
/ed/reviews/ro                → Money page
/ed/best/cheapest-tadalafil   → Money page
/ed/best/fastest-delivery     → Money page
/ed/guide/what-is-tadalafil   → Educational
/ed/guide/tadalafil-vs-sildenafil → Educational
/ed/guide/how-does-cialis-work → Educational

--- GLP-1 CLUSTER (add month 3-4) ---
/glp1/                        → GLP-1 hub
/glp1/quiz                    → GLP-1 cluster quiz
/glp1/compare/ro-vs-noom      → Money page
/glp1/compare/ro-vs-weightwatchers → Money page
/glp1/reviews/ro              → Money page
/glp1/reviews/noom            → Money page
/glp1/best/cheapest-program   → Money page
/glp1/guide/what-is-semaglutide → Educational
/glp1/guide/how-do-glp1-drugs-work → Educational

--- HAIR LOSS CLUSTER (add month 4-5) ---
/hair/                        → Hair loss hub
/hair/quiz                    → Hair loss cluster quiz
/hair/compare/hims-vs-keeps   → Money page (male)
/hair/compare/hers-vs-keeps   → Money page (female)
/hair/reviews/keeps           → Money page
/hair/reviews/hims-hair       → Money page
/hair/best/finasteride-online → Money page
/hair/guide/female-hair-loss  → Educational (underserved content gap)

--- WOMEN'S HEALTH CLUSTER (add month 5-6) ---
/womens/                      → Women's health hub
/womens/quiz                  → Women's health cluster quiz
/womens/compare/nurx-vs-wisp  → Money page
/womens/compare/birth-control-telehealth → Money page
/womens/reviews/nurx          → Money page
/womens/reviews/hers          → Money page
/womens/best/birth-control-online → Money page
/womens/guide/menopause-hrt-telehealth → Educational (major content gap)

--- MENTAL HEALTH CLUSTER (add month 6+) ---
/mental/                      → Mental health hub
/mental/quiz                  → Mental health cluster quiz
/mental/compare/betterhelp-vs-talkspace → Money page
/mental/compare/cerebral-vs-done → Money page
/mental/reviews/betterhelp    → Money page
/mental/best/cheapest-therapy-online → Money page

--- SHARED INFRASTRUCTURE ---
/blog/                        → Cross-cluster educational content
/blog/[slug]                  → Individual articles
/compare/                     → Master comparison hub (links to all clusters)
/reviews/                     → Master review hub
/go/hims                      → Affiliate redirect (302, noindex)
/go/roman                     → Affiliate redirect
/go/ro                        → Affiliate redirect
/go/hers                      → Affiliate redirect
/go/nurx                      → Affiliate redirect
/go/keeps                     → Affiliate redirect
/go/noom                      → Affiliate redirect
/go/betterhelp                → Affiliate redirect
/about                        → About page (trust signal, author info)
/disclaimer                   → Medical + affiliate disclaimer (required)
/privacy                      → Privacy policy (required)
/llms.txt                     → AI crawler site description (GEO)
```

---

## Content Strategy

### Content Tier System

**Tier 1 — High Intent (build these first, weeks 1–4)**  
User is ready to buy. One good article here is worth ten awareness articles.

| Page | Target keyword | Notes |
|------|---------------|-------|
| Hims vs Roman | "hims vs roman" | Most searched versus query in men's health |
| Cheapest tadalafil online | "cheapest tadalafil online" | Pure price intent |
| How much does Hims cost | "how much does hims cost" | Price research = near-purchase |
| Best GLP-1 program 2026 | "best glp1 program" | Comparison intent |
| Hims review 2026 | "hims review" | Review = almost decided |
| Roman review 2026 | "roman review" | Same |
| Hims vs Roman vs Ro | "hims vs roman vs ro" | Three-way comparison, high value |
| Cheapest semaglutide program | "cheapest semaglutide" | Price intent, GLP-1 |
| Hims coupon / discount | "hims promo code" | Bottom of funnel |

**Tier 2 — Mid Intent (weeks 4–8)**  
User is researching. Internal link aggressively to Tier 1 pages.

| Page | Target keyword |
|------|---------------|
| Does tadalafil work? | "does tadalafil work" |
| Tadalafil side effects | "tadalafil side effects" |
| Semaglutide side effects | "semaglutide side effects" |
| How to get ED medication online | "get ed prescription online" |
| Does insurance cover Wegovy? | "does insurance cover wegovy" |
| How to get semaglutide prescribed | "how to get semaglutide" |
| Semaglutide before and after | "semaglutide results" |

**Tier 3 — Awareness (ongoing, months 3–6)**  
Long-tail educational content. Builds domain authority, drives volume.

| Page | Target keyword |
|------|---------------|
| What is tadalafil? | "what is tadalafil" |
| Tadalafil vs sildenafil | "tadalafil vs sildenafil" |
| How do GLP-1 drugs work? | "how do glp1 drugs work" |
| What is semaglutide? | "what is semaglutide" |
| What is telehealth? | "what is telehealth" |
| Signs of ED | "signs of erectile dysfunction" |
| How does Cialis work? | "how does cialis work" |
| GLP-1 explained | "glp1 explained" |

---

## The Interactive Quiz (Priority Build)

This is the primary dev advantage over every other affiliate site in this space. Most affiliates cannot build this. It drives organic shares, backlinks, email captures, and Perplexity citations. It is the first thing to build after the core site scaffold.

There are two quiz levels:

**Master quiz** — lives at `/quiz`, routes users across all health concerns and demographics to the right cluster and affiliate programs. This is the shareable, Reddit-postable tool.

**Cluster quizzes** — lives at `/ed/quiz`, `/glp1/quiz`, etc. Shorter, more focused, for users who already know their concern and land directly in a cluster.

---

### Master Quiz Architecture

#### Question 1 — Demographics
```
What best describes you?
→ Man
→ Woman
→ Prefer not to say / Other
```

#### Question 2 — Health concern
Options change dynamically based on Q1 answer.

```
If Man:
→ Erectile dysfunction
→ Hair loss
→ Weight loss
→ Testosterone / Low T
→ Mental health
→ General / Not sure

If Woman:
→ Weight loss
→ Birth control
→ Hair loss
→ Menopause / Hormones
→ Mental health
→ UTI / Women's health
→ General / Not sure

If Prefer not to say:
→ Weight loss
→ Hair loss
→ Mental health
→ General health
→ Not sure
```

#### Question 3–5 — Concern-specific sub-flows

Each concern routes to 2–3 tailored follow-up questions before showing results. Build each sub-flow as a separate question set loaded dynamically based on Q2 answer.

**ED sub-flow:**
```
Q3: How important is price?
→ Most important factor
→ Somewhat important
→ Not a priority

Q4: Do you want ongoing monthly supply or pay as needed?
→ Monthly subscription
→ Pay as needed
→ Not sure yet

Q5: Would bundled services interest you (hair loss, testosterone)?
→ Just ED treatment
→ Yes, bundling sounds useful
→ Tell me more about bundles
```

**Weight loss / GLP-1 sub-flow:**
```
Q3: Have you tried GLP-1 medication before?
→ Yes, looking to switch providers
→ No, first time considering it
→ Not sure what GLP-1 means

Q4: What matters most to you?
→ Lowest cost
→ Fastest to get started
→ Most reputable provider
→ Accepts my insurance

Q5: Do you have a primary care doctor already?
→ Yes
→ No
→ Yes but they won't prescribe GLP-1
```

**Hair loss sub-flow:**
```
Q3: How long have you been experiencing hair loss?
→ Just starting to notice
→ 1–3 years
→ More than 3 years

Q4: What have you tried before?
→ Nothing yet
→ Over the counter treatments
→ Prescription medication
→ Other

Q5: What matters most to you?
→ Lowest cost
→ Convenience and fast shipping
→ Most clinically proven treatment
→ Bundle with other health services
```

**Mental health sub-flow:**
```
Q3: What type of support are you looking for?
→ Therapy / talk therapy only
→ Medication only
→ Both therapy and medication
→ Not sure yet

Q4: How do you prefer to meet with a provider?
→ Video call
→ Text / async messaging
→ Either is fine

Q5: Is cost or insurance coverage a major factor?
→ Yes, need to use insurance
→ Yes, need lowest cash price
→ No, just want the best fit
```

**Birth control sub-flow:**
```
Q3: What are you primarily looking for?
→ Ongoing prescription refills
→ Switching methods
→ Starting birth control for the first time
→ Emergency contraception information

Q4: Do you currently have a prescription?
→ Yes, looking for convenient refills
→ No, need an online consultation

Q5: What matters most?
→ Price
→ Delivery speed
→ Range of options available
→ Discretion
```

**Menopause / HRT sub-flow:**
```
Q3: What symptoms are you most looking to address?
→ Hot flashes and night sweats
→ Mood and mental health
→ Bone density and long term health
→ Multiple symptoms
→ Not sure, want to explore options

Q4: Have you spoken to a doctor about HRT before?
→ Yes and I have a prescription
→ Yes but they were not helpful
→ No, this is new territory for me

Q5: What matters most to you?
→ Doctor who specialises in menopause
→ Lowest cost option
→ Fastest to get started
→ Ongoing monitoring and support
```

**General / Not sure sub-flow:**
```
Q3: What is the main reason you are here today?
→ I saw something about telehealth and I am curious
→ A friend recommended exploring online options
→ I want to save money on medication I already take
→ I have a health concern and don't know where to start
→ My doctor suggested exploring online care
```
Route "not sure" users to educational content and email capture rather than forcing a product recommendation.

---

### Scoring Logic

Every affiliate program gets a weighted score based on fit with user answers. Top 3 results are shown ranked. Build the scoring engine as a pure TypeScript function with no side effects — easy to test and update as new programs are added.

```typescript
// types/quiz.ts
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

// lib/quiz-scoring.ts
export function scoreProgram(
  program: AffiliateProgram,
  answers: QuizAnswers
): number {
  let score = 0

  // Concern match — most important signal (40 points)
  if (program.concerns.includes(answers.concern)) score += 40

  // Gender compatibility (10 points)
  if (
    program.genders.includes(answers.gender) ||
    program.genders.includes('all')
  ) score += 10

  // Price alignment (20 points)
  if (answers.priceImportance === 'high' &&
      program.pricePoint === 'budget') score += 20
  if (answers.priceImportance === 'medium' &&
      program.pricePoint === 'mid') score += 15
  if (answers.priceImportance === 'low' &&
      program.pricePoint === 'premium') score += 10

  // Subscription preference (15 points)
  if (answers.subscriptionPreference === 'monthly' &&
      program.subscriptionOnly) score += 15
  if (answers.subscriptionPreference === 'asneeded' &&
      !program.subscriptionOnly) score += 15

  // Bundle interest (10 points)
  if (answers.bundleInterest && program.offersBundle) score += 10

  // Insurance requirement (20 points — hard filter)
  if (answers.insuranceRequired && !program.acceptsInsurance) score -= 30

  // Consult preference (5 points)
  if (answers.asyncPreferred && program.asyncConsult) score += 5

  return score
}

export function rankPrograms(
  programs: AffiliateProgram[],
  answers: QuizAnswers
): AffiliateProgram[] {
  return programs
    .filter(p => p.concerns.includes(answers.concern))
    .map(p => ({ program: p, score: scoreProgram(p, answers) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.program)
}
```

---

### Affiliate Program Data Config

All program data lives in one typed config file. Update prices and links here — nowhere else.

```typescript
// lib/affiliates.ts
import type { AffiliateProgram } from '@/types/quiz'

export const affiliatePrograms: AffiliateProgram[] = [
  {
    id: 'hims',
    name: 'Hims',
    concerns: ['ed', 'hairloss', 'mentalhealth', 'weightloss'],
    genders: ['male'],
    pricePoint: 'mid',
    subscriptionOnly: false,
    offersBundle: true,
    acceptsInsurance: false,
    asyncConsult: true,
    monthlyPrice: 'From $25/month',
    affiliateUrl: '/go/hims',
    keyFeatures: [
      'No video call required',
      'Ships to all 50 states',
      'Bundle ED with hair loss',
      'Generic tadalafil from $25/month',
    ],
    reviewUrl: '/reviews/hims',
  },
  {
    id: 'roman',
    name: 'Roman',
    concerns: ['ed', 'hairloss', 'mentalhealth'],
    genders: ['male'],
    pricePoint: 'budget',
    subscriptionOnly: false,
    offersBundle: false,
    acceptsInsurance: false,
    asyncConsult: true,
    monthlyPrice: 'From $22/month',
    affiliateUrl: '/go/roman',
    keyFeatures: [
      'Lowest price for generic tadalafil',
      'Free 2-day shipping',
      'Async consultation',
      'No subscription required',
    ],
    reviewUrl: '/reviews/roman',
  },
  {
    id: 'ro',
    name: 'Ro',
    concerns: ['ed', 'weightloss', 'hairloss'],
    genders: ['all'],
    pricePoint: 'mid',
    subscriptionOnly: true,
    offersBundle: true,
    acceptsInsurance: false,
    asyncConsult: true,
    monthlyPrice: 'From $28/month',
    affiliateUrl: '/go/ro',
    keyFeatures: [
      'GLP-1 specialist',
      'Novel formats including gummies',
      'Covers both men and women',
      'Comprehensive weight loss program',
    ],
    reviewUrl: '/reviews/ro',
  },
  {
    id: 'hers',
    name: 'Hers',
    concerns: ['hairloss', 'mentalhealth', 'weightloss', 'birthcontrol'],
    genders: ['female'],
    pricePoint: 'mid',
    subscriptionOnly: true,
    offersBundle: true,
    acceptsInsurance: false,
    asyncConsult: true,
    monthlyPrice: 'From $25/month',
    affiliateUrl: '/go/hers',
    keyFeatures: [
      'Women focused platform',
      'Hair loss, skin, mental health',
      'Async consultation',
      'Discreet packaging',
    ],
    reviewUrl: '/reviews/hers',
  },
  {
    id: 'nurx',
    name: 'Nurx',
    concerns: ['birthcontrol', 'uti', 'mentalhealth'],
    genders: ['female'],
    pricePoint: 'budget',
    subscriptionOnly: true,
    offersBundle: false,
    acceptsInsurance: true,
    asyncConsult: true,
    monthlyPrice: 'From $0 with insurance',
    affiliateUrl: '/go/nurx',
    keyFeatures: [
      'Accepts most insurance',
      'Birth control from $0',
      'UTI treatment available',
      'Fast delivery',
    ],
    reviewUrl: '/reviews/nurx',
  },
  {
    id: 'betterhelp',
    name: 'BetterHelp',
    concerns: ['mentalhealth'],
    genders: ['all'],
    pricePoint: 'mid',
    subscriptionOnly: true,
    offersBundle: false,
    acceptsInsurance: false,
    asyncConsult: true,
    monthlyPrice: 'From $60/week',
    affiliateUrl: '/go/betterhelp',
    keyFeatures: [
      'Therapy only, no medication',
      'Text, video or phone sessions',
      'Match with a therapist fast',
      'Cancel anytime',
    ],
    reviewUrl: '/reviews/betterhelp',
  },
  // Add more programs here as affiliate relationships are established
]
```

---

### Results Page Specification

The results page is the most important conversion surface on the entire site. Build it with care.

**URL structure:**
```
/quiz/results?concern=ed&gender=male&price=high&top=roman
```
URL params encode the result so users can share it and return to it.

**Page layout top to bottom:**

1. Personalised headline — "Based on your answers, here's your best match"

2. Primary result card (full width, accent border, "Best match" badge)
   - Program name
   - Personalised match reason — specific to their answers, not generic
   - Monthly price
   - 3 key features relevant to their stated concern
   - Primary CTA button — "Get started with [Program]" — affiliate link
   - Secondary link — "Read our full [Program] review"

3. Secondary results (two smaller cards side by side)
   - Same structure as primary card but smaller
   - Labelled "Also consider"

4. "See how all options compare" expandable section
   - Expands to show full comparison table filtered to their concern and gender
   - Table has CTA buttons in it
   - Catches researchers who want full picture before deciding

5. Email capture
   - "Save your results and get our full comparison guide"
   - Single email field, one button
   - On submit: add to email list, send PDF or welcome email, fire GA4 email_capture event

6. Restart link — "Not what you were looking for? Start over"

**The personalised match reason — examples:**

```typescript
function generateMatchReason(
  program: AffiliateProgram,
  answers: QuizAnswers
): string {
  const reasons: string[] = []

  if (answers.priceImportance === 'high' && program.pricePoint === 'budget') {
    reasons.push(`${program.name} offers the lowest price we found for your concern`)
  }

  if (answers.bundleInterest && program.offersBundle) {
    reasons.push('they offer bundled services matching your interest')
  }

  if (answers.asyncPreferred && program.asyncConsult) {
    reasons.push('no video call is required')
  }

  if (answers.insuranceRequired && program.acceptsInsurance) {
    reasons.push('they accept insurance unlike most telehealth platforms')
  }

  return reasons.length > 0
    ? `${program.name} is your best fit because ${reasons.join(' and ')}.`
    : `${program.name} is a strong match for your stated health concern and preferences.`
}
```

---

### GA4 Events to Fire

```typescript
// On quiz start
gtag('event', 'quiz_start', { concern: 'unknown', gender: 'unknown' })

// On each question answered
gtag('event', 'quiz_step', { step: 2, concern: answers.concern })

// On quiz completion
gtag('event', 'quiz_complete', {
  concern: answers.concern,
  gender: answers.gender,
  top_result: rankedPrograms[0].id,
  price_importance: answers.priceImportance,
})

// On result CTA click
gtag('event', 'affiliate_click', {
  program: program.id,
  source: 'quiz_result',
  position: 'primary', // or 'secondary', 'comparison_table'
  concern: answers.concern,
})

// On email capture
gtag('event', 'email_capture', {
  source: 'quiz_results',
  concern: answers.concern,
  top_result: rankedPrograms[0].id,
})
```

---

### Shareability Mechanic

After results are shown, display a subtle share prompt:

```
"Share your result:"
[Copy link] [Share on Reddit] [Share on X]
```

The shared URL encodes their result. When someone clicks a shared link they see the same results page with a banner at the top: "Your friend got matched with [Program] — take the quiz to see your own result." This drives quiz completions from social traffic.

---

### Quiz URL Routing Architecture

This is an intentional SEO and UX decision. The quiz has multiple entry points at different URLs, each skipping questions the user has already implicitly answered by where they came from. Every entry point is independently indexable and can rank for its own keyword cluster.

**The full URL map:**

```
/quiz                   → Master entry — shows Q1 (gender selector)
                          Ranks for: "which telehealth service is right for me"

/quiz/male              → Skips Q1 — starts at Q2 (health concern for men)
                          Ranks for: "which men's health telehealth is right for me"
                          Linked from: all ED, hair loss, testosterone content

/quiz/female            → Skips Q1 — starts at Q2 (health concern for women)
                          Ranks for: "which women's health telehealth is right for me"
                          Linked from: all birth control, menopause, women's hair content

/quiz/results           → Shared results page, gender + concern encoded in URL params

/ed/quiz                → Skips Q1 + Q2 — starts at ED sub-flow directly
                          Linked from: all ED articles, comparison pages, review pages

/glp1/quiz              → Skips Q1 + Q2 — starts at GLP-1 sub-flow
/hair/quiz              → Skips Q1 + Q2 — starts at hair loss sub-flow
/womens/quiz            → Skips Q1 — starts at Q2 for women (same as /quiz/female)
/mental/quiz            → Skips Q1 + Q2 — starts at mental health sub-flow
```

**Why this matters for SEO:**

Each URL is independently crawlable and linkable. `/quiz/male` can rank for male-specific quiz queries. `/quiz/female` can rank for female-specific queries. Cluster quizzes like `/ed/quiz` get linked from every ED article on the site, building internal link authority to that specific entry point. Three or more indexable quiz URLs beat one generic quiz URL every time.

**Why this matters for Reddit and social linking:**

When posting in r/erectiledysfunction you link to `/quiz/male` or `/ed/quiz` — not the master quiz. The user never sees an irrelevant gender question. The quiz feels purpose-built for their community. Same principle for any gender-specific or concern-specific community.

**Implementation — one component, multiple entry points:**

The `QuizWidget` component accepts optional `startingGender` and `startingConcern` props. When props are provided the component skips the corresponding questions and starts at the right point. No duplicate logic, no separate codebases — one component, many pages.

```typescript
// types/quiz.ts — extend existing types
export type QuizProps = {
  startingGender?: Gender       // pre-sets Q1, skips to Q2
  startingConcern?: HealthConcern  // pre-sets Q2, skips to sub-flow
}

// components/QuizWidget.tsx
export function QuizWidget({ startingGender, startingConcern }: QuizProps) {
  const [step, setStep] = useState(
    startingConcern ? 3 :   // skip Q1 + Q2, start at sub-flow
    startingGender ? 2 :    // skip Q1, start at Q2
    1                        // show everything from Q1
  )

  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({
    gender: startingGender,
    concern: startingConcern,
  })

  // rest of quiz logic unchanged
}
```

**Page files — thin wrappers around the shared component:**

```typescript
// app/quiz/page.tsx — master entry
export default function QuizPage() {
  return <QuizWidget />
}

// app/quiz/male/page.tsx
export default function MaleQuizPage() {
  return <QuizWidget startingGender="male" />
}

// app/quiz/female/page.tsx
export default function FemaleQuizPage() {
  return <QuizWidget startingGender="female" />
}

// app/ed/quiz/page.tsx
export default function EDQuizPage() {
  return <QuizWidget startingGender="male" startingConcern="ed" />
}

// app/glp1/quiz/page.tsx
export default function GLP1QuizPage() {
  return <QuizWidget startingConcern="weightloss" />
}

// app/womens/quiz/page.tsx
export default function WomensQuizPage() {
  return <QuizWidget startingGender="female" />
}
```

**Results URL always encodes full context:**

Even when gender or concern were pre-set via props, the results URL must encode them fully. This ensures shared links work correctly, GA4 data is clean, and someone arriving via a shared link sees the right results.

```
/quiz/results?gender=male&concern=ed&price=high&subscription=monthly&top=roman
```

**Metadata per entry point:**

Each quiz page needs its own title tag and meta description tailored to that entry point. Do not use the same meta across all quiz URLs.

```typescript
// app/quiz/male/page.tsx
export const metadata = {
  title: 'Which Men\'s Health Telehealth Service Is Right For You? | SiteName',
  description: 'Answer 4 quick questions and find the best online ED, hair loss, or testosterone platform for your needs and budget.',
}

// app/quiz/female/page.tsx
export const metadata = {
  title: 'Which Women\'s Health Telehealth Service Is Right For You? | SiteName',
  description: 'Answer 4 quick questions and find the best online platform for birth control, menopause, hair loss, or mental health.',
}

// app/ed/quiz/page.tsx
export const metadata = {
  title: 'Which ED Telehealth Platform Is Right For You? | SiteName',
  description: 'Compare Hims, Roman, Ro, and Rex MD in 3 quick questions. Find the best fit for your budget and preferences.',
}
```

**Internal linking rule — always link to the most specific quiz entry point:**

- ED article → link to `/ed/quiz` or `/quiz/male`
- Women's hair article → link to `/hair/quiz` or `/quiz/female`
- General telehealth article → link to `/quiz`
- Never link every article to the master `/quiz` — use the most contextually relevant entry point

**Canonical tags:**

All quiz entry point pages are unique pages with their own content and metadata. Do not add canonical tags pointing them to the master `/quiz` — that would tell Google to ignore them which defeats the whole purpose. Each URL is canonical to itself.

---

## Affiliate Program Setup

### Important: Build the site first

Most affiliate networks do a manual review before approving you. They want to see a real, live website — not a blank domain. Build at least the homepage, one comparison page, and your disclaimer/privacy pages before applying anywhere. A site with no content will get rejected.

### The network landscape (what actually exists)

Hims runs their affiliate program across multiple networks simultaneously — Impact, ShareASale, CrakRevenue, Partnerize, and Katalys among others. This is normal for large brands. You do not need to join all of them. Pick one to start.

**Why this matters:** Each network is a middleman between you and Hims. Some take a bigger cut than others. Some have better tooling. Some are easier to get approved on as a new publisher. The commission you see advertised is what the brand pays out — the network fee comes out of their side, not yours.

### Recommended signup sequence

**Step 1 — Impact (primary, apply first)**
- Impact is the largest and most reputable affiliate network in this space
- Hims, Roman, and most major telehealth brands run here
- Direct relationship, clean dashboard, reliable tracking and payments
- Apply at: impact.com → create a publisher account → search for Hims, Roman, Ro
- Approval can take a few days to two weeks — they review your site manually
- This is the preferred long-term home for your affiliate links

**Step 2 — ShareASale (backup, apply same week)**
- Generally easier approval than Impact for new publishers
- Hims also runs a program here
- Good fallback if Impact takes time or rejects you initially
- Apply at: shareasale.com → publisher signup
- Use this to get links live while waiting for Impact approval

**Step 3 — Direct outreach (month 3+, after you have traffic)**
- Once you're driving 30–50 conversions/month, email the affiliate manager directly
- Introduce yourself, share your traffic numbers, ask about VIP or custom rates
- This is where commissions can jump significantly — $100–$200+ per conversion
- Most brands have a named affiliate manager — find them on LinkedIn or ask the network

**Do not start with:**
- Katalys — they are a network middleman on top of a network, adding an extra layer between you and the brand. Fine as a supplementary option later, not the right starting point
- CrakRevenue — adult traffic network, primarily used by influencers, not SEO content sites
- Partnerize — enterprise-focused, harder to get approved as a new publisher

### Program reference table

| Program | Audience | Primary network | Approx CPA | Category |
|---------|----------|----------------|-----------|----------|
| Hims | Male | Impact | $30–100 | ED, hair, mental health |
| Roman | Male | Impact | $30–100 | ED, hair |
| Ro | All | Impact | $50–150 | ED, GLP-1, weight loss |
| Hers | Female | Impact | $30–80 | Hair, skin, birth control, menopause |
| Nurx | Female | Impact / direct | $20–50 | Birth control, UTI, STI testing |
| Wisp | Female | Direct | $20–50 | UTI, vaginal health, birth control |
| Noom | All | Impact | $30–60 | Weight loss, GLP-1 |
| Keeps | Male | Impact / direct | $40–80 | Hair loss |
| BetterHelp | All | Impact | $50–100 | Mental health therapy |
| Talkspace | All | Impact | $50–150 | Mental health therapy |
| Cerebral | All | Impact | $50–100 | Mental health + medication |

> Note: CPA rates are estimates and vary by traffic quality, volume, and negotiation. Confirm your actual approved rate in your network dashboard after approval.

**Implementation:**
```typescript
// lib/affiliates.ts
export const affiliates = {
  hims: {
    name: 'Hims',
    url: '/go/hims', // internal redirect
    targetUrl: 'https://your-hims-affiliate-link.com',
    price: 'From $25/month',
    rating: 4.4,
    tags: ['async', 'bundle', 'established'],
  },
  roman: {
    name: 'Roman',
    url: '/go/roman',
    targetUrl: 'https://your-roman-affiliate-link.com',
    price: 'From $22/month',
    rating: 4.3,
    tags: ['async', 'ed-only', 'established'],
  },
  // etc.
}
```

**Redirect implementation in Next.js:**
```typescript
// next.config.ts
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/go/hims',
        destination: process.env.AFFILIATE_HIMS_URL,
        permanent: false, // 302, not 301 — preserves click tracking
      },
      {
        source: '/go/roman',
        destination: process.env.AFFILIATE_ROMAN_URL,
        permanent: false,
      },
    ]
  },
}
```

---

## SEO Implementation

### On-page requirements (every page)
- Title tag: target keyword first, brand second. "Hims vs Roman 2026 — Which Is Better? | SiteName"
- Meta description: 150–160 chars, include keyword, include a hook
- H1: matches title intent, contains keyword
- Internal links: every article links to at least one Tier 1 money page
- FAQ section at bottom of every article (triggers FAQ rich results in Google)
- Word count: Tier 1 pages 1,500+ words, Tier 2 1,000+, Tier 3 800+

### Schema markup
Add to every article page:
```typescript
// Article schema
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": pageTitle,
  "datePublished": publishDate,
  "dateModified": updatedDate,
  "author": { "@type": "Person", "name": "Site Author" }
}

// FAQ schema (add to any page with Q&A section)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
}
```

### Sitemap
- Auto-generate with next-sitemap
- Submit to Google Search Console on day one
- Resubmit every time you publish 5+ new pages

### Internal linking rules
- Every Tier 3 article links to 1–2 Tier 2 articles
- Every Tier 2 article links to 1–2 Tier 1 money pages
- Every Tier 1 page has a CTA block with affiliate links above the fold AND at the end
- Comparison pages link to individual review pages and vice versa

---

## Analytics & Tracking

### GA4 events to fire (custom events)

```typescript
// Track every affiliate click
gtag('event', 'affiliate_click', {
  program: 'hims',
  source_page: '/compare/hims-vs-roman',
  position: 'hero_cta', // or 'article_cta', 'quiz_result', etc.
})

// Track quiz completions
gtag('event', 'quiz_complete', {
  top_result: 'hims',
  question_count: 5,
})

// Track email captures
gtag('event', 'email_capture', {
  source: 'quiz_results',
})
```

### Dashboard to build (simple)
- Weekly: top 10 landing pages by sessions
- Weekly: affiliate clicks by program and source page
- Weekly: click-through rate per page (clicks / sessions)
- Monthly: conversion rate estimate (use affiliate dashboard data vs GA4 clicks)

---

## Legal & Compliance Requirements

These are non-negotiable. Build them before launch.

### Required pages
1. **Disclaimer page** (`/disclaimer`)  
   - "This site is for informational purposes only and does not constitute medical advice"
   - "We are not licensed medical providers"
   - "Always consult a qualified healthcare provider before starting any medication"
   - "This site contains affiliate links. We may earn a commission if you purchase through our links, at no additional cost to you."

2. **Privacy Policy** (`/privacy`)  
   - Cover GA4 data collection
   - Cover email list collection
   - Use a generator: Termly or iubenda for a starting point, then customize

3. **Affiliate disclosure**  
   - Must appear at the top of every article that contains affiliate links (FTC requirement)
   - Simple one-liner: "This article contains affiliate links. We may earn a commission if you click through and make a purchase."
   - Build this as a reusable component shown automatically on all blog posts

### What NOT to do
- Do not make medical claims ("tadalafil cures ED")
- Do not claim specific results ("lose 20 pounds in 2 months")
- Do not reproduce drug prescribing information or dosage guidance
- Do not collect any health information from users
- Do not use before/after images that imply guaranteed results

---

## Component Checklist

Build these components first — they're reused across every page:

- `<AffiliateCard />` — program name, price, rating, CTA button, affiliate link
- `<ComparisonTable />` — side-by-side feature/price table for versus pages
- `<AffiliateDisclosure />` — FTC disclosure banner, shown at top of all articles
- `<QuizWidget />` — multi-step quiz with scoring and results
- `<CTABlock />` — call to action section with top 2–3 affiliate programs, used above fold and end of articles
- `<FAQAccordion />` — FAQ section with schema markup baked in
- `<ArticleLayout />` — standard layout for blog posts with TOC sidebar
- `<RatingStars />` — visual star rating component

---

## Month-by-Month Plan

### Month 1
- [ ] Choose niche (ED or GLP-1)
- [ ] Register domain, set up Vercel, scaffold Next.js project
- [ ] Set up GA4 and Google Search Console from day one
- [ ] Build all required components (AffiliateCard, ComparisonTable, CTABlock, Disclosure)
- [ ] Write and publish 5 Tier 1 money pages
- [ ] Build and publish quiz
- [ ] Add disclaimer and privacy policy pages (required before applying to networks)
- [ ] Submit sitemap to Google
- [ ] **Apply to Impact** (impact.com) with your live site URL — do this once the site has real content
- [ ] **Apply to ShareASale** same week as Impact as a backup
- [ ] Use placeholder `/go/hims` style redirects pointing to brand homepages until affiliate links are approved
- [ ] Swap placeholders to real affiliate links once network approvals come through

### Month 2–3
- [ ] Publish 2 articles per week (mix of Tier 1 and Tier 2)
- [ ] Add FAQ schema to all published pages
- [ ] Start posting on relevant subreddits — genuinely helpful, no spam
- [ ] Set up email capture on quiz results page
- [ ] Reach out to 2–3 smaller telehealth companies about direct affiliate deals (better rates)
- [ ] Review Search Console weekly — find queries you're showing for, write more content around them

### Month 4
- [ ] Identify top 5 performing articles from Search Console
- [ ] Double down — write supporting content around those topics
- [ ] Launch TikTok or YouTube Shorts channel (1–2 videos per week, faceless is fine)
- [ ] A/B test CTA placement on top money pages
- [ ] Add email drip sequence (3–5 emails, educational, affiliate links woven in)

### Month 5–6
- [ ] Expand to adjacent topics — hair loss, testosterone, sleep (same male audience)
- [ ] Add more affiliate programs in adjacent categories (Keeps for hair, etc.)
- [ ] Push short-form video harder if getting traction
- [ ] Build a second quiz for the adjacent niche
- [ ] Review and update all Tier 1 pages with fresh data and 2026 pricing

---

## Environment Variables

```bash
# .env.local
AFFILIATE_HIMS_URL=https://your-hims-affiliate-link
AFFILIATE_ROMAN_URL=https://your-roman-affiliate-link
AFFILIATE_RO_URL=https://your-ro-affiliate-link
AFFILIATE_NOOM_URL=https://your-noom-affiliate-link
AFFILIATE_KEEPS_URL=https://your-keeps-affiliate-link
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
RESEND_API_KEY=your-resend-key
```

---

## Success Metrics

| Metric | Month 3 target | Month 6 target |
|--------|---------------|----------------|
| Monthly organic sessions | 1,000 | 5,000 |
| Affiliate clicks/month | 50 | 300 |
| Email subscribers | 50 | 500 |
| Affiliate revenue | $100–300 | $1,000–3,000 |
| Pages indexed | 15 | 50 |
| Avg position (top keywords) | 30–50 | 15–30 |

---

## Conversion Design Guidelines

### Core principle
Users arriving from Google search are already interested. The goal is not to convince them — it is to remove friction and uncertainty fast enough that they click through before they leave. Every design decision should serve that goal.

### Visual direction
- **Aesthetic:** Clean, medical-adjacent, approachable. Reference: what Hims.com itself looks like. Not a bro supplement site, not a clinical hospital site.
- **Background:** White or very light neutral (#FAFAFA)
- **Text:** Dark charcoal (#1A1A1A) — not pure black, not gray
- **Accent color:** One only. Use muted blue (#2563EB) or soft green (#16A34A). Apply exclusively to CTA buttons and active states. Nowhere else.
- **Avoid:** Red/yellow urgency colors (scam feel), purple gradients (generic AI feel), dark mode default, more than one accent color
- **Typography:** Readable serif or clean sans-serif for body. Nothing decorative. Minimum 16px body font, 1.6 line height for article content.

### Trust signals (build these in from day one)
- Author name and short bio on every article page
- "Last updated: [Month Year]" visible near the top of every article
- Affiliate disclosure banner at the top of every page containing affiliate links — honest and visible, not hidden in footer
- No banner ads, no popup ads, no sidebar ad units
- HTTPS enforced
- Fast load time — target under 2 seconds on mobile (use Next.js SSG, optimise images)
- About page with real information about who runs the site

### CTA placement rules
Every money page (comparison, review, best-of) must have CTAs in exactly these three positions:
1. **Above the fold** — user should see at least one affiliate link without scrolling
2. **Mid-article** — placed after the main comparison or key finding, where the user has enough information to decide
3. **End of article** — catch users who read everything before acting

On comparison/versus pages, the recommended winner should be visually distinct:
- Slightly larger card or highlighted border in accent color
- Badge: "Our pick" or "Best value" or "Editor's choice"
- CTA button inside the card itself, not below it

### Comparison table rules
Most users on a versus page scroll directly to the table, make a judgment in under 10 seconds, and click. Design for this:
- Table visible without scrolling on desktop
- Columns: Program | Monthly price | Async? | Ships to all states? | Best for | CTA button
- Winner column subtly highlighted (light accent background)
- CTA button embedded in the table — do not make users scroll past the table to find a link
- Mobile: stack table into cards rather than horizontal scroll

### Quiz funnel rules
- End every quiz result with exactly ONE primary CTA — not five options
- "Based on your answers, [Program] is your best fit" — one big button
- Below it: smaller "Compare all options" link for users who want to keep browsing
- Never show more than 3 results — decision fatigue kills conversions
- Primary result card should be visually larger and distinct from the secondary options

### CTA copy — use specific over vague
| Instead of | Use |
|-----------|-----|
| "Learn more" | "See Hims pricing" |
| "Click here" | "Get started with Roman" |
| "Find out more" | "Check if you qualify" |
| "Visit site" | "View Ro's GLP-1 plans" |

### What kills conversions silently
- Load time over 3 seconds on mobile — fix with SSG and image optimisation
- Recommending 5+ programs equally — pick a winner, users choose nothing when everything looks the same
- No price mentioned before the click — always show a ballpark ("From $25/month") so users know what to expect
- Wall of text — break articles with comparison tables, callout boxes, bullet lists, and clear H2/H3 headers
- Vague or missing affiliate disclosure — users who feel misled do not convert and do not return

### Page speed targets
- Largest Contentful Paint (LCP): under 2.5 seconds
- Cumulative Layout Shift (CLS): under 0.1 — no elements jumping around as page loads
- Use next/image for all images
- No heavy third-party scripts except GA4
- Test with Google PageSpeed Insights before launch

---

## Notes for Claude Code

- Scaffold the full Next.js project with the site architecture above
- Build all components listed in the component checklist
- Implement the quiz as a priority — it is the main differentiator
- Implement affiliate redirect tracking via GA4 events
- Use placeholder affiliate URLs from env variables throughout
- Add the affiliate disclosure component automatically to all blog post layouts
- Implement FAQ schema on article pages
- Generate the sitemap config with next-sitemap
- Use Tailwind for all styling — clean, professional, medical-adjacent aesthetic (not clinical, not bro-y)
- Mobile-first — most traffic will come from mobile search and social

---

## Visual Design Specification

### Design Direction

The site should read as a premium consumer health magazine — not a clinical SaaS product, not a bro supplement site. Trustworthy, human, and calm. Users are researching sensitive health decisions; the design should make them feel informed and comfortable, not pressured.

### Color Palette

```
Background (page):  #FAFAF8  — warm white, slightly warmer than pure white, less clinical
Background (cards): #FFFFFF  — clean white for surfaces that need to stand out
Background (warm):  #F5F4F0  — warm gray for section backgrounds, alternating rows
Background (quiz):  #FAF8F5  — slightly warmer still — used specifically in quiz UI

Accent (primary):   #5B7A5F  — muted sage green — trustworthy, calm, human
Accent (dark):      #4A6950  — hover/active state for accent
Accent (light):     #EEF4EE  — light sage for hover backgrounds, selected states
Accent (mid):       #D4E4D5  — borders on selected states, dividers in sage-toned contexts

Text (primary):     #1C1C1E  — dark charcoal (not pure black, less harsh)
Text (secondary):   #4A4A4C  — supporting text, labels
Text (muted):       #8A8A8C  — captions, timestamps, minor UI text

Border (subtle):    #E8E7E3  — default card and input borders
Border (mid):       #D4D3CF  — stronger borders when needed
```

**The accent color (#5B7A5F) goes ONLY on:**
- Primary CTA buttons
- Active/selected states (quiz options, nav links)
- Focus rings
- Inline text links within articles

Do not use it decoratively. Every other UI element should be warm whites, warm grays, and charcoal text.

### Typography

**UI font: Plus Jakarta Sans** (Google Fonts)
- Used for: headings, navigation, buttons, labels, quiz questions, card titles
- Weights: 400 (body UI), 500 (labels), 600 (headings, buttons)
- Feels: geometric, clean, modern, friendly without being casual

**Article body font: Lora** (Google Fonts)
- Used for: article body text, pull quotes, editorial content
- Weights: 400 (body), 500 (strong), 400 italic (emphasis)
- Feels: editorial, readable, authoritative — the serif brings warmth
- Apply via `.prose-article` class on article content wrappers

**Scale:**
- Body (UI): 16px / 1.6 line height
- Body (article): 17px / 1.75 line height — slightly larger and more open for reading
- Small / captions: 14px
- H1: 36–48px (page hero), 28–32px (article titles)
- H2: 22–26px
- H3: 18–20px

### Button Style

**Premium — slightly rounded rectangle. NOT pill-shaped.**

```
Primary button:
  background: #5B7A5F
  color: white
  border-radius: 8px
  padding: 12px 24px
  font: Plus Jakarta Sans, 600, 15px
  hover: background #4A6950, translateY(-1px), box-shadow rgba(91,122,95,0.25)
  active: translateY(0)

Secondary button (outline):
  background: transparent
  border: 1px solid #5B7A5F
  color: #5B7A5F
  border-radius: 8px
  hover: background #EEF4EE
```

Never use pill-shaped buttons (border-radius: 9999px) — they read as consumer app, not premium editorial.

### Card Style

```
Standard card (articles, affiliate cards):
  background: #FFFFFF
  border: 1px solid #E8E7E3
  border-radius: 12px
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
  hover shadow: 0 4px 12px rgba(0,0,0,0.08)
```

### Quiz UI — Warmer, Rounder, More Personality

The quiz is an interactive experience. It should feel slightly more warm and engaging than the rest of the site while staying consistent with the overall palette.

```
Quiz page background: #FAF8F5 (warmer than page default)

Quiz option cards:
  border-radius: 16px (rounder than standard cards)
  padding: 16px 20px
  border: 1px solid #E8E7E3
  hover: border #5B7A5F, background #EEF4EE, translateY(-1px), soft sage shadow
  selected: border #5B7A5F, background #EEF4EE,
            box-shadow: 0 0 0 2px #5B7A5F + subtle sage glow

Progress indicator: small dots or "Question 2 of 5" — centered, muted text color
Back button: very subtle, text-only, muted color — do not compete with answer options
Question text: large (22–26px), Plus Jakarta Sans, centered, generous top padding
```

The quiz should feel considered and spacious. Generous padding between elements. No cramping.

### Article Pages — Calmer, More Editorial

Article pages should feel like a well-designed health publication.

```
Body text: Lora, 17px, 1.75 line height
Max content width: 72ch
Headings: Plus Jakarta Sans (reverts to UI font for structure)
Affiliate disclosure: top of page, warm amber background (#FFFBEB), subtle
TOC sidebar: sticky on desktop, Plus Jakarta Sans, 14px, muted text
```

Do not use heavy drop shadows, gradients, or bright colors in article layouts. The editorial serif + generous whitespace does the visual work.

### Photography / Imagery Direction

When images are added:
- Real people, natural light, candid or quietly posed
- No stock photo doctors in white coats, no stethoscopes, no sterile environments
- Warm color temperature — golden hour, indoor natural light
- Diverse subjects — ages 28–65, mixed backgrounds
- Contexts: people in everyday environments, not medical settings

### Animation (Framer Motion)

These values are non-negotiable — do not increase energy/speed.

```
Page mount:       opacity 0→1, duration 0.4s ease
Quiz step enter:  opacity 0→1, y 10→0, duration 0.3s easeOut
Quiz step exit:   opacity 1→0, y 0→-10, duration 0.2s ease
Card scroll-in:   opacity 0→1, y 16→0, duration 0.4s easeOut
Stagger delay:    0.08s between sibling cards
Button hover:     scale 1.02, translateY(-1px), duration 0.15s
Accordion open:   height animated, duration 0.25s easeOut
```

Never use: spring physics, bounce easing, scale > 1.03, duration < 0.15s for visible transitions.

### What to avoid

- Blue as an accent color — it reads cold and hospital-adjacent
- Pure white backgrounds (#FFFFFF) at the page level — use #FAFAF8
- Pure black text — use #1C1C1E
- Pill-shaped buttons
- Heavy gradients
- Red or yellow urgency cues (scam feel)
- Dark mode
- Decorative illustrations or icons that feel playful/startup-y
- More than one accent color anywhere on the page
