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
    default: 'Playt | Restaurant Ordering, Done For You',
    template: '%s | Playt'
  },
  description: "Playt writes your vendor orders from your Toast, Square or Clover sales. Approve in two minutes from your phone. Keep your vendors and your prices.",
  keywords: ['restaurant ordering', 'restaurant inventory', 'food cost', 'vendor ordering', 'purchase orders', 'Toast', 'Square', 'Clover'],
  authors: [{ name: 'Playt' }],
  openGraph: {
    title: 'Playt | Restaurant Ordering, Done For You',
    description: "Playt writes your vendor orders from your Toast, Square or Clover sales. Approve in two minutes from your phone. Keep your vendors and your prices.",
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
    title: 'Playt | Restaurant Ordering, Done For You',
    description: "Playt writes your vendor orders from your Toast, Square or Clover sales. Approve in two minutes from your phone. Keep your vendors and your prices.",
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