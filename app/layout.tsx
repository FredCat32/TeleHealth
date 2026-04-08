import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'TelehealthPick — Compare Telehealth Platforms',
    template: '%s | TelehealthPick',
  },
  description:
    'Compare ED, weight loss, hair loss, and mental health telehealth services side by side. Find the right platform for your needs and budget.',
  metadataBase: new URL('https://telehealthpick.com'),
  openGraph: {
    type: 'website',
    siteName: 'TelehealthPick',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'impact-site-verification': '4cef7297-b8cf-4e4c-93e9-b39476c21f7d',
  },
}

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {GA4_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA4_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
