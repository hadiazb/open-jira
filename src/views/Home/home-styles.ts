import tw, { styled } from 'twin.macro'

import { StyledShadowMixed, StyledTransitionMixed } from '../../styles'

export const StyledHome = styled.section`
    ${tw`flex flex-col items-center`}
`

export const StyledCtrCards = styled.div`
    ${StyledTransitionMixed}
    ${tw`w-full  mt-5 mb-3 flex items-start justify-between lg:gap-10`}
`

export const StyledCard = styled.div`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`px-2 w-1/3 min-h-[75vh] flex flex-col items-center justify-start rounded`}
    ${tw`cursor-pointer opacity-80`}

    border: ${({ theme }) => `1px solid ${theme.colors.dark}`};

    & h4 {
        ${tw`py-3 font-helvetica font-bold w-11/12 text-center opacity-100`}
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.dark}`};
    }
`
