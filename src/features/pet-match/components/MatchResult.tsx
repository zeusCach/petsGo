// Resultado final del quiz: muestra el tipo de mascota recomendada.
import { Button } from '../../../shared/components/Button'
import type { PetMatchResult } from '../types/match.types'

interface MatchResultProps {
  result: PetMatchResult
  onReset: () => void
}

export function MatchResult({ result, onReset }: MatchResultProps) {
  return (
    <div className="text-center">
      <div className="text-7xl mb-4" aria-hidden="true">{result.emoji}</div>
      <p className="text-sm font-semibold text-primary-600 mb-1 uppercase tracking-wide">
        Tu match ideal
      </p>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
        {result.title}
      </h3>
      <p className="text-lg text-neutral-600 max-w-xl mx-auto mb-6">
        {result.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {result.examples.map((ex) => (
          <span
            key={ex}
            className="px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium"
          >
            {ex}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={() => document.getElementById('pets')?.scrollIntoView({ behavior: 'smooth' })}>
          Ver mascotas disponibles
        </Button>
        <Button variant="ghost" onClick={onReset}>
          Volver a tomar el quiz
        </Button>
      </div>
    </div>
  )
}
