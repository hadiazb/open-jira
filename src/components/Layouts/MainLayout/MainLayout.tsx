import Head from 'next/head'
import { ThemeProvider } from 'styled-components/macro'

// base components
import { DefaultCtr, Header, Sidebar } from '../..'

// styles
import { StyledMainLayout } from './mainLayout-styles'
import { Theme, GlobalStyle } from '../../../styles'

// selectors
import { themeSelector, uiSelector, useSelector } from '../../../selectors'

export type MainLayoutProps = {
    children: React.ReactNode
    title: string
    description: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
    const { mode } = useSelector(themeSelector)
    const { showSidebar } = useSelector(uiSelector)

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
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content={`Information about ${title}`} />
                <meta property="og:description" content={`Description about ${title}`} />
                <meta property="og:image" content={`${origin}/image/pokemon.png`} />
            </Head>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle reset />
                <Header />
                <Sidebar showSidebar={showSidebar} />
                <StyledMainLayout>
                    <DefaultCtr>{children}</DefaultCtr>
                </StyledMainLayout>
            </ThemeProvider>
        </>
    )
}

export default MainLayout
