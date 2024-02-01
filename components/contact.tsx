import Image from "next/image"

import { FaPhoneAlt } from "react-icons/fa"
import { IoMail } from "react-icons/io5"

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <DialogContent className="max-w-xs rounded p-0">
      <header className="bg-[#E2DCDC] py-2">
        <p className="text-center text-xs">소중한 마음을 전화로 전해주세요</p>
      </header>
      <div className="flex h-full w-full items-center justify-between px-4 pb-5">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-28 pt-28">
            <Image className="rounded-full object-cover" src="/images/contact-1.png" fill alt="" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-center text-sm text-[#3F3838]">신랑 이재림</p>
            <div className="flex gap-2">
              <FaPhoneAlt className="text-sm text-[#3f3838]" />
              <IoMail className="text-[#3f3838]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-28 pt-28">
            <Image className="rounded-full object-cover" src="/images/contact-2.png" fill alt="" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-center text-sm text-[#3F3838]">신부 김소연</p>
            <div className="flex gap-2">
              <FaPhoneAlt className="text-sm text-[#3f3838]" />
              <IoMail className="text-[#3f3838]" />
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
