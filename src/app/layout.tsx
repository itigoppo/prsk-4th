import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "プロセカn周年キャンペーンの計算機",
  description: "プロジェクトセカイn周年のキャンペーン計算機",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
