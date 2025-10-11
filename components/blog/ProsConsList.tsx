import { Check, X } from 'lucide-react'

interface ProsConsListProps {
  pros: string[]
  cons: string[]
}

export default function ProsConsList({ pros, cons }: ProsConsListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {/* Pros */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
          <Check className="h-5 w-5" />
          Pros
        </h3>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-700">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
          <X className="h-5 w-5" />
          Cons
        </h3>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-3">
              <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-700">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
