import Image from "next/image"

import { Account } from "@/components/account"
import { Calendar } from "@/components/calander"
import { Contact } from "@/components/contact"
import { GuestLog } from "@/components/guest-log"
import { ImageGallery } from "@/components/image-gallery"
import { Location } from "@/components/location"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[440px] font-notoSerif">
      <audio autoPlay loop src="https://cdn2.makedear.com/bgms/X9b4yqbh3v.mp3" playsInline></audio>
      <section className="mt-14 flex flex-col items-center px-5">
        <h2 className="font-semibold uppercase tracking-[2px]">Wedding Invitation</h2>
        <div className="mt-7 flex w-full justify-center gap-7 text-lg font-medium">
          <p>재림</p>
          <p>♥</p>
          <p>소연</p>
        </div>
        <div className="relative mx-auto mt-5 w-full max-w-[320px] pt-[453px]">
          <Image src="/images/main-photo.png" fill alt="재림 소연 결혼식에 초대합니다" />
        </div>
        <div className="mt-7 flex flex-col items-center gap-2">
          <p className="text-sm font-medium tracking-tight text-foreground">
            2024. 03. 09 토요일 오후 1시 30분
          </p>
          <p className="text-sm font-medium tracking-tight text-foreground">WI컨벤션 1층 I홀</p>
        </div>
      </section>
      <section className="relative mt-14 overflow-hidden">
        <div className="absolute -z-10 h-[1200px] w-[550px] -translate-x-[50px] bg-invite-you bg-contain bg-top bg-no-repeat"></div>
        <div className="mt-32 flex flex-col items-center bg-[#F6F4F4] px-5 pb-10">
          <header className="flex flex-col items-center gap-2">
            <h2 className="text-sm font-light uppercase text-slate-500">Invite You</h2>
            <h2 className="text-xl font-bold">소중한 분들을 초대합니다</h2>
          </header>
          <div className="mt-12 flex flex-col gap-5 text-center">
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
          </div>
          <div className="mt-14 flex w-full items-center justify-around gap-2">
            <div className="relative w-full max-w-[140px] pt-[170px]">
              <Image className="rounded" src="/images/jaelim.png" fill alt="" />
            </div>
            <p className="text-stone-500">♥</p>
            <div className="relative w-full max-w-[140px] pt-[170px]">
              <Image className="rounded" src="/images/soyeon.png" fill alt="" />
            </div>
          </div>
          <div className="mt-14 w-full max-w-[260px] border-b border-t py-3 text-center">
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
          </div>
          <div className="mt-14 w-full max-w-[260px]">
            <Dialog>
              <DialogTrigger className="w-full rounded-full border border-[#463e3e/60] py-2 text-sm font-medium text-[#5e5454]">
                연락하기
              </DialogTrigger>
              <Contact />
            </Dialog>
          </div>
        </div>
      </section>
      <section className="mt-14 flex flex-col items-center px-5">
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-light uppercase text-slate-500">Gallery</h2>
          <h2 className="text-xl font-bold">웨딩 갤러리</h2>
        </header>
        <div className="mt-10 w-full">
          <ImageGallery />
        </div>
      </section>
      <section className="mt-20 flex flex-col items-center px-5">
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-light uppercase text-slate-500">Calendar</h2>
          <p className="text-center font-medium tracking-widest">
            따뜻한 봄의 시작을 알리는 3월, <br />
            재림과 소연의 결혼식으로 초대합니다.
          </p>
        </header>
        <div className="mt-12 flex w-full max-w-[340px] flex-col items-center gap-2">
          <p className="font-medium text-stone-800">2024. 03. 09.</p>
          <Calendar />
        </div>
      </section>
      <Location />
      <section className="mt-7 flex flex-col gap-2 px-5"></section>
      <section className="mt-20 flex flex-col gap-2 px-5">
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-light uppercase text-slate-500">Account</h2>
          <h2 className="text-xl font-bold">마음 전하실 곳</h2>
        </header>
        <div className="mt-7">
          <p className="text-center text-sm leading-loose">
            저희 두 사람의 행복한 첫 시작을 <br />
            함께 축하해주셔서 감사합니다. <br />
            전해주시는 소중한 마음을 감사히 간직하며
            <br /> 좋은 부부로 살아가겠습니다.
          </p>
        </div>
        <div className="mt-7 flex w-full flex-col gap-4">
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
        </div>
      </section>
      <section className="relative mt-14 overflow-hidden">
        <div className="absolute -z-10 h-[1200px] w-[550px] -translate-x-[50px] bg-invite-you bg-contain bg-top bg-no-repeat"></div>
        <div className="mt-32 flex flex-col items-center bg-[#F6F4F4] px-5 pb-10">
          <header className="flex flex-col items-center gap-2">
            <h2 className="text-sm font-light uppercase text-slate-500">Guest Log</h2>
            <h2 className="text-xl font-bold">방명록</h2>
          </header>
          <div className="mt-10">
            <p className="text-center text-sm leading-loose">
              신랑신부의 새로운 시작을 위해 <br />
              축하하는 마음을 담아주세요
            </p>
          </div>
          <GuestLog />
        </div>
      </section>
      <Toaster />
    </main>
  )
}
