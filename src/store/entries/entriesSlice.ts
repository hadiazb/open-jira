import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// models
import { Entry } from '../../interfaces'

export interface EntriesState {
    entries: Entry[]
}

const initialState: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            name: 'Task 1',
            description: 'Esta es una prueba rapida para una tarea de tipo pendiente',
            status: 'pending',
            createAt: new Date(2022, 6, 2).getTime(),
        },
        {
            _id: uuidv4(),
            name: 'Task 2',
            description: 'Esta es una prueba rapida para una tarea de tipo pendiente',
            status: 'pending',
            createAt: new Date(2022, 10, 23).getTime(),
        },
        {
            _id: uuidv4(),
            name: 'Task 3',
            description: 'Esta es una prueba rapida para una tarea de tipo in-progress',
            status: 'in-progress',
            createAt: new Date(2022, 12, 21).getTime(),
        },
        {
            _id: uuidv4(),
            name: 'Task 4',
            description: 'Esta es una prueba rapida para una tarea de tipo finished',
            status: 'finished',
            createAt: new Date(2023, 3, 2).getTime(),
        },
    ],
}

export const entriesSlice = createSlice({
    name: 'entries',
    initialState,
    reducers: {
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
export const { addEntry, deleteEntry, updateEntry } = entriesSlice.actions

// Reducers
export default entriesSlice.reducer
