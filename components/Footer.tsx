import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-bold text-lg text-[#1C1C1E]">TreatCompare</span>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Independent comparisons of telehealth platforms to help you find the right care.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Categories
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/ed" className="hover:text-[#5B7A5F] transition-colors">
                  ED Treatment
                </Link>
              </li>
              <li>
                <Link href="/glp1" className="hover:text-[#5B7A5F] transition-colors">
                  GLP-1 / Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/hair" className="hover:text-[#5B7A5F] transition-colors">
                  Hair Loss
                </Link>
              </li>
              <li>
                <Link href="/womens" className="hover:text-[#5B7A5F] transition-colors">
                  {"Women's Health"}
                </Link>
              </li>
              <li>
                <Link href="/mental" className="hover:text-[#5B7A5F] transition-colors">
                  Mental Health
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/about" className="hover:text-[#5B7A5F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-[#5B7A5F] transition-colors">
                  Comparisons
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#5B7A5F] transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#5B7A5F] transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#5B7A5F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400 leading-relaxed mb-2">
            <strong>Affiliate disclosure:</strong> TreatCompare may earn a commission when you click
            affiliate links and make a purchase. This does not affect our editorial independence or
            the prices you pay. We only recommend services we believe provide genuine value.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {year} TreatCompare. All rights reserved. This site is for informational
            purposes only and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
