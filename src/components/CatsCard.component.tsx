import { ICat } from "../types"

import { CardsContainer, CatCard, CatDesc } from "./CatsCard.styles"

export default function CatsCard({ cats }: ICat) {
    return (
        <CardsContainer>
            {
                cats.map((cat) => (
                    <CatCard key={cat.id}>
                        <img src={cat.url} alt="A very cute cat" />
                        {
                            cat.breeds.map(breed => (
                                <CatDesc key={breed.id}>
                                    <h2>{breed.name}</h2>
                                    <p>{breed.description}</p>
                                </CatDesc>
                            ))
                        }
                    </CatCard>
                ))
            }
        </CardsContainer>
    )
}