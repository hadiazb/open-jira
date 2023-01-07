import type { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import { StyledActiveLink } from './activeLink.module-styles'

export type ActiveLinkProps = Omit<LinkProps, 'as' | 'href'> & {
    text: React.ReactNode
    pathname: string
    query?: string
    search?: string
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ text, pathname, query, search, ...rest }) => {
    const { asPath } = useRouter()

    return (
        <StyledActiveLink
            $activeLink={asPath === pathname}
            href={{ pathname, query, search }}
            {...rest}
        >
            {text}
        </StyledActiveLink>
    )
}

export default ActiveLink
