import { Calendar } from "./calander"
import { FadeIn } from "./fade-in"

interface InviteTimeProps {}

export function InviteTime(props: InviteTimeProps) {
  return (
    <section className="mt-20 flex flex-col items-center px-5">
      <FadeIn delay={0.1} className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-light uppercase text-slate-500">Calendar</h2>
        <p className="text-center font-medium tracking-widest">
          따뜻한 봄의 시작을 알리는 3월, <br />
          재림과 소연의 결혼식으로 초대합니다.
        </p>
      </FadeIn>
      <FadeIn delay={0.15} className="mt-12 flex w-full max-w-[340px] flex-col items-center gap-2">
        <p className="font-medium text-stone-800">2024. 03. 09</p>
        <Calendar />
      </FadeIn>
    </section>
  )
}
