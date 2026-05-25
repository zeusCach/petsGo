// Footer global con logo, links rápidos, redes sociales y copyright.

const quickLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Nosotros' },
  { href: '#pets', label: 'Mascotas' },
  { href: '#match', label: 'Encuentra tu Match' },
]

const socials = [
  { href: '#', label: 'Facebook', icon: 'f' },
  { href: '#', label: 'Instagram', icon: 'IG' },
  { href: '#', label: 'Twitter', icon: '𝕏' },
  { href: '#', label: 'TikTok', icon: 'TT' },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <span className="text-3xl" aria-hidden="true">🐾</span>
              <span>PetApp</span>
            </div>
            <p className="mt-3 text-sm text-neutral-400 max-w-xs">
              Conectamos mascotas con familias responsables. Cada hogar merece un compañero.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Enlaces</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Síguenos</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center text-sm font-bold transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-800 text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} PetApp. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
