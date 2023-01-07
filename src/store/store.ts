import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import { counterSlice } from './counter'

const createNoopStorage = () => ({
    getItem(_key: string) {
        return Promise.resolve(null)
    },
    setItem(_key: string, value: any) {
        return Promise.resolve(value)
    },
    removeItem(_key: string) {
        return Promise.resolve()
    },
})

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

const persistConfig = {
    key: 'root',
    storage,
}

export const rootReducers = combineReducers({
    counter: counterSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
