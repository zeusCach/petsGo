// Hook que maneja el estado del quiz, calcula el match y permite reiniciar.
import { useMemo, useState } from 'react'
import { questions, results } from '../data/questions'
import type { PetMatchResult, PetType } from '../types/match.types'

export function usePetMatch() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [finished, setFinished] = useState(false)

  const totalSteps = questions.length
  const currentQuestion = questions[step]
  const progress = Math.round(((step + (finished ? 1 : 0)) / totalSteps) * 100)

  const result: PetMatchResult | null = useMemo(() => {
    if (!finished) return null
    const totals: Record<PetType, number> = {
      'dog-active': 0,
      'dog-calm': 0,
      'cat': 0,
      'small-pet': 0,
    }
    for (const q of questions) {
      const selectedValue = answers[q.id]
      const option = q.options.find((o) => o.value === selectedValue)
      if (!option) continue
      for (const [petType, score] of Object.entries(option.score) as [PetType, number][]) {
        totals[petType] += score
      }
    }
    const winner = (Object.entries(totals) as [PetType, number][]).reduce((a, b) =>
      b[1] > a[1] ? b : a,
    )[0]
    return results[winner]
  }, [answers, finished])

  const answer = (optionValue: string) => {
    const updated = { ...answers, [currentQuestion.id]: optionValue }
    setAnswers(updated)
    if (step + 1 < totalSteps) {
      setStep(step + 1)
    } else {
      setFinished(true)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setFinished(false)
  }

  return {
    step,
    totalSteps,
    currentQuestion,
    progress,
    finished,
    result,
    answer,
    reset,
  }
}
