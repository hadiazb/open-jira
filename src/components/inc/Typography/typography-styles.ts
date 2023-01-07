import tw, { styled, css } from 'twin.macro'

export interface StyledTypographyProps {
    typeFont?: 'primary' | 'secondary'
}

export const StyledFontMixin = css<StyledTypographyProps>`
    ${({ typeFont }) => typeFont === 'primary' && tw`font-montserrat`}
    ${({ typeFont }) => typeFont === 'secondary' && tw`font-helvetica`}
`

export const StyledTypographyH1 = styled.h1`
    ${tw`font-black my-2.5 mx-0 text-lg text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographyH2 = styled.h2`
    ${tw`font-black my-2.5 mx-0 text-bg text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographyH3 = styled.h3`
    ${tw`font-black my-2.5 mx-0 text-md text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographyH4 = styled.h4`
    ${tw`font-black my-2.5 mx-0 text-base text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographyH5 = styled.h5`
    ${tw`font-black my-2.5 mx-0 text-sm text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographyH6 = styled.h6`
    ${tw`font-black my-2.5 mx-0 text-xs text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographyA = styled.a`
    ${tw`font-normal mx-1 underline cursor-pointer text-base text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographySpan = styled.span`
    ${tw`font-normal px-1 text-base text-dark`}
    ${StyledFontMixin}
`

export const StyledTypographyP = styled.p`
    ${tw`font-normal mx-0 font-montserrat text-base text-dark`}
    ${StyledFontMixin}
`
