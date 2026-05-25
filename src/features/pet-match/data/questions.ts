import type { PetMatchResult, QuizQuestion } from '../types/match.types'

export const questions: QuizQuestion[] = [
  {
    id: 'space',
    question: '¿Cuánto espacio tienes en casa?',
    options: [
      { label: 'Departamento pequeño', value: 'small', score: { 'cat': 3, 'small-pet': 3, 'dog-calm': 1 } },
      { label: 'Casa con jardín', value: 'medium', score: { 'dog-calm': 3, 'dog-active': 2, 'cat': 2 } },
      { label: 'Rancho o terreno amplio', value: 'large', score: { 'dog-active': 4, 'dog-calm': 2 } },
    ],
  },
  {
    id: 'time',
    question: '¿Cuántas horas al día pasas en casa?',
    options: [
      { label: 'Poco (menos de 4h)', value: 'low', score: { 'cat': 3, 'small-pet': 3 } },
      { label: 'Medio (4 - 8h)', value: 'mid', score: { 'dog-calm': 2, 'cat': 2, 'small-pet': 2 } },
      { label: 'Mucho (más de 8h)', value: 'high', score: { 'dog-active': 3, 'dog-calm': 3 } },
    ],
  },
  {
    id: 'activity',
    question: '¿Cuál es tu nivel de actividad física?',
    options: [
      { label: 'Sedentario', value: 'low', score: { 'cat': 3, 'small-pet': 3, 'dog-calm': 1 } },
      { label: 'Activo', value: 'mid', score: { 'dog-calm': 3, 'dog-active': 2 } },
      { label: 'Muy activo', value: 'high', score: { 'dog-active': 4 } },
    ],
  },
  {
    id: 'experience',
    question: '¿Tienes experiencia previa con mascotas?',
    options: [
      { label: 'Primera vez', value: 'none', score: { 'cat': 2, 'small-pet': 3, 'dog-calm': 1 } },
      { label: 'Algo de experiencia', value: 'some', score: { 'dog-calm': 2, 'cat': 2, 'dog-active': 1 } },
      { label: 'Mucha experiencia', value: 'lots', score: { 'dog-active': 3, 'dog-calm': 2 } },
    ],
  },
  {
    id: 'size',
    question: '¿Qué tamaño de mascota prefieres?',
    options: [
      { label: 'Pequeño', value: 'small', score: { 'small-pet': 3, 'cat': 2 } },
      { label: 'Mediano', value: 'mid', score: { 'dog-calm': 3, 'cat': 1 } },
      { label: 'Grande', value: 'large', score: { 'dog-active': 4 } },
    ],
  },
]

export const results: Record<string, PetMatchResult> = {
  'dog-active': {
    type: 'dog-active',
    title: 'Perro enérgico',
    emoji: '🐕‍🦺',
    description: 'Eres ideal para un perro mediano o grande, activo y aventurero. Razas como Labradores, Pastores o mestizos atléticos son perfectos para ti.',
    examples: ['Labrador', 'Pastor Alemán', 'Border Collie'],
  },
  'dog-calm': {
    type: 'dog-calm',
    title: 'Perro tranquilo',
    emoji: '🐶',
    description: 'Un compañero leal y relajado encaja contigo. Bulldogs, Beagles o adultos rescatados te ofrecerán cariño sin demandar tanto ejercicio.',
    examples: ['Bulldog', 'Beagle', 'Mestizo adulto'],
  },
  'cat': {
    type: 'cat',
    title: 'Gato independiente',
    emoji: '🐱',
    description: 'Un gato es el match perfecto: cariñoso pero independiente, adaptable a espacios pequeños y compatible con tu ritmo.',
    examples: ['Doméstico', 'Siamés', 'Persa'],
  },
  'small-pet': {
    type: 'small-pet',
    title: 'Pequeño compañero',
    emoji: '🐰',
    description: 'Una mascota pequeña como un conejo, cobaya o erizo es ideal: bajo mantenimiento, espacio reducido y muy tiernos.',
    examples: ['Conejo', 'Cobaya', 'Erizo'],
  },
}
