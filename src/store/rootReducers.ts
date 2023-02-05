import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice } from './theme'
import { uiSlice } from './ui'
import { entriesSlice } from './entries'

export const rootReducers = combineReducers({
    theme: themeSlice.reducer,
    ui: uiSlice.reducer,
    entries: entriesSlice.reducer,
})
