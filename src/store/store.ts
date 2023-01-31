/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import { themeSlice } from './theme'
import { uiSlice } from './ui'
import { entriesSlice } from './entries'

export interface CreateNoopStorage {
    getItem(_key: string): Promise<null>
    setItem(_key: string, value: unknown): Promise<unknown>
    removeItem(_key: string): Promise<void>
}

const createNoopStorage = (): CreateNoopStorage => ({
    getItem(_key: string) {
        return Promise.resolve(null)
    },
    setItem(_key: string, value: unknown) {
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
    blacklist: ['ui'],
}

export const rootReducers = combineReducers({
    theme: themeSlice.reducer,
    ui: uiSlice.reducer,
    entries: entriesSlice.reducer,
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
