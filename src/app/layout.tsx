import type { Metadata } from "next"
import Head from 'next/head'
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Portfolio"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1956152114833325" crossOrigin="anonymous"></script>
      </Head>
      <body className={`bg-neutral-900 ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}