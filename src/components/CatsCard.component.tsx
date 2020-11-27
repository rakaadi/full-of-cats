import { useState } from "react"
import { CardsContainer } from "./CatsCard.styles"
import SearchBar from "./SearchBar.component"
import CatComponent from "./Cat.component"

import { cat, ICat } from "../types"

export default function CatsCard({ cats }: ICat) {
    const [words, setWords] = useState<string>("")
    const [catBreed] = useState(cats)
    const [filterDisplay, setFilterDisplay] = useState<cat[] | any[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWords(event.target.value)
        let filtered = catBreed.map(({ breeds, id, url }) => {
            const list = breeds.map(breed => {
                return {
                    name: breed.name.toLowerCase(),
                    breeds: [breed],
                    id,
                    url
                }
            })
            return list
        })

        const oldList = filtered.flat(1)
        if (words !== "") {
            let newList = []

            newList = oldList.filter(catBreed =>
                catBreed.name.includes(words.toLowerCase())
            )

            setFilterDisplay(newList)
        } else {
            setFilterDisplay(oldList)
        }
    }

    return (
        <>
            <SearchBar value={words} handleChange={handleChange} />
            <CardsContainer>
                <CatComponent cats={words.length < 1 ? cats : filterDisplay} />
            </CardsContainer>
        </>
    )
}