import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components/macro'

// base components
import { DefaultCtr, Header } from '../..'

// state
import { RootState } from '../../../store/store'

// styles
import { StyledMainLayout } from './mainLayout-styles'
import { Theme, GlobalStyle } from '../../../styles'

export type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { mode } = useSelector((store: RootState) => store.theme)
    const lightTheme = Theme()
    const darkTheme = {
        ...lightTheme,
        colors: {
            ...lightTheme.colors,
            dark: lightTheme.colors.light,
            light: lightTheme.colors.dark,
        },
    }

    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle reset />
            <Header />
            <StyledMainLayout>
                <DefaultCtr>{children}</DefaultCtr>
            </StyledMainLayout>
        </ThemeProvider>
    )
}

export default MainLayout
