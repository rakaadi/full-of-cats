import { CatCard, CatDesc } from "./Cat.styles"
import CatInfo from "./CatInfo.component"

import { Breed, ICat } from "../types";

export default function CatComponent({ cats }: ICat) {
    return (
        <>
            {
                cats.map(({ breeds, id, url }) => (
                    <CatCard key={id} >
                        <CatInfo cats={breeds} />
                        <img src={url} alt="A very cute cat" />
                        {
                            breeds.map((breed: Breed) => (
                                <CatDesc key={breed.id}>
                                    <h2>{breed.name}</h2>
                                    <p>{breed.description}</p>
                                </CatDesc>
                            ))
                        }
                    </CatCard>
                ))
            }
        </>
    )
}