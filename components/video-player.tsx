"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleProgressChange = (value: number[]) => {
    if (videoRef.current) {
      const newTime = (value[0] / 100) * videoRef.current.duration
      videoRef.current.currentTime = newTime
      setProgress(value[0])
    }
  }

  return (
    <div className="rounded-lg overflow-hidden bg-black shadow-xl border border-gray-300">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full aspect-video"
          poster="/placeholder.svg?height=720&width=1280"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0053-wxewEH5dWgSzagZBKzDqYoQ0HlLGej.MP4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30"
              onClick={togglePlay}
            >
              <Play className="h-8 w-8 text-white" />
            </Button>
          </div>
        )}
      </div>

      <div className="bg-gray-900 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={togglePlay}>
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          <div className="flex-1 px-2">
            <Slider
              value={[progress]}
              max={100}
              step={0.1}
              onValueChange={handleProgressChange}
              className="cursor-pointer"
            />
          </div>

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={toggleMute}>
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>
        <p className="text-white/80 text-sm">Eugene showing off his intimidation tactics</p>
      </div>
    </div>
  )
}

