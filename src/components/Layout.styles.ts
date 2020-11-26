import tw, { styled } from "twin.macro"

export const LayoutContainer = styled.section`
    ${tw`bg-blue-800`}

    main {
        ${tw`container m-auto pt-6 grid max-w-full min-h-screen`}
    }
`;