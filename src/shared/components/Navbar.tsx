// Barra de navegación principal con logo, links y menú hamburguesa responsive.
import { useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#pets', label: 'Mascotas' },
  { href: '#match', label: 'Encuentra tu Match' },
  { href: '#sponsors', label: 'Patrocinadores' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 text-2xl font-bold text-primary-600">
            <span className="text-3xl" aria-hidden="true">🐾</span>
            <span>PetsGo</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <ul className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-neutral-700 hover:bg-primary-50 hover:text-primary-600 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
