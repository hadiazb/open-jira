import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// state
import { store, persistor } from '../../../store/store'

const origin = typeof window === 'undefined' ? '' : window.location.origin

export type MainLayoutProps = {
    children: React.ReactNode
}

const MainStateLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default MainStateLayout
