import tw, { styled } from 'twin.macro'
import { BsTrashFill } from 'react-icons/bs'

import { StyledShadowMixed, StyledTransitionMixed } from '../../../styles'

export const StyledCtrTask = styled.div`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`w-11/12 my-1 md:my-3 p-3 rounded bg-secondary cursor-pointer`}
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
    ${tw`text-light cursor-pointer`}
`
