'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/music.mp3')
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio
  }, [])

  const toggleSound = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={toggleSound}
      className="relative px-3 py-2 text-sm font-medium font-cinzel hover:from-[#000000] hover:to-[#7A1000] rounded-full bg-gradient-to-b from-[#2f2f2f] to-[#000000] shadow-[0px_0px_12px_#A92000]"
    >
      <div className="absolute inset-0">
        <div className="rounded-full absolute inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-full absolute inset-0 border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(169,32,0,0.4)_inset] rounded-full"></div>
      </div>
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  )
}
