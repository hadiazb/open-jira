import tw, { styled } from 'twin.macro'
import { BsTrashFill } from 'react-icons/bs'

import { StyledShadowMixed, StyledTransitionMixed } from '../../../styles'

export const StyledCtrTask = styled.div`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`w-11/12 my-1 md:my-3 p-3 rounded bg-secondary cursor-pointer`}
`

export interface Position {
    position?: 'center' | 'start' | 'end'
}

export const StyledCtrTaskRow = styled.div<Position>`
    ${tw`flex flex-row justify-between my-4`}

    ${({ position }) => {
        if (position === 'center') {
            return tw`justify-center`
        }
        if (position === 'start') {
            return tw`justify-start`
        }
        if (position === 'end') {
            return tw`justify-end`
        }
    }}

    & p {
        ${tw`font-bold font-helvetica my-0`}
    }
    & span {
        ${tw`font-normal font-helvetica`}
    }
`

export interface SizeBox extends Position {
    width?: string
}

export const StyledCtrTaskField = styled.div<SizeBox>`
    ${tw`flex flex-row justify-start w-1/2`}

    width: ${({ width }) => width};

    ${({ position }) => {
        if (position === 'center') {
            return tw`justify-center`
        }
        if (position === 'start') {
            return tw`justify-start`
        }
        if (position === 'end') {
            return tw`justify-end`
        }
    }}
`

export const RemoveDarkIcon = styled(BsTrashFill)`
    ${tw`text-light cursor-pointer`}
`
