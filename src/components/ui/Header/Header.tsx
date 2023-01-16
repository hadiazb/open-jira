import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

// base components
import { DefaultCtr, Navbar, Typography, DefaultButton } from '../..'

// models
import { RootState } from '../../../store/store'

// state
import { onChangeModeTheme } from '../../../store/theme'

// styles
import { StyledHeader, StyledHeaderPokemon, StyledHeaderSection } from './header-styles'

export interface HeaderProps {
    [extraProps: string]: any
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
    const router = useRouter()
    const { mode } = useSelector((store: RootState) => store.theme)
    const dispatch = useDispatch()

    const onClick = () => {
        router.push('/')
    }
    return (
        <StyledHeader>
            <DefaultCtr>
                <StyledHeaderSection>
                    <StyledHeaderPokemon onClick={onClick}>
                        <Typography variant="h1" color={mode}>
                            Open Jira
                        </Typography>
                    </StyledHeaderPokemon>
                    <Navbar />
                    <DefaultButton
                        onClick={() => {
                            dispatch(onChangeModeTheme())
                        }}
                        styledType="dark"
                        type="button"
                        outline
                        disabled={true}
                    >
                        <Typography variant="span" color={mode}>
                            {mode}
                        </Typography>
                    </DefaultButton>
                </StyledHeaderSection>
            </DefaultCtr>
        </StyledHeader>
    )
}

export default Header
