import tw, { styled } from 'twin.macro'
import {
    BsChevronDoubleRight,
    BsChevronDoubleLeft,
    BsFillMoonFill,
    BsSunFill,
} from 'react-icons/bs'

import { StyledShadowMixed, StyledTransitionMixed } from '../../../styles'

export const StyledHeader = styled.header`
    ${StyledShadowMixed}
    ${StyledTransitionMixed}
    ${tw`bg-secondary fixed left-0 top-0 right-0 z-50`}

    & button {
        ${tw`min-w-[35px] p-2 rounded-[50%]`}
    }
`

export const StyledHeaderSection = styled.section`
    ${tw`h-20 flex items-center justify-between`}
`

export const StyledHeaderLogo = styled.div`
    ${tw`flex items-center cursor-pointer`}
`

export const DrawerIconRight = styled(BsChevronDoubleRight)`
    ${tw`mr-3 text-light`}
`

export const DrawerIconLeft = styled(BsChevronDoubleLeft)`
    ${tw`mr-3 text-light`}
`

export const ModeSunIcon = styled(BsSunFill)`
    ${tw`text-primary`}
`

export const ModeMoonIcon = styled(BsFillMoonFill)`
    color: ${({ theme }) => theme.colors.light};
`
