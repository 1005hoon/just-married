import { Account } from "@/components/account"
import { Calendar } from "@/components/calander"
import { Gallery } from "@/components/gallery"
import { GuestLog } from "@/components/guest-log"
import { ImageGallery } from "@/components/image-gallery"
import { Invitation } from "@/components/invitation"
import { InviteLog } from "@/components/invite-log"
import { InviteMoney } from "@/components/invite-money"
import { InviteTime } from "@/components/invite-time"
import { InviteYou } from "@/components/invite-you"
import { Location } from "@/components/location"
import { MusicPlayer } from "@/components/music-player"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[440px] font-notoSerif">
      <MusicPlayer />
      <Invitation />
      <InviteYou />
      <Gallery />
      <InviteTime />
      <Location />
      <section className="mt-7 flex flex-col gap-2 px-5"></section>
      <InviteMoney />
      <InviteLog />
      <Toaster />
    </main>
  )
}
