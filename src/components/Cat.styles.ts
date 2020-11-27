import tw, { styled } from "twin.macro"

export const CatCard = styled.div`
    ${tw`relative`}

    img {
        ${tw`w-full h-72 rounded-sm shadow-lg`}
    }
`

export const CatDesc = styled.div`
    ${tw`p-2 text-white flex flex-col`}

    h2 {
        ${tw`font-semibold text-xl mx-auto py-1 tracking-wider`}
        font-family: "Kalam", cursive
    }

    p {
        ${tw`text-sm`}
    }
`