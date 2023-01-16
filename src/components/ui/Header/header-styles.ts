import tw, { styled } from 'twin.macro'
import { StyledShadowMixed } from '../../../styles'

export const StyledHeader = styled.header`
    ${StyledShadowMixed}
    ${tw`bg-secondary fixed left-0 top-0 right-0 z-50`}
    ${tw`transition-[all] duration-[300ms] delay-[150ms]`}
`

export const StyledHeaderSection = styled.section`
    ${tw`flex items-center justify-between`}
`

export const StyledHeaderPokemon = styled.div`
    ${tw`flex items-center cursor-pointer`}
`
