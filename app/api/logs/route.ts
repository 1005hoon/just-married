import fs from "fs/promises"
import path from "path"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const json = await request.json()
  const log = { ...json, created_at: new Date().toISOString(), id: Math.random().toString(36).substr(2, 9) }

  try {
    const filePath = path.join(process.cwd(), "/public/logs.json")
    const logs = JSON.parse(await fs.readFile(filePath, "utf-8"))
    logs.push(log)

    await fs.writeFile(filePath, JSON.stringify(logs, null, 2))

    return NextResponse.json({
      data: logs,
      error: null,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      data: null,
      error: (error as Error).message || "서버 오류가 발생했어요",
    })
  }
}
