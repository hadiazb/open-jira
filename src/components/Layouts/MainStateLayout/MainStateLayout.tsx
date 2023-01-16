import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// state
import { store, persistor } from '../../../store/store'

const origin = typeof window === 'undefined' ? '' : window.location.origin

export type MainLayoutProps = {
    children: React.ReactNode
    title: string
    description: string
}

const MainStateLayout: React.FC<MainLayoutProps> = ({ children, description, title }) => {
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
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </>
    )
}

export default MainStateLayout
