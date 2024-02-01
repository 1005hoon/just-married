import { FadeIn } from "./fade-in"
import { GuestLog } from "./guest-log"

interface InviteLogProps {}

export function InviteLog(props: InviteLogProps) {
  return (
    <section className="relative mt-14 overflow-hidden">
      <div className="absolute -z-10 h-[1200px] w-[550px] -translate-x-[100px] bg-guest-log bg-contain bg-top bg-no-repeat"></div>
      <div className="mt-32 flex flex-col items-center pb-10">
        <FadeIn delay={0.1} className="flex flex-col items-center gap-2 px-5 ">
          <h2 className="text-sm font-light uppercase text-slate-500">Guest Log</h2>
          <h2 className="text-xl font-bold">방명록</h2>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-10 px-5 ">
          <p className="text-center text-sm leading-loose">
            신랑신부의 새로운 시작을 위해 <br />
            축하하는 마음을 담아주세요
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="w-full bg-[#F6F4F4] pb-10">
          <GuestLog />
        </FadeIn>
      </div>
    </section>
  )
}
