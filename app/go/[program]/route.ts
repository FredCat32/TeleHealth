import { NextRequest, NextResponse } from 'next/server'

const affiliateEnvMap: Record<string, string> = {
  hims: 'AFFILIATE_HIMS_URL',
  roman: 'AFFILIATE_ROMAN_URL',
  ro: 'AFFILIATE_RO_URL',
  hers: 'AFFILIATE_HERS_URL',
  nurx: 'AFFILIATE_NURX_URL',
  keeps: 'AFFILIATE_KEEPS_URL',
  noom: 'AFFILIATE_NOOM_URL',
  betterhelp: 'AFFILIATE_BETTERHELP_URL',
  rexmd: 'AFFILIATE_REXMD_URL',
}

export async function GET(
  request: NextRequest,
  { params }: { params: { program: string } }
) {
  const { program } = params
  const envKey = affiliateEnvMap[program.toLowerCase()]

  if (!envKey) {
    console.warn(`[affiliate-click] unknown program="${program}" — returning 404`)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const destination = process.env[envKey]

  if (!destination) {
    console.warn(`[affiliate-click] env var ${envKey} not set — redirecting to homepage`)
    return NextResponse.redirect(new URL('/', request.url), { status: 302 })
  }

  console.log(
    `[affiliate-click] program=${program} destination=${destination} ref=${request.headers.get('referer') ?? 'direct'}`
  )

  return NextResponse.redirect(destination, { status: 302 })
}
