// Card individual de una mascota con imagen, nombre, raza y edad.
import type { Pet } from '../types/pet.types'

interface PetCardProps {
  pet: Pet
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <article className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-neutral-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 snap-start">
      <div className="aspect-square overflow-hidden bg-neutral-100">
        <img
          src={pet.imageUrl}
          alt={`${pet.name}, ${pet.breed}`}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-neutral-900">{pet.name}</h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary-50 text-primary-700">
            {pet.age}
          </span>
        </div>
        <p className="text-sm text-neutral-500 mb-2">{pet.breed}</p>
        <p className="text-sm text-neutral-600 line-clamp-2">{pet.description}</p>
      </div>
    </article>
  )
}
