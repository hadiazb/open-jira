import tw, { styled } from 'twin.macro'
import Link from 'next/link'

export interface StyledActiveLinkProps {
    $activeLink?: boolean
}

export const StyledActiveLink = styled(Link)<StyledActiveLinkProps>`
    ${tw`mx-3 [text-decoration: none] text-bg font-montserrat`}
    ${({ $activeLink }) => ($activeLink ? tw`underline` : tw`cursor-pointer`)}
`
