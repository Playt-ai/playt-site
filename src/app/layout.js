import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: "Playt - Smarter Data. Smoother Operations. For Restaurants.",
  description:
    "Playt provides AI-powered data analytics, supply chain optimization, and management tools to help restaurants streamline operations and boost profits.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}