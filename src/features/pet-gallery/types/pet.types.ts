export type PetSpecies = 'dog' | 'cat' | 'other'

export interface Pet {
  id: string
  name: string
  species: PetSpecies
  breed: string
  age: string
  imageUrl: string
  description: string
}
