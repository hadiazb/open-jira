import tw, { styled } from 'twin.macro'

import { StyledShadowMixed, StyledTransitionMixed } from '../../../styles'

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

export const StyledCtrTask = styled.div`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`w-11/12 my-3 p-3 rounded bg-secondary`}
`

export const StyledCtrTaskRow = styled.div`
    ${tw`flex flex-row justify-start my-3`}

    & p {
        ${tw`font-bold font-helvetica my-0`}
    }
    & span {
        ${tw`font-normal font-helvetica`}
    }
`
