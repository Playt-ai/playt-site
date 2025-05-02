import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://playt.ai'),
  title: {
    default: 'Playt | Restaurant Analytics and Operations Platform',
    template: '%s | Playt'
  },
  description: "Smarter data and smoother operations for restaurants. Playt helps restaurants optimize their operations with predictive analytics and intelligent insights.",
  keywords: ['restaurant analytics', 'restaurant operations', 'restaurant management', 'restaurant data', 'restaurant technology', 'restaurant software'],
  authors: [{ name: 'Playt' }],
  openGraph: {
    title: 'Playt | Restaurant Analytics and Operations Platform',
    description: "Smarter data and smoother operations for restaurants. Playt helps restaurants optimize their operations with predictive analytics and intelligent insights.",
    url: 'https://playt.ai',
    siteName: 'Playt',
    images: [
      {
        url: '/og-image.png', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Playt Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playt | Restaurant Analytics and Operations Platform',
    description: "Smarter data and smoother operations for restaurants. Playt helps restaurants optimize their operations with predictive analytics and intelligent insights.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}