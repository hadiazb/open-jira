import tw, { styled } from 'twin.macro'
import { BsTrashFill } from 'react-icons/bs'

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
    ${tw`w-11/12 my-1 md:my-3 p-3 rounded bg-secondary`}
`

export const StyledCtrTaskRow = styled.div`
    ${tw`flex flex-row justify-between my-4`}

    & p {
        ${tw`font-bold font-helvetica my-0`}
    }
    & span {
        ${tw`font-normal font-helvetica`}
    }
`

export const StyledCtrTaskField = styled.div`
    ${tw`flex flex-row justify-start w-1/2`}
`

export const RemoveDarkIcon = styled(BsTrashFill)`
    ${tw`mr-4 cursor-pointer`}
    color: ${({ theme }) => theme.colors.dark};
`
