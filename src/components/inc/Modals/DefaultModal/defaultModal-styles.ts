import tw, { styled } from 'twin.macro'
import { BsX } from 'react-icons/bs'

import { StyledShadowMixed, StyledTransitionMixed } from '../../../../styles'

export interface ShowAndHidden {
    showModal: boolean
}

export const StyledModalCtr = styled.div<ShowAndHidden>`
    ${StyledTransitionMixed}
    ${tw`fixed top-0 left-0 right-0 bottom-0 z-50 hidden justify-center items-center`}

    ${({ showModal }) => (showModal ? tw`flex` : tw`hidden`)}
`

export const StyledModalOverLite = styled.div`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`bg-black fixed h-full w-full opacity-70 z-0`}
`

export interface SizeBox {
    width?: 'md' | 'lg'
    height?: 'md' | 'lg'
}

export const StyledModalContent = styled.div<SizeBox>`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`bg-white relative z-10 p-4 rounded-md min-w-[300px]`}
    ${tw`lg:min-w-[650px]`}

    ${({ width }) => {
        if (width === 'lg') {
            return tw`w-[600px]`
        }

        if (width === 'md') {
            return tw`w-96`
        }
    }}
`

export const StyledModalTop = styled.div`
    ${StyledTransitionMixed}
    ${tw`flex justify-end items-center`}
`

export const CloseIcon = styled(BsX)`
    ${tw`cursor-pointer`}
`
