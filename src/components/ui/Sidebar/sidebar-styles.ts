import tw, { styled } from 'twin.macro'
import { BsFillInboxFill } from 'react-icons/bs'

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

export const ListOptions = styled.ul`
    ${tw`w-full [list-style: none] p-0`}
`

export const ItemOption = styled.li`
    ${tw`w-full flex justify-between items-center cursor-pointer`}
`

export const InboxIcon = styled(BsFillInboxFill)`
    color: ${({ theme }) => theme.colors.light};
`
