import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// models
import { Entry } from '../../interfaces'

export interface EntriesState {
    entries: Entry[]
    error: string | null
    isLoading: boolean
}

const initialState: EntriesState = {
    entries: [],
    error: null,
    isLoading: false,
}

export const entriesSlice = createSlice({
    name: 'entries',
    initialState,
    reducers: {
        onLoading: (state) => {
            state.isLoading = true
            state.error = null
        },
        onError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        onLoadEntries: (state, action: PayloadAction<Entry[]>) => {
            state.entries = action.payload
            state.isLoading = false
        },
        addEntry: (state, action: PayloadAction<Omit<Entry, '_id' | 'status' | 'createAt'>>) => {
            state.entries = [
                ...state.entries,
                {
                    _id: uuidv4(),
                    name: action.payload.name,
                    description: action.payload.description,
                    status: 'pending',
                    createAt: new Date().getTime(),
                },
            ]
        },
        deleteEntry: (state, action: PayloadAction<Entry>) => {
            state.entries = state.entries.filter((entry) => entry._id !== action.payload._id)
        },
        updateEntry: (state, action: PayloadAction<Entry>) => {
            state.entries = state.entries.map((entry) => {
                if (entry._id === action.payload._id) {
                    entry.status = action.payload.status
                    entry.description = action.payload.description
                }
                return entry
            })
        },
    },
})

// Actions Creators
export const { addEntry, deleteEntry, updateEntry, onLoadEntries, onLoading, onError } =
    entriesSlice.actions

// Reducers
export default entriesSlice.reducer
