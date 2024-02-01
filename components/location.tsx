"use client"

import { useEffect } from "react"

import { toast } from "sonner"

import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard"

import { NaverMap } from "./naver-map"

interface LocationProps {}

export function Location(props: LocationProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 3000 })

  const onClick = () => {
    toast("주소를 복사했어요!")
    copyToClipboard("경기도 수원시 팔달구 월드컵로 310 (우만동 209)")
  }

  const onNaverClick = () => {
    window.open("https://naver.me/xecaz11d")
  }

  const onKakakoClick = () => {
    window.open(
      "kakaonavi-w://kakaonavi?name=경기도+수원시+팔달구+월드컵로+310&x=127.03636076924276&y=37.286753351973466"
    )
  }

  const onTmapClick = () => {
    window.open(
      "tmap://route?rGoName=경기도+수원시+팔달구+월드컵로+310&rGoX=127.03636076924276&rGoY=37.286753351973466"
    )
  }

  return (
    <section className="mt-20 flex flex-col items-center px-5">
      <header className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-light uppercase text-slate-500">Location</h2>
        <h2 className="text-xl font-bold">오시는 길</h2>
      </header>
      <div className="mt-8 flex w-full flex-col items-center gap-2">
        <p className="text-sm">WI컨벤션</p>
        <p onClick={onClick} className="text-sm tracking-tighter text-stone-600 underline underline-offset-2">
          경기도 수원시 팔달구 월드컵로 310 (우만동 209)
        </p>
        <p className="mt-3 text-sm tracking-tighter text-stone-600">Tel. 031-241-6000</p>
      </div>
      <div className="mt-6 flex h-[300px] w-full">
        <NaverMap />
      </div>
      <div className="mt-2 flex w-full justify-between font-gowunDodum">
        <button
          onClick={onNaverClick}
          className="flex flex-1 items-center justify-center gap-1 rounded-bl-md rounded-tl-md border px-2 py-3 text-sm font-medium text-slate-700"
        >
          <img className="h-4 w-4" src="https://cdn2.makedear.com/homepage/img/icon/navermap1.webp" />
          네이버 지도
        </button>
        <button
          onClick={onKakakoClick}
          className="flex flex-1 items-center justify-center gap-1 border px-2 py-3 text-sm font-medium text-slate-700"
        >
          <img className="h-4 w-4" src="https://cdn2.makedear.com/homepage/img/icon/kakaonavi1.png" />
          카카오내비
        </button>
        <button
          onClick={onTmapClick}
          className="flex flex-1 items-center justify-center gap-1 rounded-br-md rounded-tr-md border px-2 py-3 text-sm font-medium text-slate-700"
        >
          <img className="h-4 w-4" src="https://cdn2.makedear.com/homepage/img/icon/tmap1.png" />
          티맵
        </button>
      </div>
    </section>
  )
}
