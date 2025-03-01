import type { ReactNode } from "react"

interface MemoryCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function MemoryCard({ title, description, icon }: MemoryCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 transition-all hover:shadow-lg hover:translate-y-[-5px]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

