export type LayoutProps = {
    title: string,
    children: React.ReactNode
}

export type Breed = {
    name: string,
    origin: string,
    temperament: string,
    description: string,
    life_span: string,
    id: string,
    weight: { metric: string },
    wikipedia_url: string
}

export interface IBreeds {
    cats: Breed[]
}

export type cat = {
    breeds: Breed[],
    id: string,
    url: string
}

export interface ICat {
    cats: cat[]
}

export type SearchProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}