// Sección contenedora del quiz interactivo "Encuentra tu mascota ideal".
import { usePetMatch } from '../hooks/usePetMatch'
import { MatchResult } from './MatchResult'
import { QuizForm } from './QuizForm'

export function PetMatchSection() {
  const match = usePetMatch()

  return (
    <section
      id="match"
      className="py-20 lg:py-28 bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
            Quiz interactivo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Encuentra la mascota perfecta para ti
          </h2>
          <p className="mt-4 text-neutral-600">
            Responde 5 preguntas sobre tu estilo de vida y te recomendaremos al
            mejor compañero.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-primary-500/10 border border-neutral-100 p-6 sm:p-10">
          {match.finished && match.result ? (
            <MatchResult result={match.result} onReset={match.reset} />
          ) : (
            <QuizForm
              question={match.currentQuestion}
              step={match.step}
              totalSteps={match.totalSteps}
              progress={match.progress}
              onAnswer={match.answer}
            />
          )}
        </div>
      </div>
    </section>
  )
}
