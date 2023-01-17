import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

// base components
import { DefaultCtr, Typography, DefaultButton } from '../..'

// models
import { RootState } from '../../../store/store'

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
} from './header-styles'

export interface HeaderProps {
    [extraProps: string]: any
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
    const router = useRouter()
    const { mode } = useSelector((store: RootState) => store.theme)
    const { showSidebar } = useSelector((store: RootState) => store.ui)
    const dispatch = useDispatch()

    const onClick = () => {
        router.push('/')
    }
    return (
        <StyledHeader>
            <DefaultCtr>
                <StyledHeaderSection>
                    <StyledHeaderLogo>
                        {!showSidebar ? (
                            <DrawerIconRight
                                size={30}
                                onClick={() => {
                                    dispatch(onShowSidebar())
                                }}
                            />
                        ) : (
                            <DrawerIconLeft
                                size={30}
                                onClick={() => {
                                    dispatch(onHideSidebar())
                                }}
                            />
                        )}
                        <Typography variant="h1" color={mode} onClick={onClick}>
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
