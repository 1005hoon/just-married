import type { Metadata } from "next"
import { Gowun_Dodum, Inter, Noto_Serif_KR } from "next/font/google"

import "./globals.css"

import Script from "next/script"

import { cn } from "@/lib/utils"

import { CopyUrl } from "@/components/copy-url"

declare global {
  interface Window {
    naver: any
    Kakao: any
  }
}

const inter = Inter({ subsets: ["latin"] })
const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--noto_serif_kr",
})

const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
  variable: "--gowun_dodum",
})

export const metadata: Metadata = {
  title: "재림 ❤️ 소연 결혼합니다",
  description: "따뜻한 봄의 시작을 알리는 3월, 재림과 소연의 결혼식으로 초대합니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    images: "/og.jpg",
    url: "https://just-married.app",
    title: "재림 ❤️ 소연 결혼합니다",
    description: "따뜻한 봄의 시작을 알리는 3월, 재림과 소연의 결혼식으로 초대합니다.",
    siteName: "Just Married",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          strategy="beforeInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_CLIENT_ID}`}
        />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={cn("w-full", inter.className, notoSerif.variable, gowunDodum.variable)}>
        {children}
        <CopyUrl />
      </body>
    </html>
  )
}
