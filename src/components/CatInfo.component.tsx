import { useState } from "react"

import { InfoButton, CatDetails } from "./CatInfo.styles"

import { IBreeds } from "../types"

export default function CatInfo({ cats }: IBreeds) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <InfoButton onClick={() => setOpen(!open)}><i className="fas fa-info-circle"></i></InfoButton>
            {
                cats.map(cat => (
                    <CatDetails key={cat.id} open={open} onClick={() => setOpen(!open)}>
                        <p>{cat.name}</p>
                        <p>Origin: {cat.origin}</p>
                        <p>Approx weight: {cat.weight.metric} Kg</p>
                        <p>Life span: {cat.life_span} Years</p>
                        <p>Temperament: </p>
                        <span>{cat.temperament}</span>
                        <a href={cat.wikipedia_url} target="_blank">
                            <i className="fab fa-wikipedia-w"></i>ikipedia Page
                        </a>
                    </CatDetails>
                ))
            }
        </>
    )
}