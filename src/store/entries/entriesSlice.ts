import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// models
import { Entry } from '../../interfaces'

export interface EntriesState {
    entries: Entry[]
    entryActive: Entry | null
    isEditOrCreateEntry: boolean
    error: string | null
    isLoading: boolean
}

const initialState: EntriesState = {
    entries: [],
    entryActive: null,
    isEditOrCreateEntry: true,
    error: null,
    isLoading: false,
}

export const entriesSlice = createSlice({
    name: 'entries',
    initialState,
    reducers: {
        onSetEdit: (state) => {
            state.isEditOrCreateEntry = false
        },
        onSetCreate: (state) => {
            state.isEditOrCreateEntry = true
        },
        onLoading: (state) => {
            state.isLoading = true
            state.error = null
        },
        onError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        onSelectedEntry: (state, action: PayloadAction<Entry>) => {
            state.entryActive = action.payload
        },
        onCleanSelectedEntry: (state) => {
            state.entryActive = null
        },
        onLoadEntries: (state, action: PayloadAction<Entry[]>) => {
            state.entries = action.payload
            state.isLoading = false
        },
        onAddEntry: (state, action: PayloadAction<Entry>) => {
            state.entries = [...state.entries, action.payload]
            state.isLoading = false
        },
        onDeleteEntry: (state, action: PayloadAction<Entry>) => {
            state.entries = state.entries.filter((entry) => entry._id !== action.payload._id)
            state.isLoading = false
        },
        onUpdateEntry: (state, action: PayloadAction<Entry>) => {
            state.entries = state.entries.map((entry) => {
                if (entry._id === action.payload._id) {
                    entry.status = action.payload.status
                    entry.description = action.payload.description
                    entry.name = action.payload.name
                }
                return entry
            })
            state.isLoading = false
        },
    },
})

// Actions Creators
export const {
    onSetEdit,
    onSetCreate,
    onAddEntry,
    onDeleteEntry,
    onUpdateEntry,
    onLoadEntries,
    onLoading,
    onError,
    onSelectedEntry,
    onCleanSelectedEntry,
} = entriesSlice.actions

// Reducers
export default entriesSlice.reducer
