// Formulario interactivo paso a paso del quiz de pet-match.
import type { QuizQuestion } from '../types/match.types'

interface QuizFormProps {
  question: QuizQuestion
  step: number
  totalSteps: number
  progress: number
  onAnswer: (value: string) => void
}

export function QuizForm({ question, step, totalSteps, progress, onAnswer }: QuizFormProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 text-sm text-neutral-500">
        <span>Pregunta {step + 1} de {totalSteps}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
        {question.question}
      </h3>

      <div className="grid gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onAnswer(opt.value)}
            className="text-left px-5 py-4 rounded-xl border-2 border-neutral-200 bg-white hover:border-primary-400 hover:bg-primary-50 transition-all duration-200 font-medium text-neutral-800"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
