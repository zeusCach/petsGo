// Sección principal de la landing: título, misión, CTA e imagen de fondo.
import { Button } from '../../../shared/components/Button'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-80 h-80 bg-primary-300 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-secondary-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-5">
            🐾 Adopta. Ama. Transforma.
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-tight">
            Cada mascota merece <span className="text-primary-600">un hogar</span>.
            Cada hogar merece <span className="text-secondary-600">un amigo</span>.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-xl">
            En PetApp conectamos a mascotas que buscan familia con personas
            listas para abrir sus puertas y corazones. Encuentra a tu compañero
            ideal según tu estilo de vida.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={() => document.getElementById('match')?.scrollIntoView({ behavior: 'smooth' })}>
              Encuentra tu compañero ideal →
            </Button>
            <Button variant="ghost" size="lg" onClick={() => document.getElementById('pets')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver mascotas disponibles
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-600">
            <div>
              <div className="text-2xl font-bold text-neutral-900">+2,500</div>
              <div>Mascotas adoptadas</div>
            </div>
            <div className="h-10 w-px bg-neutral-300" />
            <div>
              <div className="text-2xl font-bold text-neutral-900">+180</div>
              <div>Familias felices</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-500/20 rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80"
              alt="Perro y gato juntos esperando ser adoptados"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
            <div className="text-3xl">❤️</div>
            <div className="text-sm">
              <div className="font-bold text-neutral-900">Adopción responsable</div>
              <div className="text-neutral-500">Para toda la vida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
