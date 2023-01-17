import tw, { styled } from 'twin.macro'

import { StyledShadowMixed, StyledTransitionMixed } from '../../../styles'

export interface StyledSidebarProps {
    show: boolean
}

export const StyledSidebar = styled.div<StyledSidebarProps>`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}

    ${tw`fixed z-40 min-w-[25%] top-20 h-full p-5 [box-sizing: border-box]`}

    background-color: ${({ theme }) => theme.colors.dark};
    ${({ show }) => (show ? tw`left-[0%]` : tw`left-[-25%]`)}
`
