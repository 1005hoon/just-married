"use client"

import { useEffect, useRef, useState } from "react"

interface MusicPlayerProps {}

export function MusicPlayer(props: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current === null) {
        return
      }

      if (!isPlaying) {
        audioRef.current.play()
        setIsPlaying(true)
        // Remove event listener after playing
        window.removeEventListener("scroll", startAudio)
      }
    }

    window.addEventListener("scroll", startAudio)

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", startAudio)
    }
  }, [isPlaying])

  return <audio ref={audioRef} loop src="https://cdn2.makedear.com/bgms/X9b4yqbh3v.mp3" playsInline></audio>
}
