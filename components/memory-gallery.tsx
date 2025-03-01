"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20200528-WA0018.jpg-SWQzQw48E40ova2HKPq2YAyWpapKRC.jpeg",
    alt: "Eugene in a patterned cloth",
    caption: "Eugene rocking his 'casual Friday' look",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20190130_072116069_BURST000_COVER.jpg-MOVus0zcvk4sRYYkZkXXl3OPpZaJln.jpeg",
    alt: "Eugene snuggled in a blanket",
    caption: "Blanket burrito mode: activated",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20171124_183307.jpg-9idTFZdmT1RhdAWiZOUA96nulLKSXn.jpeg",
    alt: "Eugene in a red sweater",
    caption: "Eugene judging your life choices",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240208_080951359.jpg-rxtignb7bQWSqIF7PEzJJGSh8uVfkX.jpeg",
    alt: "Eugene with family",
    caption: "Eugene tolerating human affection",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20171124_153921.jpg-9428rpHXjTuns0izutSriqMzuQ4PdL.jpeg",
    alt: "Eugene by the door",
    caption: "Eugene's 'I'm not a model, but I could be' pose",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230922_161129711.jpg-u1fMWWLFtK3DxxbQri5lnd7AD2zwPV.jpeg",
    alt: "Eugene cuddling",
    caption: "Eugene allowing the human to take a selfie",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20220428_130952948.jpg-cY5PrYRmQiVtJVdReh2eNhYxvEt8Cv.jpeg",
    alt: "Eugene in the kitchen",
    caption: "Eugene supervising meal prep: 'You're doing it wrong'",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20191201-WA0006.jpg-lK9NixED84HdcejDWMQM5m9LxWaJ8W.jpeg",
    alt: "Close-up of Eugene's face",
    caption: "The eyes that see into your soul (and judge accordingly)",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20231113_110833295.jpg-69thc8f8zG4sYdHj8s2jkDvHexMzaK.jpeg",
    alt: "Eugene in a festive red sweater",
    caption: "Holiday Eugene: Festive but still judging your decorations",
  },
]

export default function MemoryGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 border-2 border-gray-200",
              index === 0 && "md:col-span-2 md:row-span-2",
            )}
            onClick={() => setSelectedImage(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <p className="text-white text-sm p-3">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-none">
          {selectedImage !== null && (
            <div className="relative aspect-square sm:aspect-video w-full max-h-[80vh]">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <p className="text-white text-center">{images[selectedImage].caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

