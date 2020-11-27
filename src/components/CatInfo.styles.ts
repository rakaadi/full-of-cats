import tw, { styled } from "twin.macro"

type infoProps = {
    open: boolean
}

export const InfoButton = styled.span`
    ${tw`absolute text-2xl cursor-pointer px-1 rounded-tr-sm rounded-bl-md bg-white bg-opacity-75 right-0 top-0 z-10`}

    & :hover {
        ${tw`bg-blue-800 text-white`}
    }
`

export const CatDetails = styled.div<infoProps>`
    ${tw`absolute flex-col font-semibold h-72 w-full justify-center bg-white bg-opacity-50 items-center align-middle text-center p-4 space-y-2`}
    display: ${props => props.open ? "flex" : "none"};

    & > :first-child {
        ${tw`text-xl`}
        font-family: "Kalam", cursive
    }

    a {
        ${tw`font-bold rounded-lg text-2xl border border-transparent p-2`}

        & :hover {
            ${tw`border-gray-600`}
        }
    }
`
