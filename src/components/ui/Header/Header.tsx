import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

// base components
import { DefaultCtr, Typography, DefaultButton } from '../..'

// selectors
import { themeSelector, uiSelector } from '../../../selectors'

// state
import { onChangeModeTheme } from '../../../store/theme'
import { onShowSidebar, onHideSidebar } from '../../../store/ui'

// styles
import {
    StyledHeader,
    StyledHeaderLogo,
    StyledHeaderSection,
    DrawerIconRight,
    DrawerIconLeft,
    ModeMoonIcon,
    ModeSunIcon,
} from './header-styles'

export interface HeaderProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [extraProps: string]: any
}

const Header: React.FC<HeaderProps> = ({}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    // selectors
    const { mode } = useSelector(themeSelector)
    const { showSidebar } = useSelector(uiSelector)

    const onClick = (): void => {
        router.push('/')
    }
    return (
        <StyledHeader>
            <DefaultCtr>
                <StyledHeaderSection>
                    <StyledHeaderLogo>
                        {!showSidebar ? (
                            <DrawerIconRight
                                size={25}
                                onClick={() => {
                                    dispatch(onShowSidebar())
                                }}
                            />
                        ) : (
                            <DrawerIconLeft
                                size={25}
                                onClick={() => {
                                    dispatch(onHideSidebar())
                                }}
                            />
                        )}
                        <Typography variant="h1" color="light" onClick={onClick}>
                            Open Jira
                        </Typography>
                    </StyledHeaderLogo>
                    <DefaultButton
                        onClick={() => {
                            dispatch(onChangeModeTheme())
                        }}
                        styledType="dark"
                        type="button"
                        outline
                        disabled
                    >
                        {mode === 'light' && <ModeMoonIcon size={15} />}
                        {mode === 'dark' && <ModeSunIcon size={15} />}
                    </DefaultButton>
                </StyledHeaderSection>
            </DefaultCtr>
        </StyledHeader>
    )
}

export default Header
