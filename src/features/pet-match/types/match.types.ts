export type PetType = 'dog-active' | 'dog-calm' | 'cat' | 'small-pet'

export interface QuizOption {
  label: string
  value: string
  score: Partial<Record<PetType, number>>
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

export interface PetMatchResult {
  type: PetType
  title: string
  emoji: string
  description: string
  examples: string[]
}
