// Componente raíz: compone el orden de la landing page.
import { AboutSection } from '../features/about'
import { HeroSection } from '../features/hero'
import { PetGallerySection } from '../features/pet-gallery'
import { PetMatchSection } from '../features/pet-match'
import { SponsorsBar } from '../features/sponsors'
import { Footer } from '../shared/components/Footer'
import { Navbar } from '../shared/components/Navbar'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PetGallerySection />
        <PetMatchSection />
        <SponsorsBar />
      </main>
      <Footer />
    </div>
  )
}
