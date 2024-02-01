"use client"

import { FaShareAlt } from "react-icons/fa"

interface CopyUrlProps {}

export function CopyUrl(props: CopyUrlProps) {
  const handleCopy = () => {
    window.Kakao.Share.sendCustom({
      templateId: 103854,
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="fixed bottom-2 right-2 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-stone-700/70 p-3 font-mono text-xs text-white "
    >
      <FaShareAlt />
    </button>
  )
}
