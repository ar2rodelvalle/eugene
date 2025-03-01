import { CalendarDays } from "lucide-react"

const timelineEvents = [
  {
    year: "2011",
    title: "The Arrival",
    description:
      "Eugene made his grand entrance into the family. At just a few ounces, he already had the attitude of a Doberman.",
  },
  {
    year: "2012",
    title: "Road Trip Warrior",
    description:
      "Eugene discovered his love for car rides, as long as he got the window seat. His travel pillow was non-negotiable.",
  },
  {
    year: "2014",
    title: "The Great Escape",
    description:
      "Eugene executed a perfect prison break by figuring out how to open the back gate. He was found sunbathing in the yard, completely unbothered.",
  },
  {
    year: "2016",
    title: "Fashion Revolution",
    description:
      "Eugene's sweater collection began to rival most human wardrobes. He refused to go outside without proper attire.",
  },
  {
    year: "2019",
    title: "Security Chief",
    description:
      "Eugene was unanimously elected Head of Neighborhood Security. His resume included barking at leaves, squirrels, and the occasional cloud.",
  },
  {
    year: "2022",
    title: "Blanket Connoisseur",
    description:
      "Eugene perfected the art of the blanket burrito, requiring at least three blankets at all times for optimal comfort.",
  },
]

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        {/* Timeline events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              <div className={`flex items-center mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1 md:px-8">
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 ${index % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    <div className="flex items-center mb-2 gap-2 text-gray-700">
                      <CalendarDays className="h-5 w-5" />
                      <span className="font-bold">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-black rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

