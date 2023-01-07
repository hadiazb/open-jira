import { ActiveLink } from '../..'

// styles
import { StyledNavbar } from './navbar-styles'

const Navbar = () => {
    return (
        <StyledNavbar>
            <ActiveLink text="Favoritos" pathname="/favorites" />
        </StyledNavbar>
    )
}

export default Navbar
