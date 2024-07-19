"use client"

import { useEffect, useState } from "react"

interface GuestLogProps {}

interface Log {
  id: string
  name: string
  content: string
  created_at: Date | string
}

export function GuestLog(props: GuestLogProps) {
  const [loading, setLoading] = useState(false)
  const [logs, setLogs] = useState<Log[]>([])
  const [log, setLog] = useState({ name: "", content: "" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const response = await fetch("/api/logs", { method: "POST", body: JSON.stringify(log) })
    const { data } = await response.json()

    setLogs(() => [...data])
    setLog({ name: "", content: "" })
    setLoading(false)
  }

  useEffect(() => {
    async function fetchLogs() {
      const response = await fetch("/logs.json")
      const data = await response.json()

      setLogs(data)
    }

    fetchLogs()
  }, [])

  return (
    <div className="px-5">
      <form onSubmit={handleSubmit} className="mt-10 flex w-full flex-col gap-2">
        <input
          autoComplete="off"
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
          disabled={!log.name || !log.content || loading}
          className="w-full rounded-md bg-[#dd9292] p-4 font-gowunDodum font-bold text-white disabled:opacity-60"
        >
          작성하기
        </button>
      </form>
      <div className="mt-4 flex w-full flex-col gap-2 font-gowunDodum">
        {logs.map((log) => (
          <div className="max-h-[140px] space-y-4 overflow-y-scroll rounded bg-white p-4" key={log.id}>
            <div className="flex justify-between">
              <h2 className="truncate text-sm font-semibold">{log.name}</h2>
              <p className="text-xs text-muted-foreground">{formatDate(log.created_at.toString())}</p>
            </div>
            <p>{log.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0") // getMonth() returns 0-11
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}.${month}.${day}`
}
