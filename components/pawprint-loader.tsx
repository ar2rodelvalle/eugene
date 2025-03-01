"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PawPrint } from "lucide-react"

export default function PawprintLoader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-16 w-full">
      {/* Small paw prints walking across */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: loaded ? "100%" : -100, opacity: loaded ? 1 : 0 }}
        transition={{ duration: 4, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-0 left-0 flex items-center space-x-4"
      >
        <PawPrint className="h-4 w-4 text-white transform rotate-45" />
        <PawPrint className="h-4 w-4 text-white transform rotate-45" />
        <PawPrint className="h-4 w-4 text-white transform rotate-45" />
        <PawPrint className="h-4 w-4 text-white transform rotate-45" />
      </motion.div>
    </div>
  )
}

