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
    breeds: Breed[]
}

export interface ICat {
    cats: [
        {
            breeds: Breed[],
            id: string,
            url: string
        }
    ]
}
