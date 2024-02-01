"use client"

import { useEffect } from "react"

interface useKakaoProps {}

export function useKakao() {
  useEffect(() => {
    if (!window) {
      return
    }

    if (window.Kakao.isInitialized()) {
      return
    }

    const appKey = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY
    window.Kakao.init(appKey)
  }, [])

  return <></>
}
