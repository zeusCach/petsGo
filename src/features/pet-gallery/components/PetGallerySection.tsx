// Sección que agrupa los tres carruseles de mascotas por especie.
import { pets } from '../data/pets'
import { PetCarousel } from './PetCarousel'

export function PetGallerySection() {
  const dogs = pets.filter((p) => p.species === 'dog')
  const cats = pets.filter((p) => p.species === 'cat')
  const others = pets.filter((p) => p.species === 'other')

  return (
    <section id="pets" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Conócelos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Mascotas que buscan hogar
          </h2>
          <p className="mt-4 text-neutral-600">
            Desliza para conocer perros, gatos y otros peluditos esperando una familia.
          </p>
        </div>

        <div className="space-y-12">
          <PetCarousel title="🐶 Perros" pets={dogs} />
          <PetCarousel title="🐱 Gatos" pets={cats} />
          <PetCarousel title="🐰 Otros amigos" pets={others} />
        </div>
      </div>
    </section>
  )
}
