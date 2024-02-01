import { Account } from "./account"
import { FadeIn } from "./fade-in"

interface InviteMoneyProps {}

export function InviteMoney(props: InviteMoneyProps) {
  return (
    <section className="mt-20 flex flex-col gap-2 px-5">
      <FadeIn className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-light uppercase text-slate-500">Account</h2>
        <h2 className="text-xl font-bold">마음 전하실 곳</h2>
      </FadeIn>
      <FadeIn className="mt-7">
        <p className="text-center text-sm leading-loose">
          저희 두 사람의 행복한 첫 시작을 <br />
          함께 축하해주셔서 감사합니다. <br />
          전해주시는 소중한 마음을 감사히 간직하며
          <br /> 좋은 부부로 살아가겠습니다.
        </p>
      </FadeIn>
      <FadeIn className="mt-7 flex w-full flex-col gap-4">
        <Account
          label="신랑측"
          accounts={[
            { label: "신랑", name: "이재림", bankName: "신한은행", bankAccount: "110-358-437995" },
            { label: "아버지", name: "이화형", bankName: "농협은행", bankAccount: "235039-56-102237" },
            { label: "어머니", name: "배정희", bankName: "농협은행", bankAccount: "235039-56-092617" },
          ]}
        />
        <Account
          label="신부측"
          accounts={[
            { label: "신부", name: "김소연", bankName: "우리은행", bankAccount: "1002-343-023913" },
            { label: "아버지", name: "심재덕", bankName: "농협은행", bankAccount: "302-0473-3824-11" },
            { label: "어머니", name: "손보민", bankName: "농협은행", bankAccount: "303812-52-000121" },
          ]}
        />
      </FadeIn>
    </section>
  )
}
