import tw, { styled } from "twin.macro"

export const CardsContainer = styled.section`
    ${tw`grid grid-cols-3 gap-x-4 gap-y-8`}
`

export const CatCard = styled.div`
    img {
        ${tw`w-full h-72 rounded-sm shadow-lg`}
    }
`

export const CatDesc = styled.div`
    ${tw`p-2 text-white flex flex-col`}

    h2 {
        ${tw`font-semibold text-lg mx-auto py-1 tracking-wide`}
    }

    p {
        ${tw`text-sm`}
    }
`