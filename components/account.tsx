"use client"

import { CopyIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Account = {
  label: string
  name: string
  bankName: string
  bankAccount: string
}

interface AccountProps {
  label: string
  accounts: Account[]
}

export function Account({ label, accounts }: AccountProps) {
  const { copyToClipboard } = useCopyToClipboard({ timeout: 3000 })

  const onClick = (text: string) => {
    toast("계좌정보를 복사했어요!")
    copyToClipboard(text)
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="border font-gowunDodum" value="item-1">
        <AccordionTrigger className="rounded-md bg-[#e2dcdc]/20 px-4 text-center  hover:no-underline">
          {label}
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          {accounts.map((account) => (
            <div className="flex justify-between border-b px-3.5 py-4" key={account.name}>
              <div className="flex flex-col gap-2">
                <p className="font-light">
                  {account.label} <span className="font-semibold">{account.name}</span>
                </p>
                <p className="font-light">
                  {account.bankName} <span className="font-semibold">{account.bankAccount}</span>
                </p>
              </div>
              <button
                onClick={() => onClick(account.bankAccount)}
                className="flex h-10 items-center justify-between gap-2 rounded-md bg-[#E2DCDC66] px-3 py-1"
              >
                <CopyIcon className="h-3 w-3" />
                복사
              </button>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
