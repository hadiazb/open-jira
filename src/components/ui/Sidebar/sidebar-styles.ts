import tw, { styled } from 'twin.macro'
import { BsFillInboxFill } from 'react-icons/bs'
import { BiSave } from 'react-icons/bi'

import { StyledShadowMixed, StyledTransitionMixed } from '../../../styles'

export interface StyledSidebarProps {
    show: boolean
}

export const StyledSidebar = styled.div<StyledSidebarProps>`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}

    ${tw`fixed z-40 min-w-[250px] md:min-w-[25%] top-20 h-full py-5 px-1 [box-sizing: border-box]`}

    background-color: ${({ theme }) => theme.colors.dark};
    ${({ show }) => (show ? tw`left-0 md:left-[0%]` : tw`left-[-250px] md:left-[-25%]`)}
`

export const ListOptions = styled.ul`
    ${tw`w-full [list-style: none] p-0`}
`

export const ItemOption = styled.li`
    ${StyledTransitionMixed}
    ${tw`px-5 py-3 flex justify-between items-center cursor-pointer opacity-60`}
    ${tw`hover:opacity-100`}

    & {
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.light}`};
    }
`

export const InboxIcon = styled(BsFillInboxFill)`
    color: ${({ theme }) => theme.colors.light};
`

export const SaveIcon = styled(BiSave)`
    color: ${({ theme }) => theme.colors.light};
`
