// Sección "Sobre Nosotros": misión y valores de PetApp en cards.

const values = [
  {
    icon: '❤️',
    title: 'Amor incondicional',
    text: 'Promovemos vínculos duraderos basados en respeto, cuidado y compañía mutua.',
  },
  {
    icon: '🛡️',
    title: 'Responsabilidad',
    text: 'Educamos sobre lo que implica adoptar: tiempo, salud y compromiso a largo plazo.',
  },
  {
    icon: '🤝',
    title: 'Comunidad',
    text: 'Tejemos una red de refugios, voluntarios y familias que creen en una segunda oportunidad.',
  },
  {
    icon: '✨',
    title: 'Match perfecto',
    text: 'Usamos tu estilo de vida para sugerir mascotas que realmente encajen contigo.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
            Sobre PetApp
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Una plataforma con propósito
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            Creemos que adoptar es un acto de amor que cambia dos vidas: la de
            la mascota y la tuya. Nuestra misión es hacer que ese encuentro sea
            informado, consciente y para siempre.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <article
              key={v.title}
              className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3" aria-hidden="true">{v.icon}</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{v.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
