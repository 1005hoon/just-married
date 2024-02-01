/* eslint-disable @next/next/no-img-element */
"use client"

import { toast } from "sonner"

import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard"
import { useKakao } from "@/lib/use-kakao"

import { FadeIn } from "./fade-in"
import { NaverMap } from "./naver-map"

interface LocationProps {}

export function Location(props: LocationProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 3000 })
  useKakao()

  const onClick = () => {
    toast("주소를 복사했어요!")
    copyToClipboard("경기도 수원시 팔달구 월드컵로 310 (우만동 209)")
  }

  const onNaverClick = () => {
    window.open(
      "https://m.map.naver.com/appLink.naver?pinId=37590335&pinType=site&menu=location&appTargetPage=place&appSchemeName=nmap&mode=detail&id=37590335&app=Y&appmarket=N"
    )
  }

  const onKakakoClick = () => {
    window.Kakao.Navi.share({
      name: "WI컨벤션",
      x: 127.03636076924276,
      y: 37.286753351973466,
      coordType: "wgs84",
    })
  }

  const onTmapClick = () => {
    window.open("tmap://route?rGoX=127.03636076924276&rGoY=37.286753351973466&rGoName=WI컨벤션")
  }

  return (
    <section className="mt-20 flex flex-col items-center px-5">
      <FadeIn className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-light uppercase text-slate-500">Location</h2>
        <h2 className="text-xl font-bold">오시는 길</h2>
      </FadeIn>
      <FadeIn className="mt-8 flex w-full flex-col items-center gap-2">
        <p className="text-sm">WI컨벤션</p>
        <p onClick={onClick} className="text-sm tracking-tighter text-stone-600 underline underline-offset-2">
          경기도 수원시 팔달구 월드컵로 310 (우만동 209)
        </p>
        <p className="mt-3 text-sm tracking-tighter text-stone-600">Tel. 031-241-6000</p>
      </FadeIn>
      <div className="mt-6 flex h-[300px] w-full">
        <NaverMap />
      </div>
      <FadeIn className="mt-2 flex w-full justify-between font-gowunDodum">
        <button
          onClick={onNaverClick}
          className="flex flex-1 items-center justify-center gap-1 rounded-bl-md rounded-tl-md border px-2 py-3 text-sm font-medium text-slate-700"
        >
          <img
            alt="로고"
            className="h-4 w-4"
            src="https://cdn2.makedear.com/homepage/img/icon/navermap1.webp"
          />
          네이버 지도
        </button>
        <button
          onClick={onKakakoClick}
          className="flex flex-1 items-center justify-center gap-1 border px-2 py-3 text-sm font-medium text-slate-700"
        >
          <img
            alt="로고"
            className="h-4 w-4"
            src="https://cdn2.makedear.com/homepage/img/icon/kakaonavi1.png"
          />
          카카오내비
        </button>
        <button
          onClick={onTmapClick}
          className="flex flex-1 items-center justify-center gap-1 rounded-br-md rounded-tr-md border px-2 py-3 text-sm font-medium text-slate-700"
        >
          <img alt="로고" className="h-4 w-4" src="https://cdn2.makedear.com/homepage/img/icon/tmap1.png" />
          티맵
        </button>
      </FadeIn>

      <div className="mt-8 flex w-full flex-col gap-6 text-sm leading-relaxed text-[#676666]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 border-b py-2">
            <img className="h-7 w-7" src="images/bus-icon.png" alt="bus icon" />
            <p className="text-lg font-medium">버스</p>
          </div>
          <div>
            <p className="text-base font-semibold">수원월드컵경기장, 아름학교 하차</p>
            <li className="ml-1 marker:text-xs">
              수원역 1호선, 수인분당선 9번출구 150m직진 <br />{" "}
              <span className="ml-5 font-semibold">매산시장 버스정류장:</span> 13-4번
            </li>
          </div>
          <div>
            <p className="text-base font-semibold">수원월드컵경기장, 동성중학교 하차</p>
            <li className="ml-1 marker:text-xs">
              수원시청역 1번출구 180m 직진 <br />
              <span className="ml-5 font-semibold">국민연금공단, 경인일보 정류장:</span> 80번
            </li>
            <li className="ml-1 marker:text-xs">
              수원시청역 9번출구 94m 직진 <br />
              <span className="ml-5 font-semibold">국민연금공단 정류장:</span> 99-2번, 4000번, 4500번
            </li>
          </div>
          <li className="ml-1 marker:text-xs">
            <span className="font-semibold">수원터미널 정류장:</span>
            <br /> <span className="ml-5">80번, 3007번, 4000번, 4500번, 7001번, 8800번</span>
          </li>
          <li className="ml-1 marker:text-xs">
            <span className="font-semibold">서현역 AK플라자 정류장:</span> 720-1번
          </li>
          <div>
            <p className="text-base font-semibold">셔틀버스</p>
            <p>수원시청역(수인분당선) 9번출구 - 정시기준 약 20분간격</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 border-b py-2">
            <img className="h-7 w-7" src="images/car-icon.png" alt="car icon" />
            <p className="text-lg font-medium">자가용</p>
          </div>
          <div>
            <p className="text-base font-semibold">내비게이션:</p>
            <p>&quot;WI컨벤션&quot; &quot;수원월드컵경기장 4주차장 / 7주차장&quot; 입력</p>
          </div>
          <div>
            <p className="text-xs font-semibold">* 무료주차 2시간</p>
            <p className="text-xs">P6 주차장은 혼주전용입니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EC%9B%94%EB%93%9C%EC%BB%B5%EB%A1%9C%20310/address/14141684.6897483,4479121.2359553,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%ED%8C%94%EB%8B%AC%EA%B5%AC%20%EC%9B%94%EB%93%9C%EC%BB%B5%EB%A1%9C%20310,new?searchType=address&isCorrectAnswer=true&c=18.00,0,0,0,dh
