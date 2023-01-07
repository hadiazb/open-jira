import Image from 'next/image'
import { useRouter } from 'next/router'

import { DefaultCtr, Navbar, Typography } from '../..'

// styles
import { StyledHeader, StyledHeaderPokemon, StyledHeaderSection } from './header-styles'

export interface HeaderProps {
    [extraProps: string]: any
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
    const router = useRouter()

    const onClick = () => {
        router.push('/')
    }
    return (
        <StyledHeader>
            <DefaultCtr>
                <StyledHeaderSection>
                    <StyledHeaderPokemon onClick={onClick}>
                        <Image
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                            alt="Pokemon"
                            width={70}
                            height={70}
                        />
                        <Typography variant="h1">Pokemon</Typography>
                    </StyledHeaderPokemon>
                    <Navbar />
                </StyledHeaderSection>
            </DefaultCtr>
        </StyledHeader>
    )
}

export default Header
