"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

interface GuestLogProps {}

export function GuestLog(props: GuestLogProps) {
  const [log, setLog] = useState({ name: "", content: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert(JSON.stringify(log))
  }
  return (
    <form onSubmit={handleSubmit} className="mt-10 flex w-full flex-col gap-2">
      <input
        name="name"
        value={log.name}
        onChange={(e) => setLog((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
        className="p-4 font-gowunDodum focus:outline-none"
        placeholder="이름"
        type="text"
      />
      <textarea
        name="content"
        value={log.content}
        onChange={(e) => setLog((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
        className="resize-none p-4 font-gowunDodum focus:outline-none"
        placeholder="전하는 말"
        rows={6}
      />
      <button
        type="submit"
        disabled={!log.name || !log.content}
        className="w-full rounded-md bg-[#dd9292] p-4 font-gowunDodum font-bold text-white disabled:opacity-60"
      >
        작성하기
      </button>
    </form>
  )
}
