import Image from "next/image"

import { Contact } from "@/components/contact"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import { FadeIn } from "./fade-in"

interface InviteYouProps {}

export function InviteYou(props: InviteYouProps) {
  return (
    <section className="relative mt-14 overflow-hidden">
      <div className="absolute -z-10 h-[1200px] w-[550px] -translate-x-[50px] bg-invite-you bg-contain bg-top bg-no-repeat"></div>
      <div className="mt-32 flex flex-col items-center bg-[#F6F4F4] px-5 pb-10">
        <FadeIn className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-light uppercase text-slate-500">Invite You</h2>
          <h2 className="text-xl font-bold">소중한 분들을 초대합니다</h2>
        </FadeIn>
        <FadeIn className="mt-12 flex flex-col gap-5 text-center">
          <p className="text-sm leading-relaxed tracking-wider">
            같은 생각, 같은 마음으로 <br />
            지혜롭게 살겠습니다.
          </p>
          <p className="text-sm leading-relaxed tracking-wider">
            저희 두 사람이 소중한 분들을 모시고
            <br />
            사랑의 결실을 이루려 합니다.
          </p>
          <p className="text-sm leading-relaxed tracking-wider">
            믿음과 사랑을 약속하는 귀한 날에
            <br />
            축복의 걸음을 하시어
          </p>
          <p className="text-sm leading-relaxed tracking-wider">
            저희의 하나 됨을
            <br /> 지켜보아 주시고 격려해 주시면
          </p>
          <p className="text-sm leading-relaxed tracking-wider">더 없는 기쁨으로 간직하겠습니다.</p>
        </FadeIn>
        <FadeIn className="mt-14 flex w-full items-center justify-around gap-2">
          <div className="relative w-full max-w-[140px] pt-[170px]">
            <Image
              className="rounded"
              src="/images/jaelim.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              alt=""
            />
          </div>
          <p className="text-stone-500">♥</p>
          <div className="relative w-full max-w-[140px] pt-[170px]">
            <Image
              className="rounded"
              src="/images/soyeon.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              alt=""
            />
          </div>
        </FadeIn>
        <FadeIn className="mt-14 w-full max-w-[260px] border-b border-t py-3 text-center">
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">이화영</span>&nbsp;·&nbsp;
            <span className="font-semibold">배정희</span> 의&nbsp;&nbsp;장남{" "}
            <span className="font-semibold">재림</span>
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">심재덕</span>&nbsp;·&nbsp;
            <span className="font-semibold">손보민</span> 의&nbsp;&nbsp;장녀{" "}
            <span className="font-semibold">소연</span>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
