import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Playt - AI Data Analytics & Supply Chain Optimization",
  description:
    "Join the waitlist for Playt, the AI-powered data analytics and supply chain optimization platform for restaurants.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}