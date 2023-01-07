import tw, { styled, css } from 'twin.macro'

export const StyledShadowMixed = css`
    ${tw`shadow-[0px 3px 6px #00000029]`}
`

export const StyledHeader = styled.header`
    ${StyledShadowMixed}
    ${tw`bg-primary fixed left-0 top-0 right-0 z-50`}
`

export const StyledHeaderSection = styled.section`
    ${tw`flex items-center justify-between`}
`

export const StyledHeaderPokemon = styled.div`
    ${tw`flex items-center cursor-pointer`}
`
