import { ReactElement } from 'react'

// components
import { ActiveLink } from '../..'

// styles
import { StyledNavbar } from './navbar-styles'

const Navbar = (): ReactElement => {
    return (
        <StyledNavbar>
            <ActiveLink text="Favoritos" pathname="/favorites" />
        </StyledNavbar>
    )
}

export default Navbar
