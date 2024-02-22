import Image from "next/image"

import inviteImg from "@/public/images/main-photo.png"

import { FadeIn } from "./fade-in"

interface InvitationProps {}

export function Invitation(props: InvitationProps) {
  return (
    <section className="mt-14 flex flex-col items-center px-5">
      <FadeIn>
        <h2 className="font-semibold uppercase tracking-[2px]">Wedding Invitation</h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="mt-7 flex w-full justify-center gap-7 text-lg font-medium">
          <p>재림</p>
          <p>♥</p>
          <p>소연</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.2} className="relative mx-auto mt-5 w-full max-w-[320px] pt-[453px]">
        <Image
          priority
          src="/images/main-photo.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="재림 소연 결혼식에 초대합니다"
        />
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="mt-7 flex flex-col items-center gap-2">
          <p className="text-sm font-medium tracking-tight text-foreground">
            2024. 03. 09 토요일 오후 1시 30분
          </p>
          <p className="text-sm font-medium tracking-tight text-foreground">WI컨벤션 1층 I홀</p>
        </div>
      </FadeIn>
    </section>
  )
}
