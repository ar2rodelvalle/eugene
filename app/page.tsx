import Image from "next/image"
import { Heart, PawPrintIcon, Star, Award, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import MemoryGallery from "@/components/memory-gallery"
import VideoPlayer from "@/components/video-player"
import Timeline from "@/components/timeline"
import MemoryCard from "@/components/memory-card"
import PawprintLoader from "@/components/pawprint-loader"

export default function EugeneTribute() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Large Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20171124_183307.jpg-9idTFZdmT1RhdAWiZOUA96nulLKSXn.jpeg"
            alt="Eugene the Chihuahua"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">Eugene</h1>
            <p className="text-xl text-gray-300 mb-6 italic">"Small but Mighty"</p>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Four pounds of attitude wrapped in a fur coat with ears. Eugene wasn't just a dog, he was a legend.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20171124_183307.jpg-9idTFZdmT1RhdAWiZOUA96nulLKSXn.jpeg"
                alt="Eugene the Chihuahua"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <PawprintLoader />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">The Legend of Eugene</h2>
            <p className="text-lg text-gray-700 mb-8">
              Eugene was 12 years of sass and sweetness packed into a tiny, adorable package. He firmly believed he was
              a 100-pound guard dog trapped in a chihuahua's body, and no one could convince him otherwise.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black text-white">
                <Heart className="w-4 h-4 mr-1" /> Loving
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black text-white">
                <PawPrintIcon className="w-4 h-4 mr-1" /> Fierce
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black text-white">
                <Coffee className="w-4 h-4 mr-1" /> Sassy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Eugene's Greatest Hits</h2>
          <MemoryGallery />
        </div>
      </section>

      {/* Video Memories */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Eugene in Action</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Eugene's personality was too big to be captured in still images alone. Here he is, showing off his
              signature moves.
            </p>
            <VideoPlayer />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">The Eugene Chronicles</h2>
          <Timeline />
        </div>
      </section>

      {/* Personality Traits */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">The Many Moods of Eugene</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <MemoryCard
              title="The Tiny Bodyguard"
              description="Eugene took home security very seriously. Squirrels, mail carriers, and leaves blowing in the wind all received the same high-decibel warning. His bark-to-body-size ratio was truly impressive."
              icon={<Award className="h-10 w-10 text-gray-800" />}
            />
            <MemoryCard
              title="The Fashion Icon"
              description="Eugene rocked his sweater collection with the confidence of a runway model. He knew the red ones made his eyes pop, and he wasn't afraid to work it. Doggy Vogue missed out on their best cover model."
              icon={<Star className="h-10 w-10 text-gray-800" />}
            />
            <MemoryCard
              title="The Blanket Ninja"
              description="Eugene could burrow under a blanket faster than you could say 'where's the dog?' His ability to create the perfect nest was unmatched. Sometimes all you could see was a tiny snout poking out for air."
              icon={<Heart className="h-10 w-10 text-gray-800" />}
            />
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Things Eugene Would Say</h2>
            <div className="space-y-8">
              <blockquote className="italic text-xl">"I may be small, but my attitude is XL. Deal with it."</blockquote>
              <blockquote className="italic text-xl">
                "That delivery guy? Yeah, I scared him off. You're welcome."
              </blockquote>
              <blockquote className="italic text-xl">
                "I'm not shaking because I'm cold. I'm shaking because I'm so full of rage."
              </blockquote>
              <blockquote className="italic text-xl">
                "Yes, I need all these sweaters. It's called fashion, look it up."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Share a Memory */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Share Your Eugene Story</h2>
            <p className="text-lg text-gray-700 mb-8">Got a funny Eugene memory? We'd love to hear it!</p>
            <Button className="bg-black hover:bg-gray-800 text-white">Share a Memory</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container px-4 md:px-6 text-center">
          <p className="mb-2">Eugene: The legend, the myth, the tiny terror</p>
          <p className="text-sm opacity-75">Forever making us smile</p>
        </div>
      </footer>
    </div>
  )
}

