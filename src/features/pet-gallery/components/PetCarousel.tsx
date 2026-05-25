// Carrusel horizontal con scroll suave y botones de navegación.
import { useRef } from 'react'
import type { Pet } from '../types/pet.types'
import { PetCard } from './PetCard'

interface PetCarouselProps {
  title: string
  pets: Pet[]
}

export function PetCarousel({ title, pets }: PetCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="flex items-end justify-between mb-5">
        <h3 className="text-2xl font-bold text-neutral-900">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={`Anterior en ${title}`}
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white border border-neutral-200 hover:bg-primary-50 hover:border-primary-300 flex items-center justify-center text-neutral-700 transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label={`Siguiente en ${title}`}
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white border border-neutral-200 hover:bg-primary-50 hover:border-primary-300 flex items-center justify-center text-neutral-700 transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-3 -mx-4 px-4"
      >
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  )
}
