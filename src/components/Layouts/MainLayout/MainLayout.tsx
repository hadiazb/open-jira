import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/macro'

// state
import { store, persistor } from '../../../store/store'

// styles
import { StyledMainLayout } from './mainLayout-styles'
import { Theme, GlobalStyle } from '../../../styles'

export type MainLayoutProps = {
    children: React.ReactNode
    title?: string
    description?: string
    contentDescription?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    title,
    description,
    contentDescription,
}) => {
    const theme = Theme()
    return (
        <>
            <Head>
                <title>{title ?? 'Pokemon App'}</title>
                <meta
                    name={description ?? 'Pokemon'}
                    content={contentDescription ?? 'Description de Pokemon'}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle reset />
                        <StyledMainLayout>{children}</StyledMainLayout>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </>
    )
}

export default MainLayout
