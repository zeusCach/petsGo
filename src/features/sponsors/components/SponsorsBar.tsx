// Banner horizontal con logos de patrocinadores en grid responsivo.
import { sponsors } from '../data/sponsors'

export function SponsorsBar() {
  return (
    <section id="sponsors" className="py-16 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-neutral-500 font-semibold">
            Con el respaldo de
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-neutral-900">
            Nuestros patrocinadores
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {sponsors.map((s) => (
            <div
              key={s.id}
              className="h-16 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <span className="text-sm font-bold text-neutral-600 tracking-tight">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
